import React, { ReactNode, useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Card, Pin } from '../../components';
import { useLocation } from '../../hooks';
import { Country } from '../../models/country';
import { getCountries } from '../../services/coutries';
import styles from './styles';

const { width } = Dimensions.get('window');

const Home: React.FC = () => {
  const [markers, setMarkers] = useState<Country[]>([]);
  const { coords: myCoords, error } = useLocation();
  const [coords, setCoords] = useState<{ latitude: number; longitude: number }>(
    myCoords,
  );

  const calcListIndex = [...Array(markers.length)].map((value, index) => {
    return index * (width * 0.8 - 32) + (index - 1) * 32;
  });

  useEffect(() => {
    const data = getCountries();
    setMarkers(data);
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderMapWithMarkers = (): ReactNode => {
    return (
      <View style={styles.page}>
        <MapView
          showsUserLocation={true}
          style={{ ...StyleSheet.absoluteFillObject }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitudeDelta: 50,
            longitudeDelta: 50,
            ...coords,
          }}>
          {markers.map((marker, index) => {
            return <Pin {...marker} key={index} />;
          })}
        </MapView>
      </View>
    );
  };

  const renderCardList = (): ReactNode => {
    return (
      <View style={styles.cardsList}>
        <FlatList
          data={markers}
          keyExtractor={({ id }) => String(id)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          snapToAlignment={'start'}
          snapToOffsets={calcListIndex}
          onMomentumScrollEnd={({ nativeEvent }) => {
            const findX = calcListIndex.find(x => {
              const firstX = nativeEvent.contentOffset.x - 32 === -32;

              if (firstX) {
                return true;
              }

              return Math.floor(x) === Math.floor(nativeEvent.contentOffset.x);
            });

            const foundCoords = calcListIndex.indexOf(
              findX || calcListIndex[calcListIndex.length - 1],
            );

            setCoords(markers[foundCoords].coordinate);
          }}
          renderItem={({ item }) => <Card {...item} />}
        />
      </View>
    );
  };

  return (
    <View style={styles.page}>
      {renderMapWithMarkers()}
      {renderCardList()}
    </View>
  );
};

export default Home;

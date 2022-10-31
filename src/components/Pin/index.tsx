import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import { Country } from '../../models/country';

const Pin: React.FC<Country> = ({ name, group, coordinate, image }) => {
  return (
    <View>
      <Marker
        coordinate={coordinate}
        title={name}
        description={group}
        image={{ uri: image }}
      />
    </View>
  );
};

export default Pin;

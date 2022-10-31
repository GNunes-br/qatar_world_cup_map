import React from 'react';
import { Image, Text, View } from 'react-native';
import { Country } from '../../models/country';
import styles from './styles';

const Card: React.FC<Country> = ({ name, group, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.flagImage} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.groupText}>{`Grupo ${group}`}</Text>
    </View>
  );
};

export default Card;

import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    justifyContent: 'center',
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: width * 0.8 - 16,
    marginHorizontal: 8,
  },
  flagImage: {
    height: 26,
    width: 40,
  },
  nameText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#252525',
  },
  groupText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

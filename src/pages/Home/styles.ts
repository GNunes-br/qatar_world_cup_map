import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  map: {
    flex: 1,
    zIndex: 1,
  },
  cardsList: {
    zIndex: 2,
    position: 'absolute',
    height: 192,
    bottom: 0,
    right: 0,
    paddingVertical: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

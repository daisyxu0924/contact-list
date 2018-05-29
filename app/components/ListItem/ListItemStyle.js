import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemWrapperEven: {
    height: 100,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#E6E8ED',
    justifyContent: 'flex-start',
    borderColor: 'white',
    borderWidth: 1,
  },
  itemWrapperOdd: {
    height: 100,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#E6E8ED',

    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  },
  image: {
    height: 80,
    borderRadius: 40,
    width: 80
  },
  nameWrapper: {
    justifyContent: 'center',
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

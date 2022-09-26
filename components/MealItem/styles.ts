import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 6,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  imageContainer: {
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
    overflow: 'hidden',
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'none',
    textAlign: 'center',
  }
});
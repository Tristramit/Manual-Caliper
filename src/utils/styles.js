import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  textDark: {
    color: 'white',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  containerDark: {
    backgroundColor: '#222',
  },
  paragraph: {
    fontSize: 10,
    textAlign: 'center',
  },
  paragraphDark: {
    color: '#DDD',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemDark: {
    backgroundColor: '#333',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    maxWidth: '80%',
  },
  itemTextDark: {
    color: '#DDD',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  buttonDark: {
    backgroundColor: '#444',
  },
  sizesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sizesWrapperDark: {
    backgroundColor: '#111',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitleDark: {
    color: '#DDD',
  },
  items: {
    marginTop: 30,
  },
  writeSizeWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  inputDark: {
    backgroundColor: '#444',
    borderColor: '#888',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapperDark: {
    backgroundColor: '#444',
    borderColor: '#888',
  },
  addText: {},
  addTextDark: {
    color: '#DDD',
  },
});

export default styles;
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40E0D0', // Azul claro
    padding: 10,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  list: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 90,
    height: 90,
    elevation: 3,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;



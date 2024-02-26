import { StyleSheet, View } from 'react-native';
import Landing from './src/Landing';

export default function App() {
  return (
    <View style={styles.container}>
      <Landing/>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex',
    overflow:'hidden',  
  },
});

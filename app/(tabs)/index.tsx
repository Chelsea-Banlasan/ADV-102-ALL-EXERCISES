import { View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "black",
    }}>
      <Text style={{fontSize: 25, fontWeight: 600, color: "white", textAlign: 'center'}}>{`Chelsea Mae Banlasan \n BSIT - 2B`}</Text>
    </View>
  );
}

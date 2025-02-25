import { View, Text, TouchableOpacity} from "react-native";
import { buttons } from "../utils/buttons";
import { router } from "expo-router";

export default function hooksScreen(){
    return (
        <View style={{
            flex: 1,        
            gap: 4,
            padding: 30,
            backgroundColor: "black"
        }}>
            {buttons.map((btn, index) => (
                <TouchableOpacity
                   key={index}
                   style={{
                    borderColor: "#f2f2f2",
                    borderWidth: 2
                   }}
                   onPress={() => btn.direct && router.push(btn.direct)}
                >
                    <Text style={{
                        fontSize: 20,
                        fontFamily: "sans-serif",
                        color: '#f2f2f2f2',
                        fontWeight: "bold",
                        textAlign: "center",
                        padding: 6,
                    }}>{btn.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
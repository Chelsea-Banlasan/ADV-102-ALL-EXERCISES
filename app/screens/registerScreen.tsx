
import { View, Text, TouchableOpacity, Image } from "react-native";
import { registerInputsFn } from "../utils/inputs";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';

export default function registerScreen(){
    const [image, setImage] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images', 'videos'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
    return (
        <View style={{
            flex: 1,
            padding: 30,
            backgroundColor: "black"
        }}>
            <Text style={{
                color: "#f2f2f2",
                textAlign: "center",
                fontSize: 25,
            }}>Welcome to Register</Text>
            <TouchableOpacity 
            onPress={pickImage}
            style={{
                borderColor: '#f2f2f2',
                borderStyle: "solid",
                borderWidth: 1,
                marginTop: 15,
                borderRadius: 4,
                padding: 4
            }}>
                <Text style={{
                     fontSize: 20,
                     fontFamily: "sans-serif",
                     color: '#f2f2f2f2',
                     fontWeight: "bold",
                     textAlign: "center",
                     padding: 5,
                }}>Pick an image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, alignSelf: "center", marginTop: 6.5}} />}
            {registerInputsFn(
                name, setName,
                email, setEmail,
                pass, setPass
            ).map((input, index) => (
                <TextInput
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.onChange}
                    secureTextEntry={input.secure}
                    mode="outlined"
                />
            ))}
            <TouchableOpacity style={{
                   borderColor: '#f2f2f2',
                   borderStyle: "solid",
                   borderWidth: 1,
                   marginTop: 15,
                   borderRadius: 4,
                   padding: 4
            }}>
                <Text style={{
                      fontSize: 20,
                      fontFamily: "sans-serif",
                      color: '#f2f2f2f2',
                      fontWeight: "bold",
                      textAlign: "center",
                      padding: 5,
                }}>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    );
}
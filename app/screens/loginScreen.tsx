import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { inputsFn } from "../utils/inputs";
import { TextInput } from "react-native-paper";

export default function loginScreen(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <View style={{
            flex: 1,
            padding: 30,
            backgroundColor: "black"
        }}>
            <Text style={{
                textAlign: "center",
                fontSize: 25,
                color: "#f2f2f2"
            }}>Welcome to Login</Text>
            
            {inputsFn(
                email, setEmail,
                pass, setPass
            ).map((input, index) => (
                <TextInput 
                    key={index}
                    label={input.label}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChangeText={input.onChange}
                    secureTextEntry={input.secure}
                    style={ index === 0 && { 
                            marginTop: 35,
                            marginBottom: 5,
                    }}  
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
                    }}>Login</Text>
                </TouchableOpacity>
        </View>
    );
}
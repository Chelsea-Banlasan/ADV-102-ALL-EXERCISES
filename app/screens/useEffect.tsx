import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { buttonsTimer } from "../utils/buttons";
import formatedTime from "../utils/formatedTime";
export default function useEffectScreen() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(!isRunning) return;

    const interval = setInterval(() => {
          setCount(prev => prev+1);
      }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => {if(isRunning) setIsRunning(false);}
  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  }

  return (
    <View style={{
      flex: 1,
      padding: 40,
      gap: 10,
      backgroundColor: "black"
    }}>
      <Text style={{
        textAlign: "center",
        fontSize: 50,
        color: "white"
        }}>{formatedTime(count)}s</Text>
      {buttonsTimer.map((b, _) => (
          <TouchableOpacity
            key={b.id}
            onPress={() => {
              if(b.name === "Start"){
                isRunning ? handleStop() : handleStart();
              }
              else if(b.name === "Reset"){
                handleReset();
              }
            }}
          >
          <Text 
            style={{
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "white",
            textAlign: "center",
            padding: 10,
            fontSize: 25,
            color: "white"
          }}
          >{isRunning && b.name === "Start" ? "Stop" : b.name}</Text>
        </TouchableOpacity>      
      ))}
    </View>
  );
}
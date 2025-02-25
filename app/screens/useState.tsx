import React, { useRef } from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"; 
import formatedTime from "../utils/formatedTime";
import { buttonsTimer } from "../utils/buttons";

export default function useStateScreen() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timerRef = useRef<number | null>(null);
  
  const handleStart = () => {
    if(!isRunning){
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setCount(prev => prev+1);
      }, 1000) as unknown as number;
    }
  }

  const handleStop = () => {
    if (isRunning && timerRef.current !== null) {
      setIsRunning(false);
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleReset = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
    setCount(0);
  };


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
             else{
                handleReset();
            }}
          }
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
  )
}
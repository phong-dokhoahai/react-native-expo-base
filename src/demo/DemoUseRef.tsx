import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "./DemoUseRef.style";

function DemoUseRef() {
  const [count, setCount] = useState(10);
  const handleStart = () => {
    setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleStop = () => {};
  return (
    <View style={[]}>
      <Text>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight onPress={handleStart}>
          <View style={styles.}>
            <Text>Start</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleStop}>
          <View style={styles.button}>
            <Text>Stop</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default DemoUseRef;

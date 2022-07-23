import React from "react";
import { LinearProgress } from "@rneui/base/dist/LinearProgress/LinearProgress";
import { AppRegistry } from "react-native";
import { Button } from "@rneui/base/dist/Button";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "@rneui/base/dist/Text";
const Progress = (props) => {
  return (
    <View>
      <Text
        style={{
          color: "#09c",
          fontSize: 20,
          textAlign: "center",
          marginBottom: 5,
          marginTop: 15,
        }}
      >
        {props.lang}
      </Text>
      <LinearProgress
        value={props.progress}
        variant="determinate"
        style={styles.prog}
        color="#09c"
        trackColor="grey"
      />
    </View>
    
  );
};
const styles = StyleSheet.create({
  prog: {
    justifyContent: "center",
    height: 20,
  },
});
export default Progress;
AppRegistry.registerComponent("firstapp", () => Progress);

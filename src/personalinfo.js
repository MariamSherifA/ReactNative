import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Divider } from "@rneui/themed-edge";
import { AppRegistry } from "react-native";
import { Image } from "@rneui/themed";
import { ActivityIndicator } from "react-native";
import { Card } from "@rneui/base/dist/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { Icon } from "@rneui/themed-edge";
import { LinearProgress } from "@rneui/base/dist/LinearProgress/LinearProgress";

const Personalinfo = ({ navigation }) => {
  return (
    <View>
      <View>
        <Image
          source={{ uri: "https://source.unsplash.com/random?sig=8" }}
          containerStyle={style.img}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <Divider width={20} color={"transparent"}></Divider>
      <View style={style.icons}>
        <Icon name="facebook" size={40} color="black" />
        <Icon name="person" size={40} color="black" />
        <Icon name="camera" size={40} color="black" />
        <Icon name="wb-twighlight" size={40} color="black" />
        <Icon name="share" size={40} color="black" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  img: {
    aspectRatio: 0.90,
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: Dimensions.get("window").width * 0.5,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
export default Personalinfo;
AppRegistry.registerComponent("firstapp", () => Personalinfo);

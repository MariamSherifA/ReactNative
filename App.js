import "react-native-gesture-handler";
import { Button } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AppRegistry } from "react-native";
import Personalinfo from "./src/personalinfo";
import { Image } from "@rneui/themed";
import Progress from "./src/progress";
import { Dimensions } from "react-native";
import { Icon } from "@rneui/themed-edge";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/home";
import Moviedteails from "./src/moviedteails";
import Registry from "./src/registry";
export default function App({ navigation }) {
  const Drawer = createDrawerNavigator();
  return (


<NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="myInfo" component={Personalinfo} />
        <Drawer.Screen name="Movies" component={Home} />
        <Drawer.Screen name="Details" component={Moviedteails} />
        <Drawer.Screen name="form" component={Registry} />
        {/* <Drawer.Screen name="home" component={Home} /> */}
      </Drawer.Navigator>
    </NavigationContainer>

    
    
  );
}

const styles = StyleSheet.create({
  download: {
    display: "flex",
    flexDirection: "row",
  },
});
AppRegistry.registerComponent("firstapp", () => App);







//lab1 

// <ScrollView>
//   <View>
//     <Personalinfo />
//     <Progress lang="English" progress={0.80} />
//     <Progress lang="Arabic" progress={0.90} />
//     <Progress lang="French" progress={0.70} />
//     <Progress lang="Spanish" progress={0.88} />
//     <Progress lang="German" progress={0.5} />
//     <View>
//       <Button
//         title={<Icon name="login" size={30} color="black" />}
//       ></Button>
//     </View>
//   </View>
// </ScrollView>

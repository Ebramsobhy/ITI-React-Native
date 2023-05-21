import { StatusBar, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

import Profile from "./src/Pages/Profile";
import Movies from "./src/Pages/Movies";
import Movie_Details from "./src/Pages/Movie-Info";
import Home from "./src/Pages/Home";
import ContactForm from "./src/Pages/ContactForm";
import TodoList from "./src/Pages/TodoList";



export default function App() {

  const Drawer = createDrawerNavigator();
  
  return (
    <>
      <NavigationContainer>
       <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Movies" component={Movies} />
          <Drawer.Screen name="ContactForm" component={ContactForm} />
         <Drawer.Screen name="TodoList" component={TodoList} />
         </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

import { StatusBar, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

import Profile from "./src/Pages/Profile";
import Movies from "./src/Pages/Movies";
import Movie_Details from "./src/Pages/Movie-Info";


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Movies" component={Movies} />
          <Stack.Screen name="Movie_Details" component={Movie_Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

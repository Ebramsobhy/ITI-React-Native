import React, { useState } from 'react';
import { Text, Button, View, TextInput } from 'react-native';

export default function Home({navigation}) {
  return (
    <>
      <Text> Welcom In Home Page</Text>
        

        <View>
            <Button title='Contact Form' onPress={() => 
             navigation.navigate("ContactForm")}/> 
        </View>

        <View>
            <Button title='Todo List' onPress={() => 
             navigation.navigate("TodoList")}/> 
        </View>
    </>
  );
}
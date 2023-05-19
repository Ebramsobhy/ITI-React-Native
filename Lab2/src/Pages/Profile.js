import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { Linking } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Divider } from "react-native-paper";
import CV from "../../assets/bold_cv.pdf";



const InfoBox = (props) => {
    return (
        <View style={{display: 'flex',justifyContent: 'space-between',flexDirection: 'row',alignItems: 'center',paddingEnd: 32,      paddingStart: 32, width: '100%',marginTop: 8}}>
          <Text style={{backgroundColor: '#e1ac15', padding: 8,fontWeight: 'bold'}}>{props.title}</Text>
          <Text style={{color:'white'}}>{props.value}</Text> 
        </View>
    )
}

const ProgressElement = (props) => {
  return (
    <View style={{marginBottom: 16}}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginBottom: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}> {props.title}</Text>
        <Text style={{ color: "white", fontSize: 16 }}> {props.percent}%</Text>
      </View>

      <ProgressBar
        progress={props.percent / 100}
        color={"#efb615"}
        style={{ height: 10 }}
      />
    </View>
  );
};


export default function App({navigation}) {
   const basicInfo = [
    { title: "Age", value: "25" },
    { title: "Residence", value: "BD" },
    { title: "Freelance", value: "Available"},
    { title: "Address", value: "Mallawi, Egypt" },
  ];

    const langs = [
    { title: "Arabic", percent: 100 },
    { title: "English", percent: 70 },
  ];


  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.myPageButtonContainer}>
         <Button
           title="My Page"
           color="#efb615"
           onPress={() => navigation.navigate("Movies")}
            />
      </View>

         <Image
            style={styles.personalImg}
            source={require("../../assets/img.png")}
      />

      <Text style={styles.personalName}>Ebram Sobhy</Text>
      <Text style={{ color: "grey", fontSize: 16, marginBottom: 16 }}>
        Front End Developer
      </Text>

        <View style={styles.horizontalList}>
        <Icon
          name="facebook"
          style={styles.contactIcons}
          onPress={() => {Linking.openURL("https://www.facebook.com")}}
        />
        <Icon
          name="twitter"
          style={styles.contactIcons}
          onPress={() => console.log("Twitter")}
        />
        <Icon
          name="linkedin"
          style={styles.contactIcons}
          onPress={() => console.log("LinkedIn")}
        />
        <Icon
          name="instagram"
          style={styles.contactIcons}
          onPress={() => console.log("Instragram")}
        />
        <Icon
          name="whatsapp"
          style={styles.contactIcons}
          onPress={() => console.log("Whatsapp")}
        />
      </View>

      <Divider style={styles.divider} />

       {basicInfo.map((info) => (
        <InfoBox
          title={info.title}
          value={info.value} 
        />
      ))}  

     <Divider style={styles.divider} />

      <View style={styles.sectionLayout}>
        <Text style={styles.sectionTitle}>Languages</Text>
         {langs.map((lang) => (
           <ProgressElement
             title={lang.title}
             percent={lang.percent}
          />
        ))}
      </View>

      <Divider style={styles.divider} />

          <Button title="Download CV" onPress={() => Linking.openURL(CV)} />  

    </ScrollView>
  );

}

const styles = StyleSheet.create({
  scrollView: {
    padding: 24,
    backgroundColor: "#181818",
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  personalImg: {
    marginBottom: 16,
    height: 200,
    width: 200,
  },
    personalName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
    horizontalList: {
    flexDirection: "row",
  },
    contactIcons: {
    backgroundColor: "yellow",
    padding: 8,
    borderRadius: 50,
    marginEnd: 8,
},

  divider: {
    height: 2,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    marginTop: 16,
    marginBottom: 8,
  },

  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  sectionLayout: {
    width: "100%",
    paddingEnd: 32,
    paddingStart: 32,
    paddingTop: 24,
    paddingDown: 24,
  },
    myPageButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    paddingTop: Constants.statusBarHeight + 16,
    paddingHorizontal: 16,
  },

});
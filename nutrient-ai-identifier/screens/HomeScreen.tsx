import * as React from "react";
import { ScrollView, StyleSheet, Button, Image } from "react-native";
import * as Linking from 'expo-linking';



import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headerContainer}>
          <Image source={require("../assets/images/foodsnaps_logo.png")} style={styles.logo} />
          <Text style={styles.headerText}>FoodSnaps</Text>
        </View>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>
            Snap an image of your meal or house-hold ingredients and receive the nutritional facts or healthly food recipes. 

            If you do not have current access to any food to snap, use the Chatbot to receive nutritional facts or healthy food recipes.
            
            To learn how we created it:
          </Text>
          
          <Button
            title="Click here!"
            onPress={() => Linking.openURL('https://github.com/shaansuthar/FoodSnaps')}
            style={styles.button}
          />

          <View style={styles.demoContainer}>
            <Text style={styles.demoSubTitle}>Features:</Text>

            <Text style={styles.demoText}>
              <Text style={{ fontWeight: "bold" }}>Detect Foods: </Text> 
              To utilize the food detection feature, simply click the "Detect Foods" button on the home screen. 
              Then, take a picture of the food and ensure that the food is in the center of the frame.
            </Text>
            <Text style={styles.demoText}>
              <Text style={{ fontWeight: "bold" }}>Chatbot:</Text>{" "}
              To utilize the Chatbot feature, simply click the "Chatbot" button on the home screen. 
              Then, type in a food/ingredient related question and click the send button.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 55,
    paddingLeft: 10,
  },
  getStartedContainer: {
    marginTop: 30,
    alignItems: "center",
    marginHorizontal: 40,
  },
  codeHighlightContainer: {
    marginTop: 20,
  },
  getStartedText: {
    marginTop: 10,
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 10,
  },
  demoContainer: {
    alignItems: "flex-start",
  },
  demoSubTitle: {
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 18,
    marginBottom: 10,
  },
  demoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginVertical: 10,
  },
  logo: {
    borderRadius: 10,
    width: '20%',
    aspectRatio: 1,
  }
});

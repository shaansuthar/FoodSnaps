import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {SPOONACULAR_API_KEY} from "@env";
import Axios from "axios";

const recipe_width = '40%'

const createFormData = (uri) => {
  const fileName = uri.split('/').pop();
  const fileType = fileName.split('.').pop();
  const formData = new FormData();
  formData.append('file', { 
    uri, 
    name: fileName, 
    type: `image/${fileType}` 
  });
  
  return formData;
}

export default function DetectFoodsScreen() {

  const [image, setImage] = useState(null)
  const [uploaded, setUploaded] = useState(false)
  const [name, setName] = useState(null)
  const [recipes, setRecipes] = useState(null)

  const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const getData = async() => {
    const formData = createFormData(image)
    setUploaded(true)     
    Axios.post(`https://api.spoonacular.com/food/images/analyze?apiKey=${SPOONACULAR_API_KEY}`, formData)
    .then(response => {setName(response.data.category.name); setRecipes(response.data.recipes); console.log(response.data)})
  }

  const resetState = async() => {
    setImage(null)
  }

  if (image != null) {

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{alignSelf: "flex-start"}}>
          <Button title="< Back" onPress={resetState} ></Button>
        </View>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        <Button title="Get Recipe Information" onPress={getData} disabled={uploaded}/>
        <View>
          {name && <Text>The Identified Food Is: {name}</Text>}
          {recipes && <Text>Recipes for {name}: (Click the image to navigate to the recipe)</Text>}
        </View>
        <View style={styles.recipes}>
        {recipes &&
          recipes.map((recipe, index) => {
            return (
                <View key={index} style={styles.recipe}>
                  <Text>{recipe.title}</Text>
                  <TouchableOpacity onPress={() => Linking.openURL(recipe.url)}>
                    <Image source={{uri: `https://spoonacular.com/recipeImages/${recipe.id}-240x150.${recipe.imageType}`}} style={{width: 100, height: 100}}/>
                  </TouchableOpacity>
                </View>
            );
          })}
        </View>        
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      <Button title="Select an Image of Food from Camera Roll" onPress={pickImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flexDirection: "column"
  },
  recipes: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  recipe: {
    maxWidth: recipe_width,
    borderRadius: 5,
    backgroundColor: "#05d31d",
    color: "#000000",
    padding: 20 ,
    margin: 10,
    width: recipe_width,
  },
});



import React, { useEffect, useState } from "react";
import { View, Button, Image, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {SPOONACULAR_API_KEY} from "@env";
import Axios from "axios";

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
  const [uploaded, setUploaded] = useState(true)
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
    Axios.post(`https://api.spoonacular.com/food/images/analyze?apiKey=${SPOONACULAR_API_KEY}`, formData)
    .then(response => {setName(response.data.category.name); setRecipes(response.data.recipes); setUploaded(true); console.log(response.data)})
  }

  if (image != null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        <Button title="Get Recipe and Nutritional Information" onPress={getData} />
      </View>
    )
  }

  if (name != null && recipes != null && uploaded === true) {
    console.log('name is: ' + name)

    return (
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>The Recognized Food is: {name}</Text>
        <div className="recipes" style={styles.recipes}>
        {recipes &&
          recipes.map((recipe, index) => {

            return (
              <div className="recipe" key={index} style={styles.recipe}>
                <h3>Recipe {index + 1}</h3>
                <h2>{recipe.name}</h2>

                <div className="details" style={styles.details}>
                  <Text>{recipe.name}</Text>
                  <Image source={{ uri: recipe.image }} style={{ width: 20, height: 20 }} />
                  <Text><a href={recipe.url}>Link to Recipe</a></Text>
                </div>
              </div>
            );
          })}
        </div>

      </View>
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
  recipes: {
    display: "flex",
    flexWrap: "wrap",
  },
  recipe: {
    position: "relative",
    borderRadius: 5,
    backgroundColor: "#05d31d",
    flexBasis: "width",
    color: "#000000",
    padding: "20px",
    margin: "10px",
    width: "40%",
  },
  details: {
    textAlign: "left",
  }
});



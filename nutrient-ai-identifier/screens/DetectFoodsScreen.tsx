import React, { useEffect, useState } from "react";
import { View, Button, Image, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {SPOONACULAR_API_KEY} from "@env";


export default function DetectFoodsScreen() {

  const [image, setImage] = useState(null)
  const [uploaded, setUploaded] = useState(false)
  const [info, setInfo] = useState([])

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

  const pickImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      setUploaded(true)
      const formData = createFormData(result.assets[0].uri)     
    }
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
  }
});



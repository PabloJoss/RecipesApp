import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, StyleSheet, ImageBackground  } from 'react-native'

//Components
import Recipes from './components/getRecipes';

export default App = () => {
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');


  return[
    <View style = {styles.container}>
      <ImageBackground source={require('./assets/img/fondo.jpg')} style={styles.ImageBackground}>
      <Text style ={styles.title}>Welcome to RecipesApp!</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter your ingredient'
      placeholderTextColor='#ffffff'
      value={ingredient1}
      onChangeText= {(text) => setIngredient1(text)}
      />
      <TextInput
      style={styles.textInput}
      placeholder='Enter your second ingredient'
      placeholderTextColor='#ffffff'
      value={ingredient2}
      onChangeText= {(text) => setIngredient2(text)}
      />
      <Recipes ingredient1={ingredient1} ingredient2={ingredient2}/>
      </ImageBackground> 
    </View>
  ]
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: "bold",
    color: '#ffffff', // Color de fondo para el título
    fontFamily: 'Arial', // Puedes cambiar la fuente a la que desees
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  textInput:{
    borderWidth:1,
    borderColor:'white',
    width:'80%',
    padding:10,
    margin:20,
    borderRadius: 5
  },
  ImageBackground:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  }
})
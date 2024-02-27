import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'

//Components
import Recipes from './components/getRecipes';

export default App = () => {
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');


  return[
    <View style = {styles.container}>
      <Text style ={styles.title}>Welcome to RecipesApp!</Text>
      <TextInput
      style={styles.textInput}
      placeholder='Enter your ingredient'
      value={ingredient1}
      onChangeText= {(text) => setIngredient1(text)}
      />
      <TextInput
      style={styles.textInput}
      placeholder='Enter your second ingredient'
      value={ingredient2}
      onChangeText= {(text) => setIngredient2(text)}
      />
      <Recipes ingredient1={ingredient1} ingredient2={ingredient2}/>
    </View>
  ]
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 30,
    marginBottom:20,
    fontWeight: "bold"
  },
  textInput:{
    borderWidth:1,
    borderColor:'gray',
    width:'80%',
    padding:10,
    margin:20,
    borderRadius: 5
  },
  button:{
    backgroundColor:'#9AD0C2',
    padding:10,
    borderRadius:5,
  },
  buttonText:{
    color: "black"
  },
  sunnyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow'
  },
  rainContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  cloudyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  dataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  dataText:{
    fontSize: 20
  }
})
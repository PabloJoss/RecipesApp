import React, {useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default App = () => {
  return[
    <View style = {styles.container}>
      <Text style ={styles.title}>Welcome to RecipesApp!</Text>
    </View>
  ]
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F9E8C9"
  },
  title: {
    fontSize: 30,
    marginBottom:20,
    fontWeight: "bold"
  }
})
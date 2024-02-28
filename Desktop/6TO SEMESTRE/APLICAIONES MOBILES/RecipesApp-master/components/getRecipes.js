import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'


const Recipes = ({ ingredient1, ingredient2 }) =>{
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = 'b231be1abbfa4dc5b4b9798ed1f6527f';

    const getRecipe = async()=>{
        try{
            const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredient1},+${ingredient2}&number=3`)
            const data = await res.json();
            if(res.status === 200){
            setRecipe(data);
            setError(null);
        }else{
            setError(`Error finding your recipe!`)
        }
        }catch(err){
            setError(`Error finding your recipe!`)
        }
    }

    return[
        <>
        <View>
            <TouchableOpacity style={styles.button} onPress={getRecipe}>
                <Text style={styles.buttonText}>Get Recipe</Text>
            </TouchableOpacity>
        </View>
        <View>
                {error && <Text>{error}</Text>}
                {recipe && recipe.map((item, index) => (
                    <View key={index} style={styles.dataContainer}>
                        <Text style={styles.dataText}>{item.title}</Text>
                    </View>
                ))}
        </View>
        </>
        
    ]
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#9AD0C2',
        padding:10,
        borderRadius:5,
        
        justifyContent: 'center',
        alignItems: 'center'
   
    },
    buttonText:{
        color: "#ffffff",
        textAlign: 'center',
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

export default Recipes;
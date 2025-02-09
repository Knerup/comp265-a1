import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default function App() {

  const [selectedFood, setSelectedFood] = useState('Pizza'); // Default city

  // Static Recipe Data
  // Recipes from: https://www.allrecipes.com/recipe/20171/quick-and-easy-pizza-crust/, https://www.allrecipes.com/recipe/276725/creamy-chicken-alfredo/, https://www.allrecipes.com/recipe/133123/peanut-butter-and-pumpkin-dog-treats/
  const recipeData = [
    {
      recipe: 'Pizza',
      description: "If you're looking for a homemade pizza crust recipe that's great for beginners, you're in luck. This top-rated recipe is super easy to throw together on a whim and it puts the store-bought stuff to shame.",
      ingredients: "1 cup warm water (110 degrees F/45 degrees C) | 1 (.25 ounce) package active dry yeast | 1 teaspoon white sugar | 2 ½ cups bread flour | 2 tablespoons olive oil | 1 teaspoon salt",
      instructions: "Step 1: Gather all ingredients. Preheat oven to 450 degrees F (230 degrees C), and lightly grease a pizza pan. | Step 2: Place warm water in a bowl; add yeast and sugar. Mix and let stand until creamy, about 10 minutes. | Step 3: Add flour, oil, and salt to the yeast mixture; beat until smooth. You can do this by hand or use a stand mixer fitted with a dough hook to make it easier. Let this rest for 5 minutes. | Step 4: Turn dough out onto a lightly floured surface and pat or roll into a 12-inch circle. Transfer this to the prepared pizza pan. | Step 5: Spread crust with sauce and toppings of your choice. Bake in the preheated oven until golden brown, 15 to 20 minutes. Remove from the oven and let cool for 5 minutes before serving."
    },

    {
      recipe: 'Chicken Alfredo',
      description: "This recipe shows you how to take plain, bland, store-made sauce and make it more than restaurant-worthy.",
      ingredients: "*2 pounds skinless, boneless chicken breasts, cut into chunks | *Salt and ground black pepper to taste | *1 teaspoon white sugar |*2 ½ cups bread flour | *2 tablespoons olive oil | *1 teaspoon salt",
      instructions: "Step 1: Gather all ingredients. Preheat oven to 450 degrees F (230 degrees C), and lightly grease a pizza pan. | Step 2: Place warm water in a bowl; add yeast and sugar. Mix and let stand until creamy, about 10 minutes. | Step 3: Add flour, oil, and salt to the yeast mixture; beat until smooth. You can do this by hand or use a stand mixer fitted with a dough hook to make it easier. Let this rest for 5 minutes. | Step 4: Turn dough out onto a lightly floured surface and pat or roll into a 12-inch circle. Transfer this to the prepared pizza pan. | Step 5: Spread crust with sauce and toppings of your choice. Bake in the preheated oven until golden brown, 15 to 20 minutes. Remove from the oven and let cool for 5 minutes before serving."
    },


    {
      recipe: 'Dog Treats',
      description: "If you're looking for a homemade pizza crust recipe that's great for beginners, you're in luck. This top-rated recipe is super easy to throw together on a whim and it puts the store-bought stuff to shame.",
      ingredients: "*1 cup warm water (110 degrees F/45 degrees C) | *1 (.25 ounce) package active dry yeast | *1 teaspoon white sugar |*2 ½ cups bread flour | *2 tablespoons olive oil | *1 teaspoon salt",
      instructions: "Step 1: Gather all ingredients. Preheat oven to 450 degrees F (230 degrees C), and lightly grease a pizza pan. | Step 2: Place warm water in a bowl; add yeast and sugar. Mix and let stand until creamy, about 10 minutes. | Step 3: Add flour, oil, and salt to the yeast mixture; beat until smooth. You can do this by hand or use a stand mixer fitted with a dough hook to make it easier. Let this rest for 5 minutes. | Step 4: Turn dough out onto a lightly floured surface and pat or roll into a 12-inch circle. Transfer this to the prepared pizza pan. | Step 5: Spread crust with sauce and toppings of your choice. Bake in the preheated oven until golden brown, 15 to 20 minutes. Remove from the oven and let cool for 5 minutes before serving."
    },
  ];

  const handleRecipeChange = (event) => {
    console.log(event.value);
    setSelectedFood(event.value);
  };

  const selectedRecipe = recipeData.find((data) => data.recipe === selectedFood);


  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Text for my title texts and subtitle */}
        <Text style={styles.titleText}>Assignment #1: Single-Screen Mobile Application</Text>
        <Text style={styles.subtitleText}>By: Knerup Pastor | COMP 265</Text>

        <SegmentedControl
          style={styles.toggleButton}
          values={['Pizza', 'Chicken Alfredo', 'Dog Treats']}
          selectedIndex={selectedFood}
          onChange={(event) => {
            handleRecipeChange(event.nativeEvent);
          }}
        />


        {/* Displaying the recipe for the user */}
        <View style={styles.recipeName}>
          {/* The Recipe Name */}
          <Text>{selectedRecipe.recipe}</Text>
        </View>

        <View style={styles.recipeDescriptions}>
          {/* The Recipe Description */}
          <Text>{selectedRecipe.description}</Text>
        </View>

        <View style={styles.recipeIngredients}>
          {/* The Recipe Ingredients */}
          <Text>{selectedRecipe.ingredients}</Text>
        </View>

        <View style={styles.recipeIngredients}>
          {/* The Recipe Instructions */}
          <Text>{selectedRecipe.instructions}</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  titleText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitleText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
  },
  toggleButton: {
    marginBottom: 30,
  },
  recipeName: {
    paddingBottom: 30,
    padding: 20,
  },
  recipeDescriptions: {
    textAlign: 'center',
    padding: 20,
  },
  recipeIngredients: {
    textAlign: 'center',
    padding: 20,
  },
  recipeInstructions: {
    textAlign: 'center',
    padding: 20,
  },
});
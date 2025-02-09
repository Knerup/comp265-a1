import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, Alert, Image, TextInput, Switch } from 'react-native';
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
      ingredients: "2 pounds skinless, boneless chicken breasts, cut into chunks | Salt and ground black pepper to taste | 2 (16 ounce) packages thin spaghetti | 4 (15 ounce) jars Alfredo sauce | 2 tablespoons Italian seasoning | 2 tablespoons garlic powder | 2 tablespoons chopped onion | 2 tablespoons chopped fresh basil | 2 tablespoons salt | 2 tablespoons ground black pepper | 1 tablespoon onion powder | ½ tablespoon cayenne pepper, or to taste | ",
      instructions: "Step 1: Season chicken with salt and pepper. Heat a large skillet over medium-high heat. Add chicken and cook until no longer pink in the centers and juices run clear, 7 to 10 minutes. | Step 2: Bring a large pot of lightly salted water to a boil. Cook thin spaghetti in the boiling water, stirring occasionally, until tender yet firm to the bite, 8 to 10 minutes. | Step 3: Meanwhile, add Alfredo sauce to the chicken along with Italian seasoning, garlic powder, onion, basil, salt, black pepper, onion powder, and cayenne. Bring to a slight boil; stir in Parmesan cheese. Cook mixture until cheese is melted and you are able to lift a spoon out of the sauce without cheese hanging onto it, 3 to 5 minutes. | Step 4: Place a steamer insert into a saucepan and fill with water to just below the bottom of the steamer. Bring water to a boil. Add broccoli, cover, and steam until tender, 2 to 6 minutes. Add broccoli to sauce. | Step 5: Drain cooked pasta. Scoop into individual serving bowls and pour sauce on top."
    },


    {
      recipe: 'Dog Treats',
      description: "Your furry friend is an important member of the family, and that means they deserve homemade treats too! Sure, you can go out and buy a box of dog treats, but these Peanut Butter and Pumpkin Dog Treats are made with love — and they're just as easy to make as making a batch of cookies.",
      ingredients: "2 ½ cups whole wheat flour | 2 large eggs | ½ cup canned pumpkin | 2 tablespoons peanut butter | ½ teaspoon salt | ½ teaspoon ground cinnamon | 1 teaspoon water, or more if necessary (Optional)",
      instructions: "Step 1: Gather all ingredients. Preheat the oven to 350 degrees F (175 degrees C). | Step 2: Combine flour, eggs, pumpkin, peanut butter, salt, and cinnamon in a bowl; stir with a spatula until combined. | Step 3: Transfer mixture to a work surface and work it with your hands until mixture starts to come together. Add 1 teaspoon water at a time (only if needed) to help make the dough workable, but don't add too much as it should be dry and stiff. Roll the dough to a thickness of 1/2 inch. | Step 4: Cut into 1/2-inch pieces and transfer to a baking sheet. | Step 5: Bake in the preheated oven until dog treats are golden brown and crunchy, about 40 minutes. Let cool before serving to your dog."
    },
  ];

  const handleRecipeChange = (event) => {
    console.log(event.value);
    setSelectedFood(event.value);
  };

  const selectedRecipe = recipeData.find((data) => data.recipe === selectedFood);

  const toggleButton = () => {
    buttonColor = 'red';
    buttonTitle = 'Saved!'
  };

  let buttonTitle = 'Love These Recipes? Save Them Now!'

  let buttonColor = 'purple';


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [text, onChangeText] = React.useState('Please write your review HERE');

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Text for my title texts and subtitle */}
        <Text style={styles.titleText}>Assignment #1: Single-Screen Mobile Application</Text>
        <Text style={styles.subtitleText}>By: Knerup Pastor | COMP 265</Text>
        <Text style={styles.subtitleText}>Recipe Book</Text>

        <SegmentedControl
          style={styles.toggleButton}
          values={['Pizza', 'Chicken Alfredo', 'Dog Treats']}
          selectedIndex={selectedFood}
          onChange={(event) => {
            handleRecipeChange(event.nativeEvent);
          }}
        />

        <StatusBar style="auto" />
      </View>

      {/* Displaying the recipe for the user */}
      <View>
        {/* The Recipe Name */}
        <Text style={styles.recipeName} >{selectedRecipe.recipe}</Text>
      </View>

      <View>
        {/* The Recipe Description */}
        <Text style={styles.recipeDescriptions} >{selectedRecipe.description}</Text>
      </View>

      <View>
        {/* The Recipe Ingredients */}
        <Text style={styles.recipeIngredients} >{selectedRecipe.ingredients}</Text>
      </View>

      <View>
        {/* The Recipe Instructions */}
        <Text style={styles.recipeIngredients} >{selectedRecipe.instructions}</Text>
      </View>


      <View style={styles.button}>
        <Button
          onPress={() => {
            Alert.alert('Recipes Saved. Thank You! Be sure to share as well!');
            { toggleButton };
          }}

          title={buttonTitle}
          color={buttonColor}
          accessibilityLabel="Button that onced pressed will pop up an alert for the user"
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://knerup.com/media/knerup-img.jpg',
          }}>
        </Image>
      </View>

      <View>
        {/* Thank you footer & Explai image */}
        <Text style={styles.thankYouFooter}> Hi! I'm Knerup. Thank you for visiting my App. I hope you enjoyed the recipes!</Text>
      </View>

      <View style={styles.uselessComponents}>
        <Text style={styles.uselessReview}> If you werent satisfied with our recipe book, please leave us a review message below. Thank you!</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
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
    paddingBottom: 10,
  },
  toggleButton: {
    marginBottom: 10,
  },
  button: {
    padding: 50,
  },
  image: {
    width: 165,
    height: 165,
  },
  imageContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 120,
    paddingRight: 120,
    paddingBottom: 20,
  },
  thankYouFooter: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  uselessComponents: {
    padding: 60,
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  uselessReview: {
    fontSize: 20,
    textAlign: 'center', 
    fontWeight: 'bold', 
  }, 
  recipeName: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
  },
  recipeDescriptions: {
    textAlign: 'center',
    paddingBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
    lineHeight: 30,
  },
  recipeIngredients: {
    textAlign: 'center',
    paddingBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
    lineHeight: 30,
  },
  recipeInstructions: {
    textAlign: 'center',
    paddingBottom: 20,
    paddingRight: 50,
    paddingLeft: 50,
    lineHeight: 30,
  },
});
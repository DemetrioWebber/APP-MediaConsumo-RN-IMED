import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/views/Home'
import MediaFinal from './src/views/MediaFinal'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Média de Consumo',
            headerTitleAlign: "center"

          }}
        />
        <Stack.Screen
          name="MediaFinal"
          component={MediaFinal}
          options={{
            title: 'Média final',
            headerTitleAlign: "center"

          }}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
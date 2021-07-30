import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer, DefaultTheme , DarkTheme, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';


const customTheme:Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    // primary: '';
    background: 'black',
    // card: '';
    // text: '';
    // border: '';
    // notification: '';
  }
}
const App = () => {
  return (
    <NavigationContainer
      theme={customTheme}
    >
      <Navigator/>
    </NavigationContainer>
  )
}
export default App;
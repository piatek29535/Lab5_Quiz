/** @format */

import { Navigation } from "react-native-navigation";
import App from './Screens/MainScreen';
import ResultScreen from './Screens/ResultScreen' // Wpierw musimy do jakiejś zmiennej przypisać ten drugi screen do którego będziemy przechodzić
import TestScreen from './Screens/TestScreen'

//Screeny do apki Quiz
Navigation.registerComponent(`MainScreen`, () => App);
Navigation.registerComponent(`TestScreen`, () => TestScreen); // Tutej tak jakby mówimy że "oki, bedziemy teraz se brali ten pliczek jako nowe okno"
Navigation.registerComponent(`ResultScreen`, () => ResultScreen); // Tutej tak jakby mówimy że "oki, bedziemy teraz se brali ten pliczek jako nowe okno"

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
          children: [
              {
                component:{
                  name: 'MainScreen',
                  options:{
                    topBar:{
                      title:{
                        text:'Home Page',
                        alignment: 'center'
                      }
                    }
                  }
                },
              },
          ]
      }
    }

  });
});

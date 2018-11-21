/** @format */

import { Navigation } from "react-native-navigation";
import App from './Screens/MainScreen';
import ResultScreen from './Screens/ResultScreen' // Wpierw musimy do jakiejś zmiennej przypisać ten drugi screen do którego będziemy przechodzić
import TestScreen from './Screens/TestScreen'
import Drawer from './Screens/Drawer'

//Screeny do apki Quiz
Navigation.registerComponent(`MainScreen`, () => App);
Navigation.registerComponent(`TestScreen`, () => TestScreen); // Tutej tak jakby mówimy że "oki, bedziemy teraz se brali ten pliczek jako nowe okno"
Navigation.registerComponent(`ResultScreen`, () => ResultScreen); // Tutej tak jakby mówimy że "oki, bedziemy teraz se brali ten pliczek jako nowe okno"
Navigation.registerComponent(`Drawer`, () => Drawer);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar:{
      elevation: 0,
      visible: true,
      drawBehind: true,
      animate: false,
      buttonColor: 'white',
      title: {
        color: 'white',
        alignment: 'center'
      },
      background: {
      color: 'transparent'
      }
    }
  })
  Navigation.setRoot({
    root: {
      sideMenu: {
          left:{
            component:{
              id: 'DrawerID',
              name: 'Drawer'
            }
          },
          center:{
            stack:{
              id: 'ScreenStack',
              children:[
                {
                  component:{
                    name: 'MainScreen',
                  },
                },
              ],
            }
          }
      },
    }

  });
});

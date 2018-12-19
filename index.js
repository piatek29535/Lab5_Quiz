/** @format */

import { Navigation } from "react-native-navigation";
import App from './Screens/MainScreen';
import ResultScreen from './Screens/ResultScreen' // Wpierw musimy do jakiejś zmiennej przypisać ten drugi screen do którego będziemy przechodzić
import TestScreen from './Screens/TestScreen'
import TestScreen2 from './Screens/TestScreen2'
import TestScreen3 from './Screens/TestScreen3'
import TestScreen4 from './Screens/TestScreen4'
import Drawer from './Screens/Drawer'
import SplashScreen from './Screens/SplashScreen'

//Screeny do apki Quiz
Navigation.registerComponent(`MainScreen`, () => App);
Navigation.registerComponent(`TestScreen`, () => TestScreen); // Tutej tak jakby mówimy że "oki, bedziemy teraz se brali ten pliczek jako nowe okno"
Navigation.registerComponent(`TestScreen2`, () => TestScreen2);
Navigation.registerComponent(`TestScreen3`, () => TestScreen3);
Navigation.registerComponent(`TestScreen4`, () => TestScreen4);
Navigation.registerComponent(`ResultScreen`, () => ResultScreen); // Tutej tak jakby mówimy że "oki, bedziemy teraz se brali ten pliczek jako nowe okno"
Navigation.registerComponent(`Drawer`, () => Drawer);
Navigation.registerComponent(`SplashScreen`, () => SplashScreen);


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
                    name: 'SplashScreen',
                  },
                },
              ],
            }
          }
      },
    }

  });
});

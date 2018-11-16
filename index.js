/** @format */

import { Navigation } from "react-native-navigation";
import App from './App';
import SecondScreen from './SecondScreen'

Navigation.registerComponent(`Welcome`, () => App);
Navigation.registerComponent(`SecondScreen`, () => SecondScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "SecondScreen"
      }
    }

  });
});

import { createStackNavigator } from "react-navigation";
import TabNavigator from "./TabNavigator";
import ProductScreen from "../screens/ProductScreen";

export default createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
        headerTransparent: true
      }
    },
    Product: {
      screen: ProductScreen
    }
  },
  {
    initialRouteName: "Tabs",
    headerMode: "screen"
  }
);

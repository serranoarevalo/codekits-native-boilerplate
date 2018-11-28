import { createSwitchNavigator } from "react-navigation";

import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";

export default createSwitchNavigator({
  Auth: AuthNavigator,
  Main: MainNavigator
});

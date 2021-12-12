// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import SplashScreen from "../screens/splashScreen";
import Login from "../screens/login";
import Registration from "../screens/registration";
import Account from "../screens/account";
import ResetPassword from "../screens/resetPassword";
import ChangePassword from "../screens/changePassword";
import RestorantDetails from "../screens/restorantDetails";
import Vendor from "../screens/vendor";
import BottomTabs from "./bottomTabs";
import categoryDetails from "../screens/categoryDetails";
import VerifyOtp from "../screens/verifyOtp";
import Profile from "../screens/profile";
import { getData, storeData } from "../component/asyncStorage";
import EditProfile from "../screens/editProfile";

const Stack = createNativeStackNavigator();

function MainStackNavigation() {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    getData("token")
      .then((response) => setToken(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <NavigationContainer>
      {!token ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Vendor" component={Vendor} />
          <Stack.Screen name="HomeScreen" component={BottomTabs} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Registration} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="RestorantDetails" component={RestorantDetails} />
          <Stack.Screen name="CategoryFood" component={categoryDetails} />
          <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={BottomTabs} />
          <Stack.Screen name="Vendor" component={Vendor} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Registration} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="RestorantDetails" component={RestorantDetails} />
          <Stack.Screen name="CategoryFood" component={categoryDetails} />
          <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default MainStackNavigation;

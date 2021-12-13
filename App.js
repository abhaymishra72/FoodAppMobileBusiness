import React from "react";
import { View } from "react-native";
import MainStackNavigation from "./src/navigation/mainStackNavigation";
import Account from "./src/screens/account";
import ChangePassword from "./src/screens/changePassword";
import Login from "./src/screens/login";
import Registration from "./src/screens/registration";
import ResetPassword from "./src/screens/resetPassword";
import VerifyOtp from "./src/screens/verifyOtp";

export default function App() {
  return <MainStackNavigation />;
}

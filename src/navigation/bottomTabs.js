import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/account";
import Home from "../screens/home";
import SearchScreen from "../screens/searchScreen";
import Orders from "../screens/orders";
import Cart from "../screens/cart";
import Profile from "../screens/profile";
import Vendor from "../screens/vendor";

import { getData, storeData } from "../component/asyncStorage";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const [role, setRole] = React.useState("");

  React.useEffect(() => {
    getData("role")
      .then((response) => setRole(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-apps" : "ios-apps-outline";
          } else if (route.name === "Search") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "ios-gift" : "ios-gift-outline";
          } else if (route.name === "Delivery") {
            iconName = focused ? "ios-gift" : "ios-gift-outline";
          } else if (route.name === "Menu") {
            iconName = focused ? "ios-menu" : "ios-menu-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      {role == "vendor" ? (
        <>
          <Tab.Screen name="Home" component={Vendor} />
          <Tab.Screen name="Menu" component={Vendor} />
          <Tab.Screen name="Orders" component={Vendor} />
          {/* <Tab.Screen name="Account" component={Account} /> */}
          <Tab.Screen name="Account" component={Profile} />
        </>
      ) : (
        <>
          <Tab.Screen name="Home" component={Vendor} />
          <Tab.Screen name="Delivery" component={Vendor} />
          {/* <Tab.Screen name="Account" component={Account} /> */}
          <Tab.Screen name="Account" component={Profile} />
        </>
      )}
    </Tab.Navigator>
  );
};

export default BottomTabs;

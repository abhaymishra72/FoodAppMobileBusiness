import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors, font, images, customStyles } from "../constants/styles";

import { getData, storeData } from "../component/asyncStorage";
import Profile from "./profile";

const Account = ({ navigation }) => {
  const [token, setToken] = useState(true);

  const getLocalStorageData = async () => {
    try {
      getData("token")
        .then((response) => setToken(false))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocalStorageData();
  }, []);

  return (
    <SafeAreaView style={customStyles.container}>
      <View style={customStyles.header}></View>
      <View style={customStyles.footer}>
        <Image style={customStyles.image} source={images.logo} />
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={customStyles.logoText}>Sanaat Bussiness</Text>
        </View>
        {/* <Text style={{ fontSize: font.primaryFont, justifyContent: 'center', alignSelf: 'center' }}>
                    FOOD DELIVERY
                </Text> */}
        <View
          style={{
            fontSize: font.secondaryFont,
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
            Discover the best foods from over thousands
          </Text>
          <Text style={{ justifyContent: "center", alignSelf: "center" }}>
            of restorant and fast delivery to your
          </Text>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginBottom: 20,
            }}
          >
            doorsteps
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={customStyles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={customStyles.primaryButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={customStyles.secondoryButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={customStyles.secondaryButtonText}>
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    flex: 0.5,
    backgroundColor: colors.primary,
    elevation: 30,
    borderBottomLeftRadius: 650,
  },

  footer: {
    flex: 0.9,
    backgroundColor: colors.white,
  },

  image: {
    height: "25%",
    width: "30%",
    borderRadius: 10,
    marginTop: "5%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -5,
    borderRadius: 160,
  },

  button: {
    height: 45,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: colors.tomatoColor,
  },

  buttonTwo: {
    height: 45,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.tomatoColor,
  },

  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 7,
    fontSize: 20,
  },

  textTwo: {
    color: colors.tomatoColor,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 7,
    fontSize: 20,
  },
});

import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { font, colors, images } from "../constants/styles";
import axios from "axios";
import { BASE_URL } from "../constants/config";

const ChangePassword = ({ route, navigation }) => {
  const id = route.params.userId;

  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const setNewPassword = (e) => {
    if (e.length != 0) {
      setPassword(e);
    }
  };

  const setConfrmPassword = (e) => {
    if (e.length != 0) {
      setCpassword(e);
    }
  };

  const changePassword = async () => {
    if (password == "") {
      console.log("password is empty");
    } else {
      try {
        await axios
          .post(`${BASE_URL}/forgotpassword/newpassword`, { id, password })
          .then((response) => {
            Alert.alert(response.data.message);
            navigation.navigate("Login");
          })
          .catch((error) => console.log("error----", error.message));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: "15%",
        }}
      >
        <Image style={styles.image} source={images.logo} />

        <Text
          style={{
            fontSize: font.bold,
            color: colors.fontColor,
            justifyContent: "center",
            alignSelf: "center",
            marginBottom: "15%",
          }}
        >
          Sanaat Bussiness
        </Text>
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            fontSize: font.bold,
          }}
        >
          New Password!
        </Text>
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            fontSize: font.secondaryFont,
            marginTop: 15,
            marginBottom: "10%",
          }}
        >
          Please enter the new password !
        </Text>

        <View>
          <TextInput
            style={styles.textInput}
            placeholder="New Password!"
            secureTextEntry={true}
            onChangeText={(e) => setNewPassword(e)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password!"
            secureTextEntry={true}
            onChangeText={(e) => setConfrmPassword(e)}
          />

          <View>
            <TouchableOpacity style={styles.button} onPress={changePassword}>
              <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInput: {
    height: 40,
    backgroundColor: colors.white,
    fontSize: font.secondaryFont,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderColor: colors.gray,
    borderWidth: 0.5,
    alignSelf: "center",
    width: "80%",
    borderRadius: 10,
  },

  button: {
    height: 45,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: colors.tomatoColor,
  },

  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 7,
    fontSize: 20,
  },

  image: {
    height: "20%",
    width: "30%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 180,
  },
});

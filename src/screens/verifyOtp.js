import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import {
  font,
  colors,
  images,
  ionicons,
  customStyles,
} from "../constants/styles";
import axios from "axios";
import { BASE_URL } from "../constants/config";

const VerifyOtp = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [isOtpEmpty, setisOtpEmpty] = useState(false);
  const [isPasswordEmpty, setisPasswordEmpty] = useState(false);
  const [isCPasswordEmpty, setisCPasswordEmpty] = useState(false);
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const otpEntered = (e) => {
    if (e.length != 0) {
      setOtp(e);
      setisOtpEmpty(false);
    } else {
      setisOtpEmpty(true);
    }
  };

  const setNewPassword = (e) => {
    if (e.length != 0) {
      setPassword(e);
      setisPasswordEmpty(false);
    } else {
      setisPasswordEmpty(true);
    }
  };

  const setConfrmPassword = (e) => {
    if (e.length != 0) {
      setCpassword(e);
      setisCPasswordEmpty(false);
    } else {
      setisCPasswordEmpty(true);
    }
  };
  const changePassword = async () => {
    if (otp == "") {
      setisOtpEmpty(true);
    } else {
      try {
        await axios
          .post(`${BASE_URL}/forgotpassword/verifycode`, { code: otp })
          .then((response) => {
            let userId = response.data.userId;
            //Alert.alert(response.data.message);
            changeNewPassword(response.data.userId);
            // navigation.navigate("ChangePassword", { userId });
          })
          .catch((error) => console.log("error----", error.message));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeNewPassword = async (id) => {
    if (password == "" || cpassword == "") {
      console.log("error");
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
    <SafeAreaView style={customStyles.container}>
      <ScrollView>
        <View
          style={{
            marginTop: "10%",
          }}
        >
          <Image style={customStyles.image} source={images.logo} />

          <Text style={customStyles.logoText}>Sanaat</Text>

          <Text style={customStyles.pageHeadingText}>Code Verification</Text>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: font.secondaryFont,
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            Please enter the verification code received
          </Text>
          <Text
            style={{
              justifyContent: "center",
              alignSelf: "center",
              fontSize: font.secondaryFont,
              marginTop: 0,
              marginBottom: 20,
            }}
          >
            in email to reset the password.
          </Text>
          <View>
            <Text style={customStyles.textInputName}>Code</Text>
            <View style={customStyles.textInputIcon}>{ionicons.code}</View>
            <TextInput
              style={customStyles.textInput}
              keyboardType="number-pad"
              underlineColorAndroid={colors.gray}
              onChangeText={(e) => otpEntered(e)}
            />
            {isOtpEmpty ? (
              <Text style={{ marginLeft: 40, color: "red" }}>
                Code should not be empty
              </Text>
            ) : null}
            <Text style={customStyles.textInputName}>New Password</Text>
            <View style={customStyles.textInputIcon}>{ionicons.password}</View>
            <TextInput
              style={customStyles.textInput}
              secureTextEntry={true}
              underlineColorAndroid={colors.gray}
              onChangeText={(e) => setNewPassword(e)}
            />
            {isPasswordEmpty ? (
              <Text style={{ marginLeft: 40, color: "red" }}>
                Password should not be empty.
              </Text>
            ) : null}

            <Text style={customStyles.textInputName}>Confirm New Password</Text>
            <View style={customStyles.textInputIcon}>{ionicons.password}</View>
            <TextInput
              style={customStyles.textInput}
              secureTextEntry={true}
              underlineColorAndroid={colors.gray}
              onChangeText={(e) => setConfrmPassword(e)}
            />
            {isCPasswordEmpty ? (
              <Text style={{ marginLeft: 40, color: "red" }}>
                Confirm Password should not be empty.
              </Text>
            ) : null}
            
            <View style={{ marginBottom: 180 }}>
              <TouchableOpacity
                style={customStyles.button}
                //   onPress={() => navigation.navigate("ChangePassword")}
                onPress={changePassword}
              >
                <Text style={customStyles.primaryButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textInput: {
    height: 40,
    fontSize: font.secondaryFont,
    marginLeft: 20,
    paddingLeft: 40,
    marginRight: 20,
    alignSelf: "center",
    width: "80%",
    borderRadius: 10,
    marginBottom: 5,
  },

  image: {
    height: "20%",
    width: "30%",
    justifyContent: "center",
    alignSelf: "center",
  },

  button: {
    height: 45,
    width: "80%",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 80,
    backgroundColor: colors.tomatoColor,
  },

  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 7,
    fontSize: 20,
  },
});

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import {
  font,
  colors,
  images,
  ionicons,
  customStyles,
} from "../constants/styles";
import axios from "axios";
import { isEmail } from "../validations";
import { getData, storeData } from "../component/asyncStorage";
import { BASE_URL } from "../constants/config";

const Login = ({ navigation }) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
    role: "deliveryman+vendor",
  });

  const textInputChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        email: e,
        isEmailEmpty: false,
      });

      if (
        /^[a-zA-Z0-9]+(?:[a-zA-Z]|\.(?!(\.|@))|\_(?!(\_|@))|\-(?!(\-|@)))+(?:[\w]|\.(?!(\.|@)))*@{1}[a-zA-Z0-9\-]+(?:\.(?!\.))*[a-zA-Z0-9\-]+(?:\.(?!\.))+[a-zA-Z]{2,7}$/g.test(
          e
        )
      ) {
        setIsValidEmail(false);
      } else {
        setIsValidEmail(true);
      }
    } else {
      setData({
        ...data,
        email: e,
        isEmailEmpty: true,
      });
    }
  };

  const passwordChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        password: e,
        isPasswordEmpty: false,
      });

      if (e.length != 0 && e.length > 4) {
        setIsValidPassword(false);
      } else {
        setIsValidPassword(true);
      }
    } else {
      setData({
        ...data,
        password: e,
        isPasswordEmpty: true,
      });
    }
  };

  const isLogIn = async () => {
    if (!data.email && !data.password) {
      setData({
        isEmailEmpty: true,
        isPasswordEmpty: true,
      });
    } else if (!data.email) {
      setData({
        isEmailEmpty: true,
      });
    } else if (!data.password) {
      setData({
        isPasswordEmpty: true,
      });
    } else {
      try {
        await axios
          .post(`${BASE_URL}/users/login-user`, data)
          .then((response) => {
            if (response.data.success) {
              let token = response.data.user.token;
              let email = response.data.user.email;
              let role = response.data.user.role;
              let name = response.data.user.name;
              let mobile = response.data.user.mobile;
              let address = response.data.user.address;

              let id = response.data.user.id;
              // let address = response.data.user.address;
              storeData("user", JSON.stringify(response.data.user));
              storeData("token", token);
              storeData("address", address);
              storeData("role", role);
              storeData("email", email);
              storeData("name", name);
              storeData("id", id);

              // storeData("address", address);
              storeData("mobile", mobile.toString());

              Alert.alert(
                response.data.success ? "Success" : "Error",
                response.data.message
              );
              navigation.navigate("HomeScreen");

              setData({
                ...data,
                password: "",
                email: "",
              });
            } else {
              Alert.alert(
                response.data.success ? "Success" : "Error",
                response.data.message
              );
            }
          })
          .catch((error) => Alert.alert(error.message));
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <SafeAreaView style={customStyles.container}>
      <View
        style={{
          marginTop: "10%",
        }}
      >
        <Image style={customStyles.image} source={images.logo} />

        <Text style={customStyles.logoText}>Sanaat Business</Text>
        {/* <Text style={{ fontSize: font.primaryFont, justifyContent: 'center', alignSelf: 'center', marginBottom:'15%' }}>
                    FOOD DELIVERY
                </Text> */}
        <View>
          <Text style={customStyles.pageHeadingText}>Login</Text>
        </View>
        <View>
          <Text style={customStyles.textInputName}>Email</Text>
          <View style={customStyles.textInputIcon}>{ionicons.email}</View>
          <TextInput
            style={customStyles.textInput}
            underlineColorAndroid={colors.gray}
            value={data.email}
            onChangeText={(event) => textInputChange(event)}
          />

          {data.isEmailEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Email should not be empty.
            </Text>
          ) : !isValidEmail ? null : (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Email is not valid.
            </Text>
          )}
          <Text style={customStyles.textInputName}>Password</Text>
          <View style={customStyles.textInputIcon}>{ionicons.password}</View>
          <TextInput
            style={customStyles.textInput}
            secureTextEntry={true}
            underlineColorAndroid={colors.gray}
            value={data.password}
            onChangeText={(event) => passwordChange(event)}
          />
          {data.isPasswordEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Password should not be empty.
            </Text>
          ) : !isValidPassword ? null : (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Password should be more than 4 characters.
            </Text>
          )}
          <View>
            <TouchableOpacity style={customStyles.button} onPress={isLogIn}>
              <Text style={customStyles.primaryButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={{ fontSize: font.secondaryFont }}>
                Forget your Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: font.secondaryFont }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  fontSize: font.secondaryFont,
                  color: colors.primary,
                  marginLeft: 10,
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

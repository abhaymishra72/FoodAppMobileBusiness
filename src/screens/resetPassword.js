import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
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

const ResetPassword = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    isEmailEmpty: false,
  });

  const [isValidEmail, setIsValidEmail] = React.useState(false);

  const textEmailChange = (e) => {
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

  const onSubmit = async () => {
    if (data.email == "") {
      setData({
        ...data,
        isEmailEmpty: true,
      });
    } else {
      try {
        await axios
          .post(`${BASE_URL}/forgotpassword`, { email: data.email })
          .then((response) => {
            Alert.alert(response.data.message);
            navigation.navigate("VerifyOtp");
            setData({
              ...data,
              email: "",
            });
          })
          .catch((error) => console.log("error----", error.message));
      } catch (error) {
        console.log(error);
      }

      navigation.navigate("VerifyOtp");
    }
  };

  return (
    <SafeAreaView style={customStyles.container}>
      <View
        style={{
          marginTop: "15%",
        }}
      >
        <Image style={customStyles.image} source={images.logo} />

        <Text style={customStyles.logoText}>Sanaat Bussiness</Text>
        <Text style={customStyles.pageHeadingText}>Reset Password</Text>
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            fontSize: font.secondaryFont,
            marginTop: 15,
          }}
        >
          Please enter your email to receive a
        </Text>
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            fontSize: font.secondaryFont,
            marginTop: 0,
          }}
        >
          verification code on the email to reset{" "}
        </Text>
        <Text
          style={{
            justifyContent: "center",
            alignSelf: "center",
            fontSize: font.secondaryFont,
            marginTop: 0,
            marginBottom: "10%",
          }}
        >
          the password
        </Text>

        <View>
          <Text style={customStyles.textInputName}>Email</Text>
          <View style={customStyles.textInputIcon}>{ionicons.email}</View>
          <TextInput
            style={customStyles.textInput}
            underlineColorAndroid={colors.gray}
            onChangeText={(event) => textEmailChange(event)}
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

          <View>
            <TouchableOpacity style={customStyles.button} onPress={onSubmit}>
              <Text style={customStyles.primaryButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

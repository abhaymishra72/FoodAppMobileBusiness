import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import {
  font,
  colors,
  images,
  customStyles,
  ionicons,
  icons,
} from "../constants/styles";
import axios from "axios";
import { BASE_URL } from "../constants/config";
import CheckBox from "@react-native-community/checkbox";

import { getData, storeData } from "../component/asyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = ({ route, navigation }) => {
  const [id, setId] = React.useState(JSON.parse(route.params.user)._id);
  const [email, setEmail] = React.useState(JSON.parse(route.params.user).email);
  const [name, setName] = React.useState(JSON.parse(route.params.user).name);
  const [mobile, setMobile] = React.useState(
    JSON.stringify(JSON.parse(route.params.user).mobile)
  );
  const [address, setAddress] = React.useState(
    JSON.parse(route.params.user).address
  );
  const [password, setPassword] = React.useState("");
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);

  const [data, setData] = React.useState({
    isEmailEmpty: false,
    isNameEmpty: false,
    isAddressEmpty: false,
    isMobileEmpty: false,
    isPasswordEmpty: false,
  });
  const [focus, setOnFocus] = React.useState({
    emailFocus: false,
    nameFocus: false,
    mobileFocus: false,
    addressFocus: false,
    passwordFocus: false,
  });

  const textNameChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        isNameEmpty: false,
      });

      setName(e);
    } else {
      setData({
        isNameEmpty: true,
      });
    }
  };

  const textMobileChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        isMobileEmpty: false,
      });

      setMobile(e);
    } else {
      setData({
        isMobileEmpty: true,
      });
    }
  };

  const textAddressChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        isAddressEmpty: false,
      });

      setAddress(e);
    } else {
      setData({
        isAddressEmpty: true,
      });
    }
  };

  const textEmailChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        isEmailEmpty: false,
      });

      setEmail(e);

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
        isEmailEmpty: true,
      });
    }
  };

  const textPasswordChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        isPasswordEmpty: false,
      });

      if (e.length != 0 && e.length > 4) {
        setIsValidPassword(false);
      } else {
        setIsValidPassword(true);
      }
      setPassword(e);
    } else {
      setData({
        ...data,
        isPasswordEmpty: true,
      });
    }
  };

  const isUpdated = async () => {
    const data = {
      _id: id,
      email,
      name: name,
      address,
      mobile,
      password,
    };
    try {
      await axios
        .post(`${BASE_URL}/users/updateuser`, data)
        .then((response) => {
          if (response.data.success) {
            Alert.alert(
              response.data.success ? "Success" : "Error",
              response.data.message
            );
            navigation.navigate("Profile", { id: id });
          } else {
            Alert.alert(
              response.data.success ? "Success" : "Error",
              response.data.message
            );
          }
        })
        .catch((error) => {
          Alert.alert(
            response.data.success ? "Success" : "Error",
            response.data.message
            //[{ text: "OK", onPress: this.onDeleteBTN }]
          );
        });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={customStyles.container}>
      <ScrollView>
        <View
          style={{
            marginTop: "0%",
          }}
        >
          <View style={{ backgroundColor: "#fff" }}>
            <TouchableOpacity
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                marginTop: 20,
                marginBottom: 40,
                marginLeft: 8,
              }}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <Image
                style={{ height: 25, width: 25, marginRight: 10 }}
                source={icons.back}
              />

              <Text style={{ fontSize: font.primaryFont }}>Profile</Text>
            </TouchableOpacity>
          </View>
          <Text style={customStyles.logoText}>Edit Profile</Text>
          <Text style={customStyles.textInputName}>Name</Text>
          <View style={customStyles.textInputIcon}>{ionicons.user}</View>
          {focus.nameFocus == false ? (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={name}
              onFocus={() =>
                setOnFocus({
                  ...focus,
                  nameFocus: true,
                })
              }
            />
          ) : (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              onChangeText={(event) => textNameChange(event)}
            />
          )}

          {data.isNameEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Name should not be empty.
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Email</Text>
          <View style={customStyles.textInputIcon}>{ionicons.email}</View>
          {focus.emailFocus == false ? (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={email}
              onFocus={() =>
                setOnFocus({
                  ...focus,
                  emailFocus: true,
                })
              }
            />
          ) : (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              onChangeText={(event) => textEmailChange(event)}
            />
          )}

          {data.isEmailEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Email should not be empty.
            </Text>
          ) : !isValidEmail ? null : (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Email is not valid.
            </Text>
          )}

          <Text style={customStyles.textInputName}>Mobile</Text>
          <View style={customStyles.textInputIcon}>{ionicons.mobile}</View>

          {focus.mobileFocus == false ? (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={mobile}
              onFocus={() =>
                setOnFocus({
                  ...focus,
                  mobileFocus: true,
                })
              }
            />
          ) : (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              onChangeText={(event) => textMobileChange(event)}
            />
          )}

          {data.isMobileEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Mobile should not be empty.
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Address</Text>
          <View style={customStyles.textInputIcon}>{ionicons.address}</View>

          {focus.addressFocus == false ? (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={address}
              onFocus={() =>
                setOnFocus({
                  ...focus,
                  addressFocus: true,
                })
              }
            />
          ) : (
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              onChangeText={(event) => textAddressChange(event)}
            />
          )}

          {data.isAddressEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Address should not be empty.
            </Text>
          ) : null}

          <View style={{ marginLeft: 40, marginTop: 15, flexDirection: "row" }}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={{ fontSize: font.secondaryFont, marginTop: 5 }}>
              Want to update password?
            </Text>
          </View>

          {toggleCheckBox && (
            <>
              <Text style={customStyles.textInputName}>New Password</Text>
              <View style={customStyles.textInputIcon}>
                {ionicons.password}
              </View>
              <TextInput
                style={customStyles.textInput}
                secureTextEntry={true}
                underlineColorAndroid={colors.gray}
                onChangeText={(event) => textPasswordChange(event)}
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
            </>
          )}

          <View style={{ marginTop: 20, marginBottom: "60%" }}>
            <TouchableOpacity style={customStyles.button} onPress={isUpdated}>
              <Text style={customStyles.primaryButtonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

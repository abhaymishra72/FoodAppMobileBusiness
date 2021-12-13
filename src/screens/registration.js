import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import {
  font,
  colors,
  images,
  ionicons,
  customStyles,
} from "../constants/styles";
import { isNotEmpty } from "../validations";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import { BASE_URL } from "../constants/config";

const Registration = ({ navigation }) => {
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isValidPassword, setIsValidPassword] = React.useState(false);
  const [isValidCPassword, setIsValidCPassword] = React.useState(false);

  const [data, setData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    cpassword: "",
    isNameEmpty: false,
    isEmailEmpty: false,
    isMobileEmpty: false,
    isAddressEmpty: false,
    isPasswordEmpty: false,
    isCpasswordEmpty: false,
  });

  const [role, setRole] = React.useState("vendor");

  const [userValue, setUserValue] = React.useState("register-vender");

  const textNameChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        name: e,
        isNameEmpty: false,
      });
    } else {
      setData({
        ...data,
        name: e,
        isNameEmpty: true,
      });
    }
  };

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

  const textMobileChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        mobile: e,
        isMobileEmpty: false,
      });
    } else {
      setData({
        ...data,
        mobile: e,
        isMobileEmpty: true,
      });
    }
  };

  const textAddressChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        address: e,
        isAddressEmpty: false,
      });
    } else {
      setData({
        ...data,
        address: e,
        isAddressEmpty: true,
      });
    }
  };

  const textPasswordChange = (e) => {
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

  const textCpasswordChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        cpassword: e,
        isCpasswordEmpty: false,
      });

      if (e.length != 0 && e.length > 4) {
        setIsValidCPassword(false);
      } else {
        setIsValidCPassword(true);
      }
    } else {
      setData({
        ...data,
        cpassword: e,
        isCpasswordEmpty: true,
      });
    }
  };

  const onSubmit = async () => {

    if (
      data.name == "" &&
      data.email == "" &&
      data.mobile == "" &&
      data.address == "" &&
      data.password == "" &&
      data.cpassword == ""
    ) {
      setData({
        ...data,
        isNameEmpty: true,
        isEmailEmpty: true,
        isMobileEmpty: true,
        isAddressEmpty: true,
        isPasswordEmpty: true,
        isCpasswordEmpty: true,
      });
    } else if (data.name == "") {
      setData({
        ...data,
        isNameEmpty: true,
      });
    } else if (data.email == "") {
      setData({
        ...data,
        isEmailEmpty: true,
      });
    } else if (data.mobile == "") {
      setData({
        ...data,
        isMobileEmpty: true,
      });
    } else if (data.address == "") {
      setData({
        ...data,
        isAddressEmpty: true,
      });
    } else if (data.password == "") {
      setData({
        ...data,
        isPasswordEmpty: true,
      });
    } else if (data.cpassword == "") {
      setData({
        ...data,
        isCpasswordEmpty: true,
      });
    } else if (data.password !== data.cpassword) {
      alert("error, password and confirm password are not matched.");
    } else {
      try {
        await axios
          .post(`${BASE_URL}/users/${userValue}`, {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            address: data.address,
            password: data.password,
            role,
          })
          .then((response) => {
              Alert.alert(response.data.message);
            setData({
              ...data,
              name: "",
              email: "",
              mobile: "",
              address: "",
              password: "",
              cpassword: "",
            });
            navigation.navigate("Login");
          })
          .catch((error) => Alert.alert(error.message));
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
            marginTop: "5%",
          }}
        >
          <Image style={customStyles.RegisterPageImage} source={images.logo} />

          <Text style={customStyles.logoText}>Sanaat Bussiness</Text>

          <Text style={customStyles.pageHeadingText}>Sign Up</Text>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{ marginLeft: 40, marginTop: 15, flexDirection: "row" }}
            >
              <RadioButton
                value="vendor"
                status={role === "vendor" ? "checked" : "unchecked"}
                onPress={() => {
                  setRole("vendor");
                }}
              />
              <Text style={{ fontSize: font.secondaryFont, marginTop: 5 }}>
                As Vendor
              </Text>
            </View>

            <View
              style={{ marginLeft: 40, marginTop: 15, flexDirection: "row" }}
            >
              <RadioButton
                value="deliveryman"
                status={role === "deliveryman" ? "checked" : "unchecked"}
                onPress={() => {
                  setRole("deliveryman");
                  setUserValue("register-deliveryman");
                }}
              />
              <Text style={{ fontSize: font.secondaryFont, marginTop: 5 }}>
                As Deliveryman
              </Text>
            </View>
          </View>
          <Text style={customStyles.textInputName}>Name</Text>
          <View style={customStyles.textInputIcon}>{ionicons.user}</View>
          <TextInput
            style={customStyles.textInput}
            underlineColorAndroid={colors.gray}
            value={data.name}
            onChangeText={(text) => textNameChange(text)}
          />

          {data.isNameEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Name should not be empty
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Email</Text>
          <View style={customStyles.textInputIcon}>{ionicons.email}</View>
          <TextInput
            style={customStyles.textInput}
            underlineColorAndroid={colors.gray}
            value={data.email}
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

          <Text style={customStyles.textInputName}>Mobile</Text>
          <View style={customStyles.textInputIcon}>{ionicons.mobile}</View>
          <TextInput
            style={customStyles.textInput}
            underlineColorAndroid={colors.gray}
            keyboardType="number-pad"
            value={data.mobile}
            onChangeText={(text) => textMobileChange(text)}
          />

          {data.isMobileEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Mobile should not be empty
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Address</Text>
          <View style={customStyles.textInputIcon}>{ionicons.address}</View>
          <TextInput
            multiline={true}
            numberOfLines={2}
            style={customStyles.textArea}
            underlineColorAndroid={colors.gray}
            value={data.address}
            onChangeText={(text) => textAddressChange(text)}
          />

          {data.isAddressEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Address should not be empty
            </Text>
          ) : null}
          <Text style={customStyles.textInputName}>Password</Text>
          <View style={customStyles.textInputIcon}>{ionicons.password}</View>
          <TextInput
            style={customStyles.textInput}
            underlineColorAndroid={colors.gray}
            secureTextEntry={true}
            value={data.password}
            onChangeText={(text) => textPasswordChange(text)}
          />

          {data.isPasswordEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Password should not be empty
            </Text>
          ) : !isValidPassword ? null : (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Password should be more than 4 characters.
            </Text>
          )}

          <Text style={customStyles.textInputName}>Confirm Password</Text>
          <View style={customStyles.textInputIcon}>{ionicons.password}</View>
          <TextInput
            style={customStyles.textInput}
            underlineColorAndroid={colors.gray}
            secureTextEntry={true}
            value={data.cpassword}
            onChangeText={(text) => textCpasswordChange(text)}
          />

          {data.isCpasswordEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Confirm password should not be empty
            </Text>
          ) : !isValidCPassword ? null : (
            <Text style={{ marginLeft: 40, color: "red" }}>
              Password should be more than 4 characters.
            </Text>
          )}

          <View>
            <TouchableOpacity style={customStyles.button} onPress={onSubmit}>
              <Text style={customStyles.primaryButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 15,
              marginBottom: 80,
            }}
          >
            <Text style={{ fontSize: font.secondaryFont }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={{ marginBottom: 110 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={{
                  fontSize: font.secondaryFont,
                  color: colors.primary,
                  marginLeft: 10,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;

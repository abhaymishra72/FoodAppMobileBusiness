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

import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getData, storeData } from "../component/asyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../constants/config";

const Profile = ({ navigation }) => {
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [id, setId] = React.useState("");

  const [user, setUser] = React.useState({
    id: "",
    name: " ",
    email: "",
    role: "",
    password: "",
    address: "",
  });

  const isLoggedOut = async () => {
    try {
      await AsyncStorage.clear();

      navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getData("user")
        .then((response) => {
          setUser(response);
          getUserData(JSON.parse(response).id);
          if (!response) {
            console.log(" useFocusEffect response not received");
          }
        })
        .catch((err) => {
          setisLoggedIn(false);
          console.log(err);
        });
    }, [])
  );

  const getUserData = async (id) => {
    if (id != "") {
      try {
        await axios
          .post(`${BASE_URL}/users/getUser`, { _id: id })
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <View style={customStyles.container}>
        <ScrollView>
          <View
            style={{
              marginTop: "10%",
            }}
          >
            <Image style={customStyles.profileImage} source={images.logo} />

            <Text style={customStyles.logoText}>Sanaat Business</Text>

            <Text style={customStyles.editPageHeadingText}>{user.name}</Text>

            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <Text
                style={{
                  marginTop: 1,
                  marginLeft: 5,
                  marginBottom: 20,
                  fontSize: 20,
                }}
              >
                {user.role}
              </Text>
            </View>

            <Text style={customStyles.textInputName}>Name</Text>
            <View style={customStyles.textInputIcon}>{ionicons.user}</View>
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={user.name}
              editable={false}
            />

            <Text style={customStyles.textInputName}>Email</Text>
            <View style={customStyles.textInputIcon}>{ionicons.email}</View>
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={user.email}
              editable={false}
            />

            {/* <Text style={customStyles.textInputName}>Password</Text>
            <View style={customStyles.textInputIcon}>{ionicons.email}</View>
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              secureTextEntry={true}
              value="anil@gmail.coom"
              editable={false}
            /> */}

            <Text style={customStyles.textInputName}>Mobile</Text>
            <View style={customStyles.textInputIcon}>{ionicons.mobile}</View>
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={JSON.stringify(user.mobile)}
              editable={false}
            />

            <Text style={customStyles.textInputName}>Address</Text>
            <View style={customStyles.textInputIcon}>{ionicons.address}</View>
            <TextInput
              style={customStyles.textInput}
              underlineColorAndroid={colors.gray}
              value={user.address}
              editable={false}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 5,
              }}
            >
              <Text style={{ fontSize: font.secondaryFont }}>
                To edit your profile?
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("EditProfile", {
                    user: JSON.stringify(user),
                  })
                }
              >
                <Text
                  style={{
                    fontSize: font.secondaryFont,
                    color: colors.primary,
                    marginLeft: 10,
                  }}
                >
                  Click here
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 1, marginBottom: "40%" }}>
              <TouchableOpacity
                style={customStyles.button}
                onPress={isLoggedOut}
              >
                <Text style={customStyles.primaryButtonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Profile;

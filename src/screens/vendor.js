import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import ButtonComponent from "../component/button";
import { colors, font, icons, images, customStyles } from "../constants/styles";
import { getData, storeData } from "../component/asyncStorage";

const Vendor = ({ navigation }) => {
  const [role, setRole] = React.useState("");

  React.useEffect(() => {
    getData("role")
      .then((response) => setRole(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          margin: 20,
        }}
      >
        <Text style={{ fontSize: font.bold }}>SANAAT</Text>
        <Image
          style={{ height: 50, width: 50, borderRadius: 40 }}
          source={images.logo}
        />
      </View>
      {role == "vendor" ? (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "20%",
          }}
        >
          <Text style={{ fontSize: font.bold }}>Welcome Vendor</Text>
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "20%",
          }}
        >
          <Text style={{ fontSize: font.bold }}>Welcome Deliveryman</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Vendor;

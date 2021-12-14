import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const AddNewMenu = ({ navigation }) => {
  const [Enable, setEnable] = useState("foodcategory");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainText}>Add/ Edit Food Screen</Text>
      </View>
      <View style={styles.border}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Food 1 Title"
            value={title}
            onChangeText={(title) => setTitle(title)}
            placeholderTextColor="#9b9b9b"
          />
        </View>
        <View style={styles.inputView}>
          <Picker
            selectedValue={Enable}
            style={styles.TextInput}
            mode={"dialog"}
            onValueChange={(itemValue) => setEnable(itemValue)}
          >
            <Picker.Item label="food category" value="foodcategory" />
            <Picker.Item label="veg" value="veg" />
            <Picker.Item label="nonveg " value="nonveg" />
          </Picker>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Available Quantity"
            placeholderTextColor="#9b9b9b"
            value={quantity}
            onChangeText={(quantity) => setQuantity(quantity)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Food 1 Details"
            placeholderTextColor="#9b9b9b"
            value={details}
            onChangeText={(details) => setDetails(details)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Price"
            placeholderTextColor="#9b9b9b"
            value={price}
            onChangeText={(price) => setPrice(price)}
          />
        </View>
      </View>
      <View>
        <Text style={{ marginTop: 10 }}> Status: Saved </Text>
      </View>

      <View style={styles.buttonview}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Vendor")}
        >
          <Text style={{ color: "white" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={{ color: "white" }}>Publish</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddNewMenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  mainText: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: 25,
  },
  inputView: {
    // width: "55%",
    height: 60,
    marginBottom: 20,
    borderRadius: 10,
    marginBottom: 5,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",

    flexDirection: "row",
    height: 30,
    width: 70,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "space-around",
    marginRight: 20,
    backgroundColor: "tomato",
  },
  buttonview: {
    marginTop: 50,
    flexDirection: "row",
  },
  TextInput: {
    height: 40,

    textAlign: "center",
    marginTop: 20,
    //alignItems:'center',
    alignSelf: "center",
    justifyContent: "center",
    width: "70%",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ff751a",
    justifyContent: "center",
  },
  border: {
    marginTop: 60,
    width: 300,
    height: 350,
    //border:20,
    borderWidth: 1,
    borderColor: "#ff751a",
  },
});

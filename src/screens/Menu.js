import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Switch,
} from "react-native";
import {
  font,
  colors,
  images,
  customStyles,
  ionicons,
  icons,
} from "../constants/styles";
import { Picker } from "@react-native-picker/picker";
import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import axios from "axios";
import { BASE_URL } from "../constants/config";

const AddNewMenu = ({ navigation }) => {
  

  const [isModalVisible, setModalVisible] = useState(false);
  const [foodcategory, setFoodCategory] = useState();


  const [isToggleEnabled, setIsToggleEnabled] = useState(false);

  const toggleSwitch = () =>
    setIsToggleEnabled((previousState) => !previousState);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const foodimages = () => {
  //   console.log("Choose Photo");
  //   ImagePicker.openPicker({
  //     multiple: true,
  //   }).then((images) => {
  //     console.log(images);
  //   });
  // };
  

  return (
    <SafeAreaView style={customStyles.container}>
      <ScrollView>
        <View
          style={{
            marginTop: "6%",
          }}
        >
          <Text style={customStyles.logoText}>Add Food Screen</Text>

          <View style={{ marginBottom: -8 }}></View>
          <Text style={customStyles.textInputName}>Food Title:</Text>
          {/* <View style={{marginTop:-20}}></View> */}
          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}
          //   value={data.title}
          // onChangeText={(text) => textTitleChange(text)}
            
          />

          <Text style={customStyles.textInputName}>Food Category</Text>
          <View style={customStyles.pickerBorder}>
            <Picker
              selectedValue={foodcategory}
              // style={customStyles.picker}
              mode={"dropdown"}
              onValueChange={(foodcategory) => setFoodCategory(foodcategory)}
            >
              <Picker.Item label="food category" value="foodcategory" />
              <Picker.Item label="Chinese" value="chinese" />
              <Picker.Item label="south indian " value="southindian" />
            </Picker>
          </View>

          <View style={customStyles.addcategory}>
            <TouchableOpacity onPress={toggleModal}>
              <Text
                style={{ fontSize: 20, borderRadius: 1, borderColor: "gray" }}
              >
                +
              </Text>
              <View>
        
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 10 }}></View>
          <Text style={customStyles.textInputName}>Available Quantity</Text>

          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}
           
          //   value={data.quantity}
          //  onChangeText={(text) => quantitychange(text)}
          />

          <Text style={customStyles.textInputName}>Food Details</Text>
          <View style={{ marginTop: -15 }}></View>
          <ScrollView>
            <TextInput
              multiline={true}
              numberOfLines={10}
              
              style={customStyles.textArea1}
              underlineColorAndroid={colors.gray}
              // value={data.details}
              // onChangeText={(text) => detailschange(text)}
            />
          </ScrollView>

          <Text style={customStyles.textInputName}>Price</Text>

          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}   
            keyboardType="number-pad"         
            // value={data.price}
            // onChangeText={(text) => pricechange(text)}
          />
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => foodimages()}>
              <Text
                style={{
                  alignContent: "center",
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 8,
                  backgroundColor: "#ebebeb",
                  borderColor: "#ebebeb",
                }}
              >
                {ionicons.folder} Upload Food Images
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ marginTop: 10, marginLeft: 40 }}>
              Status: Saved
            </Text>
          </View>

          <View style={customStyles.cancelbutton}>
            <TouchableOpacity
              style={customStyles.cancel}
              //onPress={() => cancel()}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={customStyles.savebutton}>
            <TouchableOpacity
              style={customStyles.save}
             // onPress={onSave}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          ><Text
          style={{
            textAlign: "center",
            paddingTop:9,
            marginTop: -10,
            marginLeft: -20,
            fontWeight: "bold",
          }}
        >
          Publish
        </Text>
            <Switch
             style={{marginTop: -24,marginLeft:70 }}
              trackColor={{ false: "#767577", true: "#4ebf40" }}
              thumbColor={isToggleEnabled ? "#4ebf40" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isToggleEnabled}
            />
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewMenu;

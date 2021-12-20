import React, { useState, useEffect } from "react";
import { Text,  View,  SafeAreaView,  TextInput,  TouchableOpacity, ScrollView, Button,  Switch,} from "react-native";
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
  
const [data, setData] = React.useState({
    name: "",
    foodcategory: "",
    quantity: "",
    details: "",
    price: "",
    published: "",
    isNameEmpty:false,
    isFoodCategoryEmpty: false,
   isQuantityEmpty: false,
    isDetailsEmpty: false,
    isPriceEmpty: false,
    isPublishedEmpty: false,

   
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [foodcategory, setFoodCategory] = useState("foodcategory");
  const [published, setPublished] = useState(true);

  const isPublished = () =>
    setPublished((previousState) => !previousState);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const textNameChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        name: e,
        isNameEmpty:false,
       });
    } else {
      setData({
        ...data,
        name: e,
        isNameEmpty:true,
      });
    }
  };
  const foodcategorychange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        foodcategory: e, 
        isFoodCategoryEmpty:false       
      });
    } else {
      setData({
        ...data,
        foodcategory: e,  
        isFoodCategoryEmpty:true      
      });
    }
  };
  const quantitychange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        quantity: e, 
        isQuantityEmpty:false       
      });
    } else {
      setData({
        ...data,
        quantity: e,  
        isQuantityEmpty:true      
      });
    }
  };
  const detailschange = (e) => {
    if (e.length !== 0) {
      setData({
        ...data,
        details: e, 
        isDetailsEmpty:false,       
      });
    } else {
      setData({
        ...data,
        details: e,  
        isDetailsEmpty:true      
      });
    }
  };
  const pricechange = (e) => {
    if (e.length !== 0) {
      setData({
        ...data,
        price: e,      
        isPriceEmpty:false,  
      });
    } else {
      setData({
        ...data,
        price: e,    
        isPriceEmpty:true,     
      });
    }
  };
  // const isPublished = (e) => {
  //   if (e.length !== 0) {
  //     setData({
  //       ...data,
  //       price: e,      
  //       isPublishedEmpty:false,  
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       price: e,    
  //       isPublishedEmpty:true,     
  //     });
  //   }
  // };
  // const foodimages = () => {
  //   console.log("Choose Photo");
  //   ImagePicker.openPicker({
  //     multiple: true,
  //   }).then((images) => {
  //     console.log(images);
  //   });
  // };
  
  
  const onSave = async () => {
    if (
      data.name == "" &&
     data.foodcategory == "" &&
      data.quantity == "" &&
      data.details == "" &&
      data.price == "" &&
      data.published == ""
    ) {
      setData({
        ...data,
        isNameEmpty:true,
        isFoodCategoryEmpty: true,
        isQuantityEmpty: true,
        isDetailsEmpty: true,
        isPriceEmpty: true,
        isPublishedEmpty: true,
    
      });
    } else if (data.name == "") {
      setData({
        ...data,
        isNameEmpty: true,
      });
    } else if (data.foodcategory == "") {
      setData({
        ...data,
        isFoodCategoryEmpty: true,
      });
    } else if (data.quantity == "") {
      setData({
        ...data,
        isQuantityEmpty: true,
      });
    } else if (data.details == "") {
      setData({
        ...data,
        isDetailsEmpty: true,
      });
    } else if (data.price == "") {
      setData({
        ...data,
        isPriceEmpty: true,
      });
    } else if (data.published == "") {
      setData({
        ...data,
        isPublishedEmpty: true,
      });
    } 
    else {
    try {
      await axios
        .post(`${BASE_URL}/food/food-add`, {
          name: data.name,
          foodcategory: data.foodcategory,
          quantity: data.quantity,
          details: data.details,
          price: data.price,
          published: data.published,
        })
        .then((response) => {
          Alert.alert(response.data.message);
          setData({
            ...data,
            name: "",
            foodcategory: "",
            quantity: "",
            details: "",
            price: "",
            published: "",
          });
          navigation.navigate("Menu");
        })
        .catch((error) => Alert.alert(error.message));
    } catch (error) {
      console.log(error);
    }
    console.log(data)
  };
}
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
            value={data.name}
          onChangeText={(text) => textNameChange(text)}
            
          />
 {data.isNameEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" ,width:350}}>
              Name should not be empty
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Food Category</Text>
          <View style={customStyles.pickerBorder}>
            <Picker
              selectedValue={foodcategory}
              style={{marginTop:0}}
              mode={"dropdown"}
              onValueChange={(itemValue) => setFoodCategory(itemValue)}
            >
              <Picker.Item label="food category" value="food category" />
              <Picker.Item label="Chinese" value="chinese" />
              <Picker.Item label="south indian " value="south indian" />
            </Picker>
            {/* {data.isFoodCategoryEmpty ? (
            <Text style={{ marginLeft: 40, color: "red", }}>
              Food Category should not be empty
            </Text>
          ) : null} */}
          </View>

          <View style={customStyles.addcategory}>
            <TouchableOpacity onPress={toggleModal}>
              <Text
                style={{ fontSize: 20, borderRadius: 1, borderColor: "gray" }}
              >
                +
              </Text>
              <View>
                <Modal
                  style={customStyles.modal}
                  isVisible={isModalVisible}
                  transparent={true}
                >
                  
                  <View>
                    <View>
                      <Text
                        style={{
                          color: "black",
                          marginLeft: 30,
                          marginTop: -220,
                        }}
                      >
                       
                        Category Name:
                      </Text>
                      <TextInput
                        style={{
                          borderBottomWidth: 1,
                          marginLeft: 30,
                          marginTop: 8,
                          height: 40,
                          width:'80%',
                          color: "black",
                        }}
                      ></TextInput>
                    </View>
                    <View style={customStyles.cancelbutton}>
                    <TouchableOpacity
                      onPress={toggleModal}
                      style={customStyles.cancelbuttonaddcategoryText}
                    >
                      <Text style={{ color: "white", fontWeight: "bold",alignSelf:'center' }}>
                        Cancel
                      </Text>

                    </TouchableOpacity>
                    </View>
                    <View style={customStyles.publishbutton}>
                      <TouchableOpacity
                        style={customStyles.addcategorybuttontext}
                        onPress={toggleModal}
                      >
                        <Text style={{ color: "white", fontWeight: "bold" }}>
                          
                          Add Category
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 22 }}></View>
          <Text style={customStyles.textInputName}>Available Quantity</Text>

          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}
           
            value={data.quantity}
           onChangeText={(text) => quantitychange(text)}
          />
{data.isQuantityEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" ,width:350}}>
              Food Quantity should not be empty
            </Text>
          ) : null}
          <Text style={customStyles.textInputName}>Food Details</Text>
          <View style={{ marginTop: -15 }}></View>
          <ScrollView>
            <TextInput
              multiline={true}
              numberOfLines={10}
              
              style={customStyles.textArea1}
              underlineColorAndroid={colors.gray}
              value={data.details}
              onChangeText={(text) => detailschange(text)}
            />
          </ScrollView>{data.isDetailsEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" ,width:350}}>
              Food details should not be empty
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Price</Text>

          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}   
            keyboardType="number-pad"         
            value={data.price}
            onChangeText={(text) => pricechange(text)}
          />
          {data.isPriceEmpty ? (
            <Text style={{ marginLeft: 40, color: "red" ,width:350}}>
              Food Price should not be empty
            </Text>
          ) : null}
          {/* <View style={{ alignItems: "center" }}>
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
          </View> */}
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
             onPress={onSave}
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
             style={{marginTop: -24,marginLeft:80 }}
              trackColor={{ false: "#767577", true: "#4ebf40" }}
              thumbColor={published ? "#4ebf40" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={isPublished}
              value={published}
            />
           
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewMenu;

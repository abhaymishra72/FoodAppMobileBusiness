import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import { colors, customStyles, ionicons, icons } from "../constants/styles";
import { Picker } from "@react-native-picker/picker";
import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import axios from "axios";
import { BASE_URL } from "../constants/config";
import { Route } from "@react-navigation/native";
import { getData, storeData } from "../component/asyncStorage";
import { useFocusEffect } from "@react-navigation/native";

var foodcategoryData = [];
let idData = "";
let foodCategoryMap ;
const AddNewMenu = ({ route, navigation }) => {
  //let {id}=route.params;
  const [id, setId] = useState();

  useFocusEffect(
    React.useCallback(() => {
      getData("user")
        .then((response) => {
          idData = JSON.parse(response).id;
          setId(JSON.parse(response).id);

          //  onSave(JSON.parse(response).id);
          if (!response) {
            console.log(" useFocusEffect response not received");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      try {
        axios
          .get(`${BASE_URL}/category/newCategory`)
          .then((response) => {
            console.log(response.data, "line48");
            setFoodCategory([...foodcategory, response.data]);
             foodCategoryMap =  response.data.map((item, index) => {
              return (
              <Picker.Item key={index} label={item.categoryName} value={item.categoryName}/>
              )
            });
          })
          .catch((error) => console.log("error---", error.message));
      } catch (error) {
        console.log(error.message);
      }
    }, [])
  );
  //console.log(foodcategory,"food cate")
  //console.log(idData,"myid");
  const [data, setData] = React.useState({
    name: "",
    foodcategory: "",
    quantity: "",
    details: "",
    price: "",
    //published: "",
    isNameEmpty: false,
    isFoodCategoryEmpty: false,
    isQuantityEmpty: false,
    isDetailsEmpty: false,
    isPriceEmpty: false,
    isPublished: true,
  });
  const [selectedValue, setSelectedValue] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [foodcategory, setFoodCategory] = useState([{}]);
  const [published, setPublished] = useState(false);
  const [newcategory, setNewCategory] = useState({
    categoryName: "",
    iscategoryNameEmpty: false,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  const quantitychange = (e) => {
    if (e.length !== 0) {
      setData({
        ...data,
        quantity: e,
        isQuantityEmpty: false,
      });
    } else {
      setData({
        ...data,
        quantity: e,
        isQuantityEmpty: true,
      });
    }
  };
  const detailschange = (e) => {
    if (e.length !== 0) {
      setData({
        ...data,
        details: e,
        isDetailsEmpty: false,
      });
    } else {
      setData({
        ...data,
        details: e,
        isDetailsEmpty: true,
      });
    }
  };
  const pricechange = (e) => {
    if (e.length !== 0) {
      setData({
        ...data,
        price: e,
        isPriceEmpty: false,
      });
    } else {
      setData({
        ...data,
        price: e,
        isPriceEmpty: true,
      });
    }
  };

  const textCategoryNameChange = (e) => {
    if (e.length != 0) {
      setNewCategory({
        ...newcategory,
        categoryName: e,
        iscategoryNameEmpty: false,
      });
    } else {
      setNewCategory({
        ...newcategory,
        categoryName: e,
        iscategoryNameEmpty: true,
      });
    }
  };

  const foodimages = async () => {
    console.log("Choose Photo");
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      console.log(images);
    });

    await axios.post(`${BASE_URL}/files/uploadFile`, {});
  };

  // const onCancel=()=>{

  // }
  const addCategoryButton = async () => {
    if (newcategory.categoryName == "") {
      //  console.log("inside add category");
      setNewCategory({
        ...newcategory,
        iscategoryNameEmpty: true,
      });
    } else {
      try {
        console.log("line 176", newcategory, BASE_URL);
        await axios
          .post(`${BASE_URL}/category/newCategory`, newcategory)
          .then((response) => {
            console.log("line 180", response.data);
            Alert.alert("Success", response.data.message);
            // setData({
            //   ...data,
            //   // categoryName: "",
            // });
            // navigation.navigate("Menu");
          })
          .catch((error) => Alert.alert("Error", error.message));
      } catch (error) {
        console.log("line 190", error.message);
      }
    }
  };

  const onSave = async (id) => {
    if (
      data.name == "" &&
      foodcategory == "" &&
      data.quantity == "" &&
      data.details == "" &&
      data.price == ""
      // data.published == ""
    ) {
      setData({
        ...data,
        // id,
        isNameEmpty: true,
        // isFoodCategoryEmpty: true,
        isQuantityEmpty: true,
        isDetailsEmpty: true,
        isPriceEmpty: true,
        isPublished: false,
      });
    } else if (data.name == "") {
      setData({
        ...data,
        isNameEmpty: true,
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
    } else {
      console.log("line 201", data);
      //console.log("publish", published);
      //let pubData=published;
      try {
        await axios
          .post(`${BASE_URL}/food/foodAdd`, {
            restaurantId: idData,
            name: data.name,
            categoryName: newcategory.categoryName,
            quantity: data.quantity,
            details: data.details,
            price: data.price,
            published: published,
          })
          .then((response) => {
            Alert.alert(response.data.message);
            setData({
              ...data,
              restaurantId: "",
              name: "",
              categoryName: "",
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
    }
  };
  console.log(foodcategory, "food line 295");
  //console.log("publish", published);
 

  
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
            <Text style={{ marginLeft: 40, color: "red", width: 350 }}>
              Food Title should not be empty
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Food Category</Text>
          <View>
            <Text>{ (foodCategoryMap)}</Text>
            {/* <Picker
 onValueChange={(itemValue) => setSelectedValue(itemValue)}
  style={{flex:1}} >
  <Picker.Item label="Location 1" value="1" /> 
  <Picker.Item label="Location 2" value="2" />
  <Picker.Item label="Location 3" value="3" />

</Picker> */}

            <Picker
              style={{ flex: 1, width: 100 }}
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              {foodCategoryMap}
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
                          width: "80%",
                          color: "black",
                        }}
                        value={newcategory.categoryName}
                        onChangeText={(text) => textCategoryNameChange(text)}
                      ></TextInput>
                    </View>
                    <View style={customStyles.cancelbutton}>
                      <TouchableOpacity
                        onPress={toggleModal}
                        style={customStyles.cancelbuttonaddcategoryText}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            alignSelf: "center",
                          }}
                        >
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={customStyles.publishbutton}>
                      <TouchableOpacity
                        style={customStyles.addcategorybuttontext}
                        onPress={() => addCategoryButton()}
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
            keyboardType="number-pad"
            value={data.quantity}
            onChangeText={(text) => quantitychange(text)}
          />
          {data.isQuantityEmpty ? (
            <Text style={{ marginLeft: 40, color: "red", width: 350 }}>
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
          </ScrollView>
          {data.isDetailsEmpty ? (
            <Text style={{ marginLeft: 40, color: "red", width: 350 }}>
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
            <Text style={{ marginLeft: 40, color: "red", width: 350 }}>
              Food Price should not be empty
            </Text>
          ) : null}
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
            <Text style={{ marginTop: 10, marginLeft: 40 }}>Status: Saved</Text>
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
            <TouchableOpacity style={customStyles.save} onPress={onSave}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Switch
              style={{ marginTop: -5, marginLeft: 70 }}
              onValueChange={() => setPublished(!published)}
              value={published}
              trackColor={{ false: "#767577", true: "#4ebf40" }}
              thumbColor={published ? "#4ebf40" : "#f4f3f4"}
            />
            {published == false ? (
              <View style={{ borderRadius: 5, padding: 10 }}>
                <Text
                  style={{
                    //textAlign: "center",
                    paddingTop: 5,
                    marginTop: -40,
                    marginLeft: -60,
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Publish
                </Text>
              </View>
            ) : (
              <View style={{ borderRadius: 5, padding: 5 }}>
                <Text
                  style={{
                    textAlign: "center",
                    paddingTop: 5,
                    marginTop: -35,
                    marginLeft: -60,
                    fontWeight: "bold",
                  }}
                >
                  Publish On
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewMenu;

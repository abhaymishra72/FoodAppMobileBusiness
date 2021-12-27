import React, { useState,useEffect } from "react";
import { Text,  View,  SafeAreaView,  TextInput,  TouchableOpacity, ScrollView, Switch,Alert} from "react-native";
import {colors,customStyles,ionicons,icons} from "../constants/styles";
import { Picker } from "@react-native-picker/picker";
import ImagePicker from "react-native-image-crop-picker";
import Modal from "react-native-modal";
import axios from "axios";
import { BASE_URL } from "../constants/config";
import { Route } from "@react-navigation/native";
import { getData, storeData } from "../component/asyncStorage";

let idData="";
const AddNewMenu = ({route,navigation}) => {
  //let {id}=route.params;
  const[id,setId]=useState();
  
  useEffect(
    React.useCallback(() => {
      
      getData("user")
        .then((response) => {
         
          idData=JSON.parse(response).id;
          setId(JSON.parse(response).id);
         
     //  onSave(JSON.parse(response).id);
          if (!response) {
            console.log(" useFocusEffect response not received");
          }
        })
        .catch((err) => {
         
          console.log(err);
        });
     addCategoryButton()
    }, [])
  );
//console.log(idData,"myid");

const [data, setData] = React.useState({
  // id:"",
    name: "",
    foodcategory: "",
    quantity: "",
    details: "",
    price: "",
   published: "",
  //  categoryName:"",
  //   isNameEmpty:false,
  //  isFoodCategoryEmpty: false,
  //  isQuantityEmpty: false,
  //   isDetailsEmpty: false,
  //   isPriceEmpty: false,
   isPublished: false, 
  //   iscategoryNameEmpty:"false"  
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [foodcategory, setFoodCategory] = useState("foodcategory");
  const [published, setPublished] = useState(initialValue);
//const[addnewcategory, setAddNewCategory]=useState('');
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
 
  const quantitychange = (e) => {
    if (e.length !== 0) {
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


  const textCategoryNameChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        categoryName: e,
        iscategoryNameEmpty:false,
       });
    } else {
      setData({
        ...data,
        categoryName: e,
        iscategoryNameEmpty:true,
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

    await axios
    .post(`${BASE_URL}/files/uploadFile`, {
     
    })
  };
  
  // const onCancel=()=>{

  // }
  const addCategoryButton = async () => {
    if (
      data.categoryName == "" 
         ) {
      setData({
        ...data,
        iscategoryNameEmpty: true,
        
      });
    } else if (data.name == "") {
      setData({
        ...data,
        isNameEmpty: true,
      });
    } 
    else {
      try {
        await axios
          .post(`${BASE_URL}/category/newCategory}`)
          .then((response) => {
            console.log(response.data);
              Alert.alert(response.data.message);
            setData({
              ...data,
             // categoryName: "",
              
            });
            navigation.navigate("Menu");
          })
          .catch((error) => Alert.alert(error.message));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSave = async (id) => {
    if (
     // id="" &&
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
        isNameEmpty:true,
       // isFoodCategoryEmpty: true,
        isQuantityEmpty: true,
        isDetailsEmpty: true,
        isPriceEmpty: true,
        //isPublishedEmpty: true,
    
      });
      
    } else if (data.name == "") {
      setData({
        ...data,
        isNameEmpty: true,
      });
    } 
   
     else if (data.quantity == "") {
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
    } 
   
    else {
      console.log("line 201", data)
    try {
      await axios
        .post(`${BASE_URL}/food/foodAdd`, {
          restaurantId: idData ,
          name: data.name,
          CategoryName: setFoodCategory,
          quantity: data.quantity,
          details: data.details,
          price: data.price,
         published:setPublished,
        })
        .then((response) => {
          Alert.alert(response.data.message);
          setData({
            ...data,
          restaurantId:"",
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
              Food Title should not be empty
            </Text>
          ) : null}

          <Text style={customStyles.textInputName}>Food Category</Text>
          <View style={customStyles.pickerBorder}>
            <Picker

              selectedValue={foodcategory}
              style={{marginTop:0}}
              mode={"dropdown"}
              onValueChange={(foodcategory) => setFoodCategory(foodcategory)}
            >
              <Picker.Item label="food category" value="food category" />
              <Picker.Item label="Chinese" value="chinese" />
              <Picker.Item label="south indian " value="south indian" />
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
                          width:'80%',
                          color: "black",
                        }}
                        value={data.categoryName}
                        onChangeText={(text)=>textCategoryNameChange(text)}
                      >
                        
                      </TextInput>
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
                        onPress={addCategoryButton}
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
          style={{ textAlign:"center",paddingTop:9,marginTop: -10,marginLeft: -20,fontWeight: "bold"}}
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

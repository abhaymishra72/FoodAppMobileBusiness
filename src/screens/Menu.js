import React, { useState, useEffect } from "react";
import {Text, View, SafeAreaView, TextInput,  StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import {font,colors,images,customStyles,ionicons, icons, } from "../constants/styles";
import { Picker } from "@react-native-picker/picker";
import ImagePicker from 'react-native-image-crop-picker';

const AddNewMenu = ({ navigation }) => {
  const [Enable, setEnable] = useState("foodcategory");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");

  const foodimages = () => {
    console.log('Choose Photo');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
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

         <View style={{marginBottom:-8}}></View>
          <Text style={customStyles.textInputName}>Food  Title:</Text>
          {/* <View style={{marginTop:-20}}></View> */}
          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}
            
          />


          <Text style={customStyles.textInputName}>Food Category</Text>
         <View style={customStyles.pickerBorder}>
          
          <Picker
          
                  selectedValue={Enable}
                 // style={customStyles.picker}
                  mode={"dropdown"}
                  onValueChange={(itemValue) => setEnable(itemValue)}
                >
                  <Picker.Item  label="food category" value="foodcategory" />
                  <Picker.Item label="Chinese" value="chinese" />
                  <Picker.Item label="south indian " value="southindian" />
                </Picker>
                </View>

              <View style={customStyles.addcategory}><TouchableOpacity><Text style={{fontSize:20, borderRadius:1, borderColor:'gray'}} >+</Text></TouchableOpacity></View>
              <View style={{marginTop:10}}></View>
          <Text style={customStyles.textInputName}>Available Quantity</Text>
         
          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}
            keyboardType="number-pad"
            value={quantity}
            onChangeText={(quantity) => setQuantity(quantity)}
                    />

         
          <Text style={customStyles.textInputName}>Food Details</Text>
          <View style={{marginTop:-15}}></View>
         <ScrollView>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={customStyles.textArea1}
            underlineColorAndroid={colors.gray}
            value={details}
            onChangeText={(details) => setDetails(details)}
            
          />
</ScrollView>
         
          <Text style={customStyles.textInputName}>Price</Text>
         
          <TextInput
            style={customStyles.textInputfoodadd}
            underlineColorAndroid={colors.gray}
            secureTextEntry={true}
            value={price}
            onChangeText={(price) => setPrice(price)}
          />
                   <View style={{alignItems:'center'}}><TouchableOpacity
                   onPress={()=>foodimages()}>
                   <Text style={{alignContent:'center', borderWidth:1,padding:5,borderRadius:8,backgroundColor:'#ebebeb',borderColor:'#ebebeb'}} >{ionicons.folder
}  Upload Food Images</Text></TouchableOpacity></View>
         <View>
        <Text style={{ marginTop: 10, marginLeft:40 }}> Status: Saved </Text>
      </View>
         
      <View style={customStyles.cancelbutton}>
        <TouchableOpacity
          style={customStyles.cancel}
          onPress={() => navigation.navigate("Vendor")}
        >
          
          <Text style={{ color: "white" }}>Cancel</Text>
        </TouchableOpacity>
        </View>

        <View style={customStyles.savebutton}>

        <TouchableOpacity
          style={customStyles.save}
          onPress={() => navigation.navigate("ResetPassword")}
        >
          <Text style={{ color: "white" }}>Save</Text>
          
        </TouchableOpacity>
        </View>
        <View style={customStyles.publishbutton}>
        <TouchableOpacity
          style={customStyles.publish}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={{ color: "white" }}>Publish</Text>
          </TouchableOpacity>

         
        </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
      

};

export default AddNewMenu;

  
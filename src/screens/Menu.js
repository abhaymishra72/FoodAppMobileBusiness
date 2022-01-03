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
import {
  colors,
  customStyles,
  ionicons,
  icons,
  font,
} from "../constants/styles";

import { BASE_URL } from "../constants/config";
import { Route } from "@react-navigation/native";
import { getData, storeData } from "../component/asyncStorage";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

const Menu = ({ route, navigation }) => {
  const [data, setData] = useState([]);

  const [id, setId] = useState("61b83c8b101ce534a40f3160");
  let IdData = "";
  useFocusEffect(
    React.useCallback(() => {
      getData("user").then((response) => {
        console.log("res", response);

        IdData = JSON.parse(response).id;
        console.log(IdData);

        if (!response) {
          console.log(" useFocusEffect response not received");
        }
      });
      //  console.log(" my id", id)
      //     // console.log("inside Use", BASE_URL);

      try {
        axios
          .get(`${BASE_URL}/food/getFoodMenu/${id}`)

          .then((response) => {
            console.log(response.data);

            if (response.data) {
              setData(response.data);
            }
          })
          .catch((error) => console.log("error---", error.message));
      } catch (error) {
        console.log(error.message);
      }
    }, [])
  );

  return (
    <SafeAreaView style={customStyles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          margin: 20,
        }}
      >
        <Text style={{ fontSize: font.bold }}>Manage Menu</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#4ebf40",
            height: 35,
            width: 110,
            borderRadius: 40,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate("AddNewMenu")}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: 6,
            }}
          >
            Add New Menu
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* <Text style={{ marginLeft: '80%',paddingTop:50,marginTop:-50 }}>Saved</Text>
        <TouchableOpacity>
                    <Text style={{ marginLeft: '80%' }}> Edit </Text>
        </TouchableOpacity> */}
      </View>
      <View>
        <ScrollView>
          {/* <Text>{JSON.stringify(data)}</Text> */}

          {data.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={{ fontSize: 23, color: "black",marginLeft:5,marginTop:5 }}>{item.name}</Text>
              <Text style={{ fontSize: 18,marginLeft:5,marginTop:10 }}>Details-{item.details}</Text>
              <Text style={{ borderBottomWidth: 1, fontSize: 18,marginBottom:15,marginLeft:5,marginTop:5 }}>
                Price-{item.price}
              </Text>
              <Text style={{marginLeft:'76%',marginTop:-70,color:"black"}}>Saved</Text>
              <TouchableOpacity 
              onPress={()=>navigation.navigate('editMenu')}
              style={{backgroundColor:'tomato',width:'25%',borderRadius:40,height:30,marginLeft:'70%',marginTop:0}}>
                
                <Text style={{textAlign:'center',paddingTop:4,color:'white',fontWeight:'bold'}}>Edit</Text>
               
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Menu;

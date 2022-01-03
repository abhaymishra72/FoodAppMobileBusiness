import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { font, images, customStyles } from "../constants/styles";
import { BASE_URL } from "../constants/config";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { getData, storeData } from "../component/asyncStorage";

const customerOrderTracking = ({ navigation, route }) => {
  // console.log("line 26", route.params.item)
  // const {item} = route.params;
  const { itemFood } = route.params;
  const { totalAmount } = route.params;
  const { orderStatus } = route.params;
  const { restaurantId } = route.params;
  return (
    <SafeAreaView style={customStyles.container}>
      <View>
        <Image style={customStyles.imageLogo} source={images.logo} />
      </View>
      <View>
        <Text style={customStyles.myText}>Order Tracking</Text>
        {/* <Text>Tracking</Text> */}
      </View>
      <ScrollView style={{ marginTop: -100 }}>
        <View style={customStyles.orderDelivery}>
          <Text style={{ fontSize: 20 }}>FoodOrder- {itemFood}</Text>
          <Text style={{ fontSize: 20 }}>Price - {totalAmount}</Text>
          <Text style={{ fontSize: 20 }}>status - {orderStatus}</Text>
          <Text style={{ fontSize: 20 }}>restaurantId - {restaurantId}</Text>
        </View>
      </ScrollView>
      <View
        style={{
          marginTop: -0,
          height: 256,
          width: "95%",
          alignItems: "center",
          marginLeft: 10,
          // paddingTop: 0,
          backgroundColor: "#ebebeb",
          borderRadius: 5,
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 160,
          }}
        >
          Map
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default customerOrderTracking;



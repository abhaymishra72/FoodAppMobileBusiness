import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { font, images, customStyles } from "../constants/styles";
import { BASE_URL } from "../constants/config";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { getData, storeData } from "../component/asyncStorage";

const myOrder = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("155425000212");
  let IdData = "";
  useFocusEffect(
    React.useCallback(() => {
      getData("user").then((response) => {
        console.log("res", response);

        IdData = JSON.parse(response).id;

        if (!response) {
          console.log(" useFocusEffect response not received");
        }
      });
      //  console.log(" my id", id)
      //     // console.log("inside Use", BASE_URL);

      try {
        axios
          .get(`${BASE_URL}/foodOrder/getCustomerOrder/${id}`)

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
      <View>
        <Image style={customStyles.imageLogo} source={images.logo} />
      </View>
      <View>
        <Text style={customStyles.myText}>My Orders</Text>
      </View>

      <ScrollView style={{ marginTop: -100 }}>
        <View>
          {/* <Text>{JSON.stringify(data)}</Text> */}

          {data.map((item, index) => (
            <View style={customStyles.orderDelivery}>
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("customerOrderTracking", {
                    itemFood: item.itemFood,
                    totalAmount: item.totalAmount,
                    orderStatus: item.orderStatus,
                    restaurantId: item.restaurantId,
                  })
                }
              >
                <Text style={{ fontSize: 20 }}>Food - {item.itemFood}</Text>
                <Text style={{ fontSize: 20 }}>Price - {item.totalAmount}</Text>
                <Text style={{ fontSize: 20 }}>
                  Status - {item.orderStatus}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default myOrder;



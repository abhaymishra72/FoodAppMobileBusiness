import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { colors, font, images, icons, customStyles } from "../constants/styles";
import { BASE_URL } from "../constants/config";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { getData, storeData } from "../component/asyncStorage";

const deliveryHistory = () => {
  const [data, setData] = useState([]);

  const [id, setId] = useState("61b83d14e6465f27c8d72d2c");
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
          .get(`${BASE_URL}/foodOrder/getfoodOrderRequest/${id}`)

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
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.textDeliveryHistory}>Delivery History</Text>
      </View>
      <ScrollView>
        <View>
          {/* <Text>{JSON.stringify(data)}</Text> */}

          {data.map((item, index) => (
            <View style={Styles.delivery}>
              {/* // <TouchableOpacity key={item.Id}> */}
              <Text style={{ fontSize: 20 }}>
                Status - {item.deliveryStatus}
              </Text>
              <Text style={{ fontSize: 20 }}>Price - {item.totalAmount}</Text>
              <Text style={{ fontSize: 20 }}>
                Address - {item.deliveryAddress}
              </Text>
              {/* // </TouchableOpacity>
               */}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default deliveryHistory;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  textDeliveryHistory: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginTop: 25,
    paddingBottom: 20,
  },
  delivery: {
    flex: 1,
    marginBottom: 0,
    borderBottomWidth: 1,
    paddingTop: 20,
    marginLeft: 20,
    marginRight: 20,
   
  },
});

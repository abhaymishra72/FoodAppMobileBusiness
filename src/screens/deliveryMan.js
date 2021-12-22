import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Switch,
} from "react-native";
import { colors, font, images, icons, customStyles } from "../constants/styles";
import { Picker } from "@react-native-picker/picker";

const deliveryMan = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [Online, setOnline] = useState(true);

  const isOnline = () => setOnline((previousState) => !previousState);
  return (
    <SafeAreaView style={customStyles.container}>
      <View style={{ marginTop: "6%", marginLeft: 2 }}>
        <View>
          <Text style={customStyles.textDeliveryManDashboard}>
            Deliveryman Dashboard{" "}
          </Text>
        </View>
        <View style={{ paddingTop: 40, margin: 10 }}>
          <View
            style={{
              paddingTop: 0,
              borderRadius: 5,
              flexDirection: "row",
              marginLeft: 6,
            }}
          >
            <Text style={{ color: "black" }}>Order ID: </Text>
            <Text style={{ marginLeft: 205, color: "black" }}>
              Status: In Transit
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            height: 50,
            width: "93%",
            flexDirection: "row",
            borderColor: "gray",
            marginLeft: 16,
          }}
        >
          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: "gray",
            }}
          >
            <Text style={{ color: "black" }}>From: Vendor Details </Text>
            <Text style={{ marginLeft: 124, color: "black" }}>
              To: Customer Details
            </Text>
          </View>
        </View>
        <View>
          <View style={customStyles.popUpCenteredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={customStyles.popUpCenteredView}>
                <View style={customStyles.popUpModalView}>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 40,
                      marginTop: -80,
                      borderColor: "white",
                      width: "150%",
                    }}
                  >
                    <Picker style={customStyles.picker}>
                      <Picker.Item label="New Delivery" value="New Delivery" />
                    </Picker>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "white",
                      height: 90,
                      marginTop: 25,
                      width: "150%",
                    }}
                  >
                    <Text
                      style={{
                        height: 40,
                        fontSize: 15,
                        padding: 10,
                      }}
                    >
                      Food 1, Delivery Address
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      style={customStyles.buttonAccept}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text
                        style={{
                          color: "white",

                          fontWeight: "bold",
                        }}
                      >
                        Accept
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={customStyles.buttonReject}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text
                        style={{
                          color: "white",
                          marginBottom: -15,
                          marginTop: -10,
                          alignSelf: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Reject
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={[customStyles.buttonShowNewDelivery]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Show New Delivery
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: -45,
            height: 250,
            width: "95%",
            alignItems: "center",
            marginLeft: 10,
            paddingTop: 0,
            backgroundColor: "#ebebeb",
            borderRadius: 5,
            flexDirection: "row",
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
        <View style={customStyles.buttonview}>
          <TouchableOpacity style={customStyles.buttonCallToVendorCustomer}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Call to Vendor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={customStyles.buttonCallToVendorCustomer}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Call to Customer
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 10 }}>
          <View style={customStyles.buttonPd}>
            <TouchableOpacity style={customStyles.buttonPickedDelivered}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Picked Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={customStyles.buttonPickedDelivered}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {" "}
                Delivered
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 18,
              textAlign: "center",
              paddingTop: 9,
              marginTop: -10,
              marginLeft: -40,
              fontWeight: "bold",
            }}
          >
            Status: Online
          </Text>
          <Switch
            style={{ marginTop: -24, marginLeft: 150 }}
            trackColor={{ false: "#767577", true: "#4ebf40" }}
            thumbColor={Online ? "#4ebf40" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={isOnline}
            value={Online}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default deliveryMan;

import React, { Component, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

const deliveryMan = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: "6%", marginLeft: 2 }}>
        <View>
          <Text style={styles.maintext}>Deliveryman Dashboard </Text>
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
              marginLeft: 0,
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
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 40,
                      marginTop: -80,
                      borderColor: "white",
                      width: "150%",
                    }}
                  >
                    <Picker
                      style={{ marginTop: 5, backgroundColor: "#ebebeb" }}
                    >
                      <Picker.Item label="New Delivery" value="New Delivery" />
                    </Picker>
                  </View>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "white",
                      height: 90,
                      // marginRight: 20,
                      marginLeft: -78,
                      marginRight: 20,
                      marginTop: 25,
                      width: "110%",
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

                  <TouchableOpacity
                    style={styles.buttonM}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      Accept
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonM1}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text
                      style={{
                        color: "white",
                        marginBottom: -15,
                        marginTop: -10,
                        alignSelf: "center",
                      }}
                    >
                      Reject
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              style={[styles.buttonN, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white" }}>Show New Delivery</Text>
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
            // borderWidth: 1,
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
        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Call to Vendor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}>Call to Customer</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 10 }}>
          <View style={styles.buttonpd}>
            <TouchableOpacity style={styles.buttons}>
              <Text style={{ color: "white" }}>Picked Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text style={{ color: "white" }}> Delivered</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default deliveryMan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  maintext: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    // fontWeight: 'Bold'
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
    borderRadius: 30,

    width: "40%",
    height: 40,
    backgroundColor: "tomato",
  },
  buttonview: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    // borderWidth: 1,
    borderRadius: 30,
    width: "40%",
    height: 40,
    backgroundColor: "tomato",
  },
  buttonpd: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginBottom: 80,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 90,
    width: "100%",
    height: 0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonM: {
    // borderWidth: 1,
    borderRadius: 30,
    padding: 12,
    width: 100,
    marginLeft: 275,
    marginTop: -91,
    backgroundColor: "tomato",
  },
  buttonM1: {
    // borderWidth: 1,
    borderRadius: 30,
    padding: 22,
    width: 100,
    marginLeft: 325,
    marginRight: 50,
    marginTop: 5,

    backgroundColor: "tomato",
  },
  buttonN: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -45,
    // borderWidth: 1,
    borderRadius: 30,

    width: "40%",
    height: 40,
    backgroundColor: "tomato",
  },
});

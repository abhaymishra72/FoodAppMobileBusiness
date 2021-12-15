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
    <SafeAreaView>
      <View style={{ marginTop: 2, marginLeft: 2 }}>
        <View>
          <Text style={styles.maintext}>Deliveryman Dashboard </Text>
        </View>
        <View style={{ paddingTop: 10, margin: 10 }}>
          <View
            style={{
              paddingTop: 0,
              borderWidth: 1,
              borderRadius: 5,
              flexDirection: "row",
            }}
          >
            <TextInput
              style={{
                height: 40,
                fontSize: 15,
                borderRadius: 5,
                marginLeft: 10,
              }}
              placeholder="Order ID"
            />
            <TextInput
              style={{
                alignItems: "center",
                height: 40,
                fontSize: 15,
                borderRadius: 5,
                marginLeft: 170,
              }}
              placeholder="Status: In Transit"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
            height: 50,
            width: "95%",
            alignItems: "center",
            marginLeft: 10,
            paddingTop: 0,
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <Text> From:Vendor details                           To: Customer details</Text>
        </View>
        <View>
          {/* <View style={{ borderWidth: 1, height: 160 }}> */}
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
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
                      // borderColor:'',
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

                  <Pressable
                    style={styles.buttonM}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Accept
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.buttonM1}
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
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Show New Delivery
              </Text>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            height: 250,
            width: "95%",
            alignItems: "center",
            marginLeft: 10,
            paddingTop: 0,
            borderWidth: 1,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <Text>Map</Text>
        </View>
        <View style={styles.buttonview}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Call to Vendor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Call to Customer
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 10 }}>
          <View style={styles.buttonpd}>
            <TouchableOpacity style={styles.buttons}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Picked Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {" "}
                Delivered
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default deliveryMan;

const styles = StyleSheet.create({
  maintext: {
    fontSize: 35,
    color: "black",
    // fontWeight: 'Bold'
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 30,

    width: 140,
    height: 40,
    backgroundColor: "tomato",
  },
  buttonview: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 30,
    width: 120,
    height: 40,
    backgroundColor: "tomato",
  },
  buttonpd: {
    marginLeft: 30,
    marginRight: 30,
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
    borderWidth: 1,
    borderRadius: 2,
    padding: 12,
    width: 100,
    marginLeft: 270,
    marginTop: -91,
    backgroundColor: "tomato",
    
  },
  buttonM1: {
    borderWidth: 1,
    borderRadius: 2,
    padding: 22,
    width: 100,
    marginLeft: 320,
    marginRight: 50,

    backgroundColor: "tomato",
  },
 
});

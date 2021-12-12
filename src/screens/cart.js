import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, font, images, icons, customStyles } from "../constants/styles";

const Cart = ({ navigation }) => {
  return (
    <>
      <View style={customStyles.container}>
        <View >
          <TouchableOpacity
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 8,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={{ height: 25, width: 25, marginRight: 10 }}
              source={icons.back}
            />

            <Text style={{ fontSize: font.primaryFont }}>Back</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={customStyles.cardView}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={customStyles.cartImage}
                source={images.item1}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{
                  flexDirection: 'column',
                }}>
                  <Text
                    style={customStyles.cartItemName}
                  >
                    Chicken tikka
                  </Text>
                  <View style={customStyles.cartItemPrice}>
                    <Text>Price: $11</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: '15%',
                    marginTop: 20,
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.add}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: font.primaryFont, marginLeft: 5, marginRight: 5 }}>1</Text>
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.minus}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>


          <View style={customStyles.cardView}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={customStyles.cartImage}
                source={images.item1}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{
                  flexDirection: 'column',
                }}>
                  <Text
                    style={customStyles.cartItemName}
                  >
                    Chicken tikka
                  </Text>
                  <View style={customStyles.cartItemPrice}>
                    <Text>Price: $11</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: '15%',
                    marginTop: 20,
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.add}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: font.primaryFont, marginLeft: 5, marginRight: 5 }}>1</Text>
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.minus}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>


          <View style={customStyles.cardView}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={customStyles.cartImage}
                source={images.item1}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{
                  flexDirection: 'column',
                }}>
                  <Text
                    style={customStyles.cartItemName}
                  >
                    Chicken tikka
                  </Text>
                  <View style={customStyles.cartItemPrice}>
                    <Text>Price: $11</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: '15%',
                    marginTop: 20,
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.add}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: font.primaryFont, marginLeft: 5, marginRight: 5 }}>1</Text>
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.minus}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={customStyles.cardView}>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={customStyles.cartImage}
                source={images.item1}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{
                  flexDirection: 'column',
                }}>
                  <Text
                    style={customStyles.cartItemName}
                  >
                    Chicken tikka
                  </Text>
                  <View style={customStyles.cartItemPrice}>
                    <Text>Price: $11</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: '15%',
                    marginTop: 20,
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.add}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: font.primaryFont, marginLeft: 5, marginRight: 5 }}>1</Text>
                  <TouchableOpacity>
                    <Image
                      style={customStyles.cartAddMinusIcon}
                      source={icons.minus}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>


          <View style={customStyles.OrderView}>
            <Text
              style={customStyles.cartTotal}
            >
              Total
            </Text>
            <Text
              style={customStyles.cartTotalPrice}
            >
              $120
            </Text>
          </View>

          <View>
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                fontSize: font.primaryFont,
                marginTop: 40,
              }}
            >
              Login to place order
            </Text>
            <TouchableOpacity
              style={customStyles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={customStyles.primaryButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: font.secondaryFont }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={{
                  fontSize: font.secondaryFont,
                  color: colors.primary,
                  marginLeft: 8,
                  marginBottom:20
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Cart;


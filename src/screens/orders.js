import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { colors, font, images, icons, customStyles } from '../constants/styles';

const Orders = ({ navigation }) => {
    return (
        <>
            <View style={customStyles.container}>
                <View style={{ backgroundColor: '#fff' }}>
                    <TouchableOpacity style={{ justifyContent: 'flex-start', flexDirection: 'row', marginTop: 20, marginBottom: 20, marginLeft: 20 }}
                    onPress={() => navigation.navigate("Home")}
                    >
                        <Image
                            style={{ height: 25, width: 25, marginRight: 10 }}
                            source={icons.back}
                        />

                        <Text style={{ fontSize: font.primaryFont }}>My Orders</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView >
                    <View style={customStyles.cardView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={customStyles.cartImage}
                                source={images.item1}
                            />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: font.primaryFont, marginLeft: 20, marginTop: 10 }}>Hotel Panjab Rasoi</Text>
                                <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 1 }}>Pune</Text>
                            </View>
                        </View>
                    </View>



                    <View style={customStyles.OrderView}>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>Chicken burger</Text>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>$20</Text>
                    </View>

                    <View style={customStyles.OrderView}>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>Chicken pizza</Text>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>$30</Text>
                    </View>

                    <View style={customStyles.OrderView}>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>Chicken butter masala</Text>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>$40</Text>
                    </View>

                    <View style={customStyles.OrderView}>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>Chicken tikka</Text>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>$30</Text>
                    </View>

                    <View style={customStyles.OrderView}>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>Total</Text>
                        <Text style={{ fontSize: font.secondaryFont, marginLeft: 20, marginTop: 10, marginRight:20, marginBottom:10 }}>$120</Text>
                    </View>

                    <View style={{marginTop:20}}>
                        <TouchableOpacity style={customStyles.button}
                            onPress={() => navigation.navigate("Home")}
                        >
                            <Text style={customStyles.primaryButtonText}>
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>
        </>
    );
}

export default Orders;


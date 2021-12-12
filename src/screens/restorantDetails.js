import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { colors, customStyles, font, images } from '../constants/styles';

const RestorantDetails = ({ navigation }) => {
    return (
        <>
            <View>
                <Image
                    style={{ width: '100%' }}
                    source={images.item1}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
                    <Text style={{ fontSize: font.primaryFont, color: colors.black }}>Hotel Pune</Text>
                    <Text style={{ justifyContent: 'center', marginLeft: 20, marginTop: 5, marginRight: 20, fontSize: font.secondaryFont }}>4 stars rating cafe - western food</Text>

                </View>
                <Divider width={1}/>
                <View style={{ margin: 5 }}>
                    {/* <Text style={{ fontSize: font.bold, color: colors.black, margin: 20 }}>Menu</Text> */}
                </View>
            </View>

            <ScrollView style={{backgroundColor:'#fff'}}>
                <View style={customStyles.restorantItemsCardView}>
                    <TouchableOpacity style={{ marginTop: 15 }}
                    onPress={() => navigation.navigate("CategoryFood")}
                    >
                        <Image
                            style={{ height: '85%', width: 180, marginLeft: 10, borderRadius: 10 }}
                            source={images.item1}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: font.primaryFont,
                        color: colors.black,
                        marginTop:45,
                        marginRight: 40,
                        paddingLeft:20
                    }}
                    >Sea - Food</Text>

                </View>

                <View style={customStyles.restorantItemsCardView}>
                    <TouchableOpacity style={{ marginTop: 15 }}>
                        <Image
                            style={{ height: '85%', width: 180, marginLeft: 10, borderRadius: 10 }}
                            source={images.item2}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: font.primaryFont,
                        color: colors.black,
                        marginTop:45,
                        marginRight: 40,
                        paddingLeft:20
                    }}
                    >Desert</Text>

                </View>


                <View style={customStyles.restorantItemsCardView}>
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <Image
                            style={{ height: '85%', width: 180, marginLeft: 10, borderRadius: 10 }}
                            source={images.item3}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: font.primaryFont,
                        color: colors.black,
                        marginTop:45,
                        marginRight: 40,
                        paddingLeft:20
                    }}
                    >Vegan</Text>

                </View>


                <View style={customStyles.restorantItemsCardView}>
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <Image
                            style={{ height: '80%', width: 180, margin: 10, borderRadius: 10 }}
                            source={images.item4}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: font.primaryFont,
                        color: colors.black,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginRight: 40
                    }}
                    >Chinese</Text>

                </View>

                <View style={customStyles.restorantItemsCardView}>
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <Image
                            style={{ height: '80%', width: 180, margin: 10, borderRadius: 10 }}
                            source={images.item5}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: font.primaryFont,
                        color: colors.black,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginRight: 40
                    }}
                    >South-Indian</Text>

                </View>

            </ScrollView>
        </>
    );
}

export default RestorantDetails;


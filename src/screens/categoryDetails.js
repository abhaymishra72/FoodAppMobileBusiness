import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { font, colors, images, icons } from '../constants/styles';

const categoryDetails = ({ navigation }) => {
    return (
        <>
            <View style={{ justifyContent: 'space-between', margin: 10, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image
                    style={{ width: 30, height: 30 }}
                    source={icons.back}
                />
                </TouchableOpacity>
                <Text style={{ fontSize: font.bold, color: colors.black, alignSelf: 'center', marginRight: 20 }}>Sea - Food</Text>
           
                <Image
                    style={{ height: 40, width: 40 }}
                    source={icons.basket}
                />
            </View>

            <ScrollView>
                <View style={styles.cardView}>
                    <Image
                        style={{ height: 110, width: '95%', margin: 10, borderRadius: 10 }}
                        source={images.item1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft:20 }}>
                            <Text style={{fontSize:font.primaryFont}}>
                                Fish Fry
                            </Text>
                            <Text style={{fontSize:font.secondaryFont}}>
                                Discription: jvnskfjk svk sk kv k bfgjksjkvnknvms vmnv  shskkjsvk
                            </Text>
                            <Text style={{fontSize:font.secondaryFont}}>
                                Price : $1000
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor:colors.primary,
                            margin:20,
                            marginRight:20, 
                            borderRadius:10,
                        }}>
                            <Text style={{
                                fontSize:font.primaryFont, 
                                color:colors.white, 
                                marginLeft:20, 
                                marginRight:20,
                                marginBottom:5,
                                marginTop:5
                                }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.cardView}>
                    <Image
                        style={{ height: 110, width: '95%', margin: 10, borderRadius: 10 }}
                        source={images.item1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft:20 }}>
                            <Text style={{fontSize:font.primaryFont}}>
                                Fish Fry
                            </Text>
                            <Text style={{fontSize:font.secondaryFont}}>
                                Price : $1000
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor:colors.primary,
                            margin:20,
                            marginRight:20, 
                            borderRadius:10
                        }}>
                            <Text style={{
                                fontSize:font.primaryFont, 
                                color:colors.white, 
                                marginLeft:20, 
                                marginRight:20,
                                marginBottom:5,
                                marginTop:5
                                }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={styles.cardView}>
                    <Image
                        style={{ height: 110, width: '95%', margin: 10, borderRadius: 10 }}
                        source={images.item1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft:20 }}>
                            <Text style={{fontSize:font.primaryFont}}>
                                Fish Fry
                            </Text>
                            <Text style={{fontSize:font.secondaryFont}}>
                                Price : $1000
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor:colors.primary,
                            margin:20,
                            marginRight:20, 
                            borderRadius:10
                        }}>
                            <Text style={{
                                fontSize:font.primaryFont, 
                                color:colors.white, 
                                marginLeft:20, 
                                marginRight:20,
                                marginBottom:5,
                                marginTop:5
                                }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={styles.cardView}>
                    <Image
                        style={{ height: 110, width: '95%', margin: 10, borderRadius: 10 }}
                        source={images.item1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft:20 }}>
                            <Text style={{fontSize:font.primaryFont}}>
                                Fish Fry
                            </Text>
                            <Text style={{fontSize:font.secondaryFont}}>
                                Price : $1000
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor:colors.primary,
                            margin:20,
                            marginRight:20, 
                            borderRadius:10
                        }}>
                            <Text style={{
                                fontSize:font.primaryFont, 
                                color:colors.white, 
                                marginLeft:20, 
                                marginRight:20,
                                marginBottom:5,
                                marginTop:5
                                }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>




                <View style={styles.cardView}>
                    <Image
                        style={{ height: 110, width: '95%', margin: 10, borderRadius: 10 }}
                        source={images.item1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft:20 }}>
                            <Text style={{fontSize:font.primaryFont}}>
                                Fish Fry
                            </Text>
                            <Text style={{fontSize:font.secondaryFont}}>
                                Price : $1000
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor:colors.primary,
                            margin:20,
                            marginRight:20, 
                            borderRadius:10
                        }}>
                            <Text style={{
                                fontSize:font.primaryFont, 
                                color:colors.white, 
                                marginLeft:20, 
                                marginRight:20,
                                marginBottom:5,
                                marginTop:5
                                }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.cardView}>
                    <Image
                        style={{ height: 110, width: '95%', margin: 10, borderRadius: 10 }}
                        source={images.item1}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft:20 }}>
                            <Text style={{fontSize:font.primaryFont}}>
                                Fish Fry
                            </Text>
                            <Text style={{fontSize:font.secondaryFont}}>
                                Price : $1000
                            </Text>
                        </View>
                        <TouchableOpacity style={{
                            backgroundColor:colors.primary,
                            margin:20,
                            marginRight:20, 
                            borderRadius:10
                        }}>
                            <Text style={{
                                fontSize:font.primaryFont, 
                                color:colors.white, 
                                marginLeft:20, 
                                marginRight:20,
                                marginBottom:5,
                                marginTop:5
                                }}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        </>
    );
}

export default categoryDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardView: {
        height: 'auto',
        backgroundColor: '#fff',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 15,
        marginBottom: 15,
    }
})
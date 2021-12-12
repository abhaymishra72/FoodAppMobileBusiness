import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import ButtonComponent from '../component/button';
import { colors, font, icons, images, customStyles } from '../constants/styles';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={customStyles.container}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 20 }}>
                <Text style={{ fontSize: font.bold }}>SANAAT</Text>
                 <Image
                    style={{ height: 50, width: 50, borderRadius: 40}}
                    source={images.logo}
                /> 
            </View>

            <View style={customStyles.searchBar}>
                <Text style={{ fontSize: font.secondaryFont, marginLeft: 20 }}>
                    search...
                </Text>
            </View>

            <View>
                <Text style={{ fontSize: font.primaryFont, justifyContent: 'center', marginLeft: 20, marginBottom: 20 }}>
                    Restaurants
                </Text>
            </View>

            <ScrollView>
                <View style={customStyles.homePageCardView}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("RestorantDetails")}
                    >
                        <Image
                            style={{ height: '80%', width: '100%' }}
                            source={images.item1}
                        />
                        <View>
                            <Text style={{ fontSize: font.primaryFont, marginLeft: 20, color: colors.black, paddingTop:5 }}>Hotel Pune</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', marginLeft: 20, fontSize: font.secondaryFont }}>distance : 2km</Text>
                            <Text style={{ justifyContent: 'center', marginRight: 20, fontSize: font.secondaryFont }}>western food</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={customStyles.homePageCardView}>

                    <TouchableOpacity>
                        <Image
                            style={{ height: '80%', width: '100%' }}
                            source={images.item2}
                        />
                        <View>
                            <Text style={{ fontSize: font.primaryFont, marginLeft: 20, color: colors.black, paddingTop:5 }}>Hotel Nashik</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', marginLeft: 20, fontSize: font.secondaryFont }}>distance : 3.5km</Text>
                            <Text style={{ justifyContent: 'center', marginRight: 20, fontSize: font.secondaryFont }}>western food</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={customStyles.homePageCardView}>

                    <TouchableOpacity>
                        <Image
                            style={{ height: '80%', width: '100%' }}
                            source={images.item3}
                        />
                        <View>
                            <Text style={{ fontSize: font.primaryFont, marginLeft: 20, color: colors.black, paddingTop:5 }}>Hotel Lucknow</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', marginLeft: 20, fontSize: font.secondaryFont }}>distance : 5km</Text>
                            <Text style={{ justifyContent: 'center', marginRight: 20, fontSize: font.secondaryFont }}>western food</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={customStyles.homePageCardView}>

                    <TouchableOpacity>
                        <Image
                            style={{ height: '80%', width: '100%' }}
                            source={images.item4}
                        />
                        <View>
                            <Text style={{ fontSize: font.primaryFont, marginLeft: 20, color: colors.black }}>Hotel Mumbai</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', marginLeft: 20, fontSize: font.secondaryFont }}>4 stars rating cafe</Text>
                            <Text style={{ justifyContent: 'center', marginRight: 20, fontSize: font.secondaryFont }}>western food</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={customStyles.homePageCardView}>

                    <TouchableOpacity>
                        <Image
                            style={{ height: '80%', width: '100%' }}
                            source={images.item5}
                        />
                        <View>
                            <Text style={{ fontSize: font.primaryFont, marginLeft: 20, color: colors.black }}>Hotel Pune</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', marginLeft: 20, fontSize: font.secondaryFont }}>4 stars rating cafe</Text>
                            <Text style={{ justifyContent: 'center', marginRight: 20, fontSize: font.secondaryFont }}>western food</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={customStyles.homePageCardView}>

                    <TouchableOpacity>
                        <Image
                            style={{ height: '80%', width: '100%' }}
                            source={images.item3}
                        />
                        <View>
                            <Text style={{ fontSize: font.primaryFont, marginLeft: 20, color: colors.black }}>Hotel UK</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', marginLeft: 20, fontSize: font.secondaryFont }}>4 stars rating cafe</Text>
                            <Text style={{ justifyContent: 'center', marginRight: 20, fontSize: font.secondaryFont }}>western food</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={customStyles.homePageCardView}>

                    <TouchableOpacity>
                        <Image
                            style={{ height: '80%', width: '100%' }}
                            source={images.item6}
                        />
                        <View>
                            <Text style={{ fontSize: font.primaryFont, marginLeft: 20, color: colors.black }}>Hotel Shimla</Text>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ justifyContent: 'center', marginLeft: 20, fontSize: font.secondaryFont }}>4 stars rating cafe</Text>
                            <Text style={{ justifyContent: 'center', marginRight: 20, fontSize: font.secondaryFont }}>western food</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;


import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import { font, colors, images } from '../constants/styles';

const SearchScreen = () => {
    return (
        <SafeAreaView>
            <View style={{justifyContent:'center', margin:20}}>
                <Text style={{fontSize:font.primaryFont}}>
                    Search For Hotels
                </Text>
            </View>

            <View style={styles.searchBar}>
                <Text style={{ fontSize: font.secondaryFont, marginLeft: 20 }}>
                    search here ...
                </Text>
            </View>

            <View style={{justifyContent:'center'}}>
                <Image
                style={{height:'60%', width:'60%', marginLeft:70, marginRight:70}} 
                source={images.search}
                />
                <Text style={{justifyContent:'center',alignSelf:'center', margin:30, fontSize:font.primaryFont}}>
                    Searching....
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default SearchScreen; 


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    searchBar: {
        height: 45,
        backgroundColor: colors.white,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
    }
});
import React,{ useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet
} from "react-native";
import { colors, font, images, icons, customStyles } from "../constants/styles";
const deliveryHistory = () =>{
    return (
       
        <SafeAreaView style={Styles.container}>
           
            <View >
                <Text style={Styles.textDeliveryHistory}>
                    Delivery History
                </Text>
            </View>
            
            <ScrollView styles={{paddingTop:100}}>
                
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20,  paddingBottom:25}}>Delivery 1, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 2, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}> 
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 3, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 4, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 5, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 6, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}> 
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 7, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 8, Date/Time, DeliveryAddress</Text>
            </View><View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 9, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 10, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}> 
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 11, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 12, Date/Time, DeliveryAddress</Text>
            </View><View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 13, Date/Time, DeliveryAddress</Text>
            </View>
            <View style={Styles.delivery}>
                <Text style={{ fontSize:20, paddingBottom:25}}>Delivery 14, Date/Time, DeliveryAddress</Text>
            </View>
            
               </ScrollView>
             
            </SafeAreaView>
         
        
    )
};
export default deliveryHistory;
const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
      },
    
  textDeliveryHistory:{
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginTop: 20,
    marginBottom:25
  },
  delivery:{
      marginTop:40,
      marginBottom:-30,
    //   borderWidth:1,
    //   borderColor:'white',
    borderBottomWidth:2,
    marginLeft:15,
    marginRight:15,
      height:70,
      justifyContent:"center",
   

  },
  delivery2:{
    // marginTop:,
    // borderWidth:1,

    // borderColor:'white',
    borderBottomWidth:2,
    marginLeft:12,
    marginRight:30,
    height:50,
    justifyContent:"center"

},
delivery3:{
    // marginTop:40,
    // borderWidth:1,
    // borderColor:'white',
    borderBottomWidth:2,
    marginLeft:12,
    marginRight:30,
    height:50,
    justifyContent:"center"

},
delivery4:{
    // marginTop:40,
    // borderWidth:1,
    // borderColor:'white',
    borderBottomWidth:2,
    marginLeft:12,
    marginRight:30,
    height:50,
    justifyContent:"center"

},
});



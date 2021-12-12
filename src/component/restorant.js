import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Restorant = ({ navigation }) => {

    const resto = [
        {
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            name: "restorant pune",
            categories: ["food1", "food2"],
            price: "$",
            reviews: 1222,
            ratings: 4.5,
        },

        {
            image: "https://media.istockphoto.com/photos/3d-render-of-luxury-restaurant-interior-picture-id1079901206?k=20&m=1079901206&s=612x612&w=0&h=hbMrgWZzoO9zncJ_ZU2xUqVt0oGfPyAbv9FxhCm04EI=",
            name: "restorant dhule",
            categories: ["food3", "food4"],
            price: "$",
            reviews: 1222,
            ratings: 4.5,
        },

        {
            image: "https://images.indianexpress.com/2020/09/restuarant.jpg",
            name: "restorant ayodhya",
            categories: ["food5", "food6"],
            price: "$",
            reviews: 1222,
            ratings: 4.5,
        },

        {
            image: "https://img.etimg.com/thumb/msid-82666514,width-1200,height-900/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg",
            name: "restorant nashik",
            categories: ["food5", "food6"],
            price: "$",
            reviews: 1222,
            ratings: 4.5,
        },
    ]

    return (
        <View activeOpacity={1} style={{ marginBottom: 10 }}>
            {resto.map((hotel, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "#fff", borderRadius: 25 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RestorantDetails')}
                    >
                        {/* <Restorantmages image={hotel.image} /> */}
                        <Image source={{ uri: hotel.image }}
                            style={{
                                justifyContent: 'center',
                                width: "100%",
                                height: 180,

                            }}
                        />
                    </TouchableOpacity>
                    <RestorantInfo name={hotel.name}
                        rating={hotel.ratings}
                    />
                </View>
            ))}
        </View>
    );
}

export default Restorant;

const Restorantmages = (props) => {
    return (
        <Image source={{ uri: props.image }}
            style={{
                justifyContent: 'center',
                width: "100%",
                height: 180,

            }}
        />
    );
}

const RestorantInfo = (props) => {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10
        }}>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    {props.name}
                </Text>
                <Text>
                    Distance : 20km
                </Text>
            </View>
            <View>
                <Text>
                    {props.rating}
                </Text>
            </View>
        </View>
    );
}
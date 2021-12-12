import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { colors, font, images } from "../constants/styles";

const slides = [
  {
    key: 1,
    title: "Find Food You Love",
    text: "Discover the best foods from over 1,000 restaurants and fast delivery to your doosteps",
    image: images.splashScreenImage1,
    backgroundColor: colors.cyan,
  },
  {
    key: 2,
    title: "Fast Delivery",
    text: "Fast food delivery to your home, office wherever you are",
    image: images.splashScreenImage2,
    backgroundColor: colors.yellow,
  },
  {
    key: 3,
    title: "Live Tracking",
    text: "Real time tracking of your food on the app once you placed the order",
    image: images.splashScreenImage3,
    backgroundColor: colors.tomatoColor,
  },
];

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: item.backgroundColor, flex: 1 }}>
        <Image
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50%",
            alignSelf: "center",
            borderRadius: 140,
            height: "30%",
          }}
          source={item.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    this.props.navigation.replace("Login");
  };
  render() {
    if (this.state.showRealApp) {
      return <SplashScreen />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  title: {
    padding: 10,
    textAlign: "center",
    fontSize: 38,
    fontWeight: "bold",
    color: colors.fontColor,
    marginTop: 30,
  },
  image: {
    width: "60%",
    height: "60%",
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 15,
    marginTop: 10,
    color: colors.secondaryFontColor,
  },
});

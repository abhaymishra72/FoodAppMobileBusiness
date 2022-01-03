import React from "react";
import Icon from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesgn from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export const colors = {
  primary: "#E74C3C",
  secondary: "red",
  white: "#FFF",
  gray: "gray",
  lightGray: "lightgray",
  black: "black",
  blue: "skyblue",
  fontColor: "#4A4B4D",
  secondaryFontColor: "#4A4B4D",
  placeholderColor: "#B6B7B7",
  tomatoColor: "#E74C3C",
  cyan: "#59b2ab",
  yellow: "#febe29",
  green: "#4ebf40",
  red: "#FF0000",
  gray: "#ebebeb" 
};

export const font = {
  bold: 30,
  primaryFont: 20,
  secondaryFont: 15,
};

export const images = {
  logo: require("../assets/images/foodlogo.png"),
  splashScreenImage1: require("../assets/images/food1.jpg"),
  splashScreenImage2: require("../assets/images/food2.jpg"),
  splashScreenImage3: require("../assets/images/food3.png"),
  search: require("../assets/images/search.png"),

  //food items

  item1: require("../assets/images/item1.png"),
  item2: require("../assets/images/item2.jpg"),
  item3: require("../assets/images/item3.png"),
  item4: require("../assets/images/item4.jpg"),
  item5: require("../assets/images/item5.jpg"),
  item6: require("../assets/images/item6.jpg"),
};

export const icons = {
  basket: require("../assets/icons/basket.png"),
  home: require("../assets/icons/home.png"),
  search: require("../assets/icons/search.png"),
  account: require("../assets/icons/account.png"),
  back: require("../assets/icons/bck-icon.png"),
  add: require("../assets/icons/add.png"),
  minus: require("../assets/icons/minus.png"),
};

export const ionicons = {
  user: <SimpleLineIcons name="user" size={22} color="gray" />,
  email: <Icon name="email" size={22} color="gray" />,
  address: <AntDesgn name="home" size={22} color="gray" />,
  code: <AntDesgn name="qrcode" size={22} color="gray" />,
  mobile: <AntDesgn name="mobile1" size={22} color="gray" />,
  password: <Ionicons name="key-outline" size={22} color="gray" />,
};

export const customStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  image: {
    height: "20%",
    width: "30%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 180,
  },

  profileImage: {
    height: "14%",
    width: "26%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 180,
  },

  RegisterPageImage: {
    height: "12%",
    width: "30%",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 180,
  },

  textInput: {
    height: 40,
    fontSize: font.secondaryFont,
    marginLeft: 20,
    paddingLeft: 40,
    marginRight: 20,
    alignSelf: "center",
    width: "80%",
    borderRadius: 10,
    marginBottom: 5,
  },

  textArea: {
    height: 60,
    fontSize: font.secondaryFont,
    color: "black",
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 40,
    alignSelf: "center",
    width: "80%",
  },

  button: {
    height: 45,
    width: "80%",
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: colors.tomatoColor,
  },

  secondoryButton: {
    height: 45,
    width: "80%",
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.tomatoColor,
  },

  primaryButtonText: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 7,
    fontSize: 20,
  },

  secondaryButtonText: {
    color: colors.tomatoColor,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 7,
    fontSize: 20,
  },

  header: {
    flex: 0.5,
    backgroundColor: colors.primary,
    elevation: 30,
    borderBottomLeftRadius: 650,
  },

  footer: {
    flex: 0.9,
    backgroundColor: colors.white,
  },

  logoText: {
    fontSize: font.bold,
    color: colors.fontColor,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  editPageHeadingText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: font.bold,
    marginBottom: 0,
  },
  pageHeadingText: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: font.bold,
    marginBottom: 20,
  },

  textInputName: {
    marginLeft: 45,
    color: "gray",
    fontSize: 15,
    marginTop: 20,
  },

  textInputIcon: {
    marginLeft: 45,
    marginTop: 10,
    marginBottom: -30,
  },

  cardView: {
    height: 70,
    backgroundColor: "#fff",
    elevation: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 15,
  },

  homePageCardView: {
    height: 270,
    backgroundColor: "#fff",
    width: "90%",
    elevation: 20,
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 15,
  },

  restorantItemsCardView: {
    height: 120,
    backgroundColor: "#fff",
    width: "95%",
    elevation: 3,
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: "flex-start",
    flexDirection: "row",
  },

  OrderView: {
    height: "auto",
    backgroundColor: "#fff",
    width: "90%",
    elevation: 20,
    alignSelf: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },

  searchBar: {
    height: 45,
    backgroundColor: colors.white,
    elevation: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: "center",
  },

  cartImage: {
    height: 60,
    width: 90,
    margin: 5,
    borderRadius: 10,
    marginLeft: 8,
  },

  cartItemName: {
    fontSize: font.secondaryFont,
    marginLeft: 8,
    marginTop: 15,
  },

  cartItemPrice: { marginTop: 2, marginLeft: 8 },

  cartAddMinusIcon: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
  },

  cartTotal: {
    fontSize: font.secondaryFont,
    marginLeft: 8,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
  },

  cartTotalPrice: {
    fontSize: font.secondaryFont,
    marginLeft: 8,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
  },

  profilePageIcon: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 10,
  },

  profilePageText: {
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "30%",
  },
  
  // DeliveryMan Dashboard Styles
  textDeliveryManDashboard: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  buttonCallToVendorCustomer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "40%",
    height: 40,
    backgroundColor:colors.tomatoColor,
    
  },
  buttonview: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    flexDirection:'row',
    justifyContent: "space-between",
    
  },
  buttonPickedDelivered: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "40%",
    height: 40,
    backgroundColor:colors.tomatoColor,
  },
  buttonPd: {
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  popUpCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    marginBottom: 90,
  },
  popUpModalView: {
    marginTop: 40,
    backgroundColor: colors.white,
    padding: 90,
    width: "100%",
    paddingBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  picker:{
    marginTop: 5, backgroundColor:colors.gray
 },
  buttonAccept: {
    borderRadius: 30,
    padding: 12,
    width: "50%",
    height: 45,
    marginTop: 18,
    marginLeft: 35,
    backgroundColor: colors.green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
    buttonReject: {
    borderRadius: 30,
    padding: 22,
    width: "50%",
    height: 40,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    backgroundColor:colors.tomatoColor,
  },
  buttonShowNewDelivery: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -45,
    borderRadius: 30,
    width: "40%",
    height: 40,
    backgroundColor: colors.tomatoColor,
  },


// myOrders and customerOrderTracking screen styles

imageLogo: {
  height: "28%",
  width: "35%",
  alignSelf: "flex-end",
  borderRadius: 180,
  marginTop: 30,
},
myText: {
  fontSize: font.bold,
  color: "black",
  alignSelf: "flex-start",
  marginTop: -230,
  marginLeft: 40,
},
orderDelivery: {
  borderBottomWidth: 1,
  marginLeft: 20,
  marginRight: 20,
},
};

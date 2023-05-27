import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView } from "react-native";
import COLORS from "./color";
import Icon from "react-native-vector-icons/MaterialIcons";

const Detail = ({ navigation, route }) => {
  const productData = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/alien.png")}
          style={{ resizeMode: "contain", flex: 1 }}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ marginVertical: 20, marginLeft: 10 }}>Best Seller</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 10 }}>Alien</Text>
          <Text
            style={{
              fontSize: 16,
              padding: 15,
              backgroundColor: COLORS.green,
              justifyContent: "center",
              alignItems: "center",
              borderBottomLeftRadius: 30,
              borderTopLeftRadius: 30,
              color: COLORS.white,
            }}
          >
            $5.99
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>About</Text>
          <Text style={{ fontSize: 14, color: COLORS.black }}>
            Tue., May 30, 9 a.m. EDT: Coverage of hatch closure for the Axiom
            Mission 2 crew aboard the ISS Tue., May 30, 10:45 a.m. EDT: Coverage
            of the the Axiom Mission 2 crew undocking from the ISS Tue., May 30,
            12:30 p.m. EDT: ISS Expedition 69 in-flight educational event with
            flight engineers Frank Rubio and Steve Bowen Wed., May 31, 10:30
            a.m. EDT: Coverage of the unidentified anomalous phenomena (UAP)
            independent study team public meeting Tue., May 30, 2 p.m. EDT:
            Media teleconference on the science aboard SpaceX’s 28th commercial
            resupply services mission
          </Text>
        </View>
        <View style={styles.buyContainer}>
          <Text
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              backgroundColor: COLORS.dark,
              borderRadius: 20,
              color: COLORS.white,
              fontWeight: "bold",
            }}
          >
            -
          </Text>
          <Text>1</Text>
          <Text
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              backgroundColor: COLORS.dark,
              borderRadius: 20,
              color: COLORS.white,
              fontWeight: "bold",
            }}
          >
            +
          </Text>
          <Text
            style={{
              paddingVertical: 15,
              paddingHorizontal: 40,
              backgroundColor: COLORS.green,
              borderRadius: 20,
              color: COLORS.white,
              fontWeight: "bold",
            }}
          >
            Buy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    backgroundColor: COLORS.light,
    flex: 0.95,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  aboutContainer: {
    margin: 10,
  },
  buyContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 20,
    alignItems: "center",
  },
});

export default Detail;

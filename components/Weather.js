import React from "react";
import { StyleSheet, View, Text } from "react-native";
import COLORS from "../src/view/screen/color";

const Weather = ({ temperature }) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.temperatureText}>{temperature}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  temperatureText: {
    fontSize: 35,
    color: COLORS.green,
    fontWeight: "bold",
  },
});

export default Weather;

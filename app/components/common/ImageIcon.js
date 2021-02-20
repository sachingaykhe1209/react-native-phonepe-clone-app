import React from "react";
import { Image, StyleSheet, View } from "react-native";
import sachin from "../../assets/sachin.jpg";

const ImageIcon = () => {
  return (
    <View>
      <Image style={styles.img} source={sachin} />
    </View>
  );
};

export default ImageIcon;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

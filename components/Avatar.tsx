import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Badge from "./Badge";

type Props = {
  size?: number;
  source: any; 
  badgeType?: "online" | "sleeping";
};

const Avatar: React.FC<Props> = ({
  size = 90,
  source,
  badgeType = "online",
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image source={{ uri: source }} style={[styles.image, { width: size, height: size }]} />
      <Badge type={badgeType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    borderRadius: 1000,
    resizeMode: "cover",
  },
});

export default Avatar;

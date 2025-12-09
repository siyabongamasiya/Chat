import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  label?: string;
  badgeText?: string;
  onPress?: () => void;
};

const DirectMessageButton: React.FC<Props> = ({
  label = "Direct Message",
  badgeText = "3",
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badgeText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFD600", // bright yellow
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 100, // pill shape
    alignSelf: "flex-start",
  },

  label: {
    color: "black",
    fontWeight: "600",
    fontSize: 15,
  },

  badge: {
    marginLeft: 10,
    backgroundColor: "black",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});

export default DirectMessageButton;

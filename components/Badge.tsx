import React from "react";
import { View, Text, StyleSheet } from "react-native";

type BadgeProps = {
  type: "online" | "sleeping";
};

const Badge: React.FC<BadgeProps> = ({ type }) => {
  const isOnline = type === "online";
  const isSleeping = type === "sleeping";

  return (
    <View
      style={[
        styles.container,
        isOnline && styles.online,
        isSleeping && styles.sleeping,
      ]}
    >
      {isOnline && <Text style={styles.check}>✓</Text>}
      {isSleeping && <Text style={styles.sleep}>zz</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  online: {
    backgroundColor: "green",
  },

  sleeping: {
    backgroundColor: "yellow",
  },

  check: {
    color: "white",
    fontWeight: "bold",
  },

  sleep: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default Badge;

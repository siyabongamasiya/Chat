import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or any icon library
import DirectMessageButton from "./DirectMessageButton";

type Props = {
  groupCount?: number;
  onSearchPress?: () => void;
  onDirectMessagePress?: () => void;
};

const HeaderRow: React.FC<Props> = ({
  groupCount = 5,
  onSearchPress,
  onDirectMessagePress,
}) => {
  return (
    <View style={styles.container}>
      {/* Left: Search Icon */}
      <TouchableOpacity onPress={onSearchPress}>
        <Ionicons name="search" size={28} color="black" />
      </TouchableOpacity>

      {/* Center: Direct Message Button */}
      <DirectMessageButton onPress={onDirectMessagePress} />

      {/* Right: Group + Badge */}
      <View style={styles.groupContainer}>
        <Text style={styles.groupText}>Group</Text>
        <View style={styles.groupBadge}>
          <Text style={styles.groupBadgeText}>{groupCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width:"100%",
    gap:16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 10, // optional background
  },

  groupContainer: {
    flexDirection: "row",
    alignItems: "center",// optional pill background
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
  },

  groupText: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 8,
    color: "black",
  },

  groupBadge: {
    backgroundColor: "white",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  groupBadgeText: {
    color: "black",
    fontWeight: "600",
    fontSize: 12,
  },
});

export default HeaderRow;

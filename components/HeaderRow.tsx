import { Ionicons } from "@expo/vector-icons"; // or any icon library
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
    width: "100%",
    gap: 4,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingVertical: 10,
  },

  groupContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 0,
    paddingHorizontal: 18,
    paddingVertical: 10,
    minHeight: 40,
    borderRadius: 999,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignSelf: "flex-start",
    marginRight: 12,
  },

  groupText: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 10,
    color: "black",
  },

  groupBadge: {
    backgroundColor: "white",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
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

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Avatar from "./Avatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  username: string;
  message: string;
  avatar: any;
  badgeCount?: number; // if > 0 show red badge
  isRead?: boolean;    // if true show blue ticks
  onPress?: () => void;
};

const UserListItem: React.FC<Props> = ({
  username,
  message,
  avatar,
  badgeCount = 0,
  isRead = false,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      
      {/* Avatar */}
      <Avatar size={55} source={avatar} badgeType="online" />

      {/* Username + message text */}
      <View style={styles.textContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>

      {/* Right section: unread badge OR blue double tick */}
      <View style={styles.rightSection}>
        {badgeCount > 0 ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{badgeCount}</Text>
          </View>
        ) : isRead ? (
          <MaterialCommunityIcons
            name="check-all"
            size={22}
            color="#1E90FF" // blue ticks
          />
        ) : null}
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  username: {
    fontSize: 16,
    fontWeight: "600",
  },

  message: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },

  rightSection: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  unreadBadge: {
    backgroundColor: "red",
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },

  unreadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default UserListItem;

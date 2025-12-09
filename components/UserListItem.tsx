import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./Avatar";

type Props = {
  username: string;
  message: string;
  avatar: any;
  badgeCount?: number; // if > 0 show red badge
  isRead?: boolean; // if true show blue ticks
  time?: string; // time shown above ticks or badge
  onPress?: () => void;
};

const UserListItem: React.FC<Props> = ({
  username,
  message,
  avatar,
  badgeCount = 0,
  isRead = false,
  time = "12:00",
  onPress,
}) => {
  const displayTime = React.useMemo(() => {
    const t = (time || "").trim();
    if (/am|pm/i.test(t)) return t;
    const m = t.match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return t;
    let h = parseInt(m[1], 10);
    const mm = m[2];
    const suffix = h >= 12 ? "PM" : "AM";
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${mm} ${suffix}`;
  }, [time]);
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

      {/* Right section: time above unread badge OR blue double tick */}
      <View style={styles.rightSection}>
        <Text style={styles.timeText}>{displayTime}</Text>
        {badgeCount > 0 ? (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{badgeCount}</Text>
          </View>
        ) : isRead ? (
          <MaterialCommunityIcons
            name="check-all"
            size={22}
            color="#6B5ABE" // match FAB color
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
    minWidth: 36,
  },

  timeText: {
    fontSize: 11,
    color: "#666",
    marginBottom: 6,
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

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import UserListItem from "./UserListItem";

type Message = {
  id: number;
  username: string;
  message: string;
  avatar: any;
  badgeCount?: number;
  isRead?: boolean;
};

type Props = {
  AllMessages: Message[];
};

const AllMessagesSection: React.FC<Props> = ({ AllMessages }) => {
  return (
    <View style={styles.container}>
      {/* Section Title */}
      <Text style={styles.title}>
        All Message({AllMessages.length})
      </Text>

      {/* List of pinned messages */}
      <FlatList
        data={AllMessages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <UserListItem
            username={item.username}
            message={item.message}
            avatar={item.avatar}
            badgeCount={item.badgeCount}
            isRead={item.isRead}
          />
        )}
        scrollEnabled={false} // disable inner scroll if used inside ScrollView
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
    width:"100%"
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
});

export default AllMessagesSection;

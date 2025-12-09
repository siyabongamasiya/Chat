import CardSection from "@/components/CardSection";
import ContactListSection from "@/components/ContactList";
import TopSection from "@/components/header";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Example avatars
const avatar1 = "https://i.pravatar.cc/150?img=1";
const avatar2 = "https://i.pravatar.cc/150?img=2";
const avatar3 = "https://i.pravatar.cc/150?img=3";

// Dummy data
const pinnedMessages = [
  { id: 1, username: "Alice", message: "Check this out!", avatar: avatar1 },
  {
    id: 2,
    username: "Bob",
    message: "Meeting at 3 PM",
    avatar: avatar2,
    isRead: true,
  },
];

const allMessages = [
  {
    id: 1,
    username: "Charlie",
    message: "Hello there!",
    avatar: avatar3,
    badgeCount: 1,
  },
  {
    id: 2,
    username: "Diana",
    message: "Are you free tomorrow?",
    avatar: avatar2,
  },
];

export default function MessagingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top greeting + menu */}
      <TopSection />

      {/* Horizontal contact list */}
      <ContactListSection />

      {/* Card section occupying 60% of the screen */}
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <CardSection
          visible={true}
          onClose={() => {}}
          pinnedMessages={pinnedMessages}
          allMessages={allMessages}
        />
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => {}}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B5ABE",
  },
  fab: {
    position: "absolute",
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#6B5ABE",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
    zIndex: 10,
  },
  fabText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 30,
  },
});


// export const options = {
//   headerShown: false, 
//   title: "Home", 
// };

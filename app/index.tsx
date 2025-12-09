import CardSection from "@/components/CardSection";
import ContactListSection from "@/components/ContactList";
import TopSection from "@/components/header";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

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
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isTablet = width >= 768;
  const fabSize = Math.round(Math.min(64, Math.max(48, width * 0.12)));
  const fabRadius = Math.round(fabSize / 2);
  const horizontalGap = isTablet ? 32 : 24;
  const verticalGap = (insets.bottom || 0) + (isTablet ? 32 : 24);
  const spacer = Math.min(24, Math.max(8, Math.round(width * 0.02)));
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Top greeting + menu */}
      <TopSection />

      {/* Horizontal contact list */}
      <ContactListSection />

      {/* Small dynamic spacer to separate contacts and card */}
      <View style={{ height: spacer }} />

      {/* Card section anchored to bottom */}
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
        style={[
          styles.fab,
          {
            right: horizontalGap,
            bottom: verticalGap,
            width: fabSize,
            height: fabSize,
            borderRadius: fabRadius,
          },
        ]}
        activeOpacity={0.8}
        onPress={() => {}}
      >
        <Text
          style={[
            styles.fabText,
            {
              fontSize: Math.round(fabSize * 0.5),
              lineHeight: Math.round(fabSize * 0.52),
            },
          ]}
        >
          +
        </Text>
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

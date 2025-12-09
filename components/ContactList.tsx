import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Avatar from "../components/Avatar";

export default function ContactListSection() {
  const insets = useSafeAreaInsets();
  const contacts = [
    { id: 1, img: "https://i.pravatar.cc/150?img=1", status: "online" },
    { id: 2, img: "https://i.pravatar.cc/150?img=2", status: "sleeping" },
    { id: 3, img: "https://i.pravatar.cc/150?img=3", status: "online" },
    { id: 4, img: "https://i.pravatar.cc/150?img=4", status: "sleeping" },
    { id: 5, img: "https://i.pravatar.cc/150?img=5", status: "online" },
  ];

  return (
    <View
      style={[
        styles.container,
        {
          paddingLeft: 16 + (insets.left || 0),
          paddingRight: 16 + (insets.right || 0),
        },
      ]}
    >
      {/* TITLE */}
      <Text style={styles.title}>
        <Text style={styles.titleHighlight}>Contact </Text>
        <Text style={styles.titleDim}>List</Text>
      </Text>

      {/* HORIZONTAL SCROLL */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 14 }}
        contentContainerStyle={{ paddingRight: 16 + (insets.right || 0) }}
      >
        {contacts.map((item) => (
          <View key={item.id} style={{ marginRight: 12 }}>
            <Avatar
              size={70}
              source={item.img}
              badgeType={item.status as "online" | "sleeping"}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  titleHighlight: {
    color: "#ffffff",
  },

  titleDim: {
    color: "rgba(255,255,255,0.6)",
  },
});

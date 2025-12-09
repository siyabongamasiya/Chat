import { StyleSheet, Text, View } from "react-native";

const TopSection = () => {
  return (
    <View style={styles.row}>
      {/* LEFT COLUMN */}
      <View style={styles.textColumn}>
        <Text style={styles.hiText}>Hi Siyabonga</Text>
        <Text style={styles.receivedText}>You Received</Text>
        <Text style={styles.messageCount}>12 messages</Text>
      </View>

      {/* RIGHT 2x2 SQUARE DOT MENU */}
      <View style={styles.squareMenu}>
        <View style={styles.menuRow}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.dot}>•</Text>
        </View>
        <View style={styles.menuRow}>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.dot}>•</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  textColumn: {
    flexDirection: "column",
  },

  hiText: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(255,255,255,0.5)",
    marginBottom: 3,
  },

  receivedText: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(255,255,255,0.75)",
    marginBottom: 3,
  },

  messageCount: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
    textDecorationLine: "underline",
  },

  // ⭐ NOW A PERFECT SQUARE
  squareMenu: {
    width: 40,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
  },

  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 4,
  },

  dot: {
    fontSize: 40,
    color: "#FFFFFF",
    lineHeight: 20,
  },
});

export default TopSection;

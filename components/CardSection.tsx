import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import AllMessagesSection from "./AllMessagesSection";
import HeaderRow from "./HeaderRow";
import PinnedMessagesSection from "./PinnedMessagesSection";

const { height } = Dimensions.get("window");

type ModalSectionProps = {
  visible: boolean;
  onClose: () => void;
  pinnedMessages: any[];
  allMessages: any[];
};

const CardSection: React.FC<ModalSectionProps> = ({
  visible,
  onClose,
  pinnedMessages,
  allMessages,
}) => {
  if (!visible) return null;
  return (
    <View style={styles.modal}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Row */}
        <HeaderRow />

        {/* Pinned Messages Section */}
        <PinnedMessagesSection pinnedMessages={pinnedMessages} />

        {/* All Messages Section */}
        <AllMessagesSection AllMessages={allMessages} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: height * 0.65, // 60% of screen
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default CardSection;

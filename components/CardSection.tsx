import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AllMessagesSection from "./AllMessagesSection";
import HeaderRow from "./HeaderRow";
import PinnedMessagesSection from "./PinnedMessagesSection";

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
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const heightPct = height < 700 ? 0.55 : height < 900 ? 0.65 : 0.72;
  const modalHeight = Math.max(300, Math.min(680, height * heightPct));
  return (
    <View
      style={[
        styles.modal,
        {
          flex:1,
          marginTop: 12,
          paddingBottom: 12 + insets.bottom,
          paddingLeft: 1,
          paddingRight: 1,
        },
      ]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 8 }}
      >
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
    backgroundColor: "#F7F7F7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default CardSection;

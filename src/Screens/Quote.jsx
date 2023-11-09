import React, { useRef } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const Quote = ({ data, renderReelItem }) => {
  const currentIndex = useRef(0);

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(yOffset / height);
  
    // Prevent rapid index updates
    if (currentIndex.current !== newIndex) {
      currentIndex.current = newIndex;
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ height: data.length * height }}
      snapToInterval={height}
      decelerationRate="fast"
      snapToAlignment="center"
      showsVerticalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {data.map((item, index) => (
        <View key={item.id} style={styles.reel}>
          {renderReelItem(item)}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reel: {
    width: "100%",
    height: height,
  },
});

export default Quote;
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
} from "react-native";
// import VerticalSwipeableReels from "./src/Screens/VerticalSwipeableReels";
import Quote from "./src/Screens/Quote";

const reelData = [
  {
    id: 1,
    content:
      "1कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    imageUrl: "URL_TO_IMAGE_1",
  },
  {
    id: 2,
    content:
      "2कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    imageUrl: "URL_TO_IMAGE_2",
  },
  {
    id: 3,
    content:
      "3कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    imageUrl: "URL_TO_IMAGE_3",
  },
];

const App = () => {
  const renderReelItem = (item) => (
    <View style={styles.reelItem}>
      <Text style={styles.contentText}>{item.content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <Quote
            data={reelData}
            renderReelItem={renderReelItem}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  reelItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    color: "white",
    fontSize: 20,
    paddingHorizontal:20,
  },
});

export default App;
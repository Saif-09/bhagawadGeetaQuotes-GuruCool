import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
import { onShare } from "../CommonFunctions/Functions";
import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = () => {
  // Height and width of the screen

  const HW = {
    screenHeight: Dimensions.get("window").height,
    screenWidth: Dimensions.get("window").width,
  };

  const [quote, setQuote] = useState(1);
  const [statement, setStatement] = useState("Geeta Quotes");
  console.log(HW);

  useEffect(() => {
    AsyncStorage.getItem("lastQuote").then((res) => {
      if (res == null) {
        AsyncStorage.setItem("lastQuote", JSON.stringify(1));
      } else {
        let q = JSON.parse(res);
        setQuote(q);
      }
    });
  }, []);

  return (
    <View>
      <StatusBar backgroundColor={"#F5B17D"} />
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View>
          <View>
            <ScrollView onScroll={() => {}}>
              <Button
                title="share"
                onPress={() => {
                  onShare(statement);
                }}
              />
              <Image
                source={require("../../assets/bg.jpg")}
                style={{ height: 50, width: 60 }}
              />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: "cyan",
  },
  logoImage: {
    height: 70,
    width: 50,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  //   Header: {
  //     height: HW.screenHeight,
  //   },
});

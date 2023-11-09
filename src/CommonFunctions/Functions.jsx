import { Share, Alert } from "react-native";

export const onShare = async (lineToShare) => {
  try {
    const result = await Share.share({
      message: lineToShare,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
        console.log("shared");
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

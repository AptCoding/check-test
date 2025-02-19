import { View, Text, Button } from "react-native";
import * as Notifications from "expo-notifications";

const NotificationsHomeScreen = () => {
  return (
    <View>
      <Text>Notifications</Text>

      <Button
        title="Schedule test notifications"
        onPress={schedulePushNotification}
      />
    </View>
  );
};

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "uday us herel! 📬",
      body: "Here is the notification body",
      data: { data: "goes here", test: { test1: "more data" } },
    },
    trigger: null,
  });
}

export default NotificationsHomeScreen;

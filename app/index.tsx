import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 14: Notifications" }} />
      <Text>Push Notifications Send and Receive Push Notification</Text>
      <Link href="/day14/notifications" asChild>
        <Button title="Go to Notifications" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;

import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Drugs({ drug }) {
  return (
    <View>
      <FlatList
        data={drug}
        renderItem={({ drug }) => <Text>{drug.data.email}</Text>}
      />
    </View>
  );
}

// const styles = StyleSheet.create({});

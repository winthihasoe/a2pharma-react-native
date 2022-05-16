import React from "react-native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AllDrugs({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [drugs, setDrugs] = useState();

  const allDrugs = () => {
    const drugUrl = "http://localhost:8000/api/drugs";
    fetch(drugUrl)
      .then((res) => res.json())
      .then((resjson) => setDrugs(resjson))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    allDrugs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.row,
          { marginBottom: 10, backgroundColor: "transparent" },
        ]}
      >
        <Text style={{ fontWeight: "bold" }}>Drug Name</Text>
        <Text style={{ fontWeight: "bold" }}>Retail Price</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="small" color="coral" />
      ) : (
        <FlatList
          data={drugs}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.drug_name}</Text>
              <Text>{item.retail_price} ks</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 3,
    padding: 8,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  titleName: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});

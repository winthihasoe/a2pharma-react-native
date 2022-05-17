import React from "react-native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import Search from "../components/Search";

export default function AllDrugs({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [drugs, setDrugs] = useState([]);
  const [filterDrug, setfilterDrug] = useState([]);
  const [search, setsearch] = useState("");

  const allDrugs = () => {
    const drugUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(drugUrl)
      .then((res) => res.json())
      .then((resjson) => {
        setDrugs(resjson);
        setfilterDrug(resjson);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    allDrugs();
    return () => {};
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = drugs.filter((item) => {
        const itemData = item.title ? item.title : "";
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setfilterDrug(newData);
      setsearch(text);
    } else {
      setfilterDrug(drugs);
      setsearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search drug"
          onChangeText={(text) => searchFilter(text)}
          value={search}
        />
      </View>

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
          data={filterDrug}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>
                {item.id}. {item.title}
              </Text>
              <Text>{item.id} ks</Text>
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
  searchContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
  },

  searchText: {
    fontSize: 20,
    textAlign: "center",
  },
});

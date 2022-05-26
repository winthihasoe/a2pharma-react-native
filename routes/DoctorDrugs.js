import React from "react-native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import axiosConfig from "../helpers/axiosConfig";
import { AuthContext } from "../context/AuthProvider";

export default function DoctorDrugs({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [drugs, setDrugs] = useState([]);
  const [filterDrug, setfilterDrug] = useState([]);
  const [search, setsearch] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    allDrugs();
  }, []);

  function allDrugs() {
    axiosConfig.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.token}`;
    axiosConfig
      .get("/drugs")
      .then((response) => {
        setDrugs(response.data);
        setfilterDrug(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const searchFilter = (text) => {
    if (text) {
      const newData = drugs.filter((item) => {
        const itemData = item.drug_name ? item.drug_name : "";
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
        <Text style={{ fontWeight: "bold" }}>Doctor Price</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size="small" color="coral" />
      ) : (
        <FlatList
          data={filterDrug}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowDrug", item)}
              style={styles.row}
            >
              <Text>
                {item.id}. {item.drug_name}
              </Text>
              <Text>
                {/* check for dr price if not, show retail price */}
                {/* please show latest update price in this table  */}
                {item.dr_price ? item.dr_price : item.retail_price} ks
              </Text>
            </TouchableOpacity>
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

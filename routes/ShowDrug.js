import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ShowDrug({ route, navigation }) {
  const item = route.params;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        {item.drug_name}
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>Retail Price: </Text>
        <Text style={styles.label}>{item.retail_price} ks</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Doctor Price: </Text>
        <Text style={styles.label}>{item.dr_price} ks</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Buying Price: </Text>
        <Text style={styles.label}>{item.buying_price} ks</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Supplier: </Text>
        <Text style={styles.label}>{item.supplier}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Purchased at: </Text>
        <Text style={styles.label}>{item.purchase_date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Created at: </Text>
        <Text style={styles.label}>{item.created_at.slice(0, 10)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Updated at: </Text>
        <Text style={styles.label}>{item.updated_at.slice(0, 10)}</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("EditDrug", item)}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          Edit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 8,
    marginBottom: 2,
  },
  label: {
    lineHeight: 30,
    fontSize: 16,
    fontStyle: "italic",
  },
  btn: {
    backgroundColor: "coral",
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
});

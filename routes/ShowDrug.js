import { View, Text, StyleSheet } from "react-native";

export default function ShowDrug({ route, navigation }) {
  const {
    id,
    drug_name,
    retail_price,
    dr_price,
    buying_price,
    supplier,
    purchase_date,
  } = route.params;
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
        {drug_name}
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>Retail Price: </Text>
        <Text style={styles.label}>{retail_price} ks</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Doctor Price: </Text>
        <Text style={styles.label}>{dr_price} ks</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Buying Price: </Text>
        <Text style={styles.label}>{buying_price} ks</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Supplier: </Text>
        <Text style={styles.label}>{supplier}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Purchased at: </Text>
        <Text style={styles.label}>{purchase_date}</Text>
      </View>
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
});

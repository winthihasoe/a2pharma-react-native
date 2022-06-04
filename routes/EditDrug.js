import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function EditDrug({ route, navigation }) {
  const {
    drug_name,
    retail_price,
    buying_price,
    dr_price,
    supplier,
    purchase_date,
  } = route.params;
  const [drugName, setDrugName] = useState(drug_name);
  const [retailPrice, setRetailPrice] = useState(retail_price);
  const [drPrice, setDrPrice] = useState(dr_price);
  const [buyingPrice, setBuyingPrice] = useState(buying_price);
  const [supplierName, setSupplierName] = useState(supplier);
  const [purchaseDate, setPurchaseDate] = useState(purchase_date);

  const update = () => {
    if (!drugName || !retailPrice) {
      return alert("Drug name and retail price is required!");
    }
    // Update to database code here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.twoColumn}>
          <View style={{ width: "49%" }}>
            <Text style={styles.labelFor}>Drug Name</Text>
            <TextInput
              style={styles.inputField}
              value={drugName}
              onChangeText={(val) => setDrugName(val)}
              autoCorrect={false}
              clearButtonMode="while-editing"
              autoFocus
            />
          </View>
          <View style={{ width: "49%" }}>
            <Text style={styles.labelFor}>Buying Price</Text>
            <TextInput
              style={styles.inputField}
              keyboardType="numeric"
              value={buyingPrice}
              onChangeText={(val) => setBuyingPrice(val)}
            />
          </View>
        </View>

        <View style={styles.twoColumn}>
          <View style={{ width: "49%" }}>
            <Text style={styles.labelFor}>Retail Price</Text>
            <TextInput
              style={styles.inputField}
              value={retailPrice}
              onChangeText={(val) => setRetailPrice(val)}
              keyboardType="numeric"
            />
          </View>
          <View style={{ width: "49%" }}>
            <Text style={styles.labelFor}>Doctor Price</Text>
            <TextInput
              style={styles.inputField}
              keyboardType="numeric"
              value={drPrice}
              onChangeText={(val) => setDrPrice(val)}
            />
          </View>
        </View>

        <View style={styles.twoColumn}>
          <View style={{ width: "49%" }}>
            <Text style={styles.labelFor}>Supplier</Text>
            <TextInput
              style={styles.inputField}
              value={supplierName}
              onChangeText={(val) => setSupplierName(val)}
            />
          </View>
          <View style={{ width: "49%" }}>
            <Text style={styles.labelFor}>Purchase Date</Text>
            <TextInput
              style={styles.inputField}
              keyboardType="numeric"
              value={purchaseDate}
              onChangeText={(val) => setPurchaseDate(val)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={update}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  inner: {
    flex: 1,
  },
  twoColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelFor: {
    fontSize: 15,
    marginBottom: 8,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "white",
    marginBottom: 10,
  },
  btnContainer: {
    height: 40,
    marginTop: 12,
    backgroundColor: "coral",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  savedDataContainer: {
    padding: 30,
    alignItems: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn: {
    backgroundColor: "coral",
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
});

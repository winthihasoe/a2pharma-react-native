import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Platform,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState, useContext } from "react";
import axiosConfig from "../helpers/axiosConfig";
import { AuthContext } from "../context/AuthProvider";

const AddDrug = ({ navigation }) => {
  const [drug_name, setdrug_name] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [drPrice, setDrPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const [showButton, setShowButton] = useState(true);
  const [newDrug, setNewDrug] = useState([]);

  const { user } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const add = () => {
    if (drug_name.length < 2) {
      return alert("Drug name is required");
    }

    if (retailPrice.length < 1) {
      return alert("Please add Retail price");
    }
    setNewDrug([
      { drug_name, buyPrice, retailPrice, drPrice, supplier, purchaseDate },
    ]);

    setIsLoading(true);

    axiosConfig.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${user.token}`;
    axiosConfig
      .post("/drugs", {
        drug_name,
        retail_price: retailPrice,
        dr_price: drPrice,
        buying_price: buyPrice,
        supplier,
        purchase_date: purchaseDate,
      })
      .then((response) => {
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.response);
        setIsLoading(false);
      });

    setdrug_name("");
    setBuyPrice("");
    setRetailPrice("");
    setDrPrice("");
    setSupplier("");
    setPurchaseDate("");
  };

  const Separator = () => <View style={styles.separator} />;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.twoColumn}>
            <View style={{ width: "49%" }}>
              <Text style={styles.labelFor}>Drug Name</Text>
              <TextInput
                style={styles.inputField}
                value={drug_name}
                onChangeText={(val) => setdrug_name(val)}
                autoCorrect={false}
                clearButtonMode="while-editing"
                autoFocus
              />
            </View>
            <View style={{ width: "49%" }}>
              <Text style={styles.labelFor}>Buying Price</Text>
              <TextInput
                style={styles.inputField}
                value={buyPrice}
                onChangeText={(val) => setBuyPrice(val)}
                keyboardType="numeric"
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
                value={drPrice}
                onChangeText={(val) => setDrPrice(val)}
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.twoColumn}>
            <View style={{ width: "49%" }}>
              <Text style={styles.labelFor}>Supplier</Text>
              <TextInput
                style={styles.inputField}
                value={supplier}
                onChangeText={(val) => setSupplier(val)}
              />
            </View>
            <View style={{ width: "49%" }}>
              <Text style={styles.labelFor}>Purchase Date</Text>
              <TextInput
                style={styles.inputField}
                value={purchaseDate}
                onChangeText={(val) => {
                  setPurchaseDate(val);
                }}
                keyboardType="numeric"
              />
            </View>
          </View>
          {showButton && (
            <TouchableOpacity
              onPress={add}
              style={{
                backgroundColor: "coral",
                borderRadius: 10,
                padding: 10,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {isLoading && <ActivityIndicator color="white" />}
              <Text style={{ textAlign: "center", color: "white" }}>Done</Text>
            </TouchableOpacity>
          )}

          <Separator />

          <FlatList
            data={newDrug}
            renderItem={({ item }) => (
              <View style={styles.savedDataContainer}>
                <Text style={{ fontSize: 20, marginBottom: 8 }}>
                  -- Saved Drug Detail --
                </Text>

                <Text>Drug Name: {item.drug_name}</Text>
                <Text>Retail: {item.retailPrice} ks</Text>
                <Text>Doctor: {item.drPrice} ks</Text>
                <Text>Buying: {item.buyPrice} ks</Text>
                <Text>Supplier: {item.supplier}</Text>
                <Text>Purchase at: {item.purchaseDate}</Text>

                <Text>________________________________</Text>
              </View>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

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
});

export default AddDrug;

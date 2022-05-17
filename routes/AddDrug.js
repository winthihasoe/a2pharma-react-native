import {
  Text,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Button,
  DatePicker,
} from "react-native";
import { useState } from "react";

const AddDrug = ({ navigation }) => {
  const [drugName, setDrugName] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [drPrice, setDrPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
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
                value={drugName}
                onChangeText={(val) => setDrugName(val)}
                autoCorrect={false}
                caretHidden={true}
                clearButtonMode="while-editing"
                returnKeyType="next"
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
                onChangeText={(val) => setPurchaseDate(val)}
              />
            </View>
          </View>

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
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
    marginTop: 12,
  },
});

export default AddDrug;

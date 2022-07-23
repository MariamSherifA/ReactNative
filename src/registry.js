import React from "react";
import { useFormik } from "formik";
import { Text, TextInput, View } from "react-native";
import { Button } from "@rneui/themed";

function Registry({ navigation }) {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { name: "", email: "", password: "" },
    onSubmit: (values) => alert(JSON.stringify(values.name + values.email)),
  });
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 200,
      }}
    >
      <Text style={{ color: "blue", fontSize: 20, marginBottom: 15 }}>
        {" "}
        You must Register to Download{" "}
      </Text>
      <TextInput
        style={{ width: 100 }}
        placeholder="enter email"
        onChangeText={handleChange("email")}
      />
      <TextInput
        placeholder="enter password"
        secureTextEntry
        onChangeText={handleChange("password")}
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
}

export default Registry;

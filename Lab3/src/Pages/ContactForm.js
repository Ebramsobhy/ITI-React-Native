import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Switch } from "react-native";


export default function ContactForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLogin = () => {

    const validationErrors = {};

    if (username.trim().length < 3) {
      validationErrors.username = "Username must be at least 3 characters long";
    }

    if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      validationErrors.email = "Invalid email format";
    }

    if (!phoneNumber.match(/^\d+$/)) {
      validationErrors.phoneNumber = "Phone number must be a number";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUsername("");
    setPassword("");
    setEmail("");
    setPhoneNumber("");
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      {errors.username && <Text style={styles.error}>{errors.username}</Text>}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      {errors.phoneNumber && (
        <Text style={styles.error}>{errors.phoneNumber}</Text>
      )}

      <Button title="Login" onPress={handleLogin} />

      <View style={styles.togglePasswordContainer}>
        <Text>Show Password</Text>
        <Switch
          value={showPassword}
          onValueChange={(value) => setShowPassword(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
  togglePasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});
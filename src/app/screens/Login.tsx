import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    //Gradiente de Fundo
    <LinearGradient
      colors={["#120D02", "#EBCA7F"]}
      locations={[0.31, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* Logo */}
      <Image
        source={require("../assets/BAZARWhite-Photoroom (1).png")}
        style={styles.logo}
      />

      {/* Título */}
      <Text style={styles.title}>Log In</Text>

      {/* Inputs */}
      <TextInput
        placeholder="Nome de Usuário"
        placeholderTextColor="#ccc"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={[{ flex: 1, borderWidth: 0, paddingHorizontal: 15, }]}
        />
        <TouchableOpacity style={styles.eyeButton}>
          <Ionicons name="eye-off" size={22} color="#ccc" />
        </TouchableOpacity>
      </View>

      {/* Esqueceu a senha */}
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotText}>Esqueceu a Senha?</Text>
      </TouchableOpacity>

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: 275,
    height: 135,
    margin: 25,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffffff",
    marginTop: 60,
    marginBottom: 20,
    fontFamily: "serif", // se quiser fonte customizada igual no mockup
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ffffffff",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#ffffffff",
    fontSize: 14,
  },
  passwordContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ffffffff",
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 10,
  },
  eyeButton: {
    paddingHorizontal: 12,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 45,
  },
  forgotText: {
    color: "#ffffffff",
    fontWeight: "500",
    fontSize: 14,
  },
  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#120D02",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

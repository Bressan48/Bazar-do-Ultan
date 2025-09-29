//Login.tsx
import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

//autenticação
import { useAuth } from "../components/AuthContext";
import { useState } from "react";

export default function Login({ navigation }: any) {

  //variáveis de Login
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    const ok = login(name, email, password);
    if (ok) {
      Alert.alert("Sucesso", "Login realizado com sucesso!");
      navigation.navigate("Home");
    } else {
      Alert.alert("Erro", "Credenciais inválidas");
    }
  }

  const [fontsLoaded] = useFonts({
    JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
  });

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
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        style={styles.input}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={[{ flex: 1, borderWidth: 0, paddingHorizontal: 15, color: "#ffffffff" }]}
          onChangeText={setPassword}
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
    fontSize: 45,
    color: "#ffffffff",
    marginTop: 60,
    marginBottom: 20,
    fontFamily: "JainiPurva",
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
    fontFamily: "JainiPurva",
    color: "#ffffffff",
    fontSize: 30,
  },
});

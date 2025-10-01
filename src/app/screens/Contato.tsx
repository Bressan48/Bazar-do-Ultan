//Contato.tsx

import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

export default function Contato() {

  const [fontsLoaded] = useFonts({
    JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
  });

  return (
      //Gradiente de Fundo
      <LinearGradient
        colors={["#120D02", "#EBCA7F"]}
        locations={[0.70, 1]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.container}>
                
                {/* Contato */}
                <Text style={styles.title}>
                    Entre em Contato!
                </Text>
                <TouchableOpacity style={styles.row}>
                    <Ionicons name="call" size={20} color="#fff" />
                    <Text style={styles.text}>(32) 98899-7777</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}>
                    <Ionicons name="mail" size={20} color="#fff" />
                    <Text style={styles.text}>bazardoultan@gmail.com</Text>
                </TouchableOpacity>

                {/* Endereço */}
                <Text style={styles.title}>Nos Encontre!</Text>
                <View style={styles.row}>
                    <Ionicons name="location" size={20} color="#fff" />
                    <Text style={styles.text}>Rua Caverna Secreta, 777 {"\n"}Juiz de Fora</Text>
                </View>
                <Text style={styles.text}>Aberto de segunda a sexta.{"\n"}Das 10:00 às 19:00.</Text>

                {/* Redes Sociais */}
                <Text style={styles.title}>Siga-nos nas Redes Sociais!</Text>
                <View style={styles.social}>
                    <TouchableOpacity>
                        <FontAwesome name="facebook-official" size={32} color="#fff" style={styles.socialIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="instagram" size={32} color="#fff" style={styles.socialIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="twitter" size={32} color="#fff" style={styles.socialIcon}/>
                    </TouchableOpacity>
                </View>

                {/* Logo */}
                <View style={styles.logoContainer}>
                    <Image
                    source={require("../assets/BAZARWhite-Photoroom (1).png")}
                    resizeMode="contain"
                    style={styles.logo}
                    />
                </View>
            </ScrollView>
        </LinearGradient>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "JainiPurva",
    fontSize: 35,
    color: "#EBCA7F",
    marginTop: 15,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  text: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 18,
  },
  social: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
  },
  socialIcon: {
    fontSize: 40,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 100,
    marginTop: 100,
  },
});

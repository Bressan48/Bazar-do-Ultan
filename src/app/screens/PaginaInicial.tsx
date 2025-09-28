//PaginaInicial.tsx
import { Text, ScrollView, ImageBackground, Image, StyleSheet, FlatList, } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Carrossel from "../components/Carrossel";
import Destaques from "../components/Destaques";
import { useFonts } from "expo-font";

//Função Principal
export default function PaginaInicial() {

  const [fontsLoaded] = useFonts({
    JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
  });

  //Itens do Carrossel
  const [products, setProducts] = useState<any[]>([]);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://treinamentoapi.codejr.com.br/api/bressan/products");
      const json = await response.json();
      setProducts(json.products);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  };
  //carregamento dos produtos
   useFocusEffect(
    useCallback(() => {
      fetchProducts();
      return () => {};
    }, [])
  );
  const destaques = products.filter((p) => p.is_highlighted);
  const livros = products.filter((p) => p.type === "livro");
  const dados = products.filter((p) => p.type === "dado");
  const mapas = products.filter((p) => p.type === "mapa");

  

  //Return da View
  return (
    <ScrollView style={styles.container}>
        <ImageBackground source={require("../assets/Background1.png")} style={styles.background}>
          {/* Logo */}
        <Image source={require("../assets/BAZAR-FINAL-REAL.png")} style={styles.logo} />
        <Text style={styles.subtitle}>
          Livros, dados, mapas e tudo de RPG
        </Text>
        <Destaques
          title="PROMOÇÕES EM DESTAQUE!"
          data={destaques}
        />
        <Carrossel
          title="Livros"
          data={livros}
        />
        <Carrossel
          title="Dados"
          data={dados}
        />
        <Carrossel
          title="Mapas"
          data={mapas}
        />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    resizeMode: "cover",
    paddingTop: 60,
    paddingBottom: 60,
  },
  subtitle: {
    fontFamily: "JainiPurva",
    fontSize:23,
    marginBottom: 40,
  },
  logo: {
    width: 275,
    height: 135,
    marginBottom: 10,
  },
});

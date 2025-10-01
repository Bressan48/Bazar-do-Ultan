//PaginaInicial.tsx
import { Text, ScrollView, ImageBackground, Image, StyleSheet, } from "react-native";
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
  
  //FUNÇÃO LINDA E MARAVILHOSA PRA PEGAR TODOS OS PRODUTOS DO BANCO DE DADOS AMÉM
  async function fetchProducts() {
  try {
      const res = await fetch("https://treinamentoapi.codejr.com.br/api/bressan/products?page=1&per_page=10");
      const data = await res.json();
      let allProducts = [...data.products];
      const totalPages = data.last_page;
      if (totalPages > 1) {
        const requests = [];
        for (let page = 2; page <= totalPages; page++) {
          requests.push(
            fetch(`https://treinamentoapi.codejr.com.br/api/bressan/products?page=${page}&per_page=10`)
              .then(r => r.json())
          );
        }
        const results = await Promise.all(requests);
        results.forEach(p => {
          allProducts = [...allProducts, ...p.products];
        });
      }
      setProducts(allProducts);
      console.log("Todos os produtos carregados:", allProducts.length);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }
  //atualização de abertura:
  useEffect(() => {
      fetchProducts();
  }, []);

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

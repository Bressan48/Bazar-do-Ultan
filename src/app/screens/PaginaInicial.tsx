import { Text, ScrollView, ImageBackground, Image, StyleSheet, FlatList, } from "react-native";
import Carrossel from "../components/Carrossel";
import Destaques from "../components/Destaques";

import { useFonts } from "expo-font";

//Função Principal
export default function PaginaInicial() {

  const [fontsLoaded] = useFonts({
    JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
  });

  //Itens do Carrossel
  const destaques = [
    { id: "007", title: "Mapa de Batalha Floresta Negra", price: "R$ 10,00", image: require("../assets/Example.png") },
    { id: "008", title: "Livro Oficial Anima Beyond Fantasy", price: "R$ 40,00", image: require("../assets/Example.png") },
    { id: "009", title: "Dado d100 Edição Especial", price: "R$ 15,00", image: require("../assets/Example.png") },
  ];
  const livros = [
    { id: "01", title: "Livro Oficial - Anima", price: "R$ 60,00", image: require("../assets/Example.png"), },
    { id: "02", title: "Livro Oficial - Ordem Paranormal", price: "R$ 60,00", image: require("../assets/Example.png"), },
    { id: "03", title: "Livro Oficial - Dharma", price: "R$ 60,00", image: require("../assets/Example.png"), },
  ];
  const dados = [
    { id: "04", title: "Dado D20", price: "R$ 15,00", image: require("../assets/Example.png") },
    { id: "05", title: "Dado D12", price: "R$ 12,00", image: require("../assets/Example.png") },
    { id: "06", title: "Dado D8", price: "R$ 8,00", image: require("../assets/Example.png") },
  ];
  const mapas = [
    { id: "07", title: "Mapa de Batalha Floresta", price: "R$ 05,00", image: require("../assets/Example.png") },
    { id: "08", title: "Mapa de Templo Medieval", price: "R$ 05,00", image: require("../assets/Example.png") },
    { id: "09", title: "Mapa de Calabouço Completo", price: "R$ 10,00", image: require("../assets/Example.png") },
  ];

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

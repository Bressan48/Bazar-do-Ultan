//Carrossel.tsx
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

type Item = {
  id: string;
  title: string;
  price: string;
  image: any;
}

type Props = {
  title: string;
  data: Item[];
}

export default function Carrossel( {title, data}: Props ) {

  const [fontsLoaded] = useFonts({
    JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image source={item.image} style={styles.image} />
            <View style={styles.namePrice}>
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
      <TouchableOpacity >
          <Text style={styles.verMais}>Ver Mais</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: "JainiPurva",
    color: "#EBCA7F",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#1a0f00",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 150,
    resizeMode: "contain",
    backgroundColor: "#333",
    marginRight: 20,
    borderRadius: 8,
  },
  namePrice: {
    height: 50,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 12,
    color: "#ffffffff",
    textAlign: "left",
    marginTop: 3,
    width: 120,
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffffff",
    textAlign: "left",
  },
  verMais: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 22,
    fontFamily: "JainiPurva",
    color: "#EBCA7F",
  },
});

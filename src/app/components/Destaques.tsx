//Destaques.tsx
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  is_highlighted: boolean;
}

type Props = {
  title: string;
  data: Item[];
}

export default function Destaques( {title, data}: Props ) {
    
    const [fontsLoaded] = useFonts({
        JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
    });

    return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.namePrice}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
            </View>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
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
    paddingBottom: 20,
  },
  image: {
    width: 175,
    height: 220,
    resizeMode: "contain",
    backgroundColor: "#333",
    marginRight: 20,
    borderRadius: 8,
  },
  namePrice: {
    height: 60,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 14,
    color: "#ffffffff",
    textAlign: "left",
    marginTop: 3,
    width: 175,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ffffffff",
    textAlign: "left",
  },
});

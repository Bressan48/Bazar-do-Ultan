//Gerenciamento.tsx
import { Text, ScrollView, View, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";


//Função Principal
export default function Gerenciamento() {

  const [fontsLoaded] = useFonts({
    JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
  });

  return(
    <ScrollView style={styles.container}>

        <ImageBackground source={require("../assets/background2.png")} style={styles.background}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Gerenciar Produtos</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={35} color="#ffffffff" />
                </TouchableOpacity>
            </View>

            {/* Cabeçalho da Tabela */}
            <View style={styles.tableHeader}>
                <View style={{ flex: 5, alignItems: "center" }}>
                    <Text style={styles.headerText}>Nome</Text>
                </View>
                <View style={{ flex: 1, height:"100%", alignItems: "center", justifyContent: "center", borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#EBCA7F" }}>
                    <Text style={styles.headerText}>ID</Text>
                </View>
                <View style={{ flex: 3, alignItems: "center" }}>
                    <Text style={styles.headerText}>Ações</Text>
                </View>
            </View>

            {/* Tabela */}
            
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
        resizeMode: "cover",
        paddingTop: 60,
        paddingBottom: 60,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,

    },
    title: {
        color: "#ffffffff",
        fontFamily: "JainiPurva",
        fontSize: 30,
    },
    addButton: {
        backgroundColor: "#120D02",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#EBCA7F",
        padding: 6,
    },
    tableHeader:
    {
        backgroundColor: "#120D02",
        width: "100%",
        height: 50,
        marginTop: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: "#EBCA7F",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        color: "#ffffffff",
        fontWeight: "bold",
        fontSize: 16,
    },
    headerTextID: {
        color: "#ffffffff",
        height: "100%",
        width: "100%",
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "#EBCA7F",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
    },

});
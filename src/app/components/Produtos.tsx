//Produtos.tsx
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  is_highlighted: boolean;
}

type Props = {
  data: Item[];
}

export default function Produtos( { data }: Props ) {

    // Paginação
    const itemsPerPage = 7; // quantidade de itens por página
    const [page, setPage] = useState(0);
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const currentData = data.slice(start, end);
    const nextPage = () => {
        if (end < data.length) setPage(page + 1);
    };
    const prevPage = () => {
        if (page > 0) setPage(page - 1);
    };

    //Renderização do Componente
    return (
    <View>
        {/* Flatlist dos Produtos */}
        <FlatList
            data={currentData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <View style={styles.product}>
                <View style={{ flex: 5, alignItems: "center" }}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style={{ flex: 1, height:"100%", alignItems: "center", justifyContent: "center", borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#EBCA7F" }}>
                    <Text style={styles.text}>{item.id}</Text>
                </View>
                <View style={{ flex: 3, alignItems: "center", flexDirection: "row", justifyContent: "center", gap: 10 }}>
                    <TouchableOpacity>
                    <Ionicons name="eye-outline" size={25} color="#EBCA7F" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionicons name="create-outline" size={25} color="#EBCA7F" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionicons name="trash-outline" size={25} color="#EBCA7F" />
                    </TouchableOpacity>
                </View>
            </View>
            )}
            showsVerticalScrollIndicator={false}
        />
        {/* Paginação */}
        <View style={styles.pagination}>
            <TouchableOpacity
            onPress={prevPage}
            disabled={page === 0}
            style={[ page === 0 && { opacity: 0.2 }]}
            >
            <Text> <Ionicons name="chevron-back-outline" size={30} color="#EBCA7F" /></Text>
            </TouchableOpacity>

            <Text style={styles.pageInfo}>
            {page + 1} de {Math.ceil(data.length / itemsPerPage)}
            </Text>

            <TouchableOpacity
            onPress={nextPage}
            disabled={end >= data.length}
            style={[ end >= data.length && { opacity: 0.2 }]}
            >
            <Text> <Ionicons name="chevron-forward-outline" size={30} color="#EBCA7F" /> </Text>
            </TouchableOpacity>
        </View>
    </View>

  );
}

const styles = StyleSheet.create  ({
    product: {
        backgroundColor: "#120D02",
        width: "100%",
        height: 65,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#EBCA7F",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "#ffffffff",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
    },
    pagination: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginTop: 15,
    },
    pageInfo: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
    },
})
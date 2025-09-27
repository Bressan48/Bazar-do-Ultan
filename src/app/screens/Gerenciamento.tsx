//Gerenciamento.tsx
import { Text, ScrollView, View, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import Produtos from "../components/Produtos";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

//Importação dos modais
import ModalCreate from "../components/CustomModals/ModalCreate";
import ModalEdit from "../components/CustomModals/ModalEdit";
import ModalView from "../components/CustomModals/ModalView";
import ModalDelete from "../components/CustomModals/ModalDelete";

//Função Principal
export default function Gerenciamento() {

  const [fontsLoaded] = useFonts({
    JainiPurva: require("../assets/fonts/jaini-purva-latin-400-normal.ttf"),
  });

  //declaração dos produtos
    const [produtos, setProdutos] = useState<any[]>([]);
    useEffect(() => 
    {
        fetch("https://treinamentoapi.codejr.com.br/api/bressan/products")
        .then((response) => response.json())
        .then((data) => {
            console.log("Resposta da API:", data);
            setProdutos(data.products); //pega o array de products
        })
        .catch((error) => {
            console.error("Erro ao buscar produtos:", error);
        });
    }, []);

  //Propriedades dos modais
  const [criarVisible, setCriarVisible] = useState(false);
  const [editarVisible, setEditarVisible] = useState(false);
  const [visualizarVisible, setVisualizarVisible] = useState(false);
  const [excluirVisible, setExcluirVisible] = useState(false);

  //variavel para identicação/definição do produto selecionada
  const [produtoSelecionado, setProdutoSelecionado] = useState<any | null>(null);

  return(
    <View style={styles.container}>

        <ImageBackground source={require("../assets/background2.png")} style={styles.background}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Gerenciar Produtos</Text>

                {/* Botão de Criar */}
                <TouchableOpacity style={styles.addButton} onPress={()=>{setCriarVisible(true)}}>
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
            <Produtos
                data={produtos}
                onEdit={(item) => { setProdutoSelecionado(item); setEditarVisible(true); }}
                onView={(item) => { setProdutoSelecionado(item); setVisualizarVisible(true); }}
                onDelete={(item) => { setProdutoSelecionado(item); setExcluirVisible(true); }} 
            />

            {/* Modais */}
            <ModalCreate 
                visible={criarVisible} 
                onClose={() => setCriarVisible(false)} 
                onCreated={() => {
                    //refaz o fetch dos produtos
                    fetch("https://treinamentoapi.codejr.com.br/api/bressan/products")
                    .then((response) => response.json())
                    .then((data) => setProdutos(data.products))
                    .catch((error) => console.error("Erro ao buscar produtos:", error));
                }}
            />
            <ModalEdit
                visible={editarVisible}
                product={produtoSelecionado}
                onClose={() => setEditarVisible(false)}
                onUpdated={() => {
                    fetch("https://treinamentoapi.codejr.com.br/api/bressan/products")
                        .then(res => res.json())
                        .then(data => setProdutos(data.products));
                }}
            />
            <ModalView
                visible={visualizarVisible}
                product={produtoSelecionado}
                onClose={() => setVisualizarVisible(false)}
            />
            <ModalDelete
                visible={excluirVisible}
                product={produtoSelecionado}
                onClose={() => setExcluirVisible(false)}
                //função de excluir
                onDelete={async (product) => {
                    try {
                        const res = await fetch(`https://treinamentoapi.codejr.com.br/api/bressan/products/${product.id}`, {
                            method: "DELETE",
                        });
                        if (!res.ok) throw new Error("Erro ao deletar produto");
                        Alert.alert("Produto deletado com sucesso!");
                        setProdutos(produtos.filter(p => p.id !== product.id));
                        setExcluirVisible(false);
                    } catch (error) {
                        console.error(error);
                        Alert.alert("Erro ao deletar produto");
                    }
                }}
            />
            
        </ImageBackground>
    </View>
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

});
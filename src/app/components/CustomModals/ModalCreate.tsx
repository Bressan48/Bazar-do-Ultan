//ModalCreate.tsx
import { JSX, useState } from "react";
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Alert } from "react-native";
import { Pressable } from "react-native-gesture-handler";

type Props = {
    visible: boolean;
    onClose: () => void;
    onCreated: () => void;
}

export default function ModalCreate( {visible, onClose, onCreated}: Props ) {

    //declaração dos estados (atributos) do produto
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [is_highlighted, setIs_highlighted] = useState(false);

    //criação do produto
    const handleCreate = async () => {
        if (!name || !price || !type || !image) {
        Alert.alert("ERRO! Preencha todos os campos!");
        return;
        }
        try {
        const response = await fetch("https://treinamentoapi.codejr.com.br/api/bressan/products", {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                price: parseFloat(price),
                type,
                image,
                is_highlighted,
            }),
        });
        if (!response.ok) {
            throw new Error("Erro ao criar produto.");
        }
        const data = await response.json();
        console.log("Produto criado:", data);
        Alert.alert("Produto criado com sucesso!");
        onClose();
        onCreated();
        } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível criar o produto.");
        }
    };

    //Exibição do modal
    return(
        <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Adicionar Produto</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.buttonText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    {/* nome do produto */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Nome:</Text>
                        <TextInput 
                            value={name} onChangeText={setName}
                            placeholder="Nome" style={styles.input}>   
                        </TextInput>
                    </View>
                    {/* preço do produto */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Preço:</Text>
                        <TextInput 
                            value={price} onChangeText={setPrice}
                            placeholder="Preço" style={styles.input}>
                        </TextInput>
                    </View>
                    {/* tipo do produto */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Tipo:</Text>
                        <TextInput 
                            value={type} onChangeText={setType}
                            placeholder="Tipo" style={styles.input}>
                        </TextInput>
                    </View>
                    {/* highlight do produto */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputCarrossel}>Estará no Carrossel?</Text>
                        <Switch
                            value={is_highlighted}
                            onValueChange={setIs_highlighted}   
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={is_highlighted ? "#f5dd4b" : "#f4f3f4"}
                            style={styles.switch}
                        />
                    </View>
                    {/* imagem do produto */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Anexar Imagem:</Text>
                        <TextInput 
                            value={image} onChangeText={setImage}
                            placeholder="URL da Imagem" style={styles.input}>
                        </TextInput>
                    </View>
                    {/* <TouchableOpacity style={styles.imageButton}>
                        <Text>Anexar Imagem</Text>
                    </TouchableOpacity> */}
                    
                    {/* Botão de Criar */}
                    <TouchableOpacity onPress={handleCreate} style={styles.createButton}>
                        <Text style={{ color: "#000000ff", fontWeight: "bold" }}>Criar Produto</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </Modal>
    )
}

//estilo
const styles = StyleSheet.create ({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
        height: "70%",
        width: "85%",
        alignItems: "center",
        gap: 15,
        backgroundColor: "white", 
    },
    title: {
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 30,
    },
    titleText: {
        marginLeft: "20%",
        fontSize: 18,
    },
    closeButton:
    {
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "black",
        marginRight: 10,
        backgroundColor: "red",
    },
    buttonText: {
        color: "white",
        fontSize: 25,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    inputTitle: {
        width: "15%", 
        justifyContent: "flex-start",
        fontSize: 16,
    },
    input: {
        width: "70%",
        borderWidth: 1,
        borderBottomColor: "black",
    },
    inputCarrossel: {
        width: "45%", 
        justifyContent: "flex-start",
        fontSize: 16,
    },
    imageButton: {
        margin: 20,
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 1,
        borderBottomColor: "black",
    },
    switch: {
        justifyContent: "center",
        width: "40%",
        borderWidth: 1,
        borderBottomColor: "black",
    },
    createButton: {
        margin: 20,
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 1,
        borderBottomColor: "black",
    }
})
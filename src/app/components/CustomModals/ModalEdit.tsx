//ModalEdit.tsx
import { useState, useEffect } from "react";
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Alert, Image, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';

type Product = {
    id: string;
    name: string;
    price: number;
    type: string;
    image: string;
    is_highlighted: boolean;
};

type Props = {
    visible: boolean;
    product: Product | null;
    onClose: () => void;
    onUpdated: () => void;
    readonly?: boolean;
};

export default function ModalEdit({ visible, product, onClose, onUpdated, readonly = false }: Props) {

    //declaração dos estados (atributos) do produto
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [is_highlighted, setIs_highlighted] = useState(false);

    //carrega produto requisitado
    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price.toString());
            setType(product.type);
            setImage(product.image);
            setIs_highlighted(!!product.is_highlighted);
        }
    }, [product]);
    //constante para realizar o update/edit
    const handleUpdate = async () => {
        if (!name || !price || !type || !image) {
            Alert.alert("ERRO! Preencha todos os campos!");
            return;
        }
        try {
            const response = await fetch(`https://treinamentoapi.codejr.com.br/api/bressan/products/${product?.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    price: parseFloat(price),
                    type,
                    image,
                    is_highlighted,
                }),
            });
            if (!response.ok) throw new Error("Erro ao atualizar produto");
            Alert.alert("Produto atualizado com sucesso!");
            onClose();
            onUpdated();
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", "Não foi possível atualizar o produto.");
        }
    };

    
    //função para pegar imagem
    const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        alert('Permissão negada!');
        return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
    });
    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
    };
    

    //visualização/renderização do modal
    return (
        <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 80, gap: 15 }}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{readonly ? "Visualizar Produto" : "Editar Produto"}</Text>
                            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                                <Text style={styles.buttonText}>X</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Nome:</Text>
                            <TextInput value={name} onChangeText={setName} placeholder="Nome" style={styles.input} editable={!readonly} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Preço:</Text>
                            <TextInput value={price} onChangeText={setPrice} placeholder="Preço" style={styles.input} editable={!readonly} />
                        </View>
                        {/* tipo do produto */}
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputTitle}>Tipo:</Text>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                {["livro", "dado", "mapa"].map((item) => (
                                    <TouchableOpacity
                                        key={item}
                                        onPress={() => setType(item)}
                                        style={{
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            borderWidth: 1,
                                            borderColor: type === item ? "blue" : "gray",
                                            backgroundColor: type === item ? "#cce5ff" : "#fff",
                                            borderRadius: 5,
                                        }}
                                    >
                                        <Text style={{ textTransform: "capitalize" }}>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputCarrossel}>Estará no Carrossel?</Text>
                            <Switch value={is_highlighted} onValueChange={setIs_highlighted} disabled={readonly}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={is_highlighted ? "#568ce9ff" : "#f4f3f4"}
                                style={styles.switch}
                            />
                        </View>

                        {/* imagem do produto */}
                        <View style={styles.inputContainerImage}>
                            <Text style={styles.inputTitleImage}>Imagem URL:</Text>
                            <TextInput
                                value={image}
                                onChangeText={setImage}
                                placeholder="URL ou selecione do celular"
                                style={styles.input}
                            />
                            <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
                                <Text>Selecionar</Text>
                            </TouchableOpacity>
                        </View>
                        {/* preview da imagem */}
                        {image ? (
                        <Image
                            source={{ uri: image }}
                            style={{ width: "70%", height: 200, marginTop: 10, borderRadius: 5 }}
                            resizeMode="contain"
                        />
                        ) : null}

                        {!readonly && (
                            <TouchableOpacity onPress={handleUpdate} style={styles.createButton}>
                                <Text style={{ color: "#000", fontWeight: "bold" }}>Salvar Alterações</Text>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
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
        borderRadius: 10,
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
        fontSize: 20,
        fontWeight: "bold",
    },
    closeButton:
    {
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: "black",
        marginRight: 20,
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
    inputContainerImage: {
        maxWidth: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    inputTitle: {
        width: "15%", 
        justifyContent: "flex-start",
        fontSize: 16,
    },
    inputTitleImage: {
        width: "30%", 
        justifyContent: "flex-start",
        fontSize: 16,
    },
    input: {
        width: "70%",
        maxWidth: "70%",
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

// ModalView.tsx
import { useState, useEffect } from "react";
import { Modal, View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from "react-native";

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
};

export default function ModalView({ visible, product, onClose }: Props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [is_highlighted, setIs_highlighted] = useState(false);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setPrice(product.price.toString());
            setType(product.type);
            setImage(product.image);
            setIs_highlighted(!!product.is_highlighted);
        }
    }, [product]);

    return (
        <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Visualizar Produto</Text>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={styles.buttonText}>X</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Nome:</Text>
                        <TextInput value={name} style={styles.input} editable={false} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Preço:</Text>
                        <TextInput value={price} style={styles.input} editable={false} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Tipo:</Text>
                        <TextInput value={type} style={styles.input} editable={false} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputCarrossel}>Estará no Carrossel?</Text>
                        <Switch 
                            value={is_highlighted} disabled 
                            trackColor={{ false: "#767577", true: "#dbe7ffff" }}
                            thumbColor={is_highlighted ? "#9dbaedff" : "#f4f3f4"}
                            style={styles.switch}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>URL da Imagem:</Text>
                        <TextInput value={image} style={styles.input} editable={false} />
                    </View>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
        marginLeft: "17%",
        fontSize: 20,
        fontWeight: "bold",
    },
    closeButton: {
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
    switch: {
        justifyContent: "center",
        width: "40%",
        borderWidth: 1,
        borderBottomColor: "black",
    },
});

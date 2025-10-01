// ModalDelete.tsx
import { Modal, View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";

type Product = {
    id: string;
    name: string;
};

type Props = {
    visible: boolean;
    product: Product | null;
    onClose: () => void;
    onDelete: (product: Product) => void;
};

export default function ModalDelete({ visible, product, onClose, onDelete }: Props) {
    if (!product) return null;

    const handleDelete = () => {
        Alert.alert(
            "Confirmar exclusão",
            `Deseja realmente deletar o produto "${product.name}"?`,
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Deletar", style: "destructive", onPress: () => onDelete(product) }
            ]
        );
    };

    return (
        <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <Text style={styles.title}>Deletar Produto</Text>
                    <Text style={styles.message}>
                        Tem certeza que deseja deletar o produto{"\n"}
                    </Text>
                    <Text style={styles.productName}>
                        "{product.name}"?
                    </Text>

                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancelButton]}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDelete} style={[styles.button, styles.deleteButton]}>
                            <Text style={styles.buttonText}>Deletar</Text>
                        </TouchableOpacity>
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
        width: "85%",
        height: "28%",
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        width: "100%",
        marginTop: 10,
        height: "17%",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginBottom: 20,
        textAlign: "center",
        justifyContent: "center",
    },
    message: {
        fontSize: 16,
        textAlign: "center",
        justifyContent: "center",
        paddingRight: 20,
        paddingLeft: 20,
    },
    productName: {
        fontSize: 16,
        color: "blue",
        textAlign: "center",
        justifyContent: "center",
        marginBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
    },
    buttons: {
        flexDirection: "row",
        gap: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    button: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        alignItems: "center",
        paddingRight: 20,
        paddingLeft: 20,
    },
    cancelButton: {
        backgroundColor: "#ccc",
    },
    deleteButton: {
        backgroundColor: "red",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});

import { JSX } from "react";
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from "react-native";
import { Pressable } from "react-native-gesture-handler";

type Props = {
    visible: boolean;
    onClose: () => void;
}

export default function ModalCreate( {visible, onClose}: Props ) {
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

                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Nome:</Text>
                        <TextInput placeholder="Nome" style={styles.input}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Preço:</Text>
                        <TextInput placeholder="Preço" style={styles.input}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputTitle}>Tipo:</Text>
                        <TextInput placeholder="Tipo" style={styles.input}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.imageButton}>
                        <Text>Anexar Imagem</Text>
                    </TouchableOpacity>

                    
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    content: {
        height: "45%",
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
    imageButton: {
        margin: 20,
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
        borderWidth: 1,
        borderBottomColor: "black",
    }
})
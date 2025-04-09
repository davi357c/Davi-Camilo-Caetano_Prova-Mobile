import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import {useState} from 'react';

export default function FaleConosco() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [comentario, setComentario] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fale conosco: </Text>
            <View style={styles.inputs}>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder="Nome"
                        onChangeText={setNome}
                        value={nome}
                    />
                    <Text>Nome: {nome}</Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder="E-mail"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Text>Email: {email}</Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                        placeholder="Comentário"
                        onChangeText={setComentario}
                        value={comentario}
                    />
                    <Text>Comentário: {comentario}</Text>
                </View>
            </View>
            <Button
                title="Enviar"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e9ff',
        padding: 50,
        paddingTop: 180,
        paddingBottom: 180,
        justifyContent: 'space-between'
    },
    title: {   
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputs: {
        gap: 10
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#cef',
        borderRadius: '10px'
    },
});
import { StyleSheet, Text, TextInput, Button, View, } from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça o login: </Text>
            <View style={styles.inputs}>
                <TextInput style={styles.textInput}
                    placeholder="E-mail"
                />
                <TextInput style={styles.textInput}
                    placeholder="Senha"
                />
            </View>
            <Button
                title="Entrar" onPress = {() => navigation.navigate("DepoisLogin")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e9ff',
        padding: 50,
        paddingTop: 250,
        paddingBottom: 250,
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

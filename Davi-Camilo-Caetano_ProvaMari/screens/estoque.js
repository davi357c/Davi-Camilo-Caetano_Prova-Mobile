import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { useState } from 'react';

import Tenis1 from "../images/tenis1.jpg"
import Tenis2 from "../images/tenis2.jpg"
import Tenis3 from "../images/tenis3.jpg"
import Tenis4 from "../images/tenis4.jpg"
import Tenis5 from "../images/tenis5.jpg"



export default function Estoque() {
    const [numero1, setNumero1] = useState(0)

    function Aumentar1() {
        setNumero1(numero1 + 1)
    }
    
    function Diminuir1() {
        if (numero1 > 0) {
            setNumero1(numero1 - 1)
        }
    }



    const [numero2, setNumero2] = useState(0)
    
    function Aumentar2() {
        setNumero2(numero2 + 1)
    }
    
    function Diminuir2() {
        if (numero2 > 0) {
            setNumero2(numero2 - 1)
        }
    }



    const [numero3, setNumero3] = useState(0)
    
    function Aumentar3() {
        setNumero3(numero3 + 1)
    }
    
    function Diminuir3() {
        if (numero3 > 0) {
            setNumero3(numero3 - 1)
        }
    }



    const [numero4, setNumero4] = useState(0)
    
    function Aumentar4() {
        setNumero5(numero4 + 1)
    }
    
    function Diminuir4() {
        if (numero4 > 0) {
            setNumero4(numero4 - 1)
        }
    }


    const [numero5, setNumero5] = useState(0)
    
    function Aumentar5() {
        setNumero5(numero5 + 1)
    }
    
    function Diminuir5() {
        if (numero5 > 0) {
            setNumero5(numero5 - 1)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.catalogo}>
                <View style={styles.item}>
                    <Image style={styles.images} source={Tenis1}></Image>
                    <Text style={styles.descricao}>Tênis Nike Revolution 7 Masculino - 38</Text>
                    <View style={styles.inline}>
                        <View style={styles.widthButton}>
                            <Button title="-" OnPress={Diminuir1}/>
                        </View>
                        <View style={styles.widthButton}>
                            <Button title="+" OnPress={Aumentar1}/>
                        </View>
                        <Text>{numero1}</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image style={styles.images} source={Tenis2}></Image>
                    <Text style={styles.descricao}>Tênis Olympikus Swift 4 Feminino Rosa / Coral</Text>
                    <View style={styles.inline}>
                        <View style={styles.widthButton}>
                            <Button title="-" OnPress={Diminuir2}/>
                        </View>
                        <View style={styles.widthButton}>
                            <Button title="+" OnPress={Aumentar2}/>
                        </View>
                        <Text>{numero2}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.catalogo}>
                <View style={styles.item}>
                    <Image style={styles.images} source={Tenis3}></Image>
                    <Text style={styles.descricao}>Tênis de Malha Esportivo - Preto</Text>
                    <View style={styles.inline}>
                        <View style={styles.widthButton}>
                            <Button title="-" OnPress={Diminuir3}/>
                        </View>
                        <View style={styles.widthButton}>
                            <Button title="+" OnPress={Aumentar3}/>
                        </View>
                        <Text>{numero3}</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image style={styles.images} source={Tenis4}></Image>
                    <Text style={styles.descricao}>Tênis Nike Court Vision Lo DH2987 Masculino</Text>
                    <View style={styles.inline}>
                        <View style={styles.widthButton}>
                            <Button title="-" OnPress={Diminuir4}/>
                        </View>
                        <View style={styles.widthButton}>
                            <Button title="+" OnPress={Aumentar4}/>
                        </View>
                        <Text>{numero4}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.item}>
                <Image style={styles.images} source={Tenis5}></Image>
                <Text style={styles.descricao}>Tênis Feminino Preto</Text>
                <View style={styles.inline}>
                    <View style={styles.widthButton}>
                        <Button title="-" OnPress={Diminuir5}/>
                    </View>
                    <View style={styles.widthButton}>
                        <Button title="+" OnPress={Aumentar5}/>
                    </View>
                    <Text>{numero5}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e0e9ff'
    },
    catalogo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        padding: 10,
        gap: 10,
        width: 150,
        borderWidth: 2,
        /* boxShadow: */
        borderRadius: 20,
        justifyContent: "space-between"
    },
    images: {
        width: 130,
        height: 130,
    },
    descricao: {
        textAlign: 'center',
        fontSize: 10
    },
    inline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    widthButton: {
        width: 40
    }
});

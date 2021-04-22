import React from 'react';
import { View , TextInput, StyleSheet, Button, ImageBackground } from 'react-native';

// import { Container } from './styles';

export default function Home(props) {

    const {navigation} = props;


    const [km, SetKm] = React.useState('');
    const [consumo, setConsumo] = React.useState('');
    const [consumoMedio, setConsumoMedio] = React.useState('');

    const calcular = () => {
        var calculo = km / consumo

        let resultado = {
            calculoFinal:calculo
        }
        
        navigation.navigate("MediaFinal", resultado)
    }

    return (
        <View>
            <ImageBackground
        source={require('../image/Back.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
                <TextInput
                    style={styles.input}
                    onChangeText={SetKm}
                    value={km}
                    placeholder="Kilometragem percorrida:"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setConsumo}
                    value={consumo}
                    placeholder="Digite os litros que foram consumidos pelo veículo"
                    keyboardType="numeric"
                />

                <Button
                    style={styles.botao}
                    title="Faça a média"
                    onPress={calcular}
                />
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        color: "white"
      },
});
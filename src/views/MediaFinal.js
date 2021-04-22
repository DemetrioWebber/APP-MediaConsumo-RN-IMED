import React, { useLayoutEffect } from 'react';
import { Text, View, } from 'react-native'

export default function MediaFinal(props) {
    const {navigation} = props;

    const calculo = props.route.params.calculoFinal

    const [notaFinal, setNotaFinal] = React.useState('');

    const valor = () => {
        if (calculo > 12){
            setNotaFinal('A')
        }
        else if(calculo > 10 && calculo <= 12){
            setNotaFinal('B')
        }
        else if(calculo > 8 && calculo <= 10){
            setNotaFinal('C')
        }
        else if(calculo > 4 && calculo <= 8){
            setNotaFinal('D')
        }
        else{
            setNotaFinal('E')
        }
    }

    useLayoutEffect(() => {
        valor()
      }, [])

  return (
    <View>
        <Text>A nota ficou: {notaFinal}, e o consumo em uma média de {calculo}km por litro</Text>
    </View>
  );
  }

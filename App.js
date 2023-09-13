import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react';

//http://conversorfacil.com.br/calcular/peso-ideal

export default function App() {

   const [sexo, setSexo] = useState('homem');
   const [altura, setAltura] = useState('');
   const [peso, setPeso] = useState('');
   const [k,setK] =useState(4)

   const calcular = () => {
    if (sexo == "homem") {
      setK(4)
    }else{
      setK(2)
    };

      setPeso ((parseFloat(altura) - 100) - ((parseFloat(altura) - 150)/parseFloat(k)))
      console.log(peso)

   }

  return (
    <View style={styles.container}>

      <View>
      <Text>Altura:</Text>
      <TextInput placeholder='Digite sua altura'/>

      <Picker
          style={{ height: 50, width: 300 }}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          
          <Picker.Item label="Homem" value="Homem" />
          <Picker.Item label="Mulher" value="Mulher" />
          
        </Picker>
    </View>



  </View>  
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useState, useEffect } from 'react';

//http://conversorfacil.com.br/calcular/peso-ideal

export default function App() {

   const [sexo, setSexo] = useState('Homem');
   const [altura, setAltura] = useState('');
   const [peso, setPeso] = useState('');
   const [indice,setIndice] =useState(4)

   const calcular = () => {
    if(sexo == "Homem"){
      setIndice(4)
    }else{
      setIndice(2)
    };

    setPeso((parseFloat(altura) - 100) - ((parseFloat(altura) - 150)/parseFloat(indice)))
  };

      useEffect(() => {
          if (!peso) return;
          const interval = setTimeout(() => {
            setPeso('');
          }, 3000);
      },[peso]);

  return (
    <KeyboardAvoidingView style={styles.container}>
         
         <View style={styles.container} >
      <View>

        <Text style={styles.title}>Peso ideal</Text>

      <Text style={styles.textoBotao}>Altura:</Text>
      <TextInput style={styles.viewInput} placeholder='  Digite sua altura' onChangeText={setAltura} keyboardType='numeric'/>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  />

      <Picker

          style={{ height: 50, width: 300 }}

          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
        >
          
          <Picker.Item label="Homem" value="Homem" />
          <Picker.Item label="Mulher" value="Mulher" />
          
        </Picker>
    </View>
    
    <Pressable onPress={calcular} style={styles.botaoCalcular}>
      <Text style={styles.textoBotao}>Calcular</Text>
    </Pressable>

    <Text style={styles.texto}>{`O peso ideal para você é: ${peso}kg`}</Text>

    </View>

    </KeyboardAvoidingView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoCalcular: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elavation: 3,
    backgroundColor: '#7d34eb',
    marginTop: 10,
    height: 45,
    fontSize: 50
  },

  textoBotao: {
    color: 'white'
  },

  texto: {
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    
  },

  viewInput:{
    borderWidth: 1,
    height: 40,
    display:'flex',
    margin: 15,
    alignItems:'center',
  },

  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },



});

import React, { useState }  from 'react';
import { styles } from './style.js';
import { TouchableOpacity, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';


export function Cadastro({navigation}) {


  //Contato
  const [ validationContato, setValidationContato ] = useState(null);
  const [ contato, setContato ] = useState(null);

  //email
  const [email, setEmail] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)

  //picker
  const [value, setValue] = React.useState('first');

  //CPF
  const [cpf, setCpf] = useState(null)
  const [errorCpf, setErrorCpf] = useState(null)




  const validar = () => {
    let error = false


    setValidationContato(null)
    const regexContato = /^\(\d{2}\) \d{4,5}-\d{4}$/gi;
    if(!regexContato.test(contato)) {
      setValidationContato("Preencha seu contato")
      error = true
    }


    setErrorEmail(null)
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regexEmail.test(String(email).toLowerCase())){
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }


    setErrorCpf(null)
    const regexCPF =/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if (!regexCPF.test(String(cpf).toLowerCase())){
      setErrorCpf("Preencha seu CPF corretamente")
      error = true
    }

    return !error
  }

  const salvarDados = () => {
    if(validar()) {
      console.log("Salvou")
    }
  }
  return (
    <View style={styles.isBackgroundGeneral}>

      {/*Lara Fernanda*/}
      <Text>Contato:</Text>
      <Input 
      keyboardType="phone-pad" 
      placeholder="(82)99999-9999" 
      onChangeText={value => {
        setContato(value)
        setValidationContato(null)
      }}
      returnKeyType="done" 
      errorMessage={validationContato}/>  
      
      {/*Lara Fernanda*/}
      <Text>Complemento:</Text>
      <Input 
      keyboardType="default" 
      placeholder="Complemento" 
      returnKeyType="done"/>

      <Text>sexo:</Text>

      {/*Kenysson*/}
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View>
          <Text>Masculino</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>Feminino</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>


      <Text>Email:</Text>
      <Input
        placeholder="receitas12@gmail.com"
        onChangeText={value => {
            setEmail(value)
            setErrorEmail(null)
        }}
        keyboardType="email-address"
        errorMessage={errorEmail}        
        />

        {/* Italo */}

        <Text>CPF:</Text>
        <Input 
          keyboardType="number-pad" 
          placeholder="142.832.344-24" 
          onChangeText={value => setCpf(value)}
          returnKeyType="done" 
          errorMessage={errorCpf}/>


    <TouchableOpacity style={styles.button} onPress={() => salvarDados()}>
        <Text style={{color:"#fff"}}> Cadastrar </Text>
    </TouchableOpacity>
    
    </View>
  );
}


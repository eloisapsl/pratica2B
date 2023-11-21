import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from "react";


export default function App() {
  let [pessoa, setPessoa] = useState([]);

  const baseURL = 'https://swapi.dev/api/people/?populate=*';

  useEffect(function(){
      fetch(baseURL)
        .then(results => results.json())
        .then(objeto => {
          console.log(objeto);
          setPessoa(objeto.results);
        })
  }, []);
  return (
    <View style={styles.container}>
      {pessoa.length > 0 ? pessoa.map(pessoas => <Text>
        Nome: {pessoas.name} -->
        Altura: {pessoas.height}cm</Text>) : <Text>Carregando...</Text>}
      <StatusBar style="auto" />
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

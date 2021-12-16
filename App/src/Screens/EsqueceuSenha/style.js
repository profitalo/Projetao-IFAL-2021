import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  isBackgroundGeneral:{
    flex:1,
    justifyContent:"center",
    alignItems:"center", //alinhando itens no centro
  },
  centro:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },  
  button:{
    width:180,
    alignItems:"center",
    borderRadius:10, //arredondando o butão
    backgroundColor:'#FFFF00',
    padding:5,
    margin:5,
  },

    textInput:{
    margin:5,
    width:180,
    hint:"#000",
    justifyContent:"center" ,
    textAlign:"center",
    borderRadius:10, //arredondando o butão
    backgroundColor:'#C4C4C4',
    padding:5,
  },

  text:{
    textAlign: "left",
    fontSize: 15,
  }
  


});
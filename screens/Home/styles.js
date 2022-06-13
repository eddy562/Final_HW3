import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },

    logo:{
        width:30,
        height:30,
    },

    infoButton: {
      paddingTop: '130%',
        paddingRight: '7%',
      alignSelf: 'flex-end'
    },

    backImage: {
      width: 320,
      height: 320,
      position: 'absolute',
      resizeMode: 'contain',
    },
 });

 export default styles;
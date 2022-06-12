import { StyleSheet } from "react-native";

 

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        },
    
        text: {
          fontSize: 60,
          paddingLeft:10,
          color: 'white',
          alignItems: 'center'
        },
    
        image:{
          width:300,
          height:400,
          opacity:.4,
          position: 'absolute',
          resizeMode: 'contain',
      }
     

});

export default styles;
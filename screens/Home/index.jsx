import{View, Text, Pressable,Image, ImageBackground} from 'react-native'
import React from 'react';
import styles from './styles'

export default function HomeScreen({navigation}) {

    return (

       

<View style={styles.container}>
    
    <ImageBackground 
    style={styles.backImage}
    source={require('../../assets/Sharingan_Itachi.png')}/>

      <View style={styles.infoButton}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image
          style={styles.logo}
          source={require('../../assets/infowhite.png')}
        />

      </Pressable>
      </View>
    
    </View>


    );
}
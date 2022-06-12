import{View, Text, Pressable,Image} from 'react-native'

import styles from './styles'

export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Pressable onPress={()=>navigation.navigate('Profile')}>
            <Image
          style={styles.logo}
         // source={require('../../assets/arc_reactor.png')}
         source={require('../../assets/Sharingan_Itachi.png')}
        
        />
            </Pressable>
        </View>
    );
}
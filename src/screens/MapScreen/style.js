import { StyleSheet, Platform } from 'react-native'
import Colors from '../../utils/constants/colors/Colors'

const styles = StyleSheet.create({
    map:{
        flex:1
    },
    headerButtonText:{
        fontSize:16,
        color:Platform.OS === 'android' ? Colors.accent : Colors.complementary
    },
    headerButton:{
        marginHorizontal:20
    }
})
export default styles
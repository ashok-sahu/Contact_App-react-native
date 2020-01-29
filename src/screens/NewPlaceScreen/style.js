import { StyleSheet } from 'react-native'
import Colors from '../../utils/constants/colors/Colors'

const styles = StyleSheet.create({
    form:{
        margin:30
    },
    label:{
        fontSize:18,
        marginBottom:15,
        color:Colors.theme,
        fontWeight:'bold'
    },
    textInput:{
        borderBottomColor:Colors.primary,
        borderBottomWidth:1,
        marginBottom:15,
        paddingHorizontal:2,
        paddingVertical:4
    }
})
export default styles
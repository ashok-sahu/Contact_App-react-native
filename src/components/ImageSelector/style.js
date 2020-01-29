import { StyleSheet } from 'react-native'
import Colors from '../../utils/constants/colors/Colors'

const styles = StyleSheet.create({
    imagePicker:{
        alignItems:'center',
        marginBottom:15
    },
    imagePreview:{
        width:'100%',
        height:200,
        marginBottom:10,
        justifyContent:'center',
        alignItems:"center",
        borderColor:Colors.complementary,
        borderWidth:2
    },
    image:{
        height:'100%',
        width:'100%'
    },
    text:{
        color:Colors.error,
        fontWeight:'bold',
        fontSize:20
    }
})
export default styles
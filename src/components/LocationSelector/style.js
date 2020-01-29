import { StyleSheet } from 'react-native'
import Colors from '../../utils/constants/colors/Colors'

const styles = StyleSheet.create({    
    locationPicker:{
        marginBottom:15
    },
    mapPreview:{
        marginBottom:10,
        width:'100%',
        height:150,
        borderColor:Colors.secondary,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center'
    },
    action:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
    },
    text:{
        color:Colors.error,
        fontSize:20,
        fontWeight:'bold'
    }
})
export default styles
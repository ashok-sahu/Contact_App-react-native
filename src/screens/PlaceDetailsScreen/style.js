import { StyleSheet } from 'react-native'
import Colors from '../../utils/constants/colors/Colors'

const styles = StyleSheet.create({
    image:{
        height: '35%',
        minHeight: 300,
        width: '100%',
        backgroundColor: '#ccc'
    },
    locationContainer:{
        marginVertical: 20,
        width: '90%',
        maxWidth: 350,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        //margin:20
    },
    addressContainer:{
        padding: 20,
        margin:20
    },
    address:{
        color: Colors.primary,
        textAlign: 'center'
    },
    mapPreview:{
        width: '100%',
        maxWidth: 350,
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})
export default styles
import React,{useState} from 'react'
import { View, Text, Button, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import styles from './style'
import Colors from '../../utils/constants/colors/Colors'

const ImageSelector = (props) => {
    const[pickedImage,setPickedImage] = useState()

    const verifyPermissions = async () => {
         const result = await Permissions.askAsync(Permissions.CAMERA_ROLL)
         if(result.status !== 'granted'){
             Alert.alert('Insufficient Permissions!.',
             'You Need To grant camera permission to use this app',
             [{text:'okey'}]
             )
             return false
         }
         return true
    }
    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions()
        if(!hasPermission){
            return 
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.9
        })
        //console.log(image)
        setPickedImage(image.uri)
        props.onImageTaken(image.uri)
    }

    return  <View style={styles.imagePicker}>
                <View style={styles.imagePreview}>
                    {!pickedImage ?
                     (
                    <Text style={styles.text}>No Image Picked Yet.</Text>
                     ) : (
                     <Image 
                        style={styles.image} 
                        source={{uri:pickedImage}}
                     />  )
                    }    
                </View>
                    <Button 
                        title="Take Image" 
                        color={Colors.complementary} 
                        onPress={takeImageHandler}
                    />
            </View>
    
}

export default ImageSelector

import React from 'react'
import { Image, TouchableOpacity} from 'react-native'
import styles from './style'
import vars from '../../utils/api/GoogleMapApi/GoogleMapApi'

const MapPreview = (props) => {
    let imagePreviewUrl;
    if(props.location){
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center="+${props.location.lat},${props.location.long}+"&zoom=18&size=600x700&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.long}&key=${vars.GoogleApiKey}`
    }
    return <TouchableOpacity 
                onPress={props.onPress} 
                style={{...props.style.mapPreview,...props.style}}
            >
                {
                props.location 
                ? <Image style={styles.mapImage} 
                       source={{uri:imagePreviewUrl}}
                /> 
                : props.children
                }
           </TouchableOpacity>
}
export default MapPreview

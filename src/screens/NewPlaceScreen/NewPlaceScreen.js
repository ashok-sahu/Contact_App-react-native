import React,{ useState, useCallback } from 'react'
import { View, Text, Button ,ScrollView,TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import ImageSelector from '../../components/ImageSelector/ImageSelector'
import LocationSelector from '../../components/LocationSelector/LocationSelector'

import * as placesAction from '../../Redux/config/action/places-action' 
import Colors from '../../utils/constants/colors/Colors'
import styles from './style'

const NewPlaceScreen = (props) => {
    
    const[titleValue,setTitleValue] = useState('')
    const[selectedImage,setSelectedImage] = useState(null)
    const[selectedLocation,setSelectedLocation] = useState('')

    const dispatch = useDispatch()
    const titleChangeHandler = (text) => { 
        //you could add validation
        setTitleValue(text)
    }
    const imageTaken = imagePath => {
        setSelectedImage(imagePath)
    }
    const savePlaceHolder = () => {
        dispatch(placesAction.addPlace(titleValue,selectedImage,selectedLocation));
        props.navigation.goBack()
    }
    const locationPickedHandler = useCallback(location => {
        //console.log(location,'picked location')
        setSelectedLocation(location)
    },[setSelectedLocation])
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                style={styles.textInput}
                onChangeText={titleChangeHandler}
                value={titleValue}
                />
                <ImageSelector onImageTaken={imageTaken}/>
                <LocationSelector navigation={props.navigation} onLocationPicked={locationPickedHandler}/>
                <Button 
                title="Save Place"
                color={Colors.primary}
                onPress={savePlaceHolder}
                />
            </View>
        </ScrollView>
    )
}
NewPlaceScreen.navigationOptions =  {
        headerTitle:'Add Place',
}

export default NewPlaceScreen

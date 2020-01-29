import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { useSelector } from 'react-redux'

import MapPreview from '../../components/MapPreview/MapPreview'
import styles from './style'


const PlaceDetailScreen = (props) => {
    const placeId = props.navigation.getParam('placeId')
    const selectedPlace =  useSelector(state=>state.places.places.find(place=>place.id === placeId))

    const showMapHandler = () => {
        props.navigation.navigate('Map',{readOnly:true,initialLocation})
    }
    return (
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
            <Image source={{uri:selectedPlace.imageUrl}} style={styles.image}/>
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{selectedPlace.address}</Text>
                </View>
                <MapPreview 
                    location={{lat:selectedPlace.lat,long:selectedPlace.long}}
                    style={styles.mapPreview}
                    onPress={showMapHandler}
                />
            </View>
        </ScrollView>
    )
}

PlaceDetailScreen.navigationOptions = navData=>{
    return{
        headerTitle : navData.navigation.getParam('placeTitle')
    }
}

export default PlaceDetailScreen

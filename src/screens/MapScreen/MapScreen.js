import React,{ useState, useEffect, useCallback } from 'react'
import MapView,{ Marker } from 'react-native-maps'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'

const MapScreen = (props) => {
    const[selectedLocation,setSelectedLocation] = useState();
    const mapRegions = {
        latitude:17.4376427,
        longitude:78.3555996,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421
    }
    const selectLocationHandler = (event) => {
        // console.log(event)
        setSelectedLocation({
            lat:event.nativeEvent.coordinate.latitude,
            long:event.nativeEvent.coordinate.longitude,
        })
    }

    let markerCoordinates;
    if(selectedLocation){
        markerCoordinates={
            latitude:selectedLocation.lat,
            longitude:selectedLocation.long
        }
    }

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation){
            return
        }
        props.navigation.navigate('NewPlace',{ pickedLocation:selectedLocation })
    },[selectedLocation])

    useEffect(()=>{
        props.navigation.setParams({
            saveLocation:savePickedLocationHandler
        })
    },[savePickedLocationHandler])
    return  <MapView 
                region={mapRegions} 
                style={styles.map}
                onPress={selectLocationHandler}
            >
               {markerCoordinates && <Marker title='Picked Location' coordinate={markerCoordinates}></Marker>}
            </MapView>
}

MapScreen.navigationOptions = navData =>{
    const saveFn = navData.navigation.getParam('saveLocation')
    return {
        headerRight:()=>
        <TouchableOpacity 
            onPress={saveFn} 
            style={styles.headerButton}
        >
            <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
    }
}
export default MapScreen

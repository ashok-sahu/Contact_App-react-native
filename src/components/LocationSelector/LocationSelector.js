import React,{ useState, useEffect } from 'react'
import { View, Text, Button, Alert, ActivityIndicator } from 'react-native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import MapPreview from '../MapPreview/MapPreview'

import Colors from '../../utils/constants/colors/Colors'
import styles from './style'

const LocationSelector = (props) => {
    const[isFetching,setIsFetching] = useState(false)
    const[pickedLocation,setPickedLocation] = useState();

    const mapPickedLocation = props.navigation.getParam('pickedLocation')
    const{ onLocationPicked } = props
    useEffect(() => {
        if(mapPickedLocation){
            setPickedLocation(mapPickedLocation);
            onLocationPicked(mapPickedLocation)
        }
    }, [mapPickedLocation,onLocationPicked])

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION)
        if(result.status !== 'granted'){
            Alert.alert('Insufficient Permissions!.',
            'You Need To grant location permission to use this app',
            [{text:'okey'}]
            )
            return false
        }
        return true
   }
   
    const getLocationHandler = async () => {
       const hasPermission = await verifyPermissions()
       if(!hasPermission){
           return
       }
       try{
            setIsFetching(true)
            const location = await Location.getCurrentPositionAsync({
            timeout:5000
        })
        //console.log(location)
        setPickedLocation({
            lat:location.coords.latitude,
            long:location.coords.longitude
        })
        props.onLocationPicked({
            lat:location.coords.latitude,
            long:location.coords.longitude
        })
       }catch(err){
           Alert.alert('Could not fetch location!',
                       'Please try again later or pick a location on the map.',
                       [{text:'Okey'}]
                      )
           setIsFetching(false)
       }
    }

    const pickOnMapHandler = () => {
        props.navigation.navigate('Map')
    }
    return <View style={styles.locationPicker}>
        <MapPreview 
            style={styles.mapPreview} 
            location={pickedLocation}
            onPress={pickOnMapHandler}
        >
            {
                isFetching ? 
                (
                <ActivityIndicator 
                   size='large'
                   color={Colors.theme}
                />
                ):
                (
                <Text style={styles.text}>No Location Chosen Yet.</Text>
                )
            }
        </MapPreview>
        <View style={styles.action}>
            <Button 
                title='Get User Location' 
                color={Colors.theme} 
                onPress={getLocationHandler}
            />
            <Button 
                title='Pick On Map' 
                color={Colors.theme} 
                onPress={pickOnMapHandler}
            />
        </View>
    </View>
}

export default LocationSelector

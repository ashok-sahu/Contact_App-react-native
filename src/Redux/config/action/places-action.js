import * as FileSystem from 'expo-file-system'
export const ADD_PLACE = 'ADD_PLACE'
export const SET_PLACES = 'SET_PLACES'
import vars from '../../../utils/api/GoogleMapApi/GoogleMapApi'

import { insertPlace, fetchPlaces } from '../../../utils/data/db'

export const addPlace = (title,image,location) => {
    return async dispatch => {
       const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=${vars.GoogleApiKey}`)
       if(!response.ok){
           throw new Error('something went wrong!.')
       }
       const responseData = await response.json();
       if(!responseData.results){
           throw new Error('something went wrong!.')
       }
       const address = responseData.formatted_address
       console.log(responseData,address,'google map api data')

        const fileName = image.split('/').pop()
        const newPath = FileSystem.documentDirectory + fileName
       try{
        await FileSystem.moveAsync({
            from:image,
            to:newPath
        })
        const dbResult = await insertPlace(title,newPath,address,location.lat,location.long)
        //console.log(dbResult,'store data on database')   
        dispatch({ type:ADD_PLACE, placeData: { id:dbResult.insertId, title:title,image:newPath, address:address,coords:{lat:location.lat,long:location.long} }})
        }catch(err){
           console.log(err)
           throw err
        }
    }
} 

export const loadPlaces = () => {
    return async dispatch => {
        try{
            const dbResult = await fetchPlaces()
            //console.log(dbResult,'fetch data from database')
            dispatch({type:SET_PLACES,places:dbResult.rows._array})
        }
        catch(err){
            throw err
        }
    }
}
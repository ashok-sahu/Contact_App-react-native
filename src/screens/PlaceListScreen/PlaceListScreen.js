import React,{ useEffect } from 'react'
import { Platform,FlatList } from 'react-native'
import { HeaderButtons,Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import CustomHeaderButton from '../../components/HeaderButton/HeaderButton'
import PlaceItem from '../../components/PlaceItems/PlaceItem'

import * as placesActions from '../../Redux/config/action/places-action'

const PlaceListScreen = (props) => {
    const places = useSelector(state=>state.places.places)//app.js(places reducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(placesActions.loadPlaces())
    },[dispatch])
    return <FlatList 
           data={places} 
           keyExtractor={item=>item.id} 
           renderItem={itemData=>
                        <PlaceItem 
                        image={itemData.item.imageUrl} 
                        title={itemData.item.title}
                        address={itemData.item.address}
                        onSelect={()=>{
                            props.navigation.navigate('PlaceDetails',{
                                placeTitle:itemData.item.title,
                                placeId:itemData.item.id
                            })
                        }}
                        />
                       }
            />
}

PlaceListScreen.navigationOptions = navData => {
    return{
        headerTitle:'All Places',
        headerRight:()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
            title='Add Place' 
            iconName={Platform.OS==='android'?'md-add':'ios-add'} 
            onPress={()=>{
                navData.navigation.navigate('NewPlace')
            }}
            />
        </HeaderButtons>
    }
}

export default PlaceListScreen

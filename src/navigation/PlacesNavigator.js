import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'

import MapScreen from '../screens/MapScreen/MapScreen'
import NewPlaceScreen from '../screens/NewPlaceScreen/NewPlaceScreen'
import PlaceDetailScreen from '../screens/PlaceDetailsScreen/PlaceDetailScreen'
import PlaceListScreen from '../screens/PlaceListScreen/PlaceListScreen'

import Colors from '../utils/constants/colors/Colors'

const PlacesNavigator = createStackNavigator({
    Places:PlaceListScreen,
    PlaceDetails:PlaceDetailScreen,
    NewPlace:NewPlaceScreen,
    Map:MapScreen
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

export default createAppContainer(PlacesNavigator)
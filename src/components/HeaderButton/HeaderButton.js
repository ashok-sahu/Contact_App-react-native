import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

import Colors from '../../utils/constants/colors/Colors'

const CustomHeaderButton = (props) =>{
    return <HeaderButton {...props} 
    iconSize={23} 
    IconComponent={Ionicons}
    color={ Platform.OS === 'android' ? 'white' : Colors.primary }
    />
}
export default CustomHeaderButton
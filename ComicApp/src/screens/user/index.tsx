import React from 'react';
import {
  View,
  Text,
  Button,
  StyleProp,
  ViewStyle
} from 'react-native'

const style: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
}

const User: React.FC<UserTapProps> = ({ navigation, route }) => {
  console.log(route.params)
  return (
    <View style={ style }>
      <Text>Details screen</Text>
    </View>
  )
}

export default User

import React, { useState } from 'react';
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

const ComicDetails: React.FC<ComicDetailsProps> = ({ navigation, route }) => {
  // const { comicId } = route.params
  console.log(route)
  return (
    <View style={ style }>
      <Text>hello react native {123}</Text>
      {/* <Text>{ title }</Text> */}
    </View>
  )
}

export default ComicDetails
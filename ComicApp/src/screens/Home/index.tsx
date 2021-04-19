
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

const HomeScreen: React.FC<HomeTapProps> = ({ navigation }) => {
  const [i, setI] = useState(0)
  function onClick() {
    navigation.navigate('ComicDetails', {
      comicId: 'helo'
    })
    setI(i + 1)
  }
  
  return (
    <View style={ style }>
      <Text>hello react native {i}</Text>
      <Button title="Go to detils" onPress={ onClick }/>
      {/* <Text>{ title }</Text> */}
    </View>
  )
}

export default HomeScreen
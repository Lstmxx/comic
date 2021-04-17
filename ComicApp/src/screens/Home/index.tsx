
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

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  
  function onClick() {
    navigation.navigate(
      { name: 'Details', params: { userId: '1' } }
    )
  }
  
  return (
    <View style={ style }>
      <Text>hello react native</Text>
      <Button title="Go to detils" onPress={ onClick }/>
      {/* <Text>{ title }</Text> */}
    </View>
  )
}

export default HomeScreen
// import Home from '@src/screens/home'
// import Details from '@src/screens/details'
import { RouteConfig } from '@react-navigation/core'
import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabScreenProps  } from '@react-navigation/bottom-tabs'


type ParamList = {
  Home: undefined,
  Details: { userId: string }
}

export type HomeTapProps = BottomTabScreenProps<ParamList, 'Home'>
export type UserTapProps = BottomTabScreenProps<ParamList, 'Details'>

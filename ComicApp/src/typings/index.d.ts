import { StackScreenProps } from '@react-navigation/stack'

type ParamList = {
  Home: undefined,
  Details: { userId: string }
}

declare global {
  type HomeScreenProps = StackScreenProps<ParamList, 'Home'>
  type DetailsScreenProp = StackScreenProps<ParamList, 'Details'> 
}

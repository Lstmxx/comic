import { StackScreenProps } from '@react-navigation/stack'
import { BottomTabScreenProps  } from '@react-navigation/bottom-tabs'

type ScreenParamList = {
  ComicDetails: { comicId: string }
}

type TabParamList = ScreenParamList & {
  Home: undefined,
  User: undefined
}
declare global {
  type HomeTapProps = BottomTabScreenProps<TabParamList, 'Home'>
  type UserTapProps = BottomTabScreenProps<TabParamList, 'User'>
  type ComicDetailsProps = StackScreenProps<ScreenParamList, 'ComicDetails'>
}

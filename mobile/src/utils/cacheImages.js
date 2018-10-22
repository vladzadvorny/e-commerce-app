import { Image } from 'react-native'
import { Asset } from 'expo'

export default images =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image)
    }
    return Asset.fromModule(image).downloadAsync()
  })

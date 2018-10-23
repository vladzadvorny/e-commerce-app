import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { UtilityThemeProvider, Box } from 'react-native-design-utility'
import { Provider } from 'mobx-react/native'

import Navigation from './src/screens'
import theme from './src/constants/theme'
import images from './src/constants/images'
import cacheImages from './src/utils/cacheImages'
import { store } from './src/models'

export default class App extends Component {
  state = {
    isReady: false
  }

  componentDidMount() {
    this.cacheAssets()
  }

  cacheAssets = async () => {
    const imagesAssets = cacheImages(Object.values(images))
    await Promise.all([...imagesAssets])
    this.setState({ isReady: true })
  }

  render() {
    const { isReady } = this.state

    if (!isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size="large" />
        </Box>
      )
    }

    return (
      <Provider {...store}>
        <UtilityThemeProvider theme={theme}>
          <Navigation />
        </UtilityThemeProvider>
      </Provider>
    )
  }
}

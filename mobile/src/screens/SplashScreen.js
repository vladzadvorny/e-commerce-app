import React, { Component } from 'react'
import { Box } from 'react-native-design-utility'
import { inject } from 'mobx-react/native'

import OnboardingLogo from '../commons/OnboardingLogo'

@inject('currentUser')
class SplashScreen extends Component {
  state = {}

  componentDidMount() {
    this.checkAuth()
  }

  checkAuth = async () => {
    const { currentUser } = this.props
    await currentUser.setupAuth()
    // }, 1000)
  }

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    )
  }
}

export default SplashScreen

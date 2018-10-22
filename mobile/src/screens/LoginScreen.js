import React, { Component } from 'react'
import { Box } from 'react-native-design-utility'
import { Alert, Animated } from 'react-native'

import OnboardingLogo from '../commons/OnboardingLogo'
import LoginButton from '../commons/LoginButton'
import { FacebookApi } from '../api/facebook'

const BoxAnimated = Animated.createAnimatedComponent(Box)

class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start()
  }

  opacityAnim = () => {
    const { opacity } = this.state

    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: 100
    }).start()
  }

  positionAnim = () => {
    const { position } = this.state

    Animated.timing(position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }

  onGooglePress = () => {
    Alert.alert('Google Press')
  }

  onFacebookPress = async () => {
    try {
      const token = await FacebookApi.loginAsync()

      console.log('token', token)
    } catch (error) {
      console.log('error', error)
    }
  }

  render() {
    const { position, opacity } = this.state

    const logoTranslate = position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0]
    })

    return (
      <Box f={1} center bg="white">
        <BoxAnimated
          style={{
            flex: 1,

            transform: [
              {
                translateY: logoTranslate
              }
            ]
          }}
        >
          <Box f={1} center>
            <OnboardingLogo />
          </Box>
        </BoxAnimated>

        <BoxAnimated style={{ flex: 0.9, width: '100%', opacity }}>
          <LoginButton onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButton>
          <LoginButton onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButton>
        </BoxAnimated>
      </Box>
    )
  }
}

export default LoginScreen

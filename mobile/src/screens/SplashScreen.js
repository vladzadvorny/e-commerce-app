import React, { Component } from 'react';
import { Box } from 'react-native-design-utility';

import OnboardingLogo from '../commons/OnboardingLogo';

class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate('Auth');
    }, 5000);
  };

  render() {
    return (
      <Box f={1} center>
        <OnboardingLogo />
      </Box>
    );
  }
}

export default SplashScreen;

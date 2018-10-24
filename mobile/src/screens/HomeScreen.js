import React, { Component } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { Box } from 'react-native-design-utility'

import CategoryCard from '../components/CategoryCard'
import { theme } from '../constants/theme'
import DealCaroussel from '../components/DealCaroussel'

const categories = [
  {
    id: 1,
    title: 'Grocery',
    image: require('../../assets/cart.png')
  },
  {
    id: 2,
    title: 'Drugs',
    image: require('../../assets/drugs.png')
  },
  {
    id: 3,
    title: 'Pets',
    image: require('../../assets/pets.png')
  },
  {
    id: 4,
    title: 'video games'
  }
]

const NUM_COLUMNS = 3

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'InStore'
  }

  state = {}

  renderItem = ({ item, index }) => {
    const style = {}

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2
      style.borderLeftColor = theme.color.greyLighter
    }
    return (
      <Box w={1 / NUM_COLUMNS} bg="white" h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    )
  }

  keyExtractor = item => String(item.id)

  separator = () => <Box h={2} bg="greyLighter" />

  render() {
    return (
      <Box f={1}>
        <StatusBar barStyle="light-content" />
        <Box bg="red">
          <DealCaroussel />
        </Box>

        <Box f={1}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box>
    )
  }
}

export default HomeScreen

import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';

import Main from '~/pages/Main';

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon name='menu' size={30} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
    );
  }
}

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        title: 'Reminder',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
      })
    }
  },
  { headerLayoutPreset: 'center' }
);

const drawerNavigator = createDrawerNavigator({
  Main: {
    screen: stackNavigator,
    navigationOptions: {
      drawerLabel: 'Home'
    }
  }
});

const Routes = createAppContainer(drawerNavigator);

export default Routes;

import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { View, TouchableOpacity } from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';

import Main from '~/pages/Main';

const DrawerStructure = props => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          props.navigationProps.toggleDrawer();
        }}
      >
        <Icon name='menu' size={30} style={{ marginLeft: 10 }} />
      </TouchableOpacity>
    </View>
  );
};

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        title: 'Reminder',
        headerLeft: <DrawerStructure navigationProps={navigation} />
      })
    }
  },
  { headerLayoutPreset: 'center' }
);

const drawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: stackNavigator,
      navigationOptions: {
        drawerLabel: 'Home'
      }
    }
  },
  {
    drawerType: 'slide'
  }
);

const Routes = createAppContainer(drawerNavigator);

export default Routes;

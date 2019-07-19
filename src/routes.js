import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { View, TouchableOpacity } from 'react-native';

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';

import Main from '~/pages/Main';
import Lembretes from '~/pages/Lembretes';
import Notas from '~/pages/Notas';
import Tarefas from '~/pages/Tarefas';

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

const mainStackNavigator = createStackNavigator(
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

const lembretesStackNavigator = createStackNavigator(
  {
    Lembretes: {
      screen: Lembretes,
      navigationOptions: ({ navigation }) => ({
        title: 'Lembretes',
        headerLeft: <DrawerStructure navigationProps={navigation} />
      })
    }
  },
  { headerLayoutPreset: 'center' }
);

const notasStackNavigator = createStackNavigator(
  {
    Notas: {
      screen: Notas,
      navigationOptions: ({ navigation }) => ({
        title: 'Notas',
        headerLeft: <DrawerStructure navigationProps={navigation} />
      })
    }
  },
  { headerLayoutPreset: 'center' }
);

const tarefasStackNavigator = createStackNavigator(
  {
    Tarefas: {
      screen: Tarefas,
      navigationOptions: ({ navigation }) => ({
        title: 'Tarefas',
        headerLeft: <DrawerStructure navigationProps={navigation} />
      })
    }
  },
  { headerLayoutPreset: 'center' }
);

const drawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: mainStackNavigator,
      navigationOptions: {
        drawerLabel: 'Home'
      }
    },
    Lembretes: {
      screen: lembretesStackNavigator,
      navigationOptions: {
        drawerLabel: 'Lembretes'
      }
    },
    Notas: {
      screen: notasStackNavigator,
      navigationOptions: {
        drawerLabel: 'Notas'
      }
    },
    Tarefas: {
      screen: tarefasStackNavigator,
      navigationOptions: {
        drawerLabel: 'Tarefas'
      }
    }
  },
  {
    drawerType: 'slide'
  }
);

const Routes = createAppContainer(drawerNavigator);

export default Routes;

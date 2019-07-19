import React from 'react';
import { ScrollView } from 'react-native';
import { View } from './styles';

import ReminderCard from '~/components/ReminderCard';

const items = [];

const Main = props => (
  <ScrollView>
    <View>
      <ReminderCard />
    </View>
  </ScrollView>
);

export default Main;

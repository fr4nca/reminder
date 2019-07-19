import React from 'react';
import { FlatList } from 'react-native';
import { FloatingButton } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ReminderCard from '~/components/ReminderCard';

import data from '~/data/data.json';

const Main = () => (
  <>
    <FlatList
      data={data.lembretes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ReminderCard item={item} />}
      numColumns={2}
    />
    <FloatingButton activeOpacity={0.7}>
      <Icon name='plus' size={20} color={'#fff'} />
    </FloatingButton>
  </>

  // <ScrollView>
  //   <View>
  //     {items.map(texto => {
  //       return <ReminderCard texto={texto} />;
  //     })}
  //   </View>
  // </ScrollView>
);

export default Main;

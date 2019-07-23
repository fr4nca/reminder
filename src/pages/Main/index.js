import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList } from 'react-native';

import ReminderCard from '~/components/ReminderCard';

import ModalForm from '../ModalForm/ModalForm';

const Main = () => {
  const [notas, setNotas] = useState({});
  const [lembretes, setLembretes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('lembrete');

      setLembretes(JSON.parse(data));
      console.log(JSON.parse(data));
    })();
  }, [lembretes]);

  return (
    <>
      <FlatList
        data={lembretes}
        keyExtractor={item => item.title}
        renderItem={({ item }) => <ReminderCard item={item} />}
        numColumns={2}
      />
      <ModalForm />
    </>
  );
};

export default Main;

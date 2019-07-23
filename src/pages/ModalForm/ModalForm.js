import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Modal, Keyboard, Text, Alert } from 'react-native';
import {
  FloatingButton,
  TextInput,
  ScrollView,
  Label,
  View,
  SaveButton
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import RadioButtons from '~/components/RadioButtons/RadioButtons';

const options = [
  {
    key: 'lembrete',
    text: 'Lembrete'
  },
  {
    key: 'nota',
    text: 'Nota'
  }
  // {
  //   key: 'tarefa',
  //   text: 'Tarefa'
  // }
];

const ModalForm = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({});
  const [isLembrete, setIsLembrete] = useState(false);

  const getValue = value => {
    setForm({ ...form, type: value });
    value === 'lembrete' ? setIsLembrete(true) : setIsLembrete(false);
  };

  const save = async () => {
    if (!form.title || !form.body || !form.type) {
      Alert.alert('Os campos não podem estar vazios.');
      return false;
    }

    const unparsedData = await AsyncStorage.getItem(form.type);

    if (unparsedData) {
      const parsedData = JSON.parse(unparsedData);

      await parsedData.push({ ...form });

      await AsyncStorage.setItem(form.type, JSON.stringify(parsedData));
      setForm({});
      setModalVisible(false);
    } else {
      await AsyncStorage.setItem(form.type, JSON.stringify([{ ...form }]));
      setForm({});
      setModalVisible(false);
    }
  };

  return (
    <>
      <FloatingButton activeOpacity={0.7} onPress={() => setModalVisible(true)}>
        <Icon name='plus' size={20} color={'#fff'} />
      </FloatingButton>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setForm({});
          setModalVisible(false);
        }}
      >
        <ScrollView>
          <Label>Title</Label>
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => setForm({ ...form, title: text })}
          />
          <Label>Body</Label>
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setForm({ ...form, body: text })}
          />
          <View>
            <RadioButtons options={options} getValue={getValue} />
          </View>
          <SaveButton activeOpacity={0.7} onPress={save}>
            <Text>Salvar</Text>
          </SaveButton>
        </ScrollView>
      </Modal>
    </>
  );
};

export default ModalForm;

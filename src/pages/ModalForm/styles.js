import styled from 'styled-components/native';

export const FloatingButton = styled.TouchableOpacity`
  background-color: #ccc;
  border-radius: 50px;
  position: absolute;
  width: 50;
  height: 50;
  align-items: center;
  justify-content: center;
  right: 20;
  bottom: 20;
`;

export const TextInput = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 0 10px;
  font-size: 20px;
`;

export const ScrollView = styled.ScrollView`
  padding: 20px 0;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin: 6px 10px;
`;

export const View = styled.View`
  margin-top: 20px;
`;

export const SaveButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0px 10px;
  background: #ccc;
  border-radius: 5px;
`;

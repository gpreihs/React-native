import React from 'react';
import { Text } from 'react-native';

export default (props) => {
    return <Text>{ props.numero%2 ? 'Impar':'Par' }</Text>
};
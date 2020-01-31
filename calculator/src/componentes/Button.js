import React from 'react';

import { View, Text, TouchableHighlight } from 'react-native';
import Style from './../style/Style';

export default props => {
    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text>{props.label}</Text>
        </TouchableHighlight>
    );
};
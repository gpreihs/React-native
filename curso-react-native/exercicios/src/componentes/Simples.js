import React from 'react';
import { Text, View } from 'react-native';

import Padrao from '../estilo/Padrao';

export default (props) => {
    return <View>
                <Text style={Padrao.ex}>{props.texto}</Text>
            </View>
};
 
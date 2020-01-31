import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';

import style from './style/Style';
import Button from './componentes/Button';
import Display from './componentes/Display';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
        }
    }
    soma = () => {
        this.setState(prevState => {
            return {
                numero: prevState.numero + 1,
            }
        })
    }
    render() {
        return(
            <View>
                <Display numero = {this.state.numero}/>
                <View>
                    <Button label='+' onClick={() => this.soma()}/>
                    <Button label='-'/>
                    <Button label='/'/>
                    <Button label='*'/>
                </View>
            </View>
        )
    }
}

export default App;

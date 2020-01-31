import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { MegaSena, Inverter } from './componentes/Multi'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numeroInicial={100} />
    },
    Megasena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />,
        navigationOptions: { title: 'Inverter' }
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'ParImpar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />,
        navigationOptions: { title: 'Simples' }
    }
}, { draweWidth: 300 })
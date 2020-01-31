import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import todayImage from './../../assets/assets/imgs/today.jpg';
import commonStyles from '../commonStyles';
import Tasks from './../components/Tasks';

import moment from 'moment';
import 'moment/locale/pt-br';

export default class TaskList extends React.Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={todayImage}>
                    <View style={styles.titulo_bar}>
                        <Text style={styles.titulo}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Tasks desc='comprando livro' estimateAt={new Date()} doneAt={new Date()} />
                    <Tasks desc='ler o livro' estimateAt={new Date()} doneAt={null} />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titulo_bar: {
        flex: 1,
        justifyContent: "flex-end",
    },
    titulo: {
        color: commonStyles.colors.secundary,
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secundary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
});
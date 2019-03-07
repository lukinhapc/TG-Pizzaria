import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import { Input } from 'react-native-elements';

export default class LoginScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Input style={styles.input}
                    placeholder='Usuário'
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }} />
                <Input style={styles.input}
                    placeholder='Senha'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 250,
        padding: 50
    }
});

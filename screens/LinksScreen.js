import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

//Header importado
import {Header} from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header:
      <Header
       // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Confirmação do Pedido', style: { color: '#fff', fontSize: 20, fontWeight:'bold' } }}
      />
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { ExpoConfigView } from '@expo/samples';

//Header importado
import {Header} from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header:
      <Header
        //leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Status do Pedido', style: { color: '#fff', fontSize: 20, fontWeight:'bold'  } }}
        //rightComponent={{ icon: 'home', color: '#fff' }}
      />
  };
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}

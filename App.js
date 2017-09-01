import React from 'react';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Hi from './components/Hi'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>

        {/*go to another page*/}
        <Router>
          <Scene key='root'>
            <Scene key='pageOne' component={PageOne} title='Bestsellers' initial={true} />
            <Scene key='pageTwo' component={PageTwo} title='Information' />
          </Scene>
        </Router>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});

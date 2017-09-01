import React from 'react';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';

export default class BookInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 30,
    flexDirection: 'column'
  },
    detailContainer: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row'
  }

});
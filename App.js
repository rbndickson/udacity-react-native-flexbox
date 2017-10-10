import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {flex: 1}]}/>
        <View style={[styles.box, {flex: 2, alignSelf: 'flex-start'}]}/>
        <View style={[styles.box, {flex: 1}]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection defaults to 'column'
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    justifyContent: 'center',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // alignItems: 'flex-start',
    alignItems: 'center',
    // alignItems: 'flex-end',
    // with stretch it will stretch as long as there is no set width
    // alignItems: 'stretch',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default App;

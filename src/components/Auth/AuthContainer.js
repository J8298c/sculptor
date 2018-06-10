import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class AuthContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AuthContainer</Text>
      </View>
    )
  }
}


const styles = {
  container: {
    flex: 1
  }
}
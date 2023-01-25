import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={() => { }}
      >
        Login with Facebook
      </Icon.Button>
      <Icon.Button name="twitter" backgroundColor="red">
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
          Login with Facebook
        </Text>
      </Icon.Button>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
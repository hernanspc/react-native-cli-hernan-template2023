import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Bell from './src/icons/Bell';
import Auto from './src/assets/svg/snyk.svg'

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
      <Icon.Button name="twitter" backgroundColor="#00ACEE">
        <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
          Login with Facebook
        </Text>
      </Icon.Button>
      <Bell />
      <Auto style={styles.logo} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  scrollView: {
    width: '100%',
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
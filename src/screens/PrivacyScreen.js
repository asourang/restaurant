import React, { Component } from 'react'
import { View, StyleSheet, Text } from "react-native";
import WebView from 'react-native-webview'
class PrivacyScreen extends Component {
  render() {
    return <WebView source={{ uri: 'https://blog.jscrambler.com/how-to-use-webviews-in-a-react-native-app/' }} style={{ marginTop: 20 }} />
  }
}

export default PrivacyScreen;

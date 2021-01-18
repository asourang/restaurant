
import React, { Component } from 'react'
import WebView from 'react-native-webview'

export default class AboutScreen extends Component {
  render() {
    return <WebView source={{ uri: 'https://blog.jscrambler.com' }} style={{ marginTop: 20 }} />
  }
}


import React, {Component} from 'react';
import {TouchableOpacity, Text, Alert, View} from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }
  export = () => {
    Alert.alert('A copy Sent to Mail');
    console.log('Exported');
  };
  render() {
    return (
      <View style={{position: 'absolute', right: 30, top: 10,flexDirection:'row'}}>
        <TouchableOpacity onPress={this.export}>
          <Text
            style={{
              fontSize: 18,
              color: 'orange',
              fontWeight: 'bold',
            }}>
            EXPORT
          </Text>
          <Icon name='download-outline'size={24} style={{position:'absolute',right: -25, top: -2}} color='bisque'/>
        </TouchableOpacity>
      </View>
    );
  }
}

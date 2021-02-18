import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const dinnerColor='#b07420'
const lunchColor='#65acdc'
export default class ToggleLunchDinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        meal:'LUNCH',
        clr:lunchColor,
        indicator:'row'
    };
  }
  handleToggle = () => {
    const {meal} = this.state;
    if (meal==='DINNER') {
      this.setState({meal:'LUNCH'});
      this.setState({clr:lunchColor});
      this.setState({indicator:'row'});
    } else {
      this.setState({meal: 'DINNER'});
      this.setState({clr:dinnerColor});
      this.setState({indicator:'row-reverse'});
    }
  };
  render() {
    return (
      <View style={[styles.switchContainer, this.props.style,{backgroundColor:this.state.clr,flexDirection:this.state.indicator}]}>
        <View style={styles.toggleIndicator} />
        <TouchableOpacity onPress={this.handleToggle}>
          <Text style={styles.toggleText}>{this.state.meal}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  switchContainer: {
    width: 80,
    borderRadius: 10,
  },
  toggleIndicator: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
    elevation:5
  },
  toggleText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 3,
  },
});

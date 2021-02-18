import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryDark} from '../Colors';
import {screenHeight, screenWidth} from '../Dimens';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  ShowCurrentDate = () => {
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    return date + ' ' + months[month] + ' ' + year;
  };
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerChefName}>
          {this.props.chefName} , {this.props.chefAddress}
        </Text>
        <Text style={styles.headerChefAddress}>{this.ShowCurrentDate()}</Text>
        {this.props.children}
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    height: screenHeight / 12,
    width: screenWidth,
    backgroundColor: PrimaryDark,
    justifyContent: 'flex-start',
  },
  headerChefName: {
    color: '#dFdFdF',
    fontSize: 18,
    paddingHorizontal: 5,
    marginVertical: 2,
    fontFamily: 'arial',
  },
  headerChefAddress: {
    color: '#dFdFdF',
    fontSize: 16,
    paddingHorizontal: 5,
    fontFamily: 'arial',
  },
 
});

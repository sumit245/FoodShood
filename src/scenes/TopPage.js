import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import CalTab from '../components/CalTab';
import Header from '../components/Header';
import SlotMeal from '../components/SlotMeal';

export default class TopPage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.mainPage}>
        <Header chefName="Sumit Ranjan" chefAddress="Delhi">
        <View
          style={[
            styles.previousDays,
            {flexDirection: 'row', paddingHorizontal: 10},
          ]}>
          <Icon name="calendar-outline" color="#dfdfdf" size={16} />
          <Text style={{color: '#dfdfdf', paddingLeft: 5}}>History</Text>
        </View>
        </Header>
        <CalTab />
        <SlotMeal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainPage: {
    display: 'flex',
  },
  previousDays: {
    position: 'absolute',
    right: 10,
    fontSize: 18,
    bottom: 20,
    color: '#dfdfdf',
    fontFamily: 'arial',
  }, 
});

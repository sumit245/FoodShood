import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Export from '../components/Export';
import Header from '../components/Header';
import MyDatePicker from '../components/MyDatePicker';
import {screenHeight, screenWidth} from '../Dimens';
import {PASTORDERS} from '../models/PASTORDERS';

const Item = ({item}) => (
  <View style={styles.item}>
    <View style={{flexDirection: 'row'}}>
      <Text
        style={{
          paddingHorizontal: 5,
          color: '#6a6a6a',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        #{item.ordernum}
      </Text>
      <Text
        style={[
          item.status === 'Delivered'
            ? {backgroundColor: '#5ca85cff'}
            : {backgroundColor: '#d9534f'},
          {fontWeight: 'bold', color: '#fcfcfc', paddingHorizontal: 5},
        ]}>
        {item.status}
      </Text>
    <Text style={{right:-screenWidth/4-10,color:'#6a6a6a'}}>{item.delivery_date} , {item.expected_time}</Text>
    </View>
    <Text style={{fontSize: 18, fontWeight: 'bold', width: 300,color:'#000',padding:5}}>
      {item.meal} {item.extras}
    </Text>
  </View>
);
export default class PastOrders extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item}) => <Item item={item} />;
  render() {
    return (
      <View>
        <Header chefName="Sumit Ranjan" chefAddress="Delhi">
          <Export />
        </Header>
        <MyDatePicker />
        <View style={{marginTop: screenHeight / 12}}>
          <FlatList
            data={PASTORDERS}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{height: 10}}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9f9ff',
    padding: 5,
    marginVertical: 1,
    marginHorizontal: 1,
    borderBottomColor:'#8a9aca',
    borderBottomWidth:2
  },
  title: {
    fontSize: 32,
  },
});

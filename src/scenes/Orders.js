import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Header from '../components/Header';
import {screenHeight} from '../Dimens';
import OrderItem from '../components/OrderItem';
import {ORDERS} from '../models/ORDERS';
import ToggleLunchDinner from '../components/ToggleLunchDinner';

export default class Orders extends Component {
  constructor(props) {
    super(props);
  }
  renderItem = ({item}) => <OrderItem item={item} />;
  render() {
    return (
      <View style={{backgroundColor:'#888b'}}>
        <Header chefName="Sumit Ranjan" chefAddress="Delhi">
          <ToggleLunchDinner
            style={{
              alignItems: 'center',
              alignSelf: 'flex-start',
              top: -20,
              left: 100,
            }}></ToggleLunchDinner>
          <Text
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              fontSize:18,
              color:'orange',
              fontWeight:'bold'
            }}>
            Orders 45
          </Text>
        </Header>
        <Searchbar style={styles.searchbar} />
        <SafeAreaView>
          <FlatList
            data={ORDERS}
            showsVerticalScrollIndicator={false}
            style={{top: screenHeight / 10, marginBottom: 10}}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<View />}
            ListFooterComponentStyle={{height: 180}}
          />
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchbar: {
    display: 'flex',
    top: screenHeight / 12,
  },
});

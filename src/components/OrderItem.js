import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {SecondaryDarkColor} from '../Colors';
import veg from '../images/veg.png';
import nonveg from '../images/nonveg.png';

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ordercard}>
        <View style={{height: 150}}>
          <View
            style={{
              backgroundColor: SecondaryDarkColor,
              padding: 2,
              left: -15,
              width: 200,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#ffffff',
                  paddingHorizontal: 10,
                }}>
                {this.props.item.expected_time}
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000',
              paddingHorizontal: 15,
            }}>
            #{this.props.item.ordernum}
          </Text>
          <View style={{flexDirection: 'row', padding: 3}}>
            <Image
              source={this.props.item.mealtype === 'veg' ? veg : nonveg}
              height={10}
              width={10}
            />

            <Text style={{color: '#252525', fontSize: 16, marginLeft: 5}}>
              {this.props.item.meal}
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 3}}>
            <Image
              source={this.props.item.extratype === 'veg' ? veg : nonveg}
              height={10}
              width={10}
            />
            <Text style={{color: '#252525', fontSize: 16, marginLeft: 5}}>
              {this.props.item.extras}
            </Text>
          </View>
          <Divider style={{top:10,height:2}}/>
          <View style={{flexDirection:'row'}}>
            <View style={{position:'absolute',left:20,top:20}}>
          <Text style={{fontWeight:'bold'}}>{this.props.item.receiver}</Text>
          <Text>{this.props.item.recieverAddress}</Text>
            </View>
          <Image
            source={{uri: this.props.item.avatar_url}}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              right: 20,
              top:20
            }}/>
          </View>
        </View>

        <View style={{marginTop: 50}}>
          <Divider style={{height: 2}} />

          <TouchableOpacity
            style={{
              paddingVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon
              name="chatbubble-ellipses-outline"
              size={18}
              style={{color: '#0275d8', paddingHorizontal: 2}}
            />
            <Text style={{color: '#0275d8', paddingHorizontal: 2}}>
              Chat With Customer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ordercard: {
    backgroundColor: '#f9ffff',
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 2,
    marginHorizontal: 8,
  },
  title: {
    marginTop: 5,
    fontSize: 18,
  },
});

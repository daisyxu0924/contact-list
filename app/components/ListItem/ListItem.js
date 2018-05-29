import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';

import styles from './ListItemStyle';

const ListItem = ({ data }) => {
  const { index, name: { first, last }, picture: { medium } } = data;
  return (
    <View style={(index % 2 === 0) ? styles.itemWrapperEven : styles.itemWrapperOdd}>
      <Image
        source={{uri: medium}}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{ first[0].toUpperCase() + first.slice(1) }, { last[0].toUpperCase() + last.slice(1) }</Text>
      </View>
    </View>
  )
}
export default ListItem;

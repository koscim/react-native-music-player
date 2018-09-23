import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import ProgressCircle from './ProgressCircle';

export default class SongImage extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.songImageDiv}>
        <ProgressCircle
          image={this.props.image}
          percent={this.props.percent} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  songImageDiv: {
    flex: 0.7,
    justifyContent: 'center',
  }
})

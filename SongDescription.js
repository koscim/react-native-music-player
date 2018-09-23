import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class SongDescription extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.songDescription}>
        <Text style={styles.artist}>{this.props.song.artist}</Text>
        <Text style={styles.title}>{this.props.song.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  songDescription: {
    flex: 0.5
  },
  artist: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2492c4',
    margin: 10
  },
  title: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  }
})

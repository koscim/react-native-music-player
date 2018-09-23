import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import SongImage from './SongImage';
import SongDescription from './SongDescription';
import SongControls from './SongControls';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    const remote = 'https://www.banquetrecords.com/item.png?6766005';
    const song = {
      artist: 'Olafur Arnalds',
      title: 're:member'
    }
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: remote }} />
        <View style={styles.upperDiv}>
          <SongImage image={remote} percent={65}/>
          <View style={styles.songDescriptionDiv}>
            <SongDescription song={song} />
          </View>
          <View style={styles.songProgressDiv}>
            <View style={styles.songDurationDiv}>
              <Text style={styles.currentDuration}>2:10</Text>
              <View style={styles.firstProgressLayerBar}></View>
              <Text style={styles.endDuration}>3:15</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerDiv}>
          <SongControls />
          <View style={styles.songDetailsDiv}>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'column'
  },
  backgroundImage: {
    opacity: 0.1,
    backgroundColor: '#000f2d',
    flex: 0.7,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 200,
    right: 0
  },
  upperDiv: {
    flex: 0.7,
    // backgroundColor: '#1f007f',
    // backgroundColor: '#111c3a',
    // backgroundColor: '#030a0c',
    // backgroundColor: '#3a4556',
    // backgroundColor: '#000f2d',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  lowerDiv: {
    flex: 0.3,
    opacity: 0.8,
    // backgroundColor: '#000f2d',
    // backgroundColor: '#49687f',
    // backgroundColor: '#576e7f',
    // backgroundColor: '#22252B',
    borderTopColor: '#212121',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 7,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#1B1D23',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  songDescriptionDiv: {
    flex: 0.2,
    alignSelf: 'stretch'
  },
  songDetailsDiv: {
    flex: 0.5,
  },
  songProgressDiv: {
    flex: 0.1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'flex-end'
  },
  songDurationDiv: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  currentDuration: {
    flexDirection: 'column',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#656565',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.1
  },
  endDuration: {
    flexDirection: 'column',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#656565',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flex: 0.1
  },
  firstProgressLayerBar: {
    height: 7.5,
    backgroundColor: 'grey',
    alignSelf: 'flex-end',
    flex: 0.75,
  }
});

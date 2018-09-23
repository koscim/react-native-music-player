import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SongControls extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.songControlDiv}>
        <View style={styles.innerSongControlDiv}>
            <View style={styles.stepBackwardDiv}>
              <Text style={styles.stepBackwardButton}><Icon name="step-backward" size={20} color="white" /></Text>
            </View>
            <View style={styles.skipBackwardButtonShadowDiv}>
              <View style={styles.backwardButtonDiv}>
                <Text style={styles.backwardButton}><Icon name="backward" size={17} color="white" /></Text>
              </View>
            </View>
            <View style={styles.playButtonShadowDiv}>
              <View style={styles.playButtonDiv}>
                  <Text style={styles.playButton}><Icon name="play" size={30} color="white" /></Text>
              </View>
            </View>
            <View style={styles.skipForwardButtonShadowDiv}>
              <View style={styles.forwardButtonDiv}>
                <Text style={styles.forwardButton}><Icon name="forward" size={17} color="white" /></Text>
              </View>
            </View>
            <View style={styles.stepForwardDiv}>
              <Text style={styles.stepForwardButton}><Icon name="step-forward" size={20} color="white" /></Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stepBackwardDiv: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginRight: 35
  },
  stepForwardDiv: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginLeft: 35
  },
  playButtonDiv: {
    opacity: 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderColor: 'white',
    borderWidth: 2.5,
    borderRadius: 35,
    transform: [{rotateZ: '-15deg'}]
  },
  backwardButtonDiv: {
    opacity: 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderColor: 'white',
    borderWidth: 1.5,
    borderRadius: 20,
    transform: [{rotateZ: '-135deg'}]
  },
  forwardButtonDiv: {
    opacity: 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderColor: 'white',
    borderWidth: 1.5,
    borderRadius: 20,
    transform: [{rotateZ: '-135deg'}]
  },
  playButton: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 7
  },
  backwardButton: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 4
  },
  forwardButton: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 4
  },
  stepBackwardButton: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  stepForwardButton: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  songControlDiv: {
    flex: 0.7,
    justifyContent: 'center'
  },
  innerSongControlDiv: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  playButtonShadowDiv: {
    opacity: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 95,
    height: 95,
    borderLeftColor: '#212121',
    borderBottomColor: '#212121',
    borderRightColor: '#171a21',
    borderTopColor: '#171a21',
    borderColor: 'white',
    borderWidth: 7,
    borderRadius: 47.5,
    transform: [{rotateZ: '135deg'}]
  },
  skipForwardButtonShadowDiv: {
    opacity: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderLeftColor: '#212121',
    borderBottomColor: '#212121',
    borderRightColor: '#171a21',
    borderTopColor: '#171a21',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 30,
    marginLeft: 15,
    transform: [{rotateZ: '135deg'}]
  },
  skipBackwardButtonShadowDiv: {
    opacity: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderLeftColor: '#212121',
    borderBottomColor: '#212121',
    borderRightColor: '#171a21',
    borderTopColor: '#171a21',
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 30,
    marginRight: 15,
    transform: [{rotateZ: '135deg'}]
  }
})

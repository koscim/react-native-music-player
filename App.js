/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import ProgressCircle from './ProgressCircle';
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  progressStyle = (percent, base_degrees) => {
    const rotateBy = base_degrees + (percent * 3.6);
    return {
      transform: [{rotateZ: `${rotateBy}deg`}]
    };
  }
  renderThirdLayer = (percent) => {
    if(percent > 50) {
      return <View style={[styles.secondProgressLayer, this.progressStyle((percent - 50), 45)]}></View>
    } else {
      return <View style={styles.offsetLayer}></View>
    }
  }
  render() {
    // const { percent } = this.props;
    const remote = 'https://www.banquetrecords.com/item.png?6766005';
    let percent = 90;
    let firstProgressLayerStyle;
    if(percent > 50) {
      firstProgressLayerStyle = this.progressStyle(50, -135);
    } else {
      firstProgressLayerStyle = this.progressStyle(percent, -135);
    }
    let stylesFromProps = this.progressStyle(percent);
    return (
      <View style={styles.container}>
      <Image
        style={{
          opacity: 0.1,
          backgroundColor: '#000f2d',
          flex: 0.7,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 200,
          right: 0,
        }}
        source={{ uri: remote }} />

        <View style={styles.upperDiv}>
          <View style={styles.songImageDiv}>
            <ProgressCircle percent={65} />
          </View>
          <View style={styles.songDescriptionDiv}>
            <View style={styles.songDescription}>
              <Text style={styles.welcome}>Olafur Arnalds</Text>
              <Text style={styles.instructions}>re:member</Text>
            </View>
            <View style={styles.innerDiv}>
              <View style={styles.songDurationDiv}>
                <Text style={styles.currentDuration}>2:10</Text>
                <View style={styles.firstProgressLayerBar}></View>
                <Text style={styles.endDuration}>3:15</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.lowerDiv}>
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
    // alignItems: 'center',
    backgroundColor: 'black',
    flexDirection: 'column'
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
  songImageDiv: {
    flex: 0.7,
    justifyContent: 'center',
    // backgroundColor: 'green',
    // alignSelf: 'stretch'
  },
  songDescriptionDiv: {
    flex: 0.3,
    alignSelf: 'stretch'
    // backgroundColor: 'black',
    // alignSelf: 'stretch'
  },
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
    // marginRight: 20,
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
    // marginLeft: 20,
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
    justifyContent: 'center',
  },
  stepForwardButton: {
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  circleProgress: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstProgressLayer: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    transform: [{rotateZ: '-135deg'}]
  },
  secondProgressLayer: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    transform: [{rotateZ: '45deg'}]
  },
  offsetLayer: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'grey',
    borderTopColor: 'grey',
    transform:[{rotateZ: '-135deg'}]
  },
  display: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold'
  },
  songDescription: {
    flex: 0.5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#2492c4',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
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
  songDetailsDiv: {
    flex: 0.5,
  },
  innerDiv: {
    flex: 0.5,
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
});

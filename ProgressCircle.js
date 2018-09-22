
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


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

const ProgressCircle = ({percent}) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = this.progressStyle(50, -135);
  } else {
    firstProgressLayerStyle = this.progressStyle(percent, -135);
  }
  const remote = 'https://www.banquetrecords.com/item.png?6766005';
  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}>
      </View>
      {this.renderThirdLayer(percent)}
      <View style={styles.artistImageDiv}>
        <Image
          style={styles.artistImage}
          source={{ uri: remote }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
  innerDiv: {
    height: 180,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute'
  },
  songDurationDiv: {
    flexDirection: 'row'
  },
  currentDuration: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#656565'
  },
  endDuration: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#656565'
  },
  artistImageDiv: {
    opacity: 1,
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 100
  },
  artistImage: {
    flex: 1,
    resizeMode: 'center',
    borderRadius: 100
  }
});

export default ProgressCircle;

// <View style={styles.innerDiv}>
//   <View style={styles.songDurationDiv}>
//     <Text style={styles.currentDuration}>0:10</Text>
//     <Text style={styles.endDuration}>/3:15</Text>
//   </View>
// </View>

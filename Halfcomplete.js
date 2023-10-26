import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSequence,
  withSpring
} from 'react-native-reanimated';

const duration = 2000;
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
export default function Ani() {
  const positionX1 = useSharedValue(0);
  const positionY1 = useSharedValue(0);
  const positionX2 = useSharedValue(0);
  const positionY2 = useSharedValue(0);
  const opacity = useSharedValue(0);

  const width = useSharedValue(0);
  const height = useSharedValue(0);
 
  
  const scale = useSharedValue(1);


  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
 
  const animatedChanged5 = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {duration, easing: Easing.linear}),
    };
  });
  const animatedChanged = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:positionX1.value
        },
        {
          translateY:positionY1.value
        },
      ],
    };
  });

  const animatedChanged1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:-positionX2.value
        },
        {
         translateY:positionY2.value
        },
      ],
    };
  });
  const animatedChanged3 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: positionX1.value
        },
        {
          translateY: -positionY1.value
        },
      ],
    };
  });
  const animatedChanged4 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: -positionX1.value
        },
        {
          translateY:-positionY1.value
        },
      ],
    };
  });
  function moveDiagonal() {
    positionX1.value=withTiming(100, { duration: 2000, easing: Easing.linear })
    positionY1.value=withTiming(150, { duration: 2000, easing: Easing.linear })
   positionX2.value=withTiming(100, { duration: 2000, easing: Easing.linear })
    // positionY2.value = 150; 
    positionY2.value=withTiming(150, { duration: 2000, easing: Easing.linear })
   
    width.value = withTiming(220,{  duration:2000,easing: Easing.linear,});
    height.value = withTiming(220,{  duration:2000,easing: Easing.linear,});
  opacity.value= withTiming(1, {duration:2000, easing: Easing.linear});
  }

  function reset() {
    // Reset all values to their initial state
    // positionX1.value = 0;
    positionX1.value = withSequence(
      withTiming(0, { duration: 2000, easing: Easing.linear }, () => {
        scale.value = withSequence(
          withSpring(1.3, { damping: 2, stiffness: 80 }),
          withSpring(1, { damping: 2, stiffness: 80 })
        );
      }),
    );
    positionY1.value = withSequence(
      withTiming(0, { duration: 2000, easing: Easing.linear }, () => {
        scale.value = withSequence(
          withSpring(1.3, { damping: 2, stiffness: 80 }),
          withSpring(1, { damping: 2, stiffness: 80 })
        );
      }),
    );
   // positionY1.value = 0;
    // positionX2.value = 0;
    positionX2.value = withSequence(
      withTiming(0, { duration: 2000, easing: Easing.linear }, () => {
        scale.value = withSequence(
          withSpring(1.3, { damping: 2, stiffness: 80 }),
          withSpring(1, { damping: 2, stiffness: 80 })
        );
      }),
    );
    //positionY2.value = 0;
    positionY2.value = withSequence(
      withTiming(0, { duration: 2000, easing: Easing.linear }, () => {
        scale.value = withSequence(
          withSpring(1.3, { damping: 2, stiffness: 80 }),
          withSpring(1, { damping: 2, stiffness: 80 })
        );
      }),
    );
    width.value = withTiming(0,{  duration:2000,easing: Easing.linear,});
    height.value = withTiming(0,{  duration:2000,easing: Easing.linear,});
  opacity.value= withTiming(0, {duration:2000, easing: Easing.linear});
  
  }

 
  return (
    <View style={styles.container}>
   
   <Animated.Image
      source={require('./progressFile0.png')}
        style={[{
          width,
          height,
          opacity,
          
        },animatedChanged5]}
      />
    <View style={styles.contentContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Animated.View style={[styles.box, animatedChanged, animatedStyle1]}>
        <Image source={require('./FullWhite/mindful.png')} style={styles.img}/>
        </Animated.View>
        <Animated.View style={[styles.box, animatedChanged1,animatedStyle1]}>
        <Image source={require('./FullWhite/perfrom.png')} style={styles.img}/>
        </Animated.View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Animated.View style={[styles.box, animatedChanged3, animatedStyle1]}>
          <Image source={require('./FullWhite/fuel.png')} style={styles.img}/>
        </Animated.View>
        <Animated.View style={[styles.box, animatedChanged4,animatedStyle1]}>
        <Image source={require('./FullWhite/restore.png')} style={styles.img}/>
        </Animated.View>
      </View>
    </View>

<View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={moveDiagonal} >
      <Text>Move          </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={reset}>
        <Text>Reset</Text>
      </TouchableOpacity>
</View>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleback: {
    // height: 220,
    // width:220,
    justifyContent: 'space-between',
    // borderWidth: 1,
   borderColor: 'white',
    
  },
  contentContainer: {
    height:460,
    justifyContent: 'space-between',
    position: 'absolute', // Positioned independently of the background
    top: 150,
    left: 0,
    right: 0,
    bottom: 0,
  },
  box: {
    height: 120,
    width: 120,
    // borderWidth: 1,
   borderColor: '#b58df1',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height: 120,
    width: 120,
  },
  text: {
    color: '#b58df1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
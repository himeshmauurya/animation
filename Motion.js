import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Easing,
  withTiming,
  withSequence,
  BounceIn,
  Layout,
} from "react-native-reanimated";

const BounceIn2 = () => {
  
  const positionX1 = useSharedValue(0);

  // Helper function to handle the bounce animation
  const handleBounce = () => {
   
    positionX1.value = 200;
    
  };

  // Animation styles for scaling and position
  
  const animatedChanged = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(positionX1.value, {
            duration: 2000,
            easing: Easing.linear,
          }),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBounce} activeOpacity={1.0}>
        <Animated.View style={[styles.box, animatedChanged]}  />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});

export default BounceIn2;

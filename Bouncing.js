import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

const Box = () => {
  // const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateY: translateY.value }, { scale: scale.value }],
  //   };
  // });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [ { scale: scale.value }],
    };
  });

  const handlePress = () => {
    //translateY.value = withSpring(-100, { damping: 2, stiffness: 80 });
    scale.value = withSpring(2, { damping: 2, stiffness: 80 });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>
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

export default Box;

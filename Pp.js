import { Button, View } from 'react-native';
import Animated, { useSharedValue, withTiming ,Easing,useAnimatedStyle} from 'react-native-reanimated';

export default function App() {
  const width = useSharedValue(100);
  const height = useSharedValue(100);
  const opacity = useSharedValue(0);
  
  const handlePress = () => {
    width.value = withTiming(200,{  duration:2000,easing: Easing.linear,});
    height.value = withTiming(200,{  duration:2000,easing: Easing.linear,});
    opacity.value= withTiming(1, {duration:2000, easing: Easing.linear});
  };
const reset=()=>{
  width.value = withTiming(0,{  duration:2000,easing: Easing.linear,});
  height.value = withTiming(0,{  duration:2000,easing: Easing.linear,});
  opacity.value= withTiming(0, {duration:2000, easing: Easing.linear});
}
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.Image
      source={require('./progressFile0.png')}
        style={{
          width,
          height,
          opacity,
          
        }}
      />
      <Button onPress={handlePress} title="Click me" />
      <Button onPress={reset} title="Click me" />
    </View>
  );
}
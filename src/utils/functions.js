//Format Sylvac Caliper output to a number


export function extractNumbers(size) {
  //Format any Caliper output to a number - tested only with sylvac
  const regex = /[-+]?[0-9]*\.?[0-9]+([^0-9])[0-9]+/g;
  const match = regex.exec(size);
  if (match) {
    const separator = match[1];
    const decimalStr = size.replace(separator, '.').replace(/[^0-9.](?![^0-9]*separator)/g, '');
    //console.log("size is " + size)
    //console.log("Decimal String is " + decimalStr);
    //console.log("ParseFloat is " + parseFloat(decimalStr));
    return parseFloat(decimalStr);
  }
  return null;
  };
  

//Average function for array of numbers
export function average(arr) {
    const sum = arr.reduce((a,b) => a + b, 0);
    const avg = (sum / arr.length).toFixed(2) || 0;
    return avg;
  }



//Flash screen function
export function flashScreen() {
  console.log('flash screen');
}


//Play Sound function

import { Audio } from 'expo-av';

export async function playSound() {
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      // interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      //interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });

    const { sound } = await Audio.Sound.createAsync(
      require('/home/amos/Documents/Code/fruitspec-manual-caliper/src/components/bell.mp3'),
      { shouldPlay: false, volume: 1.0 }
    );

    await sound.playAsync();
    await sound.unloadAsync();
  } catch (error) {
    console.log('Error playing sound', error);
  }
}


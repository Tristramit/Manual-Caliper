//Order of exported functions
//1. extractNumbers
//2. average
//3. flashScreen
//4. playSound
//5. sizesArray
//6. arrayToCSV
//7. currentTimeString

export function extractNumbers(size) {
  //Format any Caliper output to a number - tested only with sylvac
  const regex = /[-+]?[0-9]*\.?[0-9]+([^0-9])[0-9]+/g;
  const match = regex.exec(size);
  if (match) {
    const separator = match[1];
    const decimalStr = size
      .replace(separator, ".")
      .replace(/[^0-9.](?![^0-9]*separator)/g, "");
    //console.log("size is " + size)
    console.log("Decimal String is " + decimalStr);
    console.log("Type of decimalStr is " + typeof decimalStr);
    //console.log("ParseFloat is " + parseFloat(decimalStr));
    // return parseFloat(decimalStr);
    return decimalStr;
  }
  return null;
}

//Average function for array of numbers
export function average(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = (sum / arr.length).toFixed(2) || 0;
  return avg;
}

//Flash screen function
export function flashScreen() {
  console.log("flash screen");
}

//Play Sound function

import { Audio } from "expo-av";

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
      require("/home/amos/Documents/Code/fruitspec-manual-caliper/src/components/bell.mp3"),
      { shouldPlay: false, volume: 1.0 }
    );

    await sound.playAsync();
    await sound.unloadAsync();
  } catch (error) {
    console.log("Error playing sound", error);
  }
}

export function sizesArray(SizesList) {
  return SizesList.map((subarray) => subarray[0]);
}

export function arrayToCsv(array) {
  const headers = "Size, Latitude, Longitude";
  return (
    headers + "\n" + array.map((subarray) => subarray.join(",")).join("\n")
  );
}

//Get current time in DDMMYYYYhhmmssmsms string format
export function currentTimeString(){
    const currentDate = new Date();
  
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');
  
    return day + month + year + hours + minutes + seconds + milliseconds;
  }

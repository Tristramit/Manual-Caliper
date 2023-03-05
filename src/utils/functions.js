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
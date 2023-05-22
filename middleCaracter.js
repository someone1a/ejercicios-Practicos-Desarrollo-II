let middleCharacter =(palabra) => {
    let length = palabra.length;
    let middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
      return palabra.substr(middleIndex - 1, 2);
    } else {
      return palabra.charAt(middleIndex);
    }
  }
  console.log(middleCharacter("German"))
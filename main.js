function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

//true
console.log(isPangram("THE quick brown fox jumps over the lazy dog"));
//true
console.log(isPangram("the quick brown fox jumps over the lazy dog"));
//false the x in fox is missing
console.log(isPangram("the quick brown fo jumps over the lazy dog"));

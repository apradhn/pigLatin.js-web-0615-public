'use strict';

var pigLatin = function(english){
  var words = [], translation = [];
  words = english.split(" ");
  words.forEach(function(word){
    if(startWith.vowel(word) === true) {
      translation.push(encode.vowel(word));
    } else if (startWith.consonantQu(word) === true) {
      translation.push(encode.consonantQ(word));
    } else if (startWith.qu(word) === true) {
      translation.push(encode.qu(word));
    } else if (startWith.consonants(word) === true) {
      translation.push(encode.manyConsonants(word));
    } else if (startWith.consonant(word) === true) {
      translation.push(encode.consonant(word));
    }
  });
  translation = translation.join(" ");
  return translation;
};

var encode = {
  vowel: function(string) {
    var translation;
    translation = string + "ay";
    return translation;    
  },
  consonant: function(string) {
    var translation;
    translation = string.slice(1) + string.slice(0,1) + "ay";
    return translation; 
  },
  manyConsonants: function(string) {
    var translation, regex, match, sub;
    regex = /^[^aeiou]{2,}/;
    match = string.match(regex)[0];
    sub = string.replace(match, "");
    translation = sub + match + "ay";
    console.log(translation);
    return translation;      
  },
  qu: function(string) {
    var translation;
    translation = string.slice(2) + "quay";
    return translation;
  },
  consonantQ: function(string) {
    var translation, regex, match, sub;
    regex = /^[^aeiou]qu/;
    match = string.match(regex)[0];
    sub = string.replace(match, "");
    translation = sub + match + "ay";
    console.log(translation);
    return translation;
  }
}

var startWith = {
  vowel: function(string) {
    var answer, regex;
    regex = /^[aeiou]/;
    answer = regex.test(string);
    return answer;    
  },
  consonant: function(string) {
    var answer, regex;
    regex = /^[^aeiou]/;
    answer = regex.test(string);
    return answer;    
  },
  consonants: function(string) {
    var answer, regex;
    regex = /^[^aeiou]{2,}/;
    answer = regex.test(string);
    return answer;    
  },
  qu: function(string) {
    var answer;
    answer = string.slice(0,2) === "qu"
    return answer;
  },
  consonantQu: function(string) {
    var answer, regex;
    regex = /^[^aeiou]qu/;
    answer = regex.test(string);
    return answer;    
  }
}
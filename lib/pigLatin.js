'use strict';

var pigLatin = function(english){
  var words = [], translation = [];
  var vowel = /^[aeiou]/, consonants = /^[^aeiou]{1,}/, consonantQu = /^[^aeiou]qu/, qu = /^qu/;
  words = english.split(" ");
  words.forEach(function(word){
    if(vowel.test(word) === true) {
      translation.push(word + "ay");
    } else if (consonantQu.test(word) === true) {
      translation.push(translate(word, consonantQu));
    } else if (qu.test(word) === true) {
      translation.push(translate(word, qu));
    } else if (consonants.test(word) === true) {
      translation.push(translate(word, consonants));
    }
  });
  translation = translation.join(" ");
  return translation;
};

var translate = function(string, regex) {
  var match, sub, translation;
  match = string.match(regex)[0];
  sub = string.replace(match, "");
  translation = sub + match + "ay";
  return translation;
}
'use strict';

const countSentences = function(sentences){
  // Add code here...
  let sentenceCount = 0;
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i] === "." || sentences[i] === "!" || sentences[i] === "?") {
      sentenceCount++;
    }
  }
  return sentenceCount;
  
};

module.exports = countSentences;

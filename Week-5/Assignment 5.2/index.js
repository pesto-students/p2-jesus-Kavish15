
 const vowelsCount = (str) => {
    const vowelsMap = new Map();
    for (const char of str) {
      const isVowel = "aeiou".includes(char.toLowerCase());
      if (isVowel) {
        const charCount = vowelsMap.get(char) || 0;
        vowelsMap.set(char, charCount + 1);
      }
    }
    return vowelsMap;
  };
  
  console.log(vowelsCount("kavish")); 
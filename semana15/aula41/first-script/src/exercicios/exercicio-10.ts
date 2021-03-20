const reverse = (word: string) => {
  const wordarray = word.split("");
  const reversearray = wordarray.reverse();
  const reverseWord = reversearray.join("");
  console.log("Palavra: ", word);
  console.log("Inverso: ", reverseWord);
};

reverse("abcd");

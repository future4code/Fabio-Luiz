const DNAtornaarray = (dna: string) => {
  let array = dna.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "A") {
      array[i] = "U";
    } else if (array[i] === "T") {
      array[i] = "A";
    } else if (array[i] === "C") {
      array[i] = "G";
    } else if (array[i] === "G") {
      array[i] = "C";
    }
  }
  const rna = array.join("");
  console.log("DNA: ", dna);
  console.log("RNA: ", rna);
  return rna;
};

DNAtornaarray("ATTGCTGCGCATTAACGACGCGTA");

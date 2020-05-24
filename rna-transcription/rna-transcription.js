//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const DNA = {
  'A':'U',
  'C':'G',
  'G':'C',
  'T':'A'
};

export const toRna = (input) => {
return input.split('').map(input => DNA[input]).join('');
}
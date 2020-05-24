//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = () => {
  const GIGASECOND = Math.pow(10, 12);

  const  Gigasecond = function(day) {
	/* Adds a gigasecond (10^9 seconds) to a date */
	this.day = day;
};

  // The date a gigasecond later
  Gigasecond.prototype.date = function() { 
  return new Date(this.day.getTime() + GIGASECOND);
};

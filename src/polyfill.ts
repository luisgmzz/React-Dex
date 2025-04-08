export {};
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

Array.prototype.toReversed = function() {
  const reversed = [];

  for (let i = this.length-1; i >= 0; i--) reversed.push(this[i]);
  return reversed;
}

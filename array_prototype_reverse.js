Array.prototype.reverse = function() {

  for (let i = this.length-1; i >= 0 ; i--) {
   this.push(this[i]);
 }  
  this.splice(0,this.length/2);
  return this;
};

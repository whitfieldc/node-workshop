// TODO: expose a function called "info" which prints the date and a logging string.

var info = function(string){
  console.log(new Date() +": "+ string)
};

stuff = {
  info: info
}

module.exports = stuff
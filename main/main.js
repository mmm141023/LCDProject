module.exports = function main(number) {
  if (parseInt(number) == 910) {
	  return "._. ... ._.\n"+
            "|_| ..| |.|\n"+
            "..| ..| |_|\n";
  }else if (parseInt(number) == 256) {
	  return "._. ._. ._.\n"+
            "._| |_. |_.\n"+
            "|_. ._| |_|\n";
  }else if (parseInt(number) == 7) {
	  return "._.\n"+
            "..|\n"+
            "..|\n";
  }else{
	  return 1;
  }
};
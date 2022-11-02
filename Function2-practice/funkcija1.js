//1. Write a function to check whether the `input` is a string or not.
//"My random string"; -> true
//12 -> false

function is_string(input) {
  if (Object.prototype.toString.call(input) === '[object String]')
  return true;
  else
  return false;
  };
  console. log(is_string('My random string'));
  console. log(is_string([12]));
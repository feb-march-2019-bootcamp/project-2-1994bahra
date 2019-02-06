
//////// first///////////////////////


function second_lowest_greatest(num){
    num.sort();
    let x = `${num[1]}, ${num[num.length -2]}`;
    return x;
  }
  
  console.log(second_lowest_greatest([3,1,2,5,4]));
  
  
  
  // //////////////////////////second  ////////////////////
  
  function coutcharactor(string, letter) {
    return string.split("")
    .filter( x => x === letter ).length;
  }
  console.log(coutcharactor('w3resource.com', 'o'));
  
  
  
  // ///////////   third////////////////////////////
  function noRepeat(str) {  
    for (let i = 0; i < str.length; i++) {
      if ( str.indexOf(str[i]) == str.lastIndexOf(str[i]) ) {
        return str[i];
      }
    }
    return null;
  }
  console.log(noRepeat('ababagddfgy'));
  
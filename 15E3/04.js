function echoInerval(a, b){
  setInterval(function(){
    if (a <= b)
    {
      console.log(a);
      a++
    }
  }, 1000);  
}

echoInerval(5,15)

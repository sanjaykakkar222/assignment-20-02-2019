function sum(a) {

    var sum = a
  
    function f(b) {
      sum += b
      return f  //<- from second call, f is returned each time
                //   so you can chain those calls indefinitely
                //   function sum basically got "overridden" by f
    }
  
    f.toString = function() { return sum }
  
    return f //<- after first call, f is returned
  }


  sum(1)(2)(3);
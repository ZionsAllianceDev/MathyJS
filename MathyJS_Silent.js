//MathyJS Loud


var MathyJS = {
        add:function(a,b){
          return(a+b);
  },
  subtract:function(a,b){
          return(a-b);
  },
  divide:function(a,b){
          return(a/b);
  },
  multiply:function(a,b){
          return(a*b);
  },
  random:function(a,b){
          return(Math.floor(Math.random()*a)+b);
    
  },
  root:function(a){
          return(Math.sqrt(a))
  },
  square:function(a){
          return(a*a);
  },
  cube:function(a){
                return(a*a*a);
  },
  modulus:function(a,b){
          return(a%b);
  },
  HighestNumber:function(a,b){
          return(Math.max(a,b));
  },
  LowestNumber:function(a,b){
          return(Math.min(a,b));
  },
  isOE:function(a){
          if(a % 2 > 0){
              return(a + " is odd");
          }
          else if(a % 2 == 0){
              return(a + " is even");
          }
  },
  primeRange:function(a){
          var comb = [], b, c, primeNum = [];
          for (b = 2; b <= a; ++b) {
          if (!comb[b]) {
        
            primeNum.push(b);
            for (c = b << 1; c <= a; c += b) {
                comb[c] = true;
            }
        }
    }
    return(primeNum);
  }
  
};


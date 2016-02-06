//MathyJS Loud


var MathyJS = {
        add:function(a,b){
          confirm(a+b);
  },
  subtract:function(a,b){
          confirm(a-b);
  },
  divide:function(a,b){
          confirm(a/b);
  },
  multiply:function(a,b){
          confirm(a*b);
  },
  random:function(a){
          confirm(Math.floor(Math.random()*a));
    
  },
  root:function(a){
          confirm(Math.sqrt(a))
  },
  square:function(a){
          confirm(a*a);
  },
  cube:function(a){
                confirm(a*a*a);
  },
  modulus:function(a,b){
          confirm(a%b);
  },
  HighestNumber:function(a,b){
          confirm(Math.max(a,b));
  },
  LowestNumber:function(a,b){
          confirm(Math.min(a,b));
  },
  isOE:function(a){
          if(a % 2 > 0){
              confirm(a + " is odd");
          }
          else if(a % 2 == 0){
              confirm(a + " is even");
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
    confirm(primeNum);
  }
  
};


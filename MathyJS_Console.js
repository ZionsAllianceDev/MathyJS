//MathyJS Console Edition
var MJS = {
        add:function(a,b){
          console.log(a+b);
  },
  subtract:function(a,b){
          console.log(a-b);
  },
  divide:function(a,b){
          console.log(a/b);
  },
  multiply:function(a,b){
          console.log(a*b);
  },
  random:function(a,b){
          console.log(Math.floor(Math.random()*a)+b);
    
  },
  root:function(a){
          console.log(Math.sqrt(a))
  },
  square:function(a){
          console.log(a*a);
  },
  cube:function(a){
          console.log(a*a*a);
  },
  modulus:function(a,b){
          console.log(a%b);
  },
  HighestNumber:function(a,b){
          console.log(Math.max(a,b));
  },
  LowestNumber:function(a,b){
          console.log(Math.min(a,b));
  },
  isOE:function(a){
          if(a % 2 > 0){
              console.log(a + " is odd");
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
    console.log(primeNum);
  },
  isNum:function(a){
          if(isNaN(a) == false){
                  console.log("Its A Number Dumbass")
          }
          else{
                  console.log("Its Not A Number Dumbass ")
          }
  },
  pi: function(){
          console.log(Math.PI)
  },
  roundNum:function(a){
          console.log(Math.round(a))
  },
  roundNumUp:function(a){
          console.log(Math.ceil(a))
  },
  roundNumDown:function(a){
          console.log(Math.floor(a))
  },
  eulersNum:function(){
          console.log(Math.E())
  },
  absVal:function(a){
          console.log(Math.abs(a))
  },
  power:function(a,b){
         console.log(Math.pow(a,b))
  },
  testFunction:function(){console.log("It Works")},
  versionNum:function(){console.log("1.2")},
};

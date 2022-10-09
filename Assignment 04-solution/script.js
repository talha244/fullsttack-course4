var array = new Array();
array[0] = "yakoov";
array[1] = "talha";
array[2] = "Jimmy";
array[3] = "Abdullah";
array[4] = "ANEES";
array[5] = "javaad";
array[6] = "farooq";
array[7] = "jamaal";
array[8] = "saleem";
array[9] = "joe";

for (var i=0; i<10; ++i) {
   if (array[i].charAt(0)==='j' || array[i].charAt(0)==='J') 
   {
    console.log("Goodbye " + array[i]);
   }
   else {
    console.log("Hello " + array[i]);
   }
  
}
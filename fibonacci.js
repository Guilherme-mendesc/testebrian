var i;
var fib = [];
fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 9; i++)/*caso eu coloca-se 10 ida dar 55 então deixei 9 */ {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
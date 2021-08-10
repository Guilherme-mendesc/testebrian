const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numeroTelefone = (num = []) => {
   let tel = '';
   num = num.map(String);
   tel += `(${num[0]+num[1]}) `;
   tel += `${num[3]+ num[4] + num[5] + num[6]}-`;
   tel += num[6] + num[7] + num[8] + num[9];
   return tel;
};
console.log("O numero de telefone é: " +numeroTelefone(num));


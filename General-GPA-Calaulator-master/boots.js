document.querySelector('#btn_sub').addEventListener('click', () =>
{
   let first_gpa=document.querySelector('#myInput1').ariaValueMax;
let first_gpa_per=(first_gpa /100)*12.5;
let first_gpa_per_result=first_gpa_per.toPrecision(3) ;


let two_gpa=document.querySelector('#myInput2').ariaValueMax;
let two_gpa_per=(two_gpa /100)*12.5;
let two_gpa_per_result=two_gpa_per.toPrecision(3) ;

let three_gpa=document.querySelector('#myInput3').ariaValueMax;
let three_gpa_per=(first_gpa /100)*12.5;
let three_gpa_per_result=three_gpa_per.toPrecision(3) ;

let four_gpa=document.querySelector('#myInput4').ariaValueMax;
let four_gpa_per=(four_gpa /100)*12.5;
let four_gpa_per_result=four_gpa_per.toPrecision(3) ;

let five_gpa=document.querySelector('#myInput5').ariaValueMax;
let five_gpa_per=(first_gpa /100)*12.5;
let five_gpa_per_result=five_gpa_per.toPrecision(3) ;

let six_gpa=document.querySelector('#myInput6').ariaValueMax;
let six_gpa_per=(first_gpa /100)*12.5;
let six_gpa_per_result=six_gpa_per.toPrecision(3) ;

let seven_gpa=document.querySelector('#myInput7').ariaValueMax;
let seven_gpa_per=(first_gpa /100)*12.5;
let seven_gpa_per_result=seven_gpa_per.toPrecision(3) ;

let eight_gpa=document.querySelector('#myInput8').ariaValueMax;
let eight_gpa_per=(first_gpa /100)*12.5;
let eight_gpa_per_result=eight_gpa_per.toPrecision(3) ;


let total=
parseFloat(first_gpa_per_result)+
parseFloat(two_gpa_per_result)+
parseFloat(three_gpa_per_result)+
parseFloat(four_gpa_per_result)+
parseFloat(five_gpa_per_result)+
parseFloat(six_gpa_per_result)+
parseFloat(seven_gpa_per_result)+
parseFloat(eight_gpa_per_result);
let total_cgpa=total.toPrecision(2);
document.querySelector('cgpa output h1').innerHTML='TOTAL CGPA = $(total_cgpa)'


})
document.querySelector('#btn_re').addEventListener('click', () =>
{document.querySelector('cgpa output h1').innerHTML='TOTAL CGPA='
document.querySelector('#myInput1').ariaValueMax='';
document.querySelector('#myInput2').ariaValueMax='';
document.querySelector('#myInput3').ariaValueMax='';
document.querySelector('#myInput4').ariaValueMax='';
document.querySelector('#myInput5').ariaValueMax='';
document.querySelector('#myInput6').ariaValueMax='';
document.querySelector('#myInput7').ariaValueMax='';
document.querySelector('#myInput8').ariaValueMax='';
})
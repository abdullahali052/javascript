//VARIABLES:-
//var;

// var a = 'yahoo baba'
// a='yahoo'
// var z = 100;
// document.write(a + z)

//let;
// agar ham var mey varable ko dobara declare karthe hai tho koi error nahi aeyga lekin agar ham ye
// let mey karenga tho us me error aey ga agar ak bar varable let declare kar dia pir nahi kar sakthe lekin hum is ko
// value declare karsakthe hai

// let b = 'yahoo'
// let b = 'baba';// this show an error
// document.write(b)

//const;
//Constant Varable is ka matlab hai agar ak bar is hum nai value da di dobara nahi da sakta na hi dobara declare kar saktha hai

// const c = 'yahoo'
// const c = 'baba'// this will show error: identifier 'c' has already been declare
// c = 'baba';// this will show this error:- Assignment to constant variable

// console.log(c);

//DATA TYPES:-
// data type hum varable ke value ko bolthe hai jasey ki 'hello' ye varable ki value hai
// types of datatype :
//1 string:
// var a = 'string';

// //2 number:
// var b = 1111;

// //3 boolean:
// var c = true;

// //4 array:
// var d = ['abc', 'def', 'ghi'];

// //5 object:
// var e = {a:'abc', b:'def', c:'ghi'}

// //6 null:
// var f = null;

// //7 undefined:
// var g;

// console.log('a----' + a, 'b----' + b, 'c----' + c, 'd----', d, 'e----', e, 'f----' + f, 'g----' + g);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);

//ARITHMETIC OPERATORS:-

// // 1 addition (+):

// var add1 = 22;
// var add2 = 44;
// var result = add1 + add2;

// //2 subtraction (-):
// var sub1 = 33;
// var sub2 = 44;
// var result1 = sub1 - sub2;

// //3 multiplication (*):
// var mul1 = 2;
// var mul2 = 3;
// var result2 = mul1 * mul2;

// //4 exponential (**):
// var expo1 = 4;
// var expo2 = 4;
// var result3 = expo1 ** expo2;

// //5 division (/):
// var div1 = 2;
// var div2 = 4;
// var result4 = div1 / div2;

// //6 modulus (%):
// var mod1 = 4;
// var mod2 = 4;
// var result5 = mod1 % mod2;

// //7 increment (++):
// var inc1 = 5;
// var inc2 = 5;
// inc1++;
// var result6 = inc1 + inc2

// //8 decrement (--):
// var dec = 4;
// var dec2 = 5;
// dec--;
// var result7 = dec - dec2;

// console.log('add--' + ' '  + result, 'subtract--' + ' ' + result1, 'multipy--' + ' ' + result2, 'expone--' + ' ' + result3, 'divide--' + ' ' + result4, 'modulus--' + ' ' + result5, 'increment--' + ' ' + result6, 'decrement--' + ' ' + result7);

//COMPARISON OPERATORS:-
// agar hamey kisi values ki comparison karni hai tho ham us ka liye comparison operator ka istimal karthe hai

// var a = 10;
// var b = 20;

// console.log(a >= b);

//LOGICAL OPERATORS:-

//logical and operor (&&):
// var a = prompt('enter number');

// if(a >= 10 && a <= 20) {
//     document.write('a is less then 10')
// }else {
//     document.write('a is not valid value')
// }

//logical OR operator (||):
// var a = 33;

// console.log(!a >=20);
// if (!a >= 10){
//     console.log('a is less then 10');
// }else {
//     console.log('a is not valid and b');
// }

//CONDITIONAL TERNARY OPERATOR:-
//is operator mey bi ak condition ho thi hai us condition ke do answer ho sak they hai ya true ya false agar
//condition true hogi tho true ki statement chal jaey gi aur agar condition false hogi tho false ki statement chal jaey gi is mey hum bohoth sarey conditions nahi dal sakthe

// var a = 0;
// var b;

// b = (a == 10)? true: false

// console.log(b)

//SWITCH CASE:-
//is mey hum pehley switch likengey aur us ke andar hum ak value dethe hai us ke zarye se hum condition ko check karthe hai us ke bad karli brackets ke undar hum case lange
//aur ak condition banaenge aur jab condition true ho jathi hai tho us ki statement run ho jae gi agar condi false ho jathi hai tho dusri run ho jae gi agar hum is me break
//aur break ka mathlab hai k agar ye condition true ho jathi hai tho agli condi check na karo aur akhir may default lagathe hai k agar sari conditions true na ho tho default
//run ho jaegi

// switch ('world') {
//     case 'hello':
//         document.write('true')
//         break;
//     case 'world':
//         document.write('false')
//         break;

//     default:
//         document.write('invalid')
//         break;
// }

//agar hamey condition istimal karni hai tho switch me hum true pas karenge
// function check (){
//     var a = prompt('enter ');
//     switch (true) {
//         case (a >= 25 && a <= 30):
//             document.write('you are fail')
//             break;
//         case (a = 55 && a >= 60):
//             document.write('you are in first division')
//             break;
//         case (a >= 45 && a <= 48):
//             document.write('you are in 2nd division')
//             break;
//         case (a <= 45):
//             document.write('you are in 3rd division')
//             break;
//         default:
//             document.write('invalid')
//             break;
//     }

// }

// FUNCTIONS:-
// func bananey ka thareka ye hai k hum pahle function lethe hai aur us ko hum name dethe hai us k bad round brackets lethe hai aur karli brackets ka undar hum kam karthe hai

// function value(){
//     var a = 'hello world'
//     document.write(a)
// }

// value()

//FOR LOOP:-
// is mey hum pahle initialization karthe hai pir condition banathe hai aur increment decrement banathe hai

// for(var a = 1; a <= 10; a++ ){
//     document.write('hello yahoo baba' + "<br>")
// }

// var butter = 'sss'
// for(var a = 1; a <=10; a++){
//     document.write(butter + '<br>')
// }

//NESTED LOOP:-
// var c = 'hello'
// for(var a = 1; a <= 100; a = a+10){
//     for(var b = a; b < a+10; b++){
//         document.write( c)
//     }
// }

// for(var a = 1; a <= 5; a++){
//     document.write('<br>')
//     for(var b = 1; b <= a; b++){
//         document.write(a)
//     }
// }
// for(var a = 1; a <= 5; a++){
//     document.write('<br>')
//     for(var b = 1; b <= a; b++){
//         document.write(b)
//     }
// }

// for(var a = 5; a >= 1; a--){
//     document.write('<br>')
//     for(var b = a; b >= 1; b--){
//         document.write(b)
//     }
// }

// for(var a = 5; a >= 1; a--){
//     document.write('<br>')
//     for(var b = 1; b <= a; b++){
//         document.write(a)
//     }
// }

// ARRAY METHODS:-
// create Array method;

// var ary = new Array('abdu', 'abdurehman', 'adil', 'masood')

// for(var a = 0; a < 4; a++ ){
//     document.write(ary[a])
// }

// var ary = new Array();
// for(var get = 0; get < 5; get++){
//     ary[get] = prompt('enter the value: ')
// }
// for(var a = 0; a < 5; a++){
//     document.write(ary[a] + '<br>')
// }

//MULTIDIMENTIONAL ARRAY:-

// var arry = [
// ['abdullah', 17, '1st year'],
// ['abdurehman', 16, '10th class'],
// ['adil', 20, 'BSC'],
// ['masood kausar', 25, 'BSC']
// ]
// document.write('Name' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp' + 'Age' + '<br>')

// for(var a = 0; a < 4; a++){
//     document.write(arry[a][0]  )
// }

// for(var b = 0; b < 4; b++){
//     document.write(arry[b][1])
// }

// var array = [
//   ["abdullah", 17, "1st year"],
//   ["abdurehman", 16, "10th class"],
//   ["adil", 20, "BSC"],
//   ["masood kausar", 25, "BSC"],
// ];

// document.write(
//     "<table>"
//     +

//         "<tr>"
//         +   "<th>" + 'Name' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</th>"
//             +
//             "<th>" + 'Age' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "</th>"
//             +
//             "<th>" + 'Class' + "</th>"
//         +
//         "</tr>"
// )

// for(var a = 0; a < 4; a++){
//     document.write(
//         "<tr>"
//         + "<td>" + array[a][0] + "</td>"
//         + "<td>" + array[a][1] + "</td>"
//         + "<td>" + array[a][2] + "</td>"
//         +
//         "</tr>"

//     )
// }

// document.write("</table>")

//MODIFY:
//agar hamey kisi array mai koei value update karni hai tho hum modify istemal karthe hai
// var a = ['abdullah', 19, '1st year'];

// console.log(a);
// a[0]= 'abdurehman'
// a[1]=18
// console.log(a)

//delete():
// var b = ['danial', 20, '2nd year']
// delete b[2]

// console.log(b);

// sort():
// agar hamey kisi array ko thartheeb mey lana hai tho hum sort() method ko istimal karthe hai

// var a = ['java', 'javascript', 'html', 'react', 'python', 'c#'];
// document.write( '(' + a.length + ')' + ' ' + '[' + a + ']' + '<br>')

// console.log(a);

// a.sort();

// document.write(a)

// var a = [1,4,2,6,3,9,5,7,8,10];

// document.write(a + '<br>')

// a.sort();
// document.write(a)

//reverse():
//agar hum kisi value ko ulta print karna chahthai hai tho hum istimal karengay reverse() method:

// var a = [1,2,3,4,5,6,7,8,9,10]
// document.write(a)
// a.reverse();
// document.write(a)

//pop():
//agar mey kisi array me sey akhri value ko remove karna chahte hu tho mey pop() method istimal karunga

// var a = [1,2,3,4,5,6,7,8,9,10];

// document.write(a + '<br>')

// a.pop()

// document.write(a + '<br>')

//push():
//mey ak array mey value ko add karna chahtha hu tho mey istimal karunga push() method
// var a = [1,2,3,4,5,6,7,8,9,10];
// document.write(a + '<br>')
// a.push(11)
// document.write(a)

//concate():
//agar hum do arras ko milana chahtha hai tho hum istimal karenga concate() method

// var a = [1,2,3,4,5]
// var b = [6,7,8,9,10]
// document.write(a + '<br>')
// document.write(a.concat(b))

//join():
//agar humey kisi array ko string banana hai tho hum istimal karengey join() method

// var a = ['yahoo', 'baba', 'is', 'best']

// document.write(a + '<br>')

// var b = a.join(" ")

// document.write(b)

//slice():
//agar humey kisi array me sey ak value chahiey tho hum istimal karenga slice() method
//is mey humey do parameters dene honga ak starting index aur dusra end index

// var a = ['yahoo baba', 'abdullah', 'abdurehman', 'danial', 'adil', 'daud']
// document.write(a + '<br>')

// var b = a.slice(1, 3)

// document.write(b + '<br>')

//splice():
//agar hum array koi value ko add karna chahtha hai tho hum istimal karenga splice() method
// is mey theen parameters dene hothe hai ak kaha sey starting karni hai dusra ke konsa delete karna hai agar delet nahi karna tho dusre parameter mey hum 0 denga aur thesra ka kia value add karni hai

// var a = ['abdullah', "abdurehman", 'danial', 'yahoo']
// document.write(a + '<br>')

// a.splice(0, 1, 'massood')

// document.write(a)

//shift():
//ye method array ka pehle value ko delete kartha hai

// var a =  ['abdullah', "abdurehman", 'danial', 'yahoo']
// document.write(a + '<br>')

// a.shift()
// document.write(a)

//unShift():
//ye method array key sab sey pahla number par value add kartha hai

// var a =  ['abdullah', "abdurehman", 'danial', 'yahoo']
// document.write(a + '<br>')

// a.unshift('massood')
// document.write(a)

//isArray:
//agar hamey check karna hai kisi array ko ke ya array hai k nahi tho hum istimal kartha hai isArray() method

// var a = 'aldj'
// document.write(Array.isArray(a))

// var b = ['abc', 'def', 'ghi', 'jkl']
// document.write(Array.isArray(b))

//indexOf:
//agar hamey koi value ko search karna hai tho hum istimal karenga indexOf ye method shuru sey starting kartha hai
//is mey hum do parameters pas karthe hai ak kia search karna hai dusra kaha se starting karni hai
//            0      1     2     3      4     5
// var a = ['abc', 'def', 'd', 'ghi', 'jkl', 'd']
// var b = a.indexOf('d', 3)
// document.write(b)

//lastIndexOf:
//ye method indexof ki tharha kam kartha hai lekin ye akhir sey strating kartha hai

// var a = ['abc', 'def', 'd', 'ghi', 'jkl', 'd']
// document.write(a + '<br>')
// var b = a.lastIndexOf('d', 5)
// document.write(b)

//includes():
//agar humey array mai check karna hai k ye value is mai hai k nahi tho hum istimal karenga includes() method

// var a = ['abc', 'def', 'd', 'ghi', 'jkl', 'd']
// document.write(a.includes('c'))

//some():
//is method mey hum ak condition banathe hai aur agar array ke ak bi value condition ke sath true ho jathi hai yani k us condition ko pass kar kardethi
// hai tho wo true return kardetha hai

// var a = ['abc', 'def', 'd', 'ghi', 'jkl', 'd']
// var b = a.some(abc)
// document.write(b)
// function abc(a){
//     return a == 'd'
// }

//every():
//is method mey hum ak condition banathe hai aur ye method thab thak true return nahi kartha jab thak array ke sari values condition ko pass nahi karthi

// var a = ['abc', 'abc']
// var b = a.every(abc)
// document.write(b)
// function abc(a){
//     return a == 'abc'
// }

//find():
//is method mey hum ak funtion banathe hai aur us func mey hum condition banathe hai aur us condition ka base par array mey jo pahli value is condit
//ko pass kardethi hai tho ye method us value ko return kardetha hai
//find() method returns the value of the first element in an array that pass a test

// var a = ['abc', 'def', 'd', 'ghi', 'jkl', 'd']
// var b = a.find(abc)
// document.write(b)
// function abc(a){
//     return a == 'a'
// }

//findIndex():
//findIndex method find method ke tharha kam hai lekin ye index return kartha hai
//findIndex() method returns the index of the first element in an array that pass a test

// var a = ['abc', 'def', 'd', 'ghi', 'jkl', 'd']
// var b = a.findIndex(abc)
// document.write(b)
// function abc(a){
//     return a == 'd'
// }

//filter():
//filter method mey hum function mey ak condition banathe hai us condition ko jo values pass kardethi hai tho ye method oun values ko ak naie array convert karkey return kardetha hai

// var a = [12,44,55,33,20,22,53,66,77,88,44,66,33,77,44]

// var b = a.filter(function(age){
//     return age == 33
// })

// document.write(b)

//toString():
//toString() method ak array ko string mey convert kartha hai

// var a = [12,44,55,33,20,22,53]

// document.write('Array' + ' ')
// document.write(a + '<br>')

// var b = a.toString()
// document.write(typeof b + ' ')
// document.write(b, a)

//valueOf():

// var a = [12,44,55,33,20,22,53]
// var b = a.valueOf()
// document.write(b)

//fill():
//fill method ak value ko sari values mey fill kardetha hai
//The fill() method fills all the elements in an array with a static value.

// var a = [12,44,55,33,20,22,53]
// a.fill('aaaa')
// document.write(a)

//forEach() loop:
//agar humey kisi array ki values bari bari print karne hai tho hum istimal karenga forEach Loop ko

// var a = ['abc', 'def', 'd', 'ghi', 'jkl', 'd']
// a.forEach(function(values, index){
//     document.write(index + ' : ' + values + '<br>')
// })

// a.forEach(values)
// function values(value, index){
//     document.write(index + ' : ' + value + '<br>')
// }

//map():

// var a = [11, 12, 33, 4, 10]
// var b = a.map((value) => {
//     return value + 5
// })
// document.write(b)

// var a = [
//     {fname:'abdullah', lname:'ali'},
//     {fname:'yahoo', lname:'baba'},
//     {fname:'ahmad', lname:'abdurehman'},
// ]

// var b = a.map((name) => {
//     return name.fname + ' - ' + name.lname + '<br>'
// })

// document.write(b)

//STRING METHODS:-

//length():
// var a = 'abcdefghijklmno'
// var b = a.length
// console.log(b);

//toLowerCase():
//ye method string ko small alphabets mey convert kartha hai

// var a ='ABCDEFGHIJKLMNO'
// document.write(a + '<br>')

// document.write(a.toLowerCase())

//toUpperCase():
//ye string ko capital alphabats mey convert kartha hai
// var a = 'abcdefghij'
// document.write(a + '<br>')

// document.write(a.toUpperCase())

//includes():
//is method ko hum koi value dethe hai aur ye us string me check kartha hai agar is mil jatha hai tho ye true ya false return kartha hai

// var a = 'abcdefghij'
// document.write(a + '<br>')
// var b = prompt('enter value')
// document.write(a.includes(b))

//startsWith():
//ye method pahley word ko search karney k liey istimal hotha hai

// var a = 'Javascript is great language'
// document.write(a + '<br>')
// document.write(a.startsWith('J'))

//endsWith():
//ye method akhri word ko search karney k liey istimal hotha hai

// var a = 'Javascript is great language'
// document.write(a + '<br>')
// document.write(a.endsWith('w'))

//search():
//ye method word ko search kartha hai lekin ye us ki position return kartha hai aur agar isey kuch nahi miltha tho ye -1 return kardetha hai

// var a = 'Javascript is great language'
// document.write(a + '<br>')
// document.write(a.search('is'))

//match():
//is ko hum jo word dethey hai search karney k liey y us ko bar bar check karey ga aur jithni bar wo is ko miljae ga ye us ka ak array banakar return kar detha hai
//is k parameter me hum regular expresion detha hai asey /is/g is mey 'g' ka muthlab hai k muja globaly search karna hai

// var a = 'Javascript is great is language'
// document.write(a + '<br>')
// document.write(a.match(/is/i))

//indexOf():

// var a = 'Javascript is great is great language'
// document.write(a + '<br>')
// document.write(a.indexOf("is", 12))

//lastIndexOf():

// var a = 'Javascript is great is great language'
// document.write(a + '<br>')
// document.write(a.lastIndexOf("is"))

//replace():
//replace method ak word ko kisi dusrey word sey replace karna k liey kam atha hai
//replace method mey do parameter athe hai ak ye k kis word ko replace karna aur dusra ye k kis word sey replace karna hai is mey hum reqexp bi istimal kar sakthe hai

// var a = 'Javascript is great is great language'
// document.write(a + '<br>')
// var b = a.replace("is", "are" )
// document.write(b + '<br>')

// var a = 'Javascript is great is great language'
// document.write(a + '<br>')
// var b = a.replace(/great/g, "excelent")
// document.write(b)

//trim():
//ye function spacing ko remove kartha hai

// var a = '                                                Javascript'
// alert(a)
// var b = a.trim()
// alert(b)

//charAt():
//is method ko hum ak position detha hai aur oos pay jo word hoga oos ko ye return kardey ga

// var a = 'Javascript is great is great language'
// document.write(a + '<br>')
// var b = a.charAt(3)
// document.write(b)

//charCodeAt():
//is function ko hum sky code dethe hai aur ye humey us skycode k base pay charactor return kartha hai

// var a = 'Javascript is great is great language'
// document.write(a.charCodeAt(3))

//fromCharCode():
//is function ko hum sky code dethe hai aur ye humey us skycode k base pay charactor return kartha hai

// document.write(String.fromCharCode(4))

//concat():
//ye function ak ya ak se ziada strings ko milatha hai jortha hai

// var a = 'Javascript is great is great language'
// var b = 'Hello yahoo' + " "
// document.write(a.concat(' ' + b))

//split():
//split function string ko array me convert kartha hai

// var a = 'Javascript is great is great language'
// document.write(a.split(' ')[1])

//repeat():
//ye method ak string ko repeat kartha hai jo hum is ko number denga us k hisab sey ye us string ko repeat karega

// var a = 'Javascript is great is great language' + '<br>'
// document.write(a.repeat(5))

//slice():
//is method me hum do parameters pass karthe hai ak kahasey aur dusra kaha thak ki value ko utana hai agar hum siraf pahla parameter pass karthe
//hai tho is ke bad jithna string hoga us ko ye method return kardega

// var a = 'Javascript is great is great language'
// document.write(a.slice(2, 5) + '<br>')
// var a = 'Javascript is great is great language'
// document.write(a.slice(11))

//subStr():
//is method me hum do parameters pass karthe hai ak starting dusra ye k kithni values utani hai

// var a = 'Javascript is great is great language'
// document.write(a.substr(11, 4))

//subString():
//agar hum is ko 3 aur 7 index denga tho ye humey 3 sey la kar 7 thak ki value 7 ko nahi utaega

// var a = 'Javascript is great is great language'
// document.write(a.slice(11))

// var a = 'Javascript is great is great language'
// document.write(a + '<br>')
// document.write(a.slice(3, 7))

//toString():
//hamarey pass value hai agar wo string me hai ya numeric value hai tho ye us ko string me convert kardega

// var a = 39200;
// var b = a.toString()
// document.write(a + '<br>')
// document.write(typeof b)

// var a = 200;
// var b = a.toString()
// document.write(b + a)

//valueOf():

// var a = 'javascript is a great language';
// var b = a.valueOf()

// document.write(b)

// DATE METHODS:-
//toDateString():-
// pahlay humey Date ka object banana pare ga

var now = new Date();

// var date = new Date();
// date.setDate(4);

// var year = new Date();
// year.setFullYear(2025);

// var month = new Date();
// month.setMonth(4);

// var hours = new Date();
// hours.setHours(11);

// var mimutes = new Date();
// mimutes.setMinutes(20);

// var seconds = new Date();
// seconds.setSeconds(4);

// var milliseconds = new Date();
// milliseconds.setMilliseconds(50);

// document.write('<pre>')
// document.write('toDateString    ' + now.toDateString() + '<br>')
// document.write('getDate         ' + now.getDate() + '<br>')
// document.write('getFullYear     ' + now.getFullYear() + '<br>')
// document.write('getMonth        ' + now.getMonth() + '<br>')
// document.write('getDay          ' + now.getDay() + '<br>')
// document.write('getHours        ' + now.getHours() + '<br>')
// document.write('getMinutes      ' + now.getMinutes() + '<br>')
// document.write('getSeconds      ' + now.getSeconds() + '<br>')
// document.write('getMilliseconds ' + now.getMilliseconds() + '<br>')
// document.write('Date            ' + date.getDate() + '<br>')
// document.write('Year            ' + year.getFullYear() + '<br>')
// document.write('Month           ' + month.getMonth() + '<br>')
// document.write('Hours           ' + hours.getHours() + '<br>')
// document.write('Seconds         ' + seconds.getSeconds() + '<br>')
// document.write('milliseconds    ' + milliseconds.getMilliseconds() + '<br>')
// document.write('</pre>')

// document.write("<div class= 'table'>");
// document.write("<div class='tb-wrapper'>")
// document.write(
//     "<table>" +
//       "<thead>" 
//       +
//       "<tr>" +
//       "<th>" +
//       "Method" +
//       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +
//       "</th>" +
//       "<th>" +
//       "Out Put" +
//       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
//       "</th>" +
//       "<th>" +
//       "Syntax" +
//       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
//       "</th>" +
//       "</tr>"
//       +
//       "</thead>"
//   );
//   document.write(
//       "<h1>"
//       +
//       "Date Get methods"
//       +
//       "</h1>"
//   );
//   document.write(
    
//       "<tr class='row1'>" +
//       "<td class='b-right'>" +
//       "1 : " +
//       " " +
//       "toDateString" +
//       "</td>" +
//       "<td>" +
//       now.toDateString() +
//       "</td>" +
//       "<td>" +
//       "now.toDateString()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td class='b-right'>" +
//       "2 : " +
//       " " +
//       "getDate" +
//       "</td>" +
//       "<td>" +
//       now.getDate() +
//       "</td>" +
//       "<td>" +
//       "now.getDate()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>" +
//       "3 : " +
//       " " +
//       "getFullYear" +
//       "</td>" +
//       "<td>" +
//       now.getFullYear() +
//       "</td>" +
//       "<td>" +
//       "now.getFullYear()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>" +
//       "4 : " +
//       " " +
//       "getMonth" +
//       "</td>" +
//       "<td>" +
//       now.getMonth() +
//       "</td>" +
//       "<td>" +
//       "now.getMonth()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>" +
//       "5 : " +
//       " " +
//       "getDay" +
//       "</td>" +
//       "<td>" +
//       now.getDay() +
//       "</td>" +
//       "<td>" +
//       "now.getDay()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>" +
//       "6 : " +
//       " " +
//       "getHours" +
//       "</td>" +
//       "<td>" +
//       now.getHours() +
//       "</td>" +
//       "<td>" +
//       "now.getHours()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>" +
//       "7 : " +
//       " " +
//       "getMinutes" +
//       "</td>" +
//       "<td>" +
//       now.getMinutes() +
//       "</td>" +
//       "<td>" +
//       "now.getMinutes()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>" +
//       "8 : " +
//       " " +
//       "getSeconds" +
//       "</td>" +
//       "<td>" +
//       now.getSeconds() +
//       "</td>" +
//       "<td>" +
//       "now.getSeconds()" +
//       "</td>" +
//       "</tr>" +
//       "<tr>" +
//       "<td>" +
//       "9 : " +
//       " " +
//       "getMilliseconds" +
//       "</td>" +
//       "<td>" +
//       now.getMilliseconds() +
//       "</td>" +
//       "<td>" +
//       "now.getMilliseconds()" +
//       "</td>" +
//       "</tr>"
//   );
  
//   document.write("</table>" + "<br>");
// document.write("</div>")
// document.write("<div class='tb-wrapper'>")
// document.write(
//     "<h1>"
//     +
//     "Date Set methods"
//     +
//     "</h1>"
// );
// document.write(
//   "<table>" +
//     "<tr>" +
//     "<th>" +
//     "Method" +
//     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +
//     "</th>" +
//     "<th>" +
//     "Out Put" +
//     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
//     "</th>" +
//     "<th>" +
//     "Syntax" +
//     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
//     "</th>" +
//     "</tr>"
// );

// document.write(
//   "<td>" +
//     "<tr>" +
//     "<td>" +
//     "1 : " +
//     " " +
//     "setDate" +
//     "</td>" +
//     "<td>" +
//     date.getDate() +
//     "</td>" +
//     "<td>" +
//     "now.setDate(3)" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" +
//     "2 : " +
//     " " +
//     "setFullYear" +
//     "</td>" +
//     "<td>" +
//     year.getFullYear() +
//     "</td>" +
//     "<td>" +
//     "now.setFullYear(2025)" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" +
//     "3 : " +
//     " " +
//     "setMonth" +
//     "</td>" +
//     "<td>" +
//     month.getMonth() +
//     "</td>" +
//     "<td>" +
//     "now.setMonth(4)" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" +
//     "4 : " +
//     " " +
//     "setHours" +
//     "</td>" +
//     "<td>" +
//     hours.getHours() +
//     "</td>" +
//     "<td>" +
//     "now.setHours(11)" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" +
//     "5 : " +
//     " " +
//     "setMinutes" +
//     "</td>" +
//     "<td>" +
//     mimutes.getMinutes() +
//     "</td>" +
//     "<td>" +
//     "now.setMinutes(20)" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" +
//     "6 : " +
//     " " +
//     "getSeconds" +
//     "</td>" +
//     "<td>" +
//     seconds.getSeconds() +
//     "</td>" +
//     "<td>" +
//     "now.setSeconds(30)" +
//     "</td>" +
//     "</tr>" +
//     "<tr>" +
//     "<td>" +
//     "7 : " +
//     " " +
//     "setMilliseconds" +
//     "</td>" +
//     "<td>" +
//     milliseconds.getMilliseconds() +
//     "</td>" +
//     "<td>" +
//     "now.setMilliseconds(50)" +
//     "</td>" +
//     "</tr>"
// );

// document.write("</table>");
// document.write("</div>");
// document.write("</div>");


// var fulldate = new Date();
// fulldate.setDate(30);

// var year = new Date();
// year.setFullYear(2026);

// var month = new Date();
// month.setMonth(2);

// var hours = new Date();
// hours.setHours(11);

// var mimutes = new Date();
// mimutes.setMinutes(20);

// var seconds = new Date();
// seconds.setSeconds(4);

// var milliseconds = new Date();
// milliseconds.setMilliseconds(50);

// Date Get Methods

// var date = new Date();
// // toDateString():
// document.write(date + "<br>" + "<br>")

// document.write('Date Get Methods')
// document.write('<pre>')
// document.write('toDateString       :' + ' ' + date.toDateString() + '<br>')
// document.write('getDate            :' + ' ' + date.getDate() + '<br>')
// document.write('getFullYear        :' + ' ' + date.getFullYear() + '<br>')
// document.write('getMonth           :' + ' ' + date.getMonth() + '<br>')
// document.write('getDay             :' + ' ' + date.getDay() + '<br>')
// document.write('getHours           :' + ' ' + date.getHours() + '<br>')
// document.write('getMinutes         :' + ' ' + date.getMinutes() + '<br>')
// document.write('getSeconds         :' + ' ' + date.getSeconds() + '<br>')
// document.write('getMilliseconds    :' + ' ' + date.getMilliseconds() + '<br>')
// document.write('</pre>')


// //Date Set Methods
// document.write('Date Set Methods')
// document.write('<pre>')
// document.write('setDate            :' + ' ' + fulldate.getDate() + '<br>')
// document.write('setYear            :' + ' ' + year.getFullYear() + '<br>')
// document.write('setMonth           :' + ' ' + month.getMonth() + '<br>')
// document.write('setHours           :' + ' ' + hours.getHours() + '<br>')
// document.write('setMinutes         :' + ' ' + mimutes.getMinutes() + '<br>')
// document.write('setSeconds         :' + ' ' + seconds.getSeconds() + '<br>')
// document.write('setMilliseconds    :' + ' ' + milliseconds.getMilliseconds() + '<br>')
// document.write('</pre>')


//DOM Methods:-

// dom full form === document object module

// Dom targeting methods:

// targeting methods me id, className, aur tagName athe hai
//id ----------------> document.getElementById(id)
//Class Name --------------> document.getElementByClassName(className)
//tagName --------------> document.getElementByTagName(tag)

//List of targeting methods
//document, document.all, document.documentElement, document.head, document.title, document.body, document.images, document.anchors, document.links, document.forms
//document.doctype, document.URL, document.baseURL, document.domain

//1: document
// const documents = document
// console.log(documents);

//2: all
// const all = document.all
// console.log(all);

//3: documentElement
// const documentElements = document.documentElement
// console.log(documentElements);

//List of Get Methods
//innerHtml, innerText, getAttribute, getAttributeNode, Attributes

//1: innerHtml
// var element = document.getElementById('demo').innerHTML
// console.log(element);

//2: innerText
// var element = document.getElementById('demo').innerText
// console.log(element);

//3: getAttribute
// var element = document.getElementById('demo').getAttribute('id')
// console.log(element);

//4:getAttributeNode
// var element = document.getElementById('demo').getAttributeNode('id')
// console.log(element);

//5: Attributes
// var element = document.getElementById('docs').attributes
// console.log(element);

//List of Set Methods
//innerText, innerHTML, setAttribute, attributes, removeAttribute

//1: innerText

// var element = document.getElementById('docs').innerText = 'Dom Set Methods'
// console.log(element);

//2: innerHTML
// var element = document.getElementById('demo').innerHTML = '<h1>Dom Set Methods</h1>'
// console.log(element);

//3: setAttribute
//is me hum do parameter detha hai ak k konse attribute ko badalna hai dusra k kisey badalna hai

// document.getElementById('docs').setAttribute('class', 'td')
// const Class = document.getElementById('docs').getAttribute('class') 
// console.log(Class);

//4: attributes
// var element = document.getElementById('docs').attributes[0].value = 'xyz'
// console.log(element);

//5:removeAttribute
// var element = document.getElementById('docs').removeAttribute('class','xyz')
// console.log(element);

//query selectors:
//1: querySelector
//is me hum koi css ke selector ka name detha hai jesey k # ya . is method jo pahla attribute mil jatha hai ye usi target kartha hai 

// var element = document.querySelector('#docs').attributes[0].value = 'xyz'
// console.log(element);

//2: querySelectorAll
//ye method sarey attribute ko target kartha hai
// var element = document.querySelector('#docs')[1]
// console.log(element);

//DOM CSS styling methods:
//1: style
// var element = document.querySelector('#docs').style.border = '10px dotted yellow'
// console.log(element);

//2: className
//ye method humey string return kartha hai
// var element = document.querySelector('#docs').className = 'yellow brown'
// console.log(element);

//3: classList
//ye method humey ak array return kartha hai 

// document.querySelector('#docs').classList.add('yellow', 'brown')
// var element = document.querySelector('#docs').classList
// console.log(element);

//classList methods
//1: add 
//ye ak class ko add kartha hai
// document.getElementById('docs').addEventListener('click', function(){
//     document.querySelector('#docs').classList.add('xyz', 'abc')
//     var element = document.querySelector('#docs').classList

//     console.log(element);
// })

//2: remove
//ye class ko remove kartha hai

// document.getElementById('docs').addEventListener('click', function(){
//     document.querySelector('#docs').classList.remove('xyz')
//     var element = document.querySelector('#docs').classList

//     console.log(element);
// })

//3: toggle
//agar hum chahtai hai k click karne par class add hojai aur click karne par remove hojai tho hum is method ko istimal karthe hai

// document.getElementById('docs').addEventListener('click', function(){
//     document.querySelector('#docs').classList.toggle('xyz')
//     var element = document.querySelector('#docs').classList

//     console.log(element);
// })

//4: length
//ye method humey classes ki length bathatha hai

// var element = document.querySelector('#docs').classList.length
// console.log(element);

//5: item
//is method me hum ak parameter detha hai us parameter mai hum index detha hai us index pa jo class arahi hai ye us ko return kardetha hai

// var element = document.querySelector('#docs').classList.item(1)
// console.log(element);

//6: contain
//is k parameter me hum class ka name dethai hai agar wo class is nahi milte tho ye false retrun kardega agar miljathe hai tho ye true return kartha hai

// var element = document.querySelector('#docs').classList.contains('xy')
// console.log(element);

//DOM events methods:-
//is me pahley tho hum document liktha hai pir id ya class ya tag ko get kartha hai aur pir event ka name aur us k bad agar humey function banana hai = nishan k
//bad hum function ka name denga ya hum function banaenga
//is me dusra method be hai jis ka nam hai addeventlistner()

// document.getElementById('docs').addEventListener('mouseleave', abc)

// document.getElementById('docs').addEventListener('click', xyz)

// function abc(){
//     document.querySelector('#docs').style.backgroundColor = 'red'
// }
// function xyz(){
//     document.getElementById('docs').removeEventListener('mouseleave', abc)
// }    
//addEventListener method me theen parameter athe hai pahla humey konsa event lagana dusra ak function hotha hai aur thesra useCapture hotha ye ya tho true return kartha 
//hai ya false tho hum is me ya true bejthe hai ya false bajthe hai

//Traversal methods:-
//parentElement
//ye method ak element k parent ko return kartha hai

// var a = document.getElementById('docs').parentElement;
// console.log(a);

//parentNode

// var a = document.getElementById('docs').parentNode;
// console.log(a);

//children
//ye method ak element k children ko return kartha hai laken ye siraf tags ko return kartha hai

// var a = document.getElementById('docs').children;
// console.log(a);

//childNodes
//ye method text aur tags ko return kartha hai

// var a = document.getElementById('body').childNodes;
// console.log(a);

//firstElementChild
//ye method element k pahle child tag ko return kartha hai

// var a = document.getElementById('docs').firstElementChild;
// console.log(a);

//firstChild
//ye method element k pahle child agar wo text ho ya space ho ye us ko return kartha hai

// var a = document.getElementById('docs').firstChild;
// console.log(a);

//lastElementChild
//ye method element k last child tag ko return kartha hai

// var a = document.getElementById('docs').lastElementChild;
// console.log(a);

//lastChild
//ye method element k last child agar wo text ho ya space ho ye us ko return kartha hai

// var a = document.getElementById('docs').lastChild;
// console.log(a);

//nextElementSibling

// var a = document.getElementById('head').nextElementSibling;
// console.log(a);

//previousElementSibling

// var a = document.getElementById('head2').previousElementSibling;
// console.log(a);

//nextSibling

// var a = document.getElementById('head').nextSibling;
// console.log(a);

//previousSibling

// var a = document.getElementById('head2').previousSibling;
// console.log(a);

//Dom Create Methods:-
//createElement
//agar hum koi element yani tag ko banana chahthai hai tho us k liey hum istimal karthai hai createElement method

// var element = document.createElement('h1')
// console.log(element);

//createTextNode
//ye method text ko banatha hai 

// var text = document.createTextNode('this is text')
// console.log(text);

//createComment

// var comment = document.createComment('this is comment');

//APPEND methods:-

//appendChild
//agar humey text ko ak element k sath attach karna hai tho hum istimal karanga appendChild method

// element.appendChild(text)

// document.getElementById('span').appendChild(element) //agar humey is h2 ko browser pey show karna hai tho hum is tarha karenga 
// document.getElementById('span').appendChild(comment)
// console.log(comment);
// console.log(element);

//insertBefore
//ab ye appendchild method is text ko sab sey akhir mey append kartha hai show kartha hai aur hum chahtha hai ka text sabsey pahley show ho jaey tho us ke liey ak method
//hai jis ka nam hai insertBefore is mey dho parameter athe hai pahla k kis ko append karna hai aur dusra humey bathana hai k kis sey pahley append karna hai

// var target = document.getElementById('main')
// console.log(target.childNodes);
// target.insertBefore(element,target.childNodes[2])

//ADJACENT METHODS:-
//insertAdjecentElement
//agar mujey ak element yani ak tag create karna hai aur usko append bi karna hai tho istimal karunga insertAdjacentElement method ko
//is mey do parameter athey hai ak position konsi deni hai aur dusra humey element dena hotha hai
// var newElement = document.createElement('h2')
// var target = document.getElementById('main')
// target.insertAdjacentElement('beforebegin',newElement)

//insertAdjacentHTML
//agar mujey ak element create karna hai aur us text ko atach karna hai aur us ko append bi karna hai tho mey istimal karonga insertAdjacentHTML method ko

// var target = document.getElementById('main')
// var element = '<h1>aakldjfklasjdklfjaklsdfjklsajfkldsaklfjdakljfkadsklfjlksdfjklsdjflkasklf</h1>'
// target.insertAdjacentHTML('afterbegin',element)

//inserAdjacentText
//ye method simple text ko create aur append kartha hai

// var target = document.getElementById('main')
// var text = 'this is text'
// target.insertAdjacentText('beforebegin',text)

//in methods k sath hum is ko spacific position par dal saktha hai

// insertAdjacent positions
// beforebegin
// ye position new element ko targeting element ke shuru honey se pahley append kartha hai

// var newElement ='<h4>shuru honey se pahley</h4>' + '<p>alsdkjfaldkfja aldfjkl alfkaldskf aldkfjlaf aldflas</p>'
// var element = document.getElementById('main')
// element.insertAdjacentHTML('beforebegin', newElement)

// afterbegin
// ye position new element ko targeting element ke shuru honey ke bad append kartha hai 

// var newElement = '<h4>shuru honey ke bad</h4>' + '<p>alsdkjfaldkfja aldfjkl alfkaldskf aldkfjlaf aldflas</p>'
// var element = document.getElementById('main')
// element.insertAdjacentHTML('afterbegin', newElement)

// beforeend
// ye position new element ko targeting element ke khatham honey se pahley append kartha hai

// var newElement = '<h4>khatham honey se pahley</h4>' + '<p>alsdkjfaldkfja aldfjkl alfkaldskf aldkfjlaf aldflas</p>'
// var element = document.getElementById('main')
// element.insertAdjacentHTML('beforeend', newElement)

// afterend
// ye position new element ko targeting element ke khatham hone k bad append kartha hai

// var newElement = '<h4>khatham hone k bad</h4>' + '<p>alsdkjfaldkfja aldfjkl alfkaldskf aldkfjlaf aldflas</p>'
// var element = document.getElementById('main')
// element.insertAdjacentHTML('afterend', newElement)

//replaceChild():
//agar humey kisi tag ko replace karna hai tho hum istimal karenga replaceChild method
//is mey do parameters athe hai ak new element aur dusra old element
// 
// var newElement = document.createElement('h1')
// var newText = document.createTextNode('New Text');
// newElement.appendChild(newText)

// var target = document.getElementById('main')
// var oldElement = target.children[3]


// target.replaceChild(newElement, oldElement)

// console.log(target.children[3]);

//removeChile():
//agar humey kisi tag ya textNode ko remove karna hai tho hum istimal karenga removeChild method

// var target = document.getElementById('main')
// var oldElement = target.children[3]

// target.removeChild(oldElement)
// console.log(target.children[2]);

//cloneNode():
//agar humey kisi element ko clone karna hai yani us ki copy banani hai tho is k liey hum istimal kartha hai cloneNode function
//is mey ak parameter atha hai us ya tho hum true likthe hai ya false

// var target = document.getElementById('list1').children[0]
// var clone = target.cloneNode(true)

// console.log(clone);
// document.getElementById('list2').appendChild(clone)

//contains()
//hum is ko ak id dethe hai aur ye search kartha hai agar is ko miljathi hai tho ye true return karega agar nahi milthi tho false return kartha hai

// var parent = document.getElementById('body')
// var target = document.getElementById('abc')
// var find = parent.contains(target)

// console.log(find);


//hasAttribute()
//humarey pass ak div hai aur us ke undar ak id hai us ko humney target kia hai aur humey ye dakna hai k is k sath ak attribute ke nahi agar is ko
//wo mil jatha hai tho ye true return kartha agar nahi miltha tho ye false return kartha hai 

// var parent = document.getElementById('body')
// var find = parent.hasAttribute('class')
// console.log(find);

//hasChildNodes()
//



// let array = ['a'];
// console.log(typeof array);
















































































































































































































































































































































































































































































































































































































































































































































































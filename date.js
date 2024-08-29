const now = new Date()
console.log(now);//currentdateandtime
console.log(now.getFullYear());//current year
console.log(now.getMonth()+1);//current month(months are zero indexed)so add 1
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getDate());

//conver date to  string
const n = new Date(2023,11,3);
console.log(n.toDateString());




//indian standard time
const china = new Date().toString("en-Us",{timeZone : "Asia/Changchun"});
console.log(china);












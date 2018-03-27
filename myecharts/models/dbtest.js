var db = require('./db');  
var data
db.sql('select * from Sf0ConstractSchedule',function(err,result){  
    if (err) {  
        console.log(err);  
        return;  
    }  
    console.log('报表为 :',result);  
    data=JSON.stringify(result);
});  
console.log('JSON数据为 :',data);  
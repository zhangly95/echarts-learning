var db = require('./db');  
db.sql('select * from Sf0ConstractSchedule',function(err,result){  
    if (err) {  
        console.log(err);  
        return;  
    }  
    console.log('报表为 :',result);  
});  
var express = require('express');
var router = express.Router();
var db = require('../models/db')

router.get('/', function(req, res, next) {
  db.sql('select * from Sf0ConstractSchedule',function(err,result){  
    if (err) {  
        console.log(err);  
        return;  
    }  
   // console.log('报表为 :',result);  
    res.render('constractSchedule.html', {constractName0: result[0].constractName, constractName1: result[1].constractName,
      constractName2: result[2].constractName,constractName3: result[3].constractName,
    approvalNumber0:result[0].approvalNumber,approvalNumber1:result[1].approvalNumber,approvalNumber2:result[2].approvalNumber,approvalNumber3:result[3].approvalNumber,
  contactPersonnel0:result[0].contactPersonnel,contactPersonnel1:result[1].contactPersonnel,contactPersonnel2:result[2].contactPersonnel,contactPersonnel3:result[3].contactPersonnel,
ownershipSystem0:result[0].ownershipSystem,ownershipSystem1:result[1].ownershipSystem,ownershipSystem2:result[2].ownershipSystem,ownershipSystem3:result[3].ownershipSystem});
});  
  });
  module.exports = router;

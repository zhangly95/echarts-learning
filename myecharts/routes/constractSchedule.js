var express = require('express');
var router = express.Router();
var db = require('../models/db')

router.get('/', function(req, res, next) {
  db.sql('select * from Sf0ConstractSchedule',function(err,result){  
    if (err) {  
        console.log(err);  
        return;  
    }  
    //console.log('报表为 :',result);  
  var approvalNumber=new Array();
  var constractName=new Array();
  var contactPersonnel=new Array();
  var ownershipSystem=new Array();
    result.forEach((element,index) => {
      approvalNumber[index]=element.approvalNumber;
      constractName[index]=element.constractName;
      contactPersonnel[index]=element.contactPersonnel;
      ownershipSystem[index]=element.ownershipSystem;
    })
    console.log( approvalNumber);
      console.log(constractName[0]);
    res.render('constractSchedule.html', {
      ConstractName: constractName,
      ApprovalNumber:approvalNumber,
      ContactPersonnel:contactPersonnel,
      OwnershipSystem:ownershipSystem});
}); 
  });
  module.exports = router;

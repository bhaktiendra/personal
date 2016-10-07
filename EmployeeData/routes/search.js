var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

router.route('/:employeeNip')
        .get(function(req, res){
            Employee.find({
                "nip": { "$regex": req.params.employeeNip, "$options": "i" }
            }, function(err, data){
                if(err)
                    return res.send(500, err);
                    
                return res.json(data);
            });
        })

module.exports = router;
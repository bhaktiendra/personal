var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

router.route('/:searchArgs')
        .get(function(req, res){
            // split arguments
            var searchArgs = req.params.searchArgs;
            var splitedArgs = searchArgs.split("=");

            var nip = splitedArgs[0];
            var input = splitedArgs[1];

            Employee.find({
                nip : { "$regex" : input, "$options": "i" }
            }, function(err, data){
                if(err)
                    return res.send(500, err);
                    
                return res.json(data);
            });
        })

module.exports = router;
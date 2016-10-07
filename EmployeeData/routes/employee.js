var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

// Get all Employee and Create new employee
router.route('/')
        .post(function(req, res){
            var employee = new Employee();
            employee.nip = req.body.nip;
            employee.nama = req.body.nama;
            employee.lantai = req.body.lantai;
            employee.baris = req.body.baris;
            employee.kelompok = req.body.kelompok;
            employee.nomor = req.body.nomor;
            employee.kolom = req.body.kolom;

            employee.save(function(err, data){
                if(err)
                    return (500, err);
                
                return res.json(data);
            });
        })
        .get(function(req, res){
            Employee.find(function(err, data){
                if(err)
                    return (500, err);
                return res.json(data);
            });
        })

router.route('/:employeeId')
        .get(function(req, res){
            Employee.findById(req.params.employeeId, function(err, data){
                if(err)
                    return res.send(500, err);
                return res.json(data);
            });
        })
        .put(function(req, res){
            Employee.findById(req.params.employeeId, function(err, employee){
                if(err)
                    return res.send(500, err);
                
                employee.nip = req.body.nip;
                employee.nama = req.body.nama;
                employee.lantai = req.body.lantai;
                employee.baris = req.body.baris;
                employee.kelompok = req.body.kelompok;
                employee.nomor = req.body.nomor;
                employee.kolom = req.body.kolom;

                employee.save(function(err, data){
                    if(err)
                        return res.send(500, err);
                    
                    return res.json(data);
                });
            });
        })
        .delete(function(req, res){
            Employee.remove({
                _id : req.params.employeeId
            }, function(err, data){
                if(err)
                    return res.send(500, err);
                
                return res.json(data);
            });
        });


module.exports = router;
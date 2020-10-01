const db = require("../models");
const repo = require("../data/repo"); 
const Repo = db.tblrepo;
const Op = db.Sequelize.Op;


exports.findURL = (req, res) => {
  let typeid = req.params.type_id;
  if(typeid){
    typeid= typeid.substring(typeid.indexOf("=")+1,typeid.length);
  }
  let affid = req.params.aff_id;
  if(affid){
    affid= affid.substring(affid.indexOf("=")+1,affid.length);
  }
  console.log(typeid + affid)
  //let repourl = repo.filter(x => x.type_id === typeid);
  var newArray = repo.filter(function (el) {
    return el.type_id == typeid && el.aff_id == affid
  });
  res.redirect(newArray ? newArray[0].url : '');
};

exports.findAll = (req, res) => {

  Repo.findAll()
    .then(data => {
      res.send(data[0].url);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

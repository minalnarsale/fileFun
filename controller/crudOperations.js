var fs = require('fs');

exports.readMe = function(req, res){

  var filePath = req.query.filePath;
  fs.readFile(req.query.filePath, function(err, data) {
    if (err) throw err;
    res.send(data.toString('utf8'));
  });
};

exports.writeInMe = function(req, res){

  let filePath = req.body.filePath || 'F:/minal/technical/nodeProjects/fileFun/data/writeInMe.txt';
  let fileContent = req.body.fileContent;

  fs.appendFile(filePath, fileContent, function (err) {
    if (err) throw err;
    let splitedfilePath = filePath.split("/");
    res.send('content saved in file ' + splitedfilePath[splitedfilePath.length - 1]);
  });
};

exports.updateMe = function(req, res){

  let filePath = req.body.filePath || 'F:/minal/technical/nodeProjects/fileFun/data/updateMe.txt';
  let updatingFileContent = req.body.updatingFileContent;

  fs.writeFile(filePath, updatingFileContent, function (err) {
    if (err) throw err;
    let splitedfilePath = filePath.split("/");
    res.send('content updated in file ' + splitedfilePath[splitedfilePath.length - 1]);
  });
}

exports.deleteMe = function(req, res){

  var filePath = req.query.filePath;
  fs.unlink(req.query.filePath, function(err, data) {
    if (err)
    throw err;
    res.send('File deleted : ' + filePath);
  });
};

exports.renameMe = function(req, res){

  let toBeRenamedFile = req.body.sourcePath;
  let renameFileWith = req.body.renameFileWith;

  fs.rename(toBeRenamedFile, renameFileWith, function (err) {
    if (err) throw err;
    let splitedfilePath = toBeRenamedFile.split("/");
    res.send('File Renamed!\nfrom : ' + splitedfilePath[splitedfilePath.length - 1] + '\nto : ' + renameFileWith);
  });
}


const fs = require('fs');

exports.directoryStat = function(req, res) {

  let directoryPath = req.query.directoryPath;
  let fileNames = [];
  fs.readdir(directoryPath, function (err, files) {

    if (err) throw err;
    for (let index in files) {
      console.log(files[index]);
      fileNames.push(files[index]);
    }
    res.send(fileNames);
  });
};

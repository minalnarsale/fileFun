var fs = require('fs');

exports.readFileLineByLine = async function(req, res) {

  const filePath = req.query.filePath;
  const readStreamOfFile = fs.createReadStream(req.query.filePath);
  let readLine = require('readline').createInterface({
    input: readStreamOfFile
  });

  let lines = [];
  for await (let line of readLine) {
    console.log(line);
    lines.push(line);
  }
  readLine.close();
  readStreamOfFile.destroy();
  res.send(JSON.stringify(lines));
};

exports.fileStat = async function(req, res) {

  const filePath = req.query.filePat
  const readStreamOfFile = fs.createReadStream(req.query.filePath);

  let readLine = require('readline').createInterface({
    input: readStreamOfFile
  });

  let upper = 0, lower = 0, number = 0, special = 0, spaces = 0, lines = 0, fileStat;
  for await (let line of readLine) {
    lines++;
    for (let i = 0; i < line.length; i++) {
      if (line[i] >= 'A' && line[i] <= 'Z')
      upper++;
      else if (line[i] >= 'a' && line[i] <= 'z')
      lower++;
      else if (line[i]>= '0' && line[i]<= '9')
      number++;
      else if (line[i] === ' ')
      spaces++
      else
      special++;
    }
    fileStat = {
      file: req.query.filePath,
      lines: lines,
      upper: upper,
      lower: lower,
      number: number,
      spaces: spaces,
      special: special
    }
  }
  readLine.close();
  readStreamOfFile.destroy();
  res.send(fileStat);
};

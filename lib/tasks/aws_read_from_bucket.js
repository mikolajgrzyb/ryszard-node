require('dotenv').config()
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var http = require('http');
var fs = require('fs');

const BUCKET = 'Ryszard'

var dir = './tmp';

if (!fs.existsSync(dir)) { fs.mkdirSync(dir); }

function downloadFile(obj) {
  let pathArr = obj.Key.split('/');
  let name = pathArr[pathArr.length - 1]
  let file = fs.createWriteStream("./tmp/"+ name);
  s3.getObject({ Bucket: BUCKET, Key: obj.Key }).createReadStream().pipe(file);  
}
s3.listObjects({Bucket: BUCKET}, function(err, data) {
  if (err) console.log(err, err.stack);
  const objects = data.Contents
  downloadFile(objects[0])
})

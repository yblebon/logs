const fs = require('fs')
const path = require('path')
const https = require('https')
const { spawn } = require('node:child_process')
const { mkdtemp } = require ('node:fs/promises')
const { readdir } = require('node:fs/promises')

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb(dest));
    });
  });
}

var labelImage = function(input_file, output_file, title, cb) {
     const cmd = spawn('magick',
	[input_file,
	'-pointsize', '30',
	'-font', 'DejaVu-Sans-Mono-Bold',
	'-background', 'black',
	'-fill', 'white',
        '-resize', '600x600',
	'-format', 'webp',
	`label:${title}`,
	'-append',
	output_file]
     );
     cmd.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
     });
     cmd.stderr.on('data', (data) => {
       console.error(`stderr: ${data}`);
     });
     cmd.on('close', (code) => {
       console.log(`child process exited with code ${code}`);
     });
}

var imageToWebp = function(input_file, output_file, size, cb) {
     const cmdList = [input_file, '-resize', size, '-format', 'webp', output_file + ".webp"]
     const cmd = spawn('magick', cmdList);

     // magick delation.png -resize 1024x1024 -format webp  delation.web
     console.log(`command: ${cmdList}`);
     cmd.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
     });
     cmd.stderr.on('data', (data) => {
       console.error(`stderr: ${data}`);
     });
     cmd.on('close', (code) => {
       console.log(`child process exited with code ${code}`);
     });
}




function processCardImage(card, output_dir) {
  const output_file = path.join(output_dir, card.uid.toString() + ".webp");
  fs.stat(output_file, (err, stats) => {
     if (err) {
      	let download_file = path.join("/tmp", path.basename(card.image));
	download(card.image, download_file, function(data){
           labelImage(download_file, output_file, card.title);
	});
    };
   });
}

function convertImages(input_dir, output_dir) {
    fs.readdir(input_dir, {recursive:true}, function(err, data) {
       data.forEach(function(file){
         if ([".jpg", ".png", ".jpeg", ".avif", ".webp"].indexOf(path.extname(file)) != -1 ) {
            let input_file = path.join(input_dir, file);
            let output_file = path.join(output_dir, path.basename(file, path.extname(file)));
            imageToWebp(input_file, output_file, "1024x1024");
         }
       })
       
    });  
}

var createLabels = function(jsonFile, uid, cb){
  fs.readFile(jsonFile, function(err, data) { 
    if (err) throw err; 
    const cards = JSON.parse(data); 
    cards.forEach(function(card){
      if (card.hasOwnProperty("image") && card.uid.toString() === uid.toString()) {
           processCardImage(card, "/tmp");
       }
    })
  })
}

if (process.argv.length < 3) {
  console.error('usage: convert <input_dir> <output_dir>');
  console.error('       label <json_file> <uid>');
  process.exit(1);
}

if (process.argv[2] === "convert") {
   convertImages(process.argv[3], process.argv[4]);
}

else if (process.argv[2] === "label") {
   createLabels(process.argv[3], process.argv[4]);
}

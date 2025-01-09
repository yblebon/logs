const fs = require('fs')
const path = require('path')
const https = require('https')

const { spawn } = require('node:child_process')
const { mkdtemp } = require ('node:fs/promises')

if (process.argv.length === 3) {
  console.error('Expecting at least two arguments: the file path argument and the output directory');
  process.exit(1);
}

var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  var request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb(dest));
    });
  });
}

var execute = function(input_file, output_file, title, cb) {
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



function processCardImage(card, output_dir) {
  console.log(path.basename(card.image));
  console.log(card.uid);
  const output_file = path.join(output_dir, card.uid.toString() + ".webp");
  fs.stat(output_file, (err, stats) => {
     if (err) {
        if (card.hasOwnProperty("og_image_auto") && card.og_image_auto) {
              let download_file = path.join("/tmp", path.basename(card.image));
		download(card.image, download_file, function(data){
			console.log(data);
                        execute(download_file, output_file, card.title);
		});
	}
    };
 
   });
}

fs.readFile(process.argv[2], function(err, data) { 
    if (err) throw err; 
    const cards = JSON.parse(data); 
    cards.forEach(function(card){
      if (card.hasOwnProperty("image")) {
           processCardImage(card, process.argv[3]);
       }
    })
}); 

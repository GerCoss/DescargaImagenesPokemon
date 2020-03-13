// Scraping
var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('http://233a48f2eb5b429bf09a-369bcdcd9a2663001128510c5f8d2279.r41.cf1.rackcdn.com/CG-E759-20200309.mp3', 'dd.mp3', function(){
  console.log('done');
});

// const cheerio = require('cheerio');
// const axios = require('axios');

// axios.get('https://pokemondb.net/pokedex/all')
//     .then(response =>{
//       const $ = cheerio.load(response.data);
//       const items = $('tr').toArray()
//             .map(item=>{
//               const $item = $(item);
//               return{
//                 numero: $item.find('.cell-fixed .infocard-cell-data').text(),
//               }
//             });
//             debugger;
//     });

// inyectar jquery
// var script = document.createElement('script');
// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
// document.getElementsByTagName('head')[0].appendChild(script);
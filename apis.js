// ----- Base De Site De Api's By LZ MODS ----- \\
// ----- Se For Postar Deixa Os Creditos ----- \\
// ----- https://youtube.com/lzmodsofc ----- \\
// ----- https://lzmods-api.xyz ----- \\
// ----- https://instagram.com/kn.mito_ ----- \\

// ----- Quando Bater 800 Inscritos Solto a V2 Com Varias Outras Api's ----- \\
// ----- Nao Custa Nada Ajudar :) ----- \\

let lz = process.cwd()

const { download_Url } = require("./database/function");
const axios = require("axios");
const cheerio = require("cheerio");
var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var thiccysapi = require('textmaker-thiccy')
var fs = require('fs')
const path = require('path');

const criador = ['phzin_io']; // Nome do criador
const key = 'ph' //apikey das apis
const keyinexistente = lz + '/paginas/keyerror.html' // html key de invalida

msgs = { //MSGS DE ERROR
error: {
 status: false,
criador: `${criador}`,
mensagem: 
'ops :/ deu erro no servidor interno'
}
}

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

//[ - ////////// --- Api's Youtube --- ////////// - ]\\

 //[ - ///////// --- Api's Text Pro --- ///////// - ]\\

router.get('/textpro/summer', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/3d_business', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/3d-business-sign-text-effect-1078.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/3dgoldenblack', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/free-creative-3d-golden-text-effect-online-1075.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/vintage', async(req, res, next) => {
apikey = req.query.apikey;
text1 = req.query.texto1
text2 = req.query.texto2
if(apikey !== key) return res.sendFile(keyinexistente)
if (!text1) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto1"})
if (!text2) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto2"})
thiccysapi.textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
[text1], [text2]
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/halloween', async(req, res, next) => {
apikey = req.query.apikey;
text1 = req.query.texto1
text2 = req.query.texto2
if(apikey !== key) return res.sendFile(keyinexistente)
if (!text1) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto1"})
if (!text2) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: texto2"})
thiccysapi.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html",
[text1], [text2]
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

router.get('/textpro/thunder', async(req, res, next) => {
apikey = req.query.apikey;
query = req.query.q
if(apikey !== key) return res.sendFile(keyinexistente)
if (!query) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", query
).then(async (linkdaimagem) => { 
try { 
res.json({
status: true,
código: 777,
criador: `${criador}`,
resultado: {
img: `${linkdaimagem}`,
}})
} catch(err) { 
console.log(err)
res.json({
status: false,
código: 666,
criador: `${criador}`,
resultado: {
error: `${err}`,
}})}})})

 //[ - ///////// --- Api's NSFW --- ///////// - ]\\

 router.all('/nsfw/miakhalifa', async (req, res) => {
 apikey = req.query.apikey;
if(apikey !== key) return res.sendFile(keyinexistente)
json = JSON.parse(fs.readFileSync('database/nsfwmia.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/elisa-sanches', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.sendFile(keyinexistente)
json = JSON.parse(fs.readFileSync('database/nsfwelisa.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-masturbation', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.sendFile(keyinexistente)
json = JSON.parse(fs.readFileSync('database/masturbation.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-pussy', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.sendFile(keyinexistente)
json = JSON.parse(fs.readFileSync('database/pussy.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-gif', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.sendFile(keyinexistente)
json = JSON.parse(fs.readFileSync('database/hnt_gifs.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('gif')
res.send(await getBuffer(random))
})

router.all('/nsfw/loli-yuri', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.sendFile(keyinexistente)
json = JSON.parse(fs.readFileSync('database/yuri.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

//[ - ///////// --- Api's TOOLS --- ///////// - ]\\



router.all('/loli', async (req, res) => {
apikey = req.query.apikey;
if(apikey !== key) return res.sendFile(keyinexistente)
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('png')
res.send(await getBuffer(random))
})

router.post('/post/body', async (req, res) => {
res.send(req.body)
})
 router.all('*', async (req, res) => {
 res.status(404).json({
status:404,
error: 'página não encontrada Ou e Inexiste',
endpoint: req.path
})
})


module.exports = router

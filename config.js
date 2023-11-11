import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['917561815867', '___𝙸𝚃𝚊𝙲𝙷𝙸__🪬', true],
  ['916282244301', '𝐘𝚯𝚮𝚫𝚫𝚴', true], 
  ['17057710927','𝑆𝛨𝛪𝛮𝛭É𝛮 𝑇𝛥𝛫𝛯𝛧Ō',true] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['917561815867','916282244301'] 
global.prems = ['917561815867','916282244301','17057710927'] 
global.allowed =  ['917561815867','916282244301','17057710927']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝐘𝚯𝚮𝚫𝚫𝚴'
global.premium = 'true'
global.packname = '☮️🕊️' 
global.author = '___𝙸𝚃𝚊𝙲𝙷𝙸__🪬' 
global.menuvid = 'https://telegra.ph/file/𝑈𝐶𝛨𝛪𝛨𝛥-𝛪𝑇𝛥𝐶𝛨𝛪-11-11-2.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/cr7
global.dygp = 'https://chat.whatsapp.com'
global.fgsc = 'https://github.com' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://youtube.com'
global.fglog = 'https://i.imgur.com/E3ZX2PM.jpeg' 
global.thumb = fs.readFileSync('./Assets/IMG-20231028-WA0090.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '🪽'
global.dmoji = '☮️'
global.done = '✅'
global.error = '🪦' 
global.xmoji = '🕊️' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const batur = require('../ayarlar.json');

var prefix = batur.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("idle");
 client.user.setActivity(`Sitemiz Açıldı 👉 https://evenbot.ml 👈 `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  };
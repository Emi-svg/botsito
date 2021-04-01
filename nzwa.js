/*
* ASU KLEN YANG NGAKU2 BOT INI PUNYA KLEN!!!
* W DAH MALES UPDATE LAGI!
* KALO ADA YG REMAKE BOT INI TERUD NGAKU2 PUNYA KLEN, W HAPUS NIH REPO!!!
* GAK BAKAL ADA LAGI NIH BOT!!!
* KALO MAU REMAKE BOLEH AJA, TAPI NGOTAK AJG!!!
* KASIH AUTHOR NYA KALO MAU REMAKE ASU!!!
*/

//starts
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    processTime,
} = require('@adiwajshing/baileys')

// Load Js File
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./src/bahasa')
const { negara } = require('./src/kodenegara')
const { virtex } = require('./src/virtex')
const { destrava } = require('./src/destrava')
const { modapk } = require('./src/modapk')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')

// Load Npm Package
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const speed = require('performance-now')
const cd = 4.32e+7
const crypto = require('crypto')
const qrcode = require("qrcode-terminal")
const axios = require('axios')
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')

// Load Json File
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/json/uang.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))

// Load options file
const option = JSON.parse(fs.readFileSync('./options/option.json'))
const { ind } = require('./options/language')
const { eng } = require('./options/language')
const {
    botName,
    ownerName,
    BarBarKey,
    ownerNumbers,
    languages,
    botPrefix,
    memberLimitss,
    userDefaultLimit
} = option

// Load Menu File
const { help } = require('./database/menu/help')
const { logomaker } = require('./database/menu/logomaker')
const { adult } = require('./database/menu/adult')
const { downloader } = require('./database/menu/downloader')
const { education } = require('./database/menu/education')
const { fun } = require('./database/menu/fun')
const { group } = require('./database/menu/group')
const { imagemaker } = require('./database/menu/imagemaker')
const { information } = require('./database/menu/information')
const { islam } = require('./database/menu/islam')
const { kerang } = require('./database/menu/kerang')
const { meme } = require('./database/menu/meme')
const { music } = require('./database/menu/music')
const { other } = require('./database/menu/other')
const { owner } = require('./database/menu/owner')
const { search } = require('./database/menu/search')
const { sound } = require('./database/menu/sound')
const { stalk } = require('./database/menu/stalk')
const { stayonscreen } = require('./database/menu/stayonscreen')
const { stickermaker } = require('./database/menu/stickermaker')
const { tod } = require('./database/menu/tod')
const { wibu } = require('./database/menu/wibu')
const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit')

// Load Vcard Contact
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Pato\n' // full name
            + 'ORG:Pato;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=994402886887:+994 40 288 68 87\n' // WhatsApp ID + phone number
            + 'END:VCARD'
prefix = botPrefix
blocked = []
limitawal = userDefaultLimit
cr = '*℘ąɬơ ცơɬ ۷4*'
memberlimit = memberLimitss

// Functions
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }
        const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }

        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }

        const addATM = (sender) => {
                const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (sender) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }

        const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

        const confirmATM = (sender, amount) => {
                let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/json/uang.json', JSON.stringify(uang))
            }
        }

        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const nzwa = new WAConnection()
	nzwa.logger.level = 'warn'
	nzwa.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el código pero rapido we'))
	})

	fs.existsSync('./Nazwa.json') && nzwa.loadAuthInfo('./Nazwa.json')
	nzwa.on('connecting', () => {
		start('2', 'Conectando...')
	})
	nzwa.on('open', () => {
		success('2', '[BOT] BOT listo!')
	})
	await nzwa.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Nazwa.json', JSON.stringify(nzwa.base64EncodedAuthInfo(), null, '\t'))

        console.log('=> Pato bot v4!')
        lolcatjs.fromString('[Pato] Hola gracias por usar mi bot, espero te guste ;)')

	nzwa.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await nzwa.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await nzwa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola @${num.split('@')[0]}\n Bienvenido al grupo *${mdata.subject}* lee las reglas para que no allá malos entendidos`
				let buff = await getBuffer(ppimg)
				nzwa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await nzwa.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Adiós @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				nzwa.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		nzwa.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	nzwa.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                        const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
                        const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const date = moment.tz('Asia/Jakarta').format('DD,MM,YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
                        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
                        const tescuk = ["0@s.whatsapp.net"]
                        const q = args.join(' ')
                        
                        mess = {
							wait: '⌛ Aguanta.. ⌛',
							success: '✔️ Con exito ✔️',
							levelon: '❬ ✔ ❭ *Nivel habilitado*',
							leveloff: ' ❬ X ❭  *Nivel deshabilitado*',
							levelnoton: '❬ X ❭ *Ya esta activo*',
							levelnol: '*AÚN NIVEL DE HERMANO* 0 °-°',
							error: {
								      stick: '[❗] No se pudo convertir a sticker, asegurate de que el video sea menos de 10 seg y si es foto vuelve a intentar ❌',
								    Iv: '❌ Link invalido ❌'
							},
							only: {
								group: '[❗] ¡Este comando solo se puede usar en grupos! ❌',
								ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
								ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌',
								admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
								Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌',
								daftarB: `──「 NO ESTÁS REGISTRADO 」──\nSuscribete al canal: https://youtube.com/channel/UClsFXRmSwE3JAWAJMhSnwQQ \n Usa el comando: ${prefix}register para registrarte\nEjemplo: ${prefix}register Pato|99`,
                                }
                        }
					const apakah = ['Si','Nel']
        	        const bisakah = ['Ahorita we','No puedo']
				const kapankah = ['Más días','Más domingos','Más meses','Más años']
			const botNumber = nzwa.user.jid
			const ownerNumber = [ownerNumbers]
			const nomorOwner = [ownerNumbers]
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nzwa.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await nzwa.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
                        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
                        const NomerOwner = '994402886887@s.whatsapp.net'
                        const botLangs = languages
                        const isEventon = isGroup ? event.includes(from) : false
                        const isRegister = checkRegisteredUser(sender)
                        const isAntiLink = isGroup ? antilink.includes(from) : false
                        const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
                        pushname = nzwa.contacts[sender] != undefined ? nzwa.contacts[sender].vname || nzwa.contacts[sender].notify : undefined
                        const isBadWord = isGroup ? badword.includes(from) : false

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nzwa.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				nzwa.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nzwa.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nzwa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
                        const sendImage = (teks) => {
		                nzwa.sendMessage(from, teks, image, {quoted:mek})
		        }
		        const costum = (pesan, tipe, target, target2) => {
			        nzwa.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		        const sendPtt = (teks) => {
		                nzwa.sendMessage(from, audio, mp3, {quoted:mek})
		        }
                        //function rank 
			const levelRole = getLevelingLevel(sender, _level)
   	                var role = 'Estagiário'
   	                if (levelRole <= 3) {
   	                        role = 'senior trainee'
   	                } else if (levelRole <= 5) {
   	                        role = 'privado'
   	                } else if (levelRole <= 7) {
   	                        role = 'corporal'
   	                } else if (levelRole <= 8) {
   	                        role = 'Sargento'
   	                } else if (levelRole <= 9) {
   	                        role = 'sargento da equipe I'
   	                } else if (levelRole <= 10) {
   	                        role = 'sargento da equipe II'
   	                } else if (levelRole <= 11) {
   	                        role = 'sargento da equipe II'
   	                } else if (levelRole <= 12) {
   	                        role = 'Sgt 1ª classe I'
   	                } else if (levelRole <= 13) {
   	                        role = 'Sgt 1ª classe II'
   	                } else if (levelRole <= 14) {
   	                        role = 'Sgt 1ª classe III'
   	                } else if (levelRole <= 14) {
   	                        role = 'Ggt 1ª classe IV'
   	                } else if (levelRole <= 15) {
   	                        role = 'Master sgt I'
   	                } else if (levelRole <= 16) {
   	                        role = 'Master sgt II'
   	                } else if (levelRole <= 17) {
   	                        role = 'Master sgt III'
   	                } else if (levelRole <= 18) {
   	                        role = 'Master sgt IV'
   	                } else if (levelRole <= 19) {
   	                        role = 'Master sgt V'
   	                } else if (levelRole <= 20) {
   	                        role = '2º Ten I'
   	                } else if (levelRole <= 21) {
   	                        role = '2º Ten II'
   	                } else if (levelRole <= 22) {
   	                        role = '2º Ten III'
   	                } else if (levelRole <= 23) {
   	                        role = '2º Ten IV'
   	                }

	                //function leveling
                        if (isGroup && isLevelingOn) {
                                const currentLevel = getLevelingLevel(sender)
                                const checkId = getLevelingId(sender)
                                try {
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 500
                                        const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(sender)
                                        addLevelingXp(sender, amountXp)
                                        if (requiredXp <= getLevelingXp(sender)) {
                                        addLevelingLevel(sender, 1)
                                        await reply(`*「 NIVEL 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Nivel*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades!! 🎉🎉`)
                                }
                        } catch (err) {
                                console.error(err)
                        }
                }
                //function check limit
                const checkLimit = (sender) => {
                        let found = false
                        for (let lmt of _limit) {
                                if (lmt.id === sender) {
                                        limitCounts = limitawal - lmt.limit
                                        if (limitCounts <= 0) return nzwa.sendMessage(from,`Su límite de solicitudes se ha agotado\n\n_Note : El límite se restablecerá cada 21:00 horas.!_`, text,{ quoted: mek})
                                        nzwa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                                        found = true
                                }
                        }
                        if (found === false) {
                                let obj = { id: sender, limit: 1 }
                                _limit.push(obj)
                                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                                nzwa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                        }
                }

                //funtion limited
                const isLimit = (sender) =>{
                        let position = false
                        for (let i of _limit) {
                                if (i.id === sender) {
                                        let limits = i.limit
                                        if (limits >= limitawal ) {
                                                position = true
                                                nzwa.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                                                return true
                                        } else {
                                                _limit
                                                position = true
                                                return false
                                        }
                                }
                        }
                        if (position === false) {
                                const obj = { id: sender, limit: 1 }
                                _limit.push(obj)
                                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
                                return false
                        }
                }

                if (isGroup) {
                        try {
                                const getmemex = groupMembers.length
                                if (getmemex <= memberlimit) {
					reply(`lo siento, los miembros del grupo no han cumplido con los requisitos. miembro mínimo del grupo es ${memberlimit}`)
                                        setTimeout( () => {
                                                nzwa.groupLeave(from)
					}, 5000)
					setTimeout( () => {
						nzwa.updatePresence(from, Presence.composing)
						reply("2 segundos")
					}, 3000)
					setTimeout( () => {
						nzwa.updatePresence(from, Presence.composing)
						reply("3 segundos")
					}, 2000)
					setTimeout( () => {
						nzwa.updatePresence(from, Presence.composing)
						reply("4 segundos")
					}, 1000)
					setTimeout( () => {
						nzwa.updatePresence(from, Presence.composing)
						reply("5 segundos")
					}, 0)
                                }
                        } catch {
                                console.error(err)
                        }
                }

                //function balance
                if (isRegister && isGroup ) {
                        const checkATM = checkATMuser(sender)
                        try {
                                if (checkATM === undefined) addATM(sender)
                                const uangsaku = Math.floor(Math.random() * 10) + 90
                                addKoinUser(sender, uangsaku)
                        } catch (err) {
                                console.error(err)
                        }
                }

                if (messagesC.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        nzwa.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("5 segundos")
		        }, 0)
	        }
	
	            if (messagesC.includes("google.")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        nzwa.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("5 segundos")
		        }, 0)
	        }
	
	            if (messagesC.includes("https://")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        nzwa.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("5 segundos")
		        }, 0)
	        }
	
	            if (messagesC.includes("www.")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Tienes suerte, eres admin y no te sacaré')
		        nzwa.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#izinadmin")) return reply("#izinadmin recebido")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Link detectado ${sender.split("@")[0]} serás expulsado en 5 segundos`)
		        setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 5000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("1 segundo")
		        }, 4000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
		                reply("2 segundos")
		        }, 3000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("3 segundos")
		        }, 2000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("4 segundos")
		        }, 1000)
		        setTimeout( () => {
			        nzwa.updatePresence(from, Presence.composing)
			        reply("5 segundos")
		        }, 0)
	        }
	
	          if (messagesC.includes("vete a la vrg")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`Racista ${sender.split("@")[0]}  seras expulsado en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("En este grupo no se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("hijo de puta")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`racista ${sender.split("@")[0]} seras expulsado en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("puto")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`racista ${sender.split("@")[0]} seras expulsado en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("black")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`Racista ${sender.split("@")[0]} seras expulsado de este grupo en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("pito")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`Racista ${sender.split("@")[0]} seras expulsado de este grupo en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("gay")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`racista ${sender.split("@")[0]} seras expulsado en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("Macaco")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`Racista ${sender.split("@")[0]} seras expulsado de este grupo en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("culo")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`Racista ${sender.split("@")[0]} seras expulsado de este grupo en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("malparido")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`tRacista ${sender.split("@")[0]} seras expulsado en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("🐵")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`tRacista ${sender.split("@")[0]} seras expulsado en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}
	
	          if (messagesC.includes("aborto")){
		      if (!isGroup) return
		      if (!isAntiRacismo) return
		      if (isGroupAdmins) return reply('No estan permitidas cosas ofensivas')
		      nzwa.updatePresence(from, Presence.composing)
		      if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		      var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		      reply(`racista ${sender.split("@")[0]} seras expulsado de este grupo en 5 segundos`)
		      setTimeout( () => {
			        nzwa.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("No se aceptan las ofensas, hasta la proxima")
		}, 4000)
		setTimeout( () => {
		    nzwa.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			nzwa.updatePresence(from, Presence.composing)
			reply("Hasta la proxima")
		}, 0)
	}

 	   	if (isGroup && isBadWord) {
                        if (bad.includes(messagesC)) {
                                if (!isGroupAdmins) {
                                        return reply("😠")
                                        .then(() => nzwa.groupRemove(from, sender))
                                        .then(() => {
                                                nzwa.sendMessage(from, `*「 ANTI BADWORD 」*\nTe sacaron por groserias`, text ,{quoted: mek})
                                        }).catch(() => nzwa.sendMessage(from, `Te salvaste pq no soy admin si no te sacara!`, text , {quoted : mek}))
                                } else {
                                        return reply( "Cuidado 😇")
                                }
                        }
                }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mnzwa EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mnzwa RECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mnzwa EXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mnzwa RECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
                     // Load Commands
			switch(command) {
                                case 'help':
                                case 'menu':
                                case 'cmd':
                                case 'ajuda':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			                const uangku = checkATMuser(sender)
                                        await costum(help(pushname, prefix, botName, ownerName, reqXp, uangku), text, tescuk, cr)
                                        break
                                case '18+menu':
                                case 'adultomenu':
                                case '+18menu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(adult(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'downloadermenu':
                                case 'downloadmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(downloader(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'educationmenu':
                                case 'edmenu':                       
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await cost(education(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'funmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(fun(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'groupmenu':
                                case 'grupomenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(group(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'imagemakermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(imagemaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'informationmenu':
                                case 'infomenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(information(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'islammenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(islam(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'kerangmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(kerang(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'logomakermenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(logomaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'mememenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(meme(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'musicmenu':
                                case 'musicamenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(music(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'othermenu':
                                case 'outromenu':
                                case 'outro':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(other(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'ownermenu':
                                case 'donomenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(owner(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'searchmenu':
                                case 'procurarmenu':
                                case 'procurar':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(search(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'soundmenu':
                                case 'sommemu':
                                case 'som':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(sound(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stalkmenu':
                                case 'stalk':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stalk(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stayonscreenmenu':
                                case 'ficarnatela':
                                case 'tela':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stayonscreen(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'stickermakermenu':
                                case 'stikermakermenu':
                                case 'stickermenu':
                                case 'smenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(stickermaker(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'todmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(tod(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'wibumenu':
                                case 'animemenu':
                                case 'animenu':
                                case 'amenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(wibu(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                 case 'destrava':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        nzwa.sendMessage(from, destrava(prefix, sender), text, {quoted: mek})
                                        break
                                case 'modapk':
                                       if (!isRegister) return reply(mess.only.daftarB)
                                       nzwa.sendMessage(from, modapk(), text, tescuk, cr)
                                       break
                                case 'xpmenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(xp(prefix, botName, ownerName), text, tescuk, cr)
                                        break
                                case 'limitmenu':
                                case 'limitemenu':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        await costum(limit(prefix, botName, ownerName), text, tescuk, cr)
                                        break 
                  case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Se acabó el tiempo")
				}, timer)
				break
                case 'bahasa':
                case 'cdidioma':
		nzwa.sendMessage(from, bahasa(prefix, sender), text, {quoted: mek})
                break
               case 'virtex':
               case 'trava':
               nzwa.sendMessage(from, virtex(prefix, sender), text, {quoted: mek})
               break
               case 'kodenegara':
               case 'cdpaís':
               case 'codicopaís':
               nzwa.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
               break
				case 'demote':
				case 'rebaixar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Se convirtió en miembro 🤡')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = `Degradado con éxito :\n`
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						nzwa.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Un admin menos @${mentioned[0].split('@')[0]} ahora es miembro del grupo`)
						nzwa.groupDemoteAdmin(from, mentioned)
					}
					break
                                case 'randomhentai':
                                        gatauda = body.slice(6)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
                                case 'loli':
                                        gatauda = body.slice(6)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
                  case 'promote':
                  case 'promover':
					nzwa.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a la persona')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Se añadira como admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nzwa.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Se agrego como admin a : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nzwa.groupMakeAdmin(from, mentioned)
					}
					break
				  case 'wa.me':
				  case 'wame':
                                          nzwa.updatePresence(from, Presence.composing)
                                          try {
                                                  ppimg = await nzwa.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                                          } catch {
                                                  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				          }
                                          teks = `「 *WHATSAPP* 」\n\n_Pedido por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nTu link de wsp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                                          console.log('Buscando foto de perfil')
                                          nzwa.sendMessage(from, ppimg, image, { quoted: mek, caption: teks, contextInfo: { "mentionedJid": [sender] } } )
				          break
			case 'quotes':
				nzwa.updatePresence(from, Presence.composing) 
                                if (!isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
				data = await fetchJson(`http://mhankbarbars.herokuapp.com/api/randomquotes`)
				ez = `*❑ Autor :* ${data.author}\n*❑ Frase:* ${data.quotes}`
				reply(ez)
                                await limitAdd(sender)
				break
				case '3dtext':
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                nzwa.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                await limitAdd(sender)
                break
                case 'fml':
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                hasil = data.result.fml
                reply(hasil)
                await limitAdd(sender)
                break
              case 'owner':
                case 'creator':
                case 'dono':
                  nzwa.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               nzwa.sendMessage(from, 'Número del creador y dueño, no molestar con tonteras',MessageType.text, { quoted: mek} )
                break
	case 'hidetag':
                nzwa.updatePresence(from, Presence.composing) 
                if (!isRegister) return reply(mess.only.daftarB)
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await nzwa.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await nzwa.sendMessage(from, options, text)
               break
                                case 'tiktokstalk':
					try {
						if (args.length < 1) return nzwa.sendMessage(from, 'Y el nombre de usuario?', text, {quoted: mek})
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Usuario* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('usuario invalido')
					}
					break
				case 'snowwrite':
					var gh = body.slice(11)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply(`Usa el comando correctamente ${prefix}snowwrite texto1|texto2, Ejemplo ${prefix}snowwrite Bot|Pato`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'marvellogo':
					var gh = body.slice(12)
					if (args.length < 1) return reply(`Usa el comando correctamente ${prefix}marvellogo texto, Ejemplo  ${prefix}marvellogo Pato bot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=snow&text=${gh}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break

				case 'artinama':
                  nzwa.updatePresence(from, Presence.composing) 
                  if (!isRegister) return reply(mess.only.daftarB)
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
                    data = await fetchJson(`https://arugaz.my.id/api/primbon/artinama?name=${body.slice(10)}`)
                   reply(data.result)
                   await limitAdd(sender)
                   break
		case 'infonomor':
               nzwa.updatePresence(from, Presence.composing) 
                 if (!isRegister) return reply(mess.only.daftarB)
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
                 if (args.length < 1) return reply(`Escribe el comando bien\nEjemplo : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ Internasional : ${data.international}\n╠➥ Número : ${data.nomor}\n╠➥ Operador : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
                break
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   hasil = await getBuffer(data.gambar)
                   nzwa.sendMessage(from, hasil, image, {quoted: mek, caption: `Resultados de *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
                   case 'covidcountry':
                   nzwa.updatePresence(from, Presence.composing) 
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `País : ${data.result.country}\n\nActive : ${data.result.active}\nCasos cada millón : ${data.result.casesPerOneMillion}\nCritical : ${data.result.critical}\nMuertes cada millón : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
				case 'wiki':
					if (args.length < 1) return reply('Que quires buscar')
					tels = body.slice(6)	
                                        if (!isRegister) return reply(mess.only.daftarB)				
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break	
				case 'wikien':
					if (args.length < 1) return reply('Que quires buscar')
					tels = body.slice(8)		
			                if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://arugaz.my.id/api/edu/enwiki?query=${tels}`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break				
				case 'ytmp3':
					if (args.length < 1) return reply('Y el link?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.tech/api/yta?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `❏ *Titulo* : ${anu.title}\n❏ *Tamaño* : ${anu.filesize}\n\nEL AUDIO SE ESTÁ ENVIANDO, NO SPAM ...`
					thumb = await getBuffer(anu.thumb)
					nzwa.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                                        await limitAdd(sender)
				    break
				case 'ytmp4':
					if (args.length < 1) return reply('Y el link?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo do video* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					nzwa.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
				case 'trendtwit':
					nzwa.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break
				case 'testime':
					setTimeout( () => {
					nzwa.sendMessage(from, 'Tiempo muerto', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nzwa.sendMessage(from, '5 más segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					nzwa.sendMessage(from, '10 más segundos', text) // ur cods
					}, 0) // 1000 = 1s,
					break
				/*case 'semoji':
					if (args.length < 1) return reply('emojinya mana um?')
                                        if (!isRegister) return reply(mess.only.daftarB)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.tech/api/emoji2png?emoji=${teks}&apikey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						nzwa.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break*/
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Y el texto?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					nzwa.sendMessage(from, buff, image, {quoted: mek, caption: ind.success()})
                                        await limitAdd(sender)
					break
	case 'kbbi':
            nzwa.updatePresence(from, Presence.composing) 
                if (args.length < 1) return reply(`Ingrese una pregunta\nEjemplo : ${prefix}kbbi asu`)
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
	      tels = body.slice(6)
              data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=BotWeA`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              await limitAdd(sender)
              break
				case 'joox':
			tels = body.slice(6)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {method: 'get'})
               if (!isRegister) return reply(mess.only.daftarB)
               if (isLimit(sender)) return reply(ind.limitend(pusname))
               if (data.error) return reply(data.error)
                 infomp3 = `*Canción encontrada!!!*\nNombre : ${data.result.judul}\nAlbum : ${data.result.album}\nPublicación : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                nzwa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
				case 'blocklist':
					teks = 'Esta es la lista de numeros bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					nzwa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                   case 'chatlist':
					nzwa.updatePresence(from, Presence.composing)  
					teks = 'Lista ded chats del bot :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					nzwa.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
				case 'animecry':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry&apikey=BotWeA', {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						nzwa.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'neonime':
					nzwa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Titulo* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
                                        await limitAdd(sender)
					break  
					case 'bpink':
              
                  if (args.length < 1) return reply(`Usa el comando bien\nEjemplo : ${prefix}Caliph Bot`)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                if (!iRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                nzwa.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                await limitAdd(sender)
                break
				case 'tts':
				   nzwa.updatePresence(from, Presence.recording) 
				   if (args.length < 1) return nzwa.sendMessage(from, 'Y el código de idioma?', text, {quoted: mek})
                                   if (!isRegister) return reply(mess.only.daftarB)
                                   if (isLimit(sender)) return reply(ind.limitend(pusname))
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nzwa.sendMessage(from, 'Y el texto?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('El texto es muy largo')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('No se pudo convertir :(')
							nzwa.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
                                        await limitAdd(sender)
					break
				case 'listadmins':
				case 'adminlist':
					nzwa.updatePresence(from, Presence.composing) 
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins del grupo  *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'pokemon':
                    nzwa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					nzwa.sendMessage(from, pok, image, { quoted: mek })
                                        await limitAdd(sender)
					break
                case 'pinterest':
                                        tels = body.slice(11)
					nzwa.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					nzwa.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado de busqueda* : *${tels}*`})
                                        await limitAdd(sender)
					break
				case 'setprefix':
					nzwa.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerB())
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break
				case 'meme':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEMESBRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'memeindo':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					nganu = await fetchJson(`https://vinz.zeks.xyz/api/meme`)
					buper = await getBuffer(nganu.result)
					nzwa.sendMessage(from, buper, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'block':
					nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(ind.ownerB())
					nzwa.blockUser (`${body.slice(8)}@c.us`, "add")
					nzwa.sendMessage(from, `Se bloqueo a  ${body.slice(8)}@c.us`, text)
					break
				case 'hilih':
					nzwa.updatePresence(from, Presence.composing) 
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'tagall':
				case 'marcar':
				        nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `℘ąɬơ ♞ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('Mencion a todos\©'+teks+'♞ ', members_id, true)
					break
                case 'tagall2':
                case 'marcar2':
				nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `℘ąɬơ💥 ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					nzwa.sendMessage(from, 'Mencion a todos\®'+teks+'╠➥', text, {quoted: mek})
					break
                case 'tagall3':
                case 'marcar3':
				nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += ` https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					nzwa.sendMessage(from, 'Mencion de todos\©'+teks+'', text, {detectLinks: false, quoted: mek})
					break
                        case 'tagall4':
                        case 'marcar4':
				nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `℘ąɬơ 👤 ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					nzwa.sendMessage(from, 'Mencion de todos\®'+teks+'👤', text, {quoted: mek})
					break
                case 'tagall5':
                case 'marcar5':
				nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += ` ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('Mencion a todos\©'+teks+'')
					break
				case 'send':
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var pesan = pc.split("|")[1];
					nzwa.sendMessage(nomor+'@s.whatsapp.net', pesan, text)
					break
					case 'quotesnime':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					nimek = await fetchJson('https://arugaz.my.id/api/anime/animequotes')
					hasil = `*Anime* : ${nimek.data.anime}\n*Personaje* : ${nimek.data.character}\n*Citas* : ${nimek.data.quote}`
					reply(hasil)
                                        await limitAdd(sender)
					break
				case 'setppbot':
				nzwa.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Envia la foto con el comando ${prefix}setbotpp o responde a una foto que ya se mando`)
					if (!isOwner) return reply(ind.ownerB())
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nzwa.downloadAndSaveMediaMessage(enmedia)
					await nzwa.updateProfilePicture(botNumber, media)
					reply('Gracias por mi nueva foto')
					break
				case 'bc':
					nzwa.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(ind.ownerB())
					if (args.length < 1) return reply('℘ąɬơ ცơɬ ۷4 anuncio dado')
					anu = await nzwa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nzwa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nzwa.sendMessage(_.jid, buff, image, {caption: `*「 ANUNCIO 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 ANUNCIO 」*\n\n${body.slice(4)}`)
						}
						reply('Anuncio dado con exito')
					}
					break
					case 'bcgc':
					nzwa.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(ind.ownerB())
					if (args.length < 1) return reply('℘ąɬơ ცơɬ ۷4 anuncio dado')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await nzwa.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							nzwa.sendMessage(_.jid, buff, image, {caption: `*「 ANUNCIO DE GROUPO 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 ANUNCIO DE GRUPO 」*\n*Grupo* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Anuncio con  exito')
					}
					break
				case 'alay':
                    nzwa.updatePresence(from, Presence.composing) 
                    if (!isRsgister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=indonesia}`)
                    reply(data.result)
                    await limitAdd(sender)
                    break
                    case 'quotemaker':
                    gh = body.slice(12)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    teks3 = gh.split("|")[2]
                    data = await fetchJson(`https://terhambar.com/aw/qts/?kata=${teks1}&author=${teks2}&tipe=${teks3}`)
                    buffer = await getBuffer(data.result)
                    nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                    await limitAdd(sender)
                    break
                    case 'glitch':
                    gh = body.slice(7)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                    hasil = await getBuffer(data.result)
                    nzwa.sendMessage(from, hasil, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                    await limitAdd(sender)
                    break
                     case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					nzwa.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					nzwa.updatePresence(from, Presence.composing) 
					nzwa.sendMessage(from, 'Adiós jotos', text) // ur cods
					}, 0)
                     break

				case 'chord':
					if (args.length < 1) return reply('Y el titulo?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					tels = body.slice(7)					
					anu = await fetchJson(`https://arugaz.my.id/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
                    await limitAdd(sender)
					break
				case 'lirik':
					if (args.length < 1) return reply('Y el titulo?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					tels = body.slice(7)
					anu = await fetchJson(`https://arugaz.my.id/api/lirik?judul=${tels}`, {method: 'get'})
					reply(anu.result)
                                        await limitAdd(sender)
					break
			        case 'igstalk':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        vide = body.slice(9)
                                        hmm = await fetchJson(`https://videfikri.com/api/igstalk/?username=${vide}`)
                                        buffer = await getBuffer(hmm.result.profile_hd)
                                        hasil = `Nombre: ${hmm.data.fullname}\nSeguidores: ${hmm.data.follower}\nSeguidos : ${hmm.data.following}\nPrivado : ${hmm.data.private}\nVerificado : ${hmm.data.verified}\nBio : ${hmm.data.bio}`
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                                        await limitAdd(sender)
                                        break
                    case 'ownergrup':
				  case 'ownergroup':
				case 'donogrupo':
               nzwa.updatePresence(from, Presence.composing) 
              options = {
          text: `El creador del grupo es: @${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           nzwa.sendMessage(from, options, text, { quoted: mek } )
				break
           case 'quran':
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					nzwa.sendMessage(from, quran, text, {quoted: mek})
					break
           case 'nekonime':
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
           if (!isRegister) return reply(mess.only.daftarB)
           if (isLimit(sender)) return reply(ind.limitend(pusname))
           hasil = await getBuffer(data.url)
           nzwa.sendMessage(from, hasil, image, {quoted: mek})
           await limitAdd(sender)
           break
				case 'neko':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break	
				case 'add':
					nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('A quien quieres añadir?')
					if (args[0].startsWith('08')) return reply('Escribe el código de país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						nzwa.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agrear porque es privado')
					}
					break

				case 'kick':
				case 'banir':
					nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marca o safado(a) que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ordenes recibidas, se eliminará :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						nzwa.groupRemove(from, mentioned)
					} else {
						mentions(`Ordenes recibidas, se eliminará : @${mentioned[0].split('@')[0]}`, mentioned, true)
						nzwa.groupRemove(from, mentioned)
					nzwa.sendMessage(mentioned, '😘', text)
					}
					break
				case 'exe':
	              nzwa.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(ind.ownerB())
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return nzwa.sendMessage(from, "Comando incorrecto", text, { quoted: mek })
		           if (stdout) {
			       nzwa.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                 case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				case 'linkgrupo':
				    nzwa.updatePresence(from, Presence.composing) 
				    if (!isGroup) return reply(mess.only.group)
                                     if (!isRegister) return reply(mess.only.daftarB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await nzwa.groupInviteCode (from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					nzwa.sendMessage(from, yeh, text, {quoted: mek, detectLinks: false})
					break
                case 'qrcode':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				nzwa.sendMessage(from, buff, image, {quoted: mek})
                                await limitAdd(sender)
				break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nzwa.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Solo una foto')
					}
					break

                      case 'bugreport':
                     const bug = body.slice(5)
                      if (pesan.length > 300) return nzwa.sendMessage(from, 'Lo siento texto demasiado largo, máximo 300 palabras', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       teks1 = `*[REPORT]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    nzwa.sendMessage(NomerOwner, options, text, {quoted: mek})
                    reply('Se han informado problemas al propietario del BOT, no se responderá a los informes falsos y causaran ban en el bot')
                    break
               case 'apakah':
               nzwa.updatePresence(from, Presence.composing) 

               random = apakah[Math.floor(Math.random() * (apakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
			   break
              case 'bisakah':
                nzwa.updatePresence(from, Presence.composing) 
              if (!isRegister) return reply(mess.only.daftarB)
                random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  	
			   hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}*`
			   reply(hasil)
			   break
               case 'rate':
              nzwa.updatePresence(from, Presence.composing) 
              if (!isRegister) return reply(mess.only.daftarB)
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random}%*`
              reply(hasil)
                break
	    case 'kapankah':
               nzwa.updatePresence(from, Presence.composing) 
                if (!isRegister) return reply(mess.only.daftarB)
               random = kapankah[Math.floor(Math.random() * (kapankah.length))]
               random2 = `${Math.floor(Math.random() * 8)}`
               hasil = `Pertanyaan : *${body.slice(1)}*\n\nJawaban : *${random2} ${random}*`
              reply(hasil)
                break
			case 'closegc':
			case 'fechargp':
					nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo cerrado por administrador @${nomor.split("@s.whatsapp.net")[0]}\ahora *solo administradores* pueden enviar mensajes`,
					contextInfo: { mentionedJid: [nomor] }
					}
					nzwa.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
                case 'opengc':
                case 'bukagc':
                case 'abrirgp':
					nzwa.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo abierto por administrador @${sender.split("@")[0]}\ahora *todos los participantes* pueden enviar mensajes`,
					contextInfo: { mentionedJid: [sender] }
					}
					nzwa.groupSettingChange (from, GroupSettingChange.messageSend, false)
					nzwa.sendMessage(from, open, text, {quoted: mek})
					break
				case 'stiker':
				case 'sticker':
				case 'stickergif':
				case 'stikergif':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nzwa.downloadAndSaveMediaMessage(encmedia)
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								nzwa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nzwa.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ No se pudo convertir a ${tipe}  stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								nzwa.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
                                                await limitAdd(sender)
						break
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						nzwa.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break

				case 'toimg':
				    nzwa.updatePresence(from, Presence.composing)
                                    if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedSticker) return reply('❌ Responde a un sticker ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nzwa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir a imagen ❌')
						buffer = fs.readFileSync(ran)
						nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
                	case 'tomp3':
                	nzwa.updatePresence(from, Presence.composing) 
                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isQuotedVideo) return reply('❌ Responde a un video ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nzwa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ No se pudo convertir a mp3 ❌')
						buffer = fs.readFileSync(ran)
						nzwa.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break

                case 'ninjalogo':
                      if (args.length < 1) return reply('Y el texto?')
                      if (!isRegister) return reply(mess.only.daftarB)
                      if (isLimit(sender)) return reply(ind.limitend(pusname))
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      nzwa.sendMessage(from, buff, image, {quoted: mek})
                      await limitAdd(sender)
                      break
                         case 'play':   
	          if (!isRegister) return reply(mess.only.daftarB)
                  if (isLimit(sender)) return reply(ind.limitend(pusname))
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*Canción encontrada!!!*\nNombre : ${anu.result.title}\nFuente : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*EL AUDIO SE ESTA ENVIANDO, NO SPAM ESPERA!*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                nzwa.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                     case 'infocuaca':
                   tels = body.slice(11)
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cuaca?wilayah=${tels}&apikey=BotWeA`, {method: 'get'})
                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (anu.error) return reply(anu.error)
                   hasil = `*Lugar : ${anu.tempat}\nTiempo : ${anu.cuaca}\nViento : ${anu.angin}\nTemperatura : ${anu.suhu}\nHumedad : ${anu.kelembapan}`
                   nzwa.sendMessage(from, hasil, text, {quoted: mek})
                   await limitAdd(sender)
                   break
                              case 'game':
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
                                        if (!isUser) return reply(mess.only.daftarB)
					setTimeout( () => {
					nzwa.sendMessage(from, '*❑ Respuesta :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					nzwa.sendMessage(from, '_10 más segundos_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nzwa.sendMessage(from, '_20 más segundos_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nzwa.sendMessage(from, '_30 más segundos_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					nzwa.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                                case 'welcome':
                                case 'bemvindo':
                                case 'bv':
					if (!isGroup) return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Escribe 1 para activar')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya está activo')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ Activado ❭ Se activo con exito')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, disable)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply('❬ Desactivado ❭ Se desactivo con exito')
					} else {
						reply('digite 1 para ativar, 0 para desativar o recurso')
					}
                                        break
                                case 'fakta':
					fakta = body.slice(1)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					const fakta =['Assa tierra alcanza los 5.972.190.000.000.000.000.000.000 kg. Aunque es tan pesado, el hecho es que la tierra tiene una velocidad de 107.281 km por hora para girar alrededor del sol. Eso es muy rápido, ¿no? ',' La masa pesada de la tierra está dominada por el polvo espacial y puede reducirse con un gas como el hidrógeno, que disminuye tres kilogramos por segundo. Este hecho único muestra que la tierra perderá 95 mil toneladas de masa cada año ',' En 2018 se estima que la población humana alcanzará los 7,6 mil millones de personas. Aunque la tierra está llena de humanos, un hecho único revela que los humanos no influyen en la masa de la tierra. Esto se debe a que los humanos están formados a partir de átomos en forma de 65 por ciento de oxígeno, 18,5 por ciento de carbono y 9,5 por ciento de hidrógeno. ',' La tierra está llena de 70 por ciento de agua, por lo que a menudo es natural que la tierra se llame el planeta del agua. El océano más profundo de la tierra es la Fosa de las Marianas con una profundidad de 10.994 metros bajo el agua. El hecho único detrás de la Fosa de las Marianas es que si pones el Monte Everest allí, ¡el pico más alto todavía está por debajo del nivel del mar hasta 1.6 kilómetros! ',' El hecho es que la tierra donde viven los humanos es solo el uno por ciento de todo el planeta. tierra. Este hecho único muestra que todavía hay muchas partes de la tierra que tienen el misterio de la vida. Interesado en hacer exploraciones para descubrir misterios y hechos únicos en otras partes de la tierra','Hay una ciudad en Rusia cuyas calles están ordenadas con un palacio diseñado como un magnífico ajedrez. El acuerdo fue planeado por un presidente obsesionado con el ajedrez llamado Kirsan Ilyumzhinov. ',' ¿Conoce algún dato único sobre la mozzarella hecha con leche de búfala en lugar de leche de vaca? Hace unos 500 años en Campania, Italia, la mozzarella se hizo por primera vez con leche de búfala. El hecho único detrás del uso de la leche de búfala es que el contenido de proteína de la leche de búfala es un 10-11% más que la leche de vaca. ',' Bali tiene un hecho único porque tiene muchas fiestas contribuidas por una serie de fiestas religiosas importantes. Casi todas las festividades religiosas, todo el mundo tendrá una festividad. Algunas de las fiestas incluyen galungan, kuningan, nyepi, pagerwesi, saraswati y una serie de otras ceremonias importantes como piodalan (pujawali). ',' La ciudad capital de Yakarta tiene mucho encanto, así como hechos únicos que puedes no saber. Antes de recibir el nombre de Yakarta, la ciudad capital de Indonesia ha tenido varios cambios de nombre. El nombre de la ciudad capital de Indonesia, según el orden de cambio, incluye Sunda Kelapa, Jayakarta, Batavia, Betawi, Jacatra, Jayakarta y Yakarta. ',' En 1952 las ventanas de los aviones se diseñaron en forma cuadrada, pero se consideró su uso defectuoso por lo que no se volvieron a aplicar. Las ventanas redondas están diseñadas para compensar la diferencia de presión del aire dentro y fuera de la aeronave para evitar fallas estructurales que pueden provocar accidentes aéreos. ',' La dieta principal de los mosquitos machos y hembras en general es néctar y sustancias dulces que son en su mayoría obtenido de plantas. Sin embargo, los mosquitos necesitan proteínas adicionales para poner huevos que pueden obtenerse de los humanos, mientras que los mosquitos machos no necesitan proteínas adicionales para poner huevos.']
					const keh = fakta[Math.floor(Math.random() * fakta.length)]
					nzwa.sendMessage(from, 'fakta : '+ keh, { quoted: mek })
                                        await limitAdd(sender)
					break
                                case 'water':
					if (args.length < 1) return reply(mess.blank)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					tels = body.slice(7)
					if (tels.length > 15) return reply('El texto es demasiado largo, hasta 20 caracteres.')
					reply(mess.wait)
					anu = await fetchJson(`https://kocakz.herokuapp.com/api/flamingtext/water?text=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					tels = body.slice(7)
					if (tels.ength > 10) return reply('El texto es demasiado largo, hasta 9 caracteres.')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=vinzapi`, {method: 'get'})
					buff = await getBuffer(anu.result)
					nzwa.sendMessage(from, buff, image, {quoted: mek})
                                        await limitAdd(sender)
					break
                     case 'gantengcek':
					if (isRegister) return reply(mess.only.daftarB)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					nzwa.sendMessage(from, 'Pregunta : *'+ganteng+'*\n\nRespuesta : '+ teng+'%', text, { quoted: mek })
					break
					case 'cantikcek':
					if (isRegister) return reply(mess.only.daftarB)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					nzwa.sendMessage(from, 'Pregunta : *'+cantik+'*\n\nRespuesta : '+ tik+'%', text, { quoted: mek })
					break
				case 'watak':
				if (isRegister) return reply(mess.only.daftarB)
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					nzwa.sendMessage(from, 'Pregunta : *'+watak+'*\n\nRespuesta : '+ tak, text, { quoted: mek })
                    await limitAdd(sender)
				    break
				case 'hobby':
				if (isRegister) return reply(mess.only.daftarB)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					nzwa.sendMessage(from, 'Pregunta : *'+hobby+'*\n\nRespuesta : '+ by, text, { quoted: mek })
					break
                    case 'nsfwneko':
				    try{
						if (!isNsfw) return reply('*NSFW ESTÁ DESACTIVADO*')
                        if (!isRegister) return reply(mess.only.daftarB)
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: 'mesum'})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
                                case 'shota':
				    try{
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
                        if (!isRegister) return reply(mess.only.daftarB)
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
						nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nich'})
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
				case 'logowolf':
					var gh = body.slice(11)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`Y el texto? Ejemplo ${prefix}logowolf Pato|Bot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
					break				
                    case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('escribe 1 para ativar')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Ya está activo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ Activado ❭ Activado con exito')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply('❬ Desactivado ❭ desactivado con exito')
					} else {
						reply('Escribe 1 para activar o 0 para desactivar')
					}
					break	
				case 'quotes2':
                if (!isRegister) return reply(mess.only.daftarB)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://arugaz.my.id/api/random/text/quotes`, {method: 'get'})
					reply(anu.quotes)
                    await limitAdd(sender)
					break		
			    case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://arugaz.my.id/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image,{quoted: mek})
                                        await limitAdd(sender)
					break
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break						
                    case 'husbu':
                    gatauda = body.slice(13)
					reply(mess.wait)
                    if (!isRegister) return reply(mess.only.daftarB)
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
					break
				case 'husbu2':
					gatauda = body.slice(13)
					reply(mess.wait)
                     if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu2?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
                 break
					case 'naruto':
					                    if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
				                      await limitAdd(sender)
				         break
					case 'goku':

                   if (!isRegister) return reply(mess.only.daftarB)
                   if (isLimit(sender)) return reply(ind.limitend(pusname))

                     reply(ind.wait())

					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Goku SuperSaiyan`, {method: 'get'})

					naru = JSON.parse(JSON.stringify(anu));

					to =  naru[Math.floor(Math.random() * naru.length)];

					nye = await getBuffer(to)

					nzwa.sendMessage(from, nye, image, { caption:'℘ąɬơ ცơɬ ۷4', quoted: mek })

					await limitAdd(sender)
					     break  
                    case 'hinata':
                    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					await limitAdd(sender)
                        break 
				    case 'boruto':
				    if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					await limitAdd(sender)
                        break 
				    case 'sakura':
				     if (!isRegister) return reply(mess.only.daftarB)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					                    await limitAdd(sender) 
					break 
				case 'minato':
				                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					                    await limitAdd(sender)
					    break
					case 'rize':
				                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					                     await limitAdd(sender) 	
					     break
                     case 'itori':
				                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					                    await limitAdd(sender) 
					break 
				case 'akira':
				                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					                     await limitAdd(sender) 
					break 
				case 'miku':
				                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					nzwa.sendMessage(from, nye, image, { caption: '℘ąɬơ ცơɬ ۷4', quoted: mek })
					                    await limitAdd(sender) 
                         break
                    case 'auau':
                    case 'cachorro':
                    case 'dog':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					nzwa.sendMessage(from, pok, image, { quoted: mek })
					break
				case 'logowolf2':
					var gh = body.slice(11)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`Y el texto? Ejemplo ${prefix}logowolf Pato|Bot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo2&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					      break	
                    case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
                                        if (!isRegister) return reply(mess.only.daftarB)
					if (!isGroupAdmins)return reply(mess.only.admin)
					nzwa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                                case 'phlogo':
					var gh = body.slice(7)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Y el texto? Ejemplo ${prefix}phlogo Pato|Bot')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
					break
                case 'truth':
					const trut =['¿Alguna vez te ha gustado alguien? ¿cuánto tiempo? ',' Si es posible o si quieres, en gc / fuera de gc, ¿con quién harás amistad? (¿puedes ser diferente / del mismo sexo)? ',' ¿cuál es tu mayor miedo? ',' ¿te ha gustado alguna vez? alguien y sintió a esa persona como tú también? ',' ¿Cuál es el nombre de tu exnovio amigo que una vez te gustó en secreto? ',' ¿Alguna vez le has robado el dinero o el padre de tu madre? ¿La razón? ',' ¿Qué te hace feliz cuando estás triste? ',' ¿Alguna vez has sido amor no correspondido? si alguna vez con quien? ¿Cómo te sientes brou? ',' ¿Alguna vez te ha engañado la gente? ',' Lo más temido ',' ¿Quién es la persona más influyente en tu vida? ',' ¿Qué cosas de orgullo te llevaste este año? ', '¿Quién es la persona que puede ponerte cachondo?', '¿Quién es la persona que alguna vez te puso cachondo', '(bgi, que es musulmán) nunca rezó en todo el día?', '¿Quién es el más cercano a tu tipo ideal de compañero aquí ',' ¿a quién le gusta jugar con quién? ',' ¿alguna vez rechazaste a la gente? ¿La razón por la que? ',' Menciona el incidente que te hizo daño y que aún recuerdas ',' ¿Qué tienes este año? ',' ¿Cuál fue tu peor hábito en la escuela?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nzwa.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
                case 'dare':
					const dare =['Envía un mensaje a tu ex y dile "Todavía me gustas"', '"llama a Crush / novia ahora y ss al jugador"', ' "hazle una papilla a uno de los miembros del grupo"' ,' "Dile" ERES HERMOSA',' NO FUE AMABLE "para chicos ',' llamada reciente de whatsapp ','cada vez que escribes en gc / pc durante 1 día ',' envía una nota de voz diciendo ¿puedo llamarte bebé? ',' suelta una canción / quote, continue La etiqueta de miembro apropiada para la cita ',' use una foto sule durante 3 días ',' escriba en el idioma local las 24 horas ',' cambie el nombre a "Soy una niña linda, luna" por 5 horas ',' chatea con tus contactos según el% de tu batería, sigue diciéndole "tengo suerte de verte", "chatea con tu ex y dile" te amo, pgn back "," graba la voz, lee surah al-kautsar ',' dijo "Estoy enamorado de ti, ¿quieres mi novio o no?" al último sexo opuesto con el que pudiste charlar (entregárselo en wa / tele), espera a que responda, si pasa por aquí ', '¡indica tu tipo de novia!', 'saca / publica fotos de novia / aplasta', 'gritó gajelas y luego envía usando vn aquí', 'papéate la cara y luego envíala a uno de tus amigos u ',' envía tu foto con una leyenda, soy un niño adoptado ',' gritó usando palabras duras mientras Vn la envió aquí ',' gritó "anjimm gabutt anjimmm" frente a tu casa ',' cambia el nombre a "BOWO" durante 24 horas ',' Fingir estar poseído, Ejemplo: estar poseído por maung, poseído por un saltamontes, poseído por un refrigerador, etc. ']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nzwa.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break	
                case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `◪ *NIVEL*\n  ├─ ❏ *Nombre* : ${sem}\n  ├─ ❏ *XP del usuario* : ${userXp}\n  └─ ❏ *Nivel del usuario* : ${userLevel}`
               nzwa.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				case 'fitnah':
				if (args.length < 1) return reply(`Uso :\n${prefix}fitnah [@persona|mensaje|respuesta del bot]]\n\nEjemplo : \n${prefix}fitnah @juan|pvto|idk`)
				var gh = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					nzwa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Escribe 1 para activar')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*Ya está activo*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(ind.leveloff())
                } else {
                    reply(`*Escribe 1 para activar o 0 para desactivar* \n *Ejemplo: ${prefix}leveling 1* `)
                }
            break
                                case 'infogempa':
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=BotWeA`, {method: 'get'})
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        if (anu.error) return reply(anu.error)
                                        hasil = `*Profundidad* : ${anu.kedalaman}\n*Coordenadas* : ${anu.koordinat}\n*Localización* : ${anu.lokasi}\n*Magnitud* : ${anu.magnitude}\n*Map* : ${anu.map}\n*Potensia* : ${anu.potensi}\n*Tiempo* : ${anu.waktu}`
                                        nzwa.sendMessage(from, hasil, text, {quoted:mek})
                                        await limitAdd(sender)
                                        break
                                case 'nsfwtrap':
                                        try{
                                                if (!isNsfw) return reply('❌ *NSFW DESACTIVADO* ❌')
                                                if (!isRegister) return reply(mess.only.daftarB)
                                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                                                res = await fetchJson(`https://tobz-api.herokuapp.com/nsfwtrap?apikey=BotWeA`, {method: 'get'})
                                                buffer = await getBuffer(res.result)
                                                nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                                await limitAdd(sender)
                                        } catch (e) {
                                                console.log(`*Error* :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
                                        break
                                case 'ping':    
			   	        if (!isRegister) return reply(ind.userB)
                                        const timestamp = speed();
                                        const latensi = speed() - timestamp
                                        nzwa.updatePresence(from, Presence.composing) 
				        uptime = process.uptime()
                                        nzwa.sendMessage(from, `Velocidad: *${latensi.toFixed(4)} _Segundos_*`, text, { quoted: mek})
                                        break
                                case 'neonlogo':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}neonlogo PatoBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
                                case 'neonlogo2':
                                        var gh = body.slice(10)
                                        teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}neonlogo2 PatoBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_technology&text=${text1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
                                case 'lionlogo':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        var teks2 = gh.split("|")[1];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}lionlogo Pato|Bot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${text1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
                                case 'jsholat':
                                        loc = body.slice(8)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply('Escribe el área')
                                        anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${loc}&apiKey=${BarBarKey}`, {method: 'get'})
                                        mbteks = `◪ *HORAS DE ORACION* \n  │\n  ├─ ❏ Zona : ${loc} \n  ├─ ❏ Asr : ${anu.Ashar} \n  ├─ ❏ Dhuha : ${anu.Dhuha} \n  ├─ ❏ Dzuhur : ${anu.Dzuhur} \n  ├─ ❏ Imsyak : ${anu.Imsyak} \n  ├─ ❏ Isya : ${anu.Isya} \n  ├─ ❏ Maghrib : ${anu.Maghrib} \n  └─ ❏ Subuh : ${anu.Subuh}`
                                        nzwa.sendMessage(from, mbteks, text)
                                        break
                                case 'jokerlogo':
                                        var gh = body.slice(10)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}jokerlogo PatoBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
                                /*case 'jadwaltvnow':  
				if (!isRegister) return reply(mess.only.daftarB)
                               reply(mess.wait)
		               anu = await fetchJson(`http://api-melodicxt.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {method: 'get'})
			       reply(anu.result.jadwalTV)
					break*/
                                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('Pq')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *AFK ${tels} NO MOLESTAR*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        nzwa.sendMessage(from, tag, text, {quoted: mek})
                                        break
                                case 'shadow':
                                        var gh = body.slice(7)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}shadow PatoBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=shadow&text=${text1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
                                case 'burnpaper':
                                        var gh = body.slice(10)
                                        var teks1 = gh.split("|")[0];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}burnpaper PatoBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${teks1}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
										case 'coffee':
											var gh = body.slice(7)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}coffee PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'lovepaper':
											var gh = body.slice(10)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}lovepaper PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=love_paper&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'woodblock':
											var gh = body.slice(10)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}woodblock PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'qowheart':
											var gh = body.slice(9)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}qowheart PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=quote_on_wood_heart&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'mutgrass':
											var gh = body.slice(9)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}mutgrass PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'undergocean':
											var gh = body.slice(12)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}undergocean PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=underwater_ocean&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'woodenboards':
											var gh = body.slice(13)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}woodenboards PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wooden_boards&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'wolfmetal':
											var gh = body.slice(10)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}wolfmetal PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'metalictglow':
											var gh = body.slice(14)
											var teks1 = gh.split("|")[0];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}metalictglow PatoBot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${teks1}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case '8bit':
											var gh = body.slice(5)
											var teks1 = gh.split("|")[0];
											var teks2 = gh.split("|")[1];
											if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}8bit Pato|Bot`)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'randomkpop':
											gatauda = body.slice(6)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											reply(mess.wait)
											anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
											buffer = await getBuffer(anu.result)
											client.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
											await limitAdd(sender)
											break
									case 'fml2':
											getauda = body.slice(6)
											if (!isRegister) return reply(mess.only.daftarB)
											if (isLimit(sender)) return reply(ind.limitend(pusname))
											data = await fetchJson(`https://tobz-api.herokuapp.com/randomfmylife?apikey=BotWeA`, {method: 'get'})
											hasil = `*Fuck My Life*\n${data.result}`
											reply(hasil)
											await limitAdd(sender)
											break
	
                                case 'tiktok':
					if (args.length < 1) return reply('Y el link?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					nzwa.sendMessage(from, buffer, video, {quoted: mek})
                                        await limitAdd(sender)
					break
				case 'ttp':
					if (args.length < 1) return reply('Y el texto?')
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						nzwa.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
                                case 'clearall':
					if (!isOwner) return reply('Quien eres?')
					anu = await nzwa.chats.all()
					nzwa.setMaxListeners(25)
					for (let _ of anu) {
						nzwa.deleteChat(_.jid)
					}
					reply('Se elimino con exito :)')
					break
				case 'simi':
					if (args.length < 1) return reply('El texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi não sabe mana')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('escribe 1 para activar la función')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('El modo SIM está activo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Activado con éxito el modo simi en este grupo ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desactivado con éxito el modo simi en este grupo ✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
					break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(ind.ownerB())
					if (args.length < 1) return reply('Etiqueta a la persona')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await nzwa.getProfilePicture(id)
						buffer = await getBuffer(pp)
						nzwa.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil actualizada usando la de @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('No se pudo establecer')
					}
					break
                                case 'pubglogo':
                                        var gh = body.slice(9)
                                        var teks1 = gh.split("|")[0];
                                        var teks2 = gh.split("|")[1];
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}pubglogo Pato|Bot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
                                case 'herrypotter':
                                case 'harrypotter':
                                        var gh = body.slice(12)
                                        if (args.length < 1) return reply(`Y el texto?\nEjemplo: ${prefix}harrypotter PatoBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${gh}&apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: '℘ąɬơ ცơɬ ۷4'})
                                        await limitAdd(sender)
                                        break
                                case 'katabijak':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
                                        reply(anu.result)
                                        await limitAdd(sender)
                                        break
                                case 'faktaunik':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
                                        reply(anu.result)
                                        await limitAdd(sender)
                                        break
                                case 'fancytext':
                                        var teks1 = body.slice(10)
                                        if (args.length < 1) return reply(`Y el texto?...\nEjemplo:\n${prefix}fancytext PatoBot`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/random/text/fancytext?text=${teks1}`, {method: 'get'})
                                        reply(anu.result)
                                        await limitAdd(sender)
                                        break
                                case 'bal':
                                case 'saldo':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        const kantong = checkATMuser(sender)
                                        reply(ind.uangkau(pushname, sender, kantong))
                                        break
                                case 'buylimit':
                                case 'comprarl':
                                        if (args.length < 1) return reply(`¿Cuál es el límite que desea comprar hermana? ¡Asegúrate de tener suficiente dinero hermana! \n\ nCómo verificar dinero: ${prefix} bal`)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        payout = body.slice(10)
                                        const koinPerlimit = 1000
                                        const total = koinPerlimit * payout
                                        if ( checkATMuser(sender) <= total) return reply(`lo siento, tu dinero no es suficiente. recoger y comprar más tarde`)
                                        if ( checkATMuser(sender) >= total ) {
                                                confirmATM(sender, total)
                                                bayarLimit(sender, payout)
                                                await reply(`*「 PAGO EXITOSO 」*\n\n*remitente*: Admin\n *destinatario* : ${pushname}\n*compra nominal* : ${payout} \n *precio límite* : ${koinPerlimit}/limit\n *el resto de tu dinero* : ${checkATMuser(sender)}\n\nproceso exitoso con número de pago \n${createSerial(15)}`)
                                        }
                                        break
                                case 'limit':
                                case 'limite':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        checkLimit(sender)
                                        break
                                case 'event':
                                case 'evento':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isOwner) return reply(ind.ownerB())
                                        if (args.length < 1) return reply('Escribe 1 para activar')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*ACTIVADO* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*❬ ACTIVADO ❭ Activado con exito*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*❬ DESACTIVADO ❭ Desactivado con exito*')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break
                                case 'register':
                                case 'cadastrar':
                                case 'registrar':
                                case 'r':
                                    if (isRegister) return  reply(ind.rediregis())
                                        if (!q.includes('|')) return  reply(ind.wrongf())
                                        const namaUser = q.substring(0, q.indexOf('|') - 0)
                                        const umurUser = q.substring(q.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
                                        if(isNaN(umurUser)) return await reply('¡La edad debe ser un número!')
                                        if (namaUser.length >= 30) return reply(`¿Por qué tu nombre es tan largo? ¿Es un nombre o un tren?`)
                                        if (umurUser > 40) return reply(`La edad maxima es de 40 años`)
                                        if (umurUser < 12) return reply(`La edad minima es de 12 años`)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nombre:', color(namaUser, 'cyan'), 'Edad:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nombre:', color(namaUser, 'cyan'), 'Edad:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
				        break
                                case 'mining':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`Lo siento ${pushname} el dueño no ha activado esta funcion`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`porque eres nuestro propietario del equipo bot enviando ${one}Xp`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*Felicidades* ${pushname} usted obtiene *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
                                 /*case 'setname':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(mess.only.admin)
			                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        nzwa.groupUpdateSubject(from, `${body.slice(9)}`)
                                        nzwa.sendMessage(from, 'Sucesso, alterar o nome do grupo', text, {quoted: mek})
				        break
                                case 'setdesc':
                                        if (!isGroup) return reply(ind.groupo())
			                if (!isGroupAdmins) return reply(mess.only.admin)
			         	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        nzwa.groupUpdateDescription(from, `${body.slice(9)}`)
                                        nzwa.sendMessage(from, 'Sucesso, descrição do grupo de mudança', text, {quoted: mek})
					break*/
                                case 'translate':
                                        aruga = body.slice(10)
                                        lang = aruga.split("|")[0];
                                        teksnya = aruga.split("|")[1];
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`Y el código?\nEjemplo: ${prefix}translate en|Hi, I'm bot`)
                                        if (args.length < 2) return reply(`Y el texto?\nEjemplo: ${prefix}translate en|Hi, I'm bot`)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/edu/translate?lang=${lang}&text=${teksnya}`, {method: 'get'})
                                        arteks = `◪ *TRADUCCIÓN* \n  │\n  ├─ ❏ Texto : ${teksnya} \n  ├─ ❏ Traduccion : ${anu.text} \n  └─ ❏ *Pronunciacion* : ${anu.pronunciation}`
                                        nzwa.sendMessage(from, arteks, text)
                                        await limitAdd(sender)
                                        break
                                case 'tafsirmimpi':
                                        aruga = body.slice(12)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`Que sueño? \nEjemplo: ${prefix}tafsirmimpi pesadilla`)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${aruga}`, {method: 'get'})
                                        reply(anu.result.hasil)
                                        await limitAdd(sender)
                                        break
                                case 'tagme':
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const tagme = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} Joto`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        nzwa.sendMessage(from, tagme, text, {quoted: mek})
                                        break
                                case 'ip': // masih testing
                                        ipnya = body.slice(3)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`Y el ip? \nEjemplo: ${prefix}ip 8.8.8.8`)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://mnazria.herokuapp.com/api/check?ip=${ipnya}`, {method: 'get'})
                                        lang = anu.location.languages[0]
                                        teks = `◪  *IP* \n  │\n  ├─ ❏ IP : ${anu.ip} \n  ├─ ❏ Ciudad : ${anu.city} \n  ├─ ❏ Código : ${anu.continent_code} \n  ├─ ❏ Nombre del país : ${anu.continent_name} \n  ├─ ❏ Código : ${anu.country_code} \n  ├─ ❏ Nombre del país : ${anu.country_name} \n  ├─ ❏ Latitud : ${anu.latitude} \n  ├─ ❏ Calling Code : ${anu.location.calling_code} \n  ├─ ❏ País : ${anu.location.capital} \n  ├─ ❏ Bandera : ${anu.location.country_flag} \n  ├─ ❏ Bandera emoji : ${anu.location.country_flag_emoji} \n  ├─ ❏ Bandera emoji unicode : ${anu.location.country_flag_emoji_unicode} \n  ├─ ❏ Nombre de ID : ${anu.location.geoname_id} \n  ├─ ❏ Idiomas : ${lang.code} , ${lang.name} , ${lang.native} \n  ├─ ❏ Longitud : ${anu.longitude} \n  ├─ ❏ Region Code : ${anu.region_code} \n  ├─ ❏ Nombre de region : ${anu.region_name} \n  ├─ ❏ Type : ${anu.type} \n  └─ ❏ Zip : ${anu.zip}  `
                                        nzwa.sendMessage(from, teks, text)
                                        await limitAdd(sender)
                                        break
                                case 'happymod':
                                        toby = body.slice(10)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`Y el nombre del juego? \nEjemplo : ${prefix}happymod pubg`)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${toby}&apikey=BotWeA`, {method: 'get'})
                                        hepi = anu.result[0]
                                        buffer = await getBuffer(hepi.image)
                                        teks = `◪ *HAPPY MOD* \n  │\n  ├─ ❏ Titulo : ${hepi.title} \n  ├─ ❏ Tamaño : ${hepi.size} \n  ├─ ❏ Version : ${hepi.version} \n  ├─ ❏ Root : ${hepi.root} \n  ├─ ❏ Compra : ${hepi.purchase} \n  ├─ ❏ Precio : ${hepi.price} \n  ├─ ❏ Link : ${hepi.link} \n  └─ ❏ Download : ${hepi.download}`
                                        nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                                        await limitAdd(sender)
                                        break
                                case 'jadwalTV':
                                        mb = body.slice(10)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply(`Y el nombre del canal? \nEjemplo: ${prefix}jadwalTV televisa`)
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${mb}&apiKey=${BarBarKey}`, {method: 'get'})
                                        teks = `◪ *JADWAL TV* \n  │\n  └─ ❏ Canal : ${mb} \n◪ *Horario* \n${anu.result} `
                                        nzwa.sendMessage(from, teks, text)
                                        await limitAdd(sender)
                                        break
                                case 'say':
                                        teks = body.slice(5)
                                        if (!isRegister) return reply(mess.only.daftarB)
                                        if (args.length < 1) return reply('Y el texto?')
                                        saying = teks
                                        nzwa.sendMessage(from, saying, text)
                                        break
                                case 'antilinkgroup':
                                case 'antilinkgrupo':
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('escriba 1 para activar')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya esta activo')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Anti-link activado ✔️')
						nzwa.sendMessage(from,`Los miembros que manden un link serán eliminados`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('Se desactivo el modo anti-link')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Anti-link desactivado ✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
					               break
					            case 'antiracismo':
					                if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('ya está activo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Activo en el grupo con exito\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Desactivado en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('1 para activar o 0 para desactivar')
					}
					break
                                case 'leaderboard':
				case 'lb':
				        bo = args[0]
				        _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
			         	uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                                        let leaderboardlvl = '「 *LEVEL* 」\n\n'
                                        let leaderboarduang = '「 *SALDO* 」\n\n'
                                        nom = 0
                                        try {
                                                for (let i = 0; i < 10; i++) {
                                                        nom++
                                                        leaderboardlvl += `◪ *「${nom}」*\n  ├❑ wa.me/${_level[i].jid.replace('@s.whatsapp.net', '')}\n  ├❑ *XP*: ${_level[i].xp}\n  └❑ *Nivel*: ${_level[i].level}\n`
                                                        leaderboarduang += `◪ *「${nom}」*\n\n  ├❑ *Número* : wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n  ├❑ *Equilíbrio*: _Rp${uang[i].uang}_\n  └❑ *Limite*: ${limitawal - _limit[i].limit}\n`
                                                }
                                                await reply(leaderboardlvl)
                                                await reply(leaderboarduang)
                                        } catch (err) {
                                                console.error(err)
                                                await reply(`minimo ${len} usuario para poder acceder a la base de datos`)
                                        }
				        break
                                case 'antipalavrao':
                                case 'antipalavrão':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        if (args.length < 1) return reply('Escribe ativar para activar')
                                        if (args[0] === 'ativar') {
                                                if (isBadWord) return reply('*Ya está activo*')
                 	                        badword.push(from)
                 	                        fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	                        reply(`*[ Activado ] *`)
                                        } else if (args[0] === 'desativar') {
                  	                        badword.splice(from, 1)
                 	                        fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	                        reply(`Desactivado`)
             	                        } else {
                 	                        reply(ind.satukos())
                	                }
                                        break
                                case 'addpalavrao':
                                case 'addpalavrão':
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        if (args.length < 1) return reply( `Escribe ${prefix}addbadword [groseria]. Ejemplo ${prefix}addbadword bego`)
                                        const bw = body.slice(12)
                                        bad.push(bw)
                                        fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                                        reply('Se añadio con exito')
                                        break
                                case 'delpalavrao':
                                case 'delpalavrão':
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                                        if (args.length < 1) return reply( `Escribe ${prefix}addbadword [Groseria]. Ejemplo ${prefix}addbadword bego`)
                                        let dbw = body.slice(12)
                                        bad.splice(dbw)
                                        fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                                        reply('Se añadio con exito')
                                        break 
                                case 'listpalavrao':
                                case 'listapalavrão':
                                        let lbw = `Lista de BAD WORD\nTotal : ${bad.length}\n`
                                        for (let i of bad) {
                                                lbw += `➸ ${i.replace(bad)}\n`
                                        }
                                        await reply(lbw)
                                        break 
                                        case 'moddroid':
				               if (!isRegister) return reply(mess.only.daftarB)
                               if (isBanned) return reply(mess.only.benned)  
                               if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nombre*: ${data.result[0].title}\n*Publicado*: ${hepi.publisher}\n*info:* ${hepi.mod_info}\n*Tamaño*: ${hepi.size}\n*Ultima version*: ${hepi.latest_version}\n*genero*: ${hepi.genre}\n*link:* ${hepi.link}\n*Descarga*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'ssweb':
                if (!isRegister) return reply(mess.only.daftarB)
                    if (isBanned) return reply(mess.only.benned)    
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Y el nombre?')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					nzwa.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
					case 'tahta':
                if (isBanned) return reply(mess.only.benned)    
				if (!isRegister) return reply(mess.only.daftarB)
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Y el texto?')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=vinzapi`)
					nzwa.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
			        case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                        if (!isRegister) return reply(mess.only.daftarB)
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await nzwa.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
         						nzwa.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
		      				})
					} else {
						reply('Solo una foto')
					}
					break
					case 'request':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isRegister) return reply(mess.only.daftarB)
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return nzwa.sendMessage(from, 'Máximo 300 palabras', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var optionsp = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    nzwa.sendMessage('994402886887@s.whatsapp.net', optionsp, text, {quoted: mek})
                    reply('Se envio al dueño del bot')
                    break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Persona no registrada', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
 
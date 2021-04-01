const stickermaker = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefixo* : 「  ${prefix}  」
   ┠≽ *Criador* : ${ownerName}
   ┠≽ *Versão* : 4
   ┠≽ *Canal* : http://bit.ly/mrpato-yt
   ╿
┯┷ *〈 SOBRE 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Descrição* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade de conexão do bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Faça um Sticker com imagem
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Faça um Sticker animado com Gif/Video
   ┠──────────────╼
   ┠≽ *${prefix}ttp*
   ┃ *Desc* : Texto para o sticker
   ╿ *${ownerName}*,
   ╰╼≽ *Desenvolvedor © ${botName}`
}
exports.stickermaker = stickermaker

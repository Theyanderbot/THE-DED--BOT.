let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de 𝘿𝘼𝙍𝙆-𝙈𝘼𝙉*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/Ld9W7nyITsiHMeEo39DK7b
*2.-* https://chat.whatsapp.com/E6wWhcceZkR01sPntCsJ0V
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler

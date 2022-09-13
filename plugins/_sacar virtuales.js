let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('40' || '40')) {
   	global.db.data.users[m.sender].banned = false
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
   
   if (m.sender.startsWith('994' || '994')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
if (m.sender.startsWith('1' || '1')) {
   	global.db.data.users[m.sender].banned = true
conn.reply('AntiMoros Activado lo siento mirey seras expulsado del grupo.😄')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
    }

export default handler

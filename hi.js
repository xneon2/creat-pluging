/* # Exclusively from Neotro Project 
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved ®Teenuh-X @Teenuh Wa.me/+94766598862
# Credit : usufusta-whatsappAsena
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'hi', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage("hellow");

}));

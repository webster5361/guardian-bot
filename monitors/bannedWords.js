exports.conf = {
  enabled: true,
  ignoreBots: true,
  ignoreSelf: false,
};

const bannedWords = ["nigger","nigga","n i g g e r"];

exports.run = (client, msg) => {
  if(!msg.guild || !msg.member) return;
  if(msg.guild.id === "110373943822540800") return;
  const cleanMsg = msg.content.toLowerCase().replace(/[^a-z]/gi, '');
  let triggered = false;
  bannedWords.every(w=>{
    if(cleanMsg.includes(w)) {
      triggered = true;
      return false;
    } else return true;
  });
  if(triggered) {
    msg.delete();
    msg.author.send(`${msg.author}, banned-words`);
  }
};

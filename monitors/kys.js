exports.conf = {
  enabled: true,
  ignoreBots: true,
  ignoreSelf: false,
};

const bannedWords = ["kys", "killyourself", "killurself", "killmyself", "killme"];

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
    msg.author.sendMessage(`${msg.author}, while the use of the term \`kys\` or variations may seem innocent to you, please remember that this can truly, and very dangerously, affect some people.
People suffering from depression can see this and essentially be triggered into having suicidal thoughts. That means **you** could be the cause of a loss of life, and we know you don't want that!
We know you may mean it as just a meme, or maybe just as a variation on "go *bleep* yourself". Regardless of intent, the management on this server believes that it should not be used. Please refrain from doing this in the future.`);
  }
};

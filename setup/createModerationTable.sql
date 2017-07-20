CREATE TABLE IF NOT EXISTS moderation (
id INTEGER PRIMARY KEY AUTOINCREMENT,
guildID TEXT,
timestamp TEXT,
caseNum INTEGER,
v_memberID TEXT,
v_member TEXT,
m_memberID TEXT,
m_member TEXT,
action TEXT,
reason TEXT
);

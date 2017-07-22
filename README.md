![Guardian-bot logo](assets/guardian.png)

# guardian-bot

[![Greenkeeper badge](https://badges.greenkeeper.io/Odinthewanderer/guardian-bot.svg)](https://greenkeeper.io/)
[![David](https://img.shields.io/david/Odinthewanderer/guardian-bot.svg?maxAge=3600)](https://david-dm.org/Odinthewanderer/guardian-bot)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e20e4d6dc3ac46c29433abdb9d401f7a)](https://www.codacy.com/app/Odinthewanderer/guardian-bot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Odinthewanderer/guardian-bot&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/Odinthewanderer/guardian-bot.svg?branch=master)](https://travis-ci.org/Odinthewanderer/guardian-bot)
[![NSP Status](https://nodesecurity.io/orgs/odin/projects/a7ece1c5-7ea3-47b3-9bd1-684177576ef0/badge)](https://nodesecurity.io/orgs/odin/projects/a7ece1c5-7ea3-47b3-9bd1-684177576ef0)

# Special Thanks
This bot is based on the [Komada](https://komada.js.org) framework. A special thanks to York and Evie for the help and the amazing work on this framework.

[YorkAARGH](https://github.com/YorkAARGH)

[<evie.codes>](https://github.com/eslachance)

# Installation

After you clone the repository, you can install your dependencies like this:

```bash
npm install
```
After your repositories are installed:
```bash
cp lib/config.json.example lib/config.json
```
Now set up your config.json file as you see fit.

# Command usage

### admin Command

This command allows you to promote/demote a user from your Admin role (specified in your config.json)

```bash
// This is to promote the user to admin
{prefix}admin @user true
```
```bash
// This is to demote the user from admin
{prefix}admin @user false
```

### ban Command

This command allows you to ban a specific user.

```bash
{prefix}ban @user put your reason here
```

### case Command

This command allows you to check the details of a specific case #

```bash
{prefix}case case#
```

### check Command

This command allows you to call a report that will check a user for specific infractions.

```bash
// Checks for Warning|Ban|Unmute|Mute|Kick|Unban [ CASE SENSITIVE ]
{prefix}case @user infraction
```

### kick Command

This command allows you to kick a specific user

```bash
{prefix}kick @user put your reason here
```

### moderator Command

This command allows you to promote/demote a specific user from your Moderator status (defined in config.json)

```bash
// To promote the user
{prefix}moderator @user true
```

```bash
// To demote the user
{prefix}moderator @user false
```

### mute Command

This command allows you to mute a specific user. The muted role defined in your guild configs MUST exist.

```bash
{prefix}mute @user put reason here
```

### nick Command

This allows you to quickly change a user's nickname. (leave blank to remove any nicknames).

```bash
{prefix}nick @user nickname
```

### purge Command

This allows you to quickly purge X amount of messages from a given channel.

```bash
{prefix}purge numberMessages(2-100)
```

### unban Command

This allows you to unban a user. Requires a user resolvable object (userID).

```bash
{prefix}unban userID put reason here
```

### unmute Command

This allows you to remove the Muted role from a given user.

```bash
{prefix}unmute @user put reason here
```

### warn Command

This allows you to Warn a user for a given reason.

```bash
{prefix}warn @user put reason here
```

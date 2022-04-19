---
title: 'Using and creating an SSH Key'
metaTitle: 'Using and creating an SSH Key'
metaDesc: 'Using and creating an SSH Key'
heroImage: images/bg1.webp
date: '2022-04-17'
category: 'dev'
tags:
  - unix
---

If you already have a key DO NOT MAKE A NEW ONE.

---
# Creating a key

First create the ssh key on the main device (Usually not the Server) with:

	ssh-keygen -t rsa

\# *-t specifies type of key in this case rsa*

- You can add a parse-phrase which ensures a hacker can't use your key immediately. This has the downfall that you have to type the passphrase in each time you connect.

### On MAC:

*Key is saved in /Users/USER/.ssh/id_rsa*

### On Unix:

Key is saved in /home/USER.ssh/id_rsa

---
# Copy the key to a server or add it on the DigitalOcean console

## Access the key to copy to DigitalOcean with:

	cat /Users/USERNAME/.ssh/id_rsa.pub

\# Copy this output to digital ocean

## Add to server from command line:

If ssh-copy isn't already installed run:

	brew install ssh-copy-id

\# *On MAC*

To copy to server run:

	ssh-copy-id USER@IP-ADDRESS

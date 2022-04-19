---
title: 'Creating new Users'
metaTitle: 'Creating new Users'
metaDesc: 'Creating new Users'
heroImage: images/bg11.webp
date: '2022-04-17'
category: 'dev'
tags:
  - unix
---

## Making new account


    adduser USERNAME
This will create the user ask for a password and make the home directory.

---
## Set the password to expire immediately
    chage -d 0 USERNAME
This is useful in conjunction with the above if you set a temporary password. The user will be asked to reset the password upon logging in.

---
## Setting up an ssh key

An ssh key can be set up for the user if required using instructions [Using an SSH Key](/post/Using-an-SSH-Key)

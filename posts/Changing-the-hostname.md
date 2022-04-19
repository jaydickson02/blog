---
title: 'Changing the hostname'
metaTitle: 'Changing the hostname'
metaDesc: 'Change the hostname/computer name on a host machine'
heroImage: images/bg4.webp
date: '2022-04-17'
category: 'dev'
tags:
  - unix
---



To change the hostname/computer name on the host machine run:

	sudo vim /etc/hostname

\# *If vim is not available use another file editor like nano or vi*

- Change the name in the file to the preferred name.
- Restart the machine to have changes to take effect.
---
title: 'Integration by Parts'
metaTitle: 'Description of integration by parts'
metaDesc: 'Description of integration by parts'
heroImage: images/bg6.webp
date: '2022-04-17'
category: 'math'
tags:
  - Integration
  - Calculus
---

Used to find the [Integral](/post/integral) of a product of functions:

### Formula

$$
\int u {dv \over{dx}} \: dx  = uv - \int {du \over {dx}}v \: dx
$$

Ex.
$$
\int xe^x dx
$$
if u = x and ${dv \over dx} = e^xdx$

Then:  $v = \int e^x$ and ${du\over dx} = u'$



### Trick to Pick u and v

*L.I.A.T.E*

L: logs  ($ln(x), ln(x^2), \log_{10}(x)$)

I: inverse trig  ($tan^{-1}(x), arcsin(2x)$)

A: Algebraic  ($x^2, (x-1), x^6, \sqrt{x}$)

T: Trig Functions  ($sin(x), cos(x^3)$)

E: Exponentials  ($e^x, e^{-3x},e^{x^2+4}$)

Where u is the first type you come across in the expression, v is the second.
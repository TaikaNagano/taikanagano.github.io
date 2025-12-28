---
permalink: /
title: "Taika Nagano's personal website"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello, there! I am a Ph D student of linguistics at [the University of Osaka (Div. of Language and Culture, Graduate School of Humanities)](https://lc.hmt.osaka-u.ac.jp/english/home.html). 

News
======
  <ul>{% for post in site.posts reversed limit:3 %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Recent Publications
======
  <ul>{% for post in site.publications reversed limit:3 %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Recent Presentations
======
  <ul>{% for post in site.talks reversed limit:3 %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
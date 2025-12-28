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
<ul>
{% for post in site.posts limit:3 %}
  {% include archive-single.html %}
{% endfor %}
</ul>


[Full list →](/year-archive/)

Recent Publications
======
<ul>
{% for post in site.publications limit:3 %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

[Full list →](/publications/)

Recent Talks
======
<ul>
{% for post in site.talks limit:3 %}
  {% include archive-single-talk-cv.html %}
{% endfor %}
</ul>

[Full list →](/talks/)
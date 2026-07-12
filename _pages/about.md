---
permalink: /
title: "Taika Nagano (永野 大夏) Personal Website"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---



<div class="handout-banner">
    <a href="https://researchmap.jp/taikanagano/presentations/54260348/attachment_file.pdf" target="_blank" rel="noopener">Slides for DM meets Nano II</a>
</div>


Hello! I am a PhD student in linguistics at [the University of Osaka (Div. of Language and Culture, Graduate School of Humanities)](https://lc.hmt.osaka-u.ac.jp/english/home.html) and currently a JSPS Research Fellow (DC2).

My research interests lie at the interface of syntax and morphology, especially in the verbal domain. I am interested in how cross-linguistic variation in argument structure and verbal morphology can deepen our understanding of the lexicon. My current work focuses on topics such as causatives, passives, applicative constructions, transitivity alternations, and contextual allomorphy from theoretical and typological perspectives. 

I also enjoy collaborative research. I am currently working with [Akitaka Yamada (Keio University)](https://keiosfc-aki2025.github.io/Seminar/home.html) on applicative constructions in Japanese and their cross-linguistic parallels, and with [Kanta Tateno (University of Connecticut)](https://sites.google.com/view/kanta-tateno/) on several morphosemantic topics.

Alongside my research, I teach English as a part-time lecturer at Setsunan University, where I teach several first-year English courses.

Outside of linguistics, I enjoy playing classic Pokémon games, playing with [my Chihuahua](https://taikanagano.github.io/chihuahua/), going on drives with friends, and shopping (when my wallet allows it).


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
{% assign recent_pubs = site.publications | sort: "date" | reverse %}
<ul>
{% for post in recent_pubs limit:3 %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

[Full list →](/publications/)

Recent Presentations
======
{% assign recent_presentations = site.presentations | sort: "date" | reverse %}
<ul>
{% for post in recent_presentations limit:3 %}
  {% include archive-single-talk-cv.html %}
{% endfor %}
</ul>

[Full list →](/presentations/)

Talk Map
======

<iframe
  src="/talkmap/map.html"
  width="100%"
  height="600"
  style="border: none;"
  loading="lazy">
</iframe>
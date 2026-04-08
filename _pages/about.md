---
permalink: /
title: "Taika Nagano's personal website"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!--

<div class="handout-banner">
  XXX Slides → <a href="#" target="_blank" rel="noopener">[HERE]</a>
</div>

-->

Hello, there! I am a PhD student of linguistics at [the University of Osaka (Div. of Language and Culture, Graduate School of Humanities)](https://lc.hmt.osaka-u.ac.jp/english/home.html). My research interests lie in syntax, morphology, and their interface. 

I am interested in how cross-linguistic variation in allomorphy interacts with other phenomena. For example, English is a language that has several past tense allomorphs conditioned by a verbal root but seldom overtly marks the transitivity of ergative verbs. The opposite holds in Japanese. It clearly marks the transitivity of causative–inchoative alternating verbs but has no irregular past tense suffix. I am curious about why such variation is observed across languages and wonder what determines allomorphy and whether it is closely linked to other grammatical phenomena. This is the starting point of my research. Motivated by this, I am also investigating syntactic phenomena related to argument structure such as causative, passive, and applicative constructions from theoretical and typological perspectives. Additionally, I love joint research. I am working on a variety of benefactive (applicative) expressions in Japanese, comparing them with some Bantu and Austronesian languages (joint work with Akitaka Yamada, Keio University) and affixal negation in English and Japanese (joint work with Kanta Tateno, University of Connecticut).

Alongside my research, I teach English to Japanese teenagers. I am currently a part-time lecturer at Setsunan University, where I teach several courses for first-year students.

In my spare time, I enjoy playing classic Pokémon games, going on drives with friends, and shopping.

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
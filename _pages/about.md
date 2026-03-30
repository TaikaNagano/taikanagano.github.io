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

My research investigates how theories of syntax and morphology account for language variation. I am primarily interested in phenomena related to argument structure, such as passive, causative, and applicative constructions, as well as their alternations and cross-linguistic morphological patterns. Additionally, I examine root-conditioned allomorphy in the verbal domain, with particular emphasis on change-of-state verbs, including those that participate in the causative–inchoative alternation. I am also interested in how the Japanese conjugation system can be analyzed within antilexical morphological frameworks such as Distributed Morphology and Nanosyntax. My recent research topics include voice (verbal) syncretism in Japanese, deverbal compounds in Japanese, applicative expressions in Japanese (joint work with Akitaka Yamada), and negative prefixes in English and Japanese (joint work with Kanta Tateno).

Alongside my research, I teach English to Japanese teenagers. I am currently a part-time lecturer at Setsunan University, where I teach several courses for first-year students.

In my spare time, I enjoy playing classic Pokémon games such as FRLG, going on drives with friends, and shopping at outlet malls.

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
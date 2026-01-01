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

My research investigates how theories of syntax and morphology account for language variation. As a syntactician, I am primarily interested in phenomena related to argument structure, such as passive, causative, and applicative constructions, and their cross-linguistic morphological patterns. As a morphologist, I examine root-conditioned allomorphy in the verbal domain, with particular emphasis on change-of-state verbs, including verbs that participate in the causative–inchoative alternation. I am also interested in how the Japanese conjugation system can be analyzed within antilexical morphological frameworks such as Distributed Morphology and Nanosyntax. My recent research topics include deverbal compounds in Japanese, applicative expressions in Japanese (joint work with Akitaka Yamada), and negative prefixes in English and Japanese (joint work with Kanta Tateno).

Before pursuing my PhD at the University of Osaka, I obtained my M.A. in linguistics under the supervision of Masao Ochi and Akitaka Yamada at the University of Osaka, and my B.A. under the supervision of Norio Nasu at Kobe City University of Foreign Studies.

Alongside my research, I am currently working as a part-time lecturer at Setsunan University.

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

Recent Talks
======
{% assign recent_talks = site.talks | sort: "date" | reverse %}
<ul>
{% for post in recent_talks limit:3 %}
  {% include archive-single-talk-cv.html %}
{% endfor %}
</ul>

[Full list →](/talks/)
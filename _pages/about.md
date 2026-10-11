---
permalink: /
title: "Taika Nagano (永野 大夏) Personal Website"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!--

<div class="handout-banner">
    <a href="https://researchmap.jp/taikanagano/presentations/54260348/attachment_file.pdf" target="_blank" rel="noopener">Slides for DM meets Nano II</a>
</div>

-->

<div class="about-hero">
  <img
    id="rotating-about-photo"
    src="/images/about/about1.png"
    alt="Taika Nagano">
</div>

Hello! My name is Taika Nagano (<span class="ipa">[tɐꜜikɐ nɐꜜɡɐno]</span> in standard Japanese and often pronounced <span class="ipa">/ˈtaɪkə nəˈɡɑːnoʊ/</span> by English speakers). I am a PhD student at [the University of Osaka (Div. of Language and Culture, Graduate School of Humanities)](https://lc.hmt.osaka-u.ac.jp/english/home.html) and and currently a [JSPS](https://www.jsps.go.jp/english/) Research Fellow (DC2). I major in linguistics, with a special emphasis on syntax, morphology, and their interface.

Here's my latest [CV](/files/cv.pdf). 

My research interests lie mainly in the verbal domain. I am especially interested in argument structure and related phenomena, including argument alternations (e.g., causative–inchoative and dative alternations), causative, passive, and applicative constructions. While my research is not limited to any particular language, I often take my native language, Japanese, as a starting point and explore these phenomena from a cross-linguistic perspective.

I also enjoy collaborative research. I am currently working with [Akitaka Yamada](https://keiosfc-aki2025.github.io/Seminar/home.html) on benefactive applicative constructions in Japanese and their cross-linguistic parallels, and with [Kanta Tateno](https://sites.google.com/view/kanta-tateno/) on several topics in morphology and semantics, such as affixal negation and nominalization. In addition, I have been conducting experimental research on language acquisition under the supervision of [Chie Nakamura](https://sites.google.com/site/carumakan/home), using eye-tracking methods.

Outside of linguistics, I enjoy going for drives with my friends, playing with [my Chihuahua](https://taikanagano.github.io/chihuahua/), and shopping at outlet malls (but only when I'm feeling "rich"!).

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

[View the Talk Map →](/talkmap/)
---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of the main pages on this site.  
For search engines, there is also an [XML version]({{ base_path }}/sitemap.xml).

<h2>Main pages</h2>
<ul>
{% for item in site.data.navigation %}
  <li><a href="{{ base_path }}{{ item.url }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
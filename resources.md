---
layout: page
title: Resources
eyebrow: Further material
lead: Links, readings, and tools that go with the course. This page grows as the sessions happen.
permalink: /resources/
---

The course draws on contemporary material on AI agents and agentic systems.
Slides and examples for each session are posted on that session's page.
Pointers to lectures, papers, and practical resources for going deeper will be
collected here as the course runs.

## Agent tools used in the hands-on parts

You need one of these (or a comparable agent) with a paid subscription:

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) (Anthropic)
- [Codex](https://developers.openai.com/codex) (OpenAI)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli) (Google)

## By session

{% assign lectures = site.lectures | sort: "number" %}
{% for l in lectures %}
### [Session {{ l.number }}: {{ l.title }}]({{ l.url | relative_url }})
{% if l.materials and l.materials.size > 0 %}{% for m in l.materials %}
- [{{ m.title }}]({{ m.url | relative_url }}){% endfor %}
{% else %}
<p class="muted">Material will be posted after the session on {{ l.date | date: "%-d %B" }}.</p>
{% endif %}
{% endfor %}

## GPU compute

In the final session we share our experience applying for compute. The
official starting points are:

- [SURF](https://www.surf.nl/en) (Dutch national research infrastructure)
- [EuroHPC Joint Undertaking](https://eurohpc-ju.europa.eu/) access calls

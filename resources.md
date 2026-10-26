---
layout: page
title: Resources
eyebrow: Further material
lead: Links, readings, and tools that go with the course. This page grows as the sessions happen.
permalink: /resources/
---

The course draws on contemporary material on AI agents and agentic systems.
Below are the readings for each session: *core* readings are the ones we
recommend before or after the session, *optional* ones go deeper. Slides and
examples are posted on each session's page after the session.

## Agent tools used in the hands-on parts

You need one of these (or a comparable agent), ideally with a paid
subscription:

- [Claude Code](https://code.claude.com/docs/en/overview) (Anthropic)
- [Codex CLI](https://learn.chatgpt.com/docs/codex/cli) (OpenAI)
- [Antigravity CLI](https://antigravity.google/docs/cli/overview) (Google).
  It [replaced Gemini CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
  for free and Google AI Pro/Ultra users on 18 June 2026.
  [Gemini CLI](https://github.com/google-gemini/gemini-cli) still works with a
  paid Gemini API key or an organisation's Gemini Code Assist licence.

## By session

{% assign lectures = site.lectures | sort: "number" %}
{% for l in lectures %}
### [Session {{ l.number }}: {{ l.title }}]({{ l.url | relative_url }})
{% if l.readings %}{% include reading-list.html readings=l.readings %}{% endif %}
{% if l.materials and l.materials.size > 0 %}
<p><strong>Materials</strong></p>
<ul>
{% for m in l.materials %}<li><a href="{{ m.url | relative_url }}">{{ m.title }}</a></li>
{% endfor %}</ul>
{% else %}
<p class="muted">Slides and examples will be posted after the session on {{ l.date | date: "%-d %B" }}.</p>
{% endif %}
{% endfor %}

## Going further

- CMU 11-768 [*AI Agents*](https://www.cmu-agents.com/) (Fried and Neubig), a
  graduate course on building and training agents.
- [Tiktokenizer](https://tiktokenizer.vercel.app/), to see how text is split
  into tokens.

## GPU compute

In the final session we share our experience applying for compute. The
official starting points are:

- [SURF Snellius](https://www.surf.nl/en/services/compute/snellius-the-national-supercomputer), the Dutch national supercomputer
- [EuroHPC Joint Undertaking access calls](https://www.eurohpc-ju.europa.eu/supercomputers/supercomputers-access-calls_en)

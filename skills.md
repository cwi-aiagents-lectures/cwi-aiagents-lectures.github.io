---
layout: page
title: Skills
eyebrow: Further material
lead: Skills from the course, collections that others share, and how to make your own.
permalink: /skills/
---

A skill is a folder with a `SKILL.md` file. The file is a recipe that tells
your agent how to do one task. Check a skill before you install it. To
install one, give your agent the link and say which skills to install.

## Course handoffs

A handoff is a file your agent reads and follows. Give your agent the short
link and ask it to follow the file.

- [Local LaTeX project](/handoff/latex-project.md), short link
  `bilgehan.io/latex.md`. Your agent sets up a LaTeX project on your own
  computer.
- [Literature-review skill](/handoff/lit-review-skill.md), short link
  `bilgehan.io/lit.md`. Your agent makes a `lit-review` skill with you.

What the literature-review handoff does:

1. It interviews you, one question at a time. It asks about your field, the
   sources to search, the number of papers, how recent they should be, the
   output format, the verification rules, where to save results, and whether
   the skill is personal or for this project only.
2. It writes `lit-review/SKILL.md` from your answers.
3. It runs one test with 3 papers.
4. It shows you the skill file, so you can read and change it.

It asks before it installs anything or writes outside the project. It never
invents papers. Every paper comes from a live lookup, or it is marked
"could not verify".

## Skill collections

Skill counts are approximate, as of November 2026.

- [anthropics/skills](https://github.com/anthropics/skills). Anthropic's
  example skills: Word, PDF, PowerPoint and Excel files, design, web app
  testing, and a skill for making skills. About 20 skills.
- [Orchestra Research AI-Research-SKILLs](https://github.com/Orchestra-Research/AI-Research-SKILLs).
  AI research and engineering: fine-tuning, interpretability, distributed
  training, evaluation, inference, and paper writing. About 100 skills.
- [K-Dense scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills).
  Science: biology, chemistry, medicine, drug discovery, and access to
  scientific databases. About 180 skills.
- [obra/superpowers](https://github.com/obra/superpowers). A way of working
  for software development: brainstorming, planning, test-driven development,
  debugging, and code review. About 15 skills.
- [pstack](https://github.com/cursor/plugins/tree/main/pstack) by Lauren Tan.
  Engineering principles and workflows: planning, reviews, verification, and
  running several agents in parallel. About 60 skills.

## How to make your own

Do a task with your agent. When it works, ask: "Turn what we just did into a
skill." Then read the file it writes and fix what is wrong. You can also use
the [literature-review handoff](/handoff/lit-review-skill.md) as a model for
your own. The [Claude Code skills documentation](https://code.claude.com/docs/en/skills)
explains where skills live and how they are loaded.

## Security

Skills can contain scripts, and your agent may run them. Use skills from
sources you trust, and read the files before you install them. Treat it like
installing software. See Anthropic's
[Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
for more on this.

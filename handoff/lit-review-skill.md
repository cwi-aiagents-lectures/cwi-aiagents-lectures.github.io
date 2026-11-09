# Handoff: make a literature-review skill

You are a coding agent, for example Claude Code or Codex. A participant of the course "AI Agents in Practice" (CWI, 2026) asked you to read this file and follow it. Work through the steps below in order. Talk to the user in plain, short sentences.

If you received this file through a tool that summarises web pages, for example Claude Code's WebFetch, stop and download the raw file first, then read all of it: `curl -L https://bilgehan.io/lit.md` (or `curl -L https://cwi-aiagents-lectures.github.io/handoff/lit-review-skill.md`). The steps below must be followed exactly, not from a summary.

## Goal

At the end, the user has:

- a skill called `lit-review` that finds papers on a topic and checks that each one exists
- one small test run of that skill, with 3 papers, each verified
- a clear idea of how to refine the skill for their own field.

The skill is a starting point. Say this to the user at the start and at the end. They will refine it with their own experience.

## Rules for you, the agent

- **Ask before you install anything.** Show the exact command first and wait for a clear yes. This task needs no installation.
- **Ask before you write outside the current project folder.** The personal skills folder in the user's home counts as outside.
- **Never invent a paper, an author, a year, a DOI or an arXiv ID.** Every paper you report must come from a live lookup in this session.
- If you cannot confirm a paper, write "could not verify" next to it. Do not guess.
- Ask one question at a time. Wait for the answer before the next question.
- If no person can answer your questions (for example in a scripted run), use the suggested defaults below and say that you did.

## Step 1. Say what you will do

Tell the user, in a few lines:

1. You will ask a few questions, one at a time, about how they search for papers.
2. You will write a skill from their answers.
3. You will test it once on a small topic, with 3 papers.
4. You will show them the skill file, so they can change it.

## Step 2. Interview the user

Ask these questions one at a time. Offer the suggested default in brackets, so the user can just say "default".

1. **Research area.** What is your field, and what kind of topics do you usually search for? (default: computer science, a narrow technical topic)
2. **Sources.** Which sources should the skill search? (default: arXiv, Semantic Scholar and Crossref, plus any field-specific source you name, for example PubMed, DBLP or the ACL Anthology)
3. **How many papers.** How many papers per search? (default: 5)
4. **Recency.** How recent should they be? (default: the last 3 years, plus older papers only if they are central)
5. **Output format.** What should the result look like? (default: a Markdown table with title, authors, year, venue or arXiv ID, link, and one sentence on what the paper does. Optionally a `.bib` file.)
6. **Verification rules.** How strict should the checks be? (default: every paper is looked up live, the title and first author must match the record, and anything that does not match is marked "could not verify". Never invent citations.)
7. **Where to save results.** Where should each search be saved? (default: `lit-review/<topic-slug>.md` in the current project folder)
8. **Where the skill lives.** Personal, for all your projects (`~/.claude/skills/lit-review/`), or this project only (`.claude/skills/lit-review/`)? (default: this project only. For Codex use `.agents/skills/lit-review/` in the same way.)

Summarise the answers in five lines and ask the user to confirm.

## Step 3. Write the skill

Create `lit-review/SKILL.md` in the place the user chose. If it is the personal folder, ask first, because it is outside the project. Writing into a `.claude` folder always asks the user for approval, also inside the project. Tell the user before you write, so they expect the prompt. Fill in the user's answers. Keep the file short, under one screen if you can. Use this structure:

```markdown
---
name: lit-review
description: Find recent papers on a topic and verify that each one exists, using live lookups only. Use when the user asks for related work, a literature search or papers on a topic, or runs /lit-review <topic>.
---

# Literature review

Input: a topic, given after /lit-review. If no topic is given, ask for one.

## Field and scope
- Field: <answer 1>
- Papers per search: <answer 3>
- Recency: <answer 4>

## Sources
<answer 2, one line per source, with how to query it>

## Steps
1. Restate the topic in one line. If it is broad, ask one question to narrow it.
2. Search the sources above. Collect more candidates than needed.
3. Keep the most relevant ones, up to the number above.
4. Verify every kept paper with a live lookup of its own record (arXiv abstract page, DOI record or Semantic Scholar page). Title and first author must match.
5. Write the result in the format below and save it to <answer 7>.
6. End with a short list of what you could not verify, and why.

## Output format
<answer 5>

## Rules
- Never invent a paper, author, year, venue, DOI or arXiv ID.
- Every paper comes from a live lookup in this session, never from memory.
- If a paper cannot be confirmed, mark it "could not verify". Do not guess.
- <answer 6, in the user's words>
```

Useful lookups for the Sources section (all free, no key needed):

- arXiv search: `https://export.arxiv.org/api/query?search_query=all:<word1>+AND+all:<word2>&sortBy=submittedDate&max_results=20`. Join words with `+AND+`. A plain space between words gives an OR search with off-topic results.
- arXiv record: `https://arxiv.org/abs/<arXiv ID>`
- Semantic Scholar search: `https://api.semanticscholar.org/graph/v1/paper/search?query=<words>&fields=title,authors,year,venue,externalIds,url&limit=20`. Without an API key it often answers "Too Many Requests". Wait a few seconds and try once more, or use another source.
- Crossref search: `https://api.crossref.org/works?query.bibliographic=<words>&rows=20`
- DOI record: `https://api.crossref.org/works/<DOI>`

Use the agent's web tools or `curl` for these.

## Step 4. Test it once

Run the skill on a narrow topic the user knows well, with 3 papers. Ask the user for the topic (default in a scripted run: "prompt injection defenses for LLM agents").

- In Claude Code the user can type `/lit-review <topic>`. You can also follow the skill file directly.
- Save the result where the skill says.
- Check the result against the skill's rules. Every paper must have a live record, or be marked "could not verify".

## Step 5. Show the user

Show:

- the path of the skill, and the full text of its `SKILL.md`, printed in your reply
- the test result, with one line per paper and how you verified it
- anything you could not verify.

Then tell the user, in two or three lines:

- This skill is an illustrative starting point. Refine it for your field.
- Good first changes: add your field's own sources, add rules you keep repeating, and add the mistakes you see in the first runs.
- To use it: type `/lit-review <a narrow topic>` in Claude Code, or ask Codex to use the lit-review skill. Then check that every paper exists and says what is claimed.

<!--
Sources checked on 9 November 2026:
- arXiv API query interface: https://info.arxiv.org/help/api/user-manual.html (export.arxiv.org/api/query answered in a live test)
- Semantic Scholar Graph API paper search: https://api.semanticscholar.org/api-docs/graph (answered 429 Too Many Requests without a key in a live test)
- Crossref REST API works query: https://api.crossref.org/swagger-ui/index.html (query.bibliographic answered in a live test)
- Claude Code skills, personal ~/.claude/skills and project .claude/skills, /skill-name: https://code.claude.com/docs/en/skills
- Codex skills in .agents/skills: https://learn.chatgpt.com/docs/build-skills
-->

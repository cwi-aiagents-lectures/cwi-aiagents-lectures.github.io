---
number: 2
title: Working Effectively with AI Agents
subtitle: How to set up and steer a single task so the agent completes it reliably and safely, and how to extend it with skills.
date: 2026-11-10 10:30:00 +0100
room: Euler room
track: Practical
description: >-
  A good task description, instruction files and memory, tools, steering a
  session, skills and skill stacks, and safe use: how a sandbox works, five
  ways to isolate an agent, and prompt injection.
topics:
  - A good task description
  - Context and memory
  - Tools and extensions
  - Human–agent interaction
  - Skills and skill stacks
  - Sandboxing and safety
interactive: Make your own literature-review skill with your agent. It interviews you, writes the skill, and you check every paper it finds.
readings:
  core:
    - authors: Anthropic
      title: Effective Context Engineering for AI Agents
      url: https://www.anthropic.com/research/effective-context-engineering-for-ai-agents
      year: 2025
    - authors: Simon Willison
      title: The Lethal Trifecta for AI Agents
      url: https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
      year: 2025
  optional:
    - authors: Barry Zhang, Keith Lazuka, Mahesh Murag (Anthropic)
      title: Equipping Agents for the Real World with Agent Skills
      url: https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills
      year: 2025
    - authors: Li et al.
      title: "SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks"
      url: https://arxiv.org/abs/2602.12670
      year: 2026
    - authors: Anthropic
      title: Claude Code documentation on skills and sandboxing
      url: https://code.claude.com/docs/en/skills
      note: The sandboxing page is at code.claude.com/docs/en/sandboxing.
    - authors: Greshake et al.
      title: "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection"
      url: https://arxiv.org/abs/2302.12173
      year: 2023
materials: []
---

## Overview

Getting good results from an agent is a skill. It depends on how you frame
the task, what context you provide, how you steer the work, and how carefully
you check what comes back. This session is about doing one task well: setting
it up, steering it, and keeping it safe.

## Learning outcomes

After this session you can:

- write a task description with context, constraints, and a definition of
  done that can be checked.
- set up persistent project context in an instruction file, and manage what
  the agent remembers between sessions.
- extend an agent with tools (MCP servers) and skills when that is worth it,
  and judge a published skill stack before you install it.
- steer, interrupt, and recover a session, and recognise when it is going off
  track.
- explain how a sandbox contains an agent's actions, and what data leaves
  your machine.

## What we will cover

- **Your take-home task.** We start with what you tried after Session 1: what
  you asked, what happened, and what you checked.
- **A good task description.** Vague versus specified tasks. What "done"
  looks like, constraints and non-goals, and examples. Brief the agent as you
  would a capable new colleague, and let it interview you before it starts.
- **Context and memory.** What the agent needs versus what it can find for
  itself. Pointing to the source. Project instruction files such as
  `AGENTS.md` or Claude Code's `CLAUDE.md`, and the memory files the agent
  keeps between sessions. Too little versus too much context, and when to
  start a fresh session.
- **Tools and extensions.** Built-in tools (shell, files, search, web) and MCP
  servers. When adding a tool helps and when it only adds noise.
- **Human–agent interaction.** Steering and interrupting, checkpoints and
  rewinding, and git as a safety net. Signs of trouble: loops, scope creep,
  edited tests, and apology spirals.
- **Skills and skill stacks.** A skill is a folder with a recipe. How to make
  your own with your agent, and what research says about which skills help.
  Skill stacks that people share for research and development, how they are
  built, and how to judge one before you install it.
- **Sandboxing and safety.** Approval and the sandbox as two separate
  controls. How a sandbox works, and what it does not cover. Five ways to
  isolate an agent, from a sandboxed shell to containers and virtual machines.
  Prompt injection, and the "lethal trifecta" of private data, untrusted
  content, and outside communication.

## Interactive component

About 17 minutes. We do each step live on screen, and you follow along.

1. **Interview and create.** Your agent reads a
   [handoff file](/handoff/lit-review-skill.md), asks you a few questions
   about your field and sources, and writes a `lit-review` skill.
2. **Run and check.** Run the skill on a narrow topic you know, then check
   that every paper exists and says what is claimed.

The skill is a starting point. Refine it for your own field.

## Between sessions

There are three weeks until Session 3. Use an agent on two or three real tasks
from your own research, programming, or studies, and fill in your agent
journal for each: what you asked, what happened, what you checked, and what
went wrong. Turn one procedure you repeat into a skill. Session 3 opens with a
few of these stories, and they feed directly into the final session.

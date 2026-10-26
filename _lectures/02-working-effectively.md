---
number: 2
title: Working Effectively with AI Agents
subtitle: How to set up and steer a single task so the agent completes it reliably and safely.
date: 2026-11-10 10:30:00 +0100
room: L017
track: Practical
description: >-
  Task formulation, project context, tools and extensions, steering a session,
  and safe use: permissions, prompt injection, and what data leaves your machine.
topics:
  - Task formulation
  - Context
  - Tools and extensions
  - Human–agent interaction
  - Safety and confidentiality
interactive: Same task with two prompts, writing an instruction file, and a prompt-injection sandbox.
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
    - authors: Anthropic
      title: Best Practices for Claude Code
      url: https://code.claude.com/docs/en/best-practices
    - title: AGENTS.md
      url: https://agents.md/
      note: An open format for project instruction files.
    - title: Model Context Protocol
      url: https://modelcontextprotocol.io/
      note: An open standard for connecting agents to external tools and data.
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

- write a task specification with context, constraints, and a definition of
  done;
- set up persistent project context in an instruction file and choose what
  goes in it;
- extend an agent with tools (MCP servers, skills) when that is worth it;
- steer, interrupt, and recover a session, and recognise when it is going off
  track;
- configure permissions sensibly and explain what data leaves your machine.

## What we will cover

- **Task formulation.** Vague versus specified tasks. What "done" looks like,
  constraints and non-goals, and examples. Brief the agent as you would a
  capable new colleague, let it ask you questions, and have it plan before it
  acts.
- **Context.** What the agent needs versus what it can find for itself.
  Pointing to files versus pasting them. Project instruction files such as
  `AGENTS.md` or Claude Code's `CLAUDE.md`. Too little versus too much context,
  and when to start a fresh session.
- **Tools and extensions.** Built-in tools (shell, files, search, web), MCP
  servers, and skills. When adding a tool helps and when it only adds noise.
- **Human–agent interaction.** Steering and interrupting, planning modes,
  checkpoints and rewinding, and git as a safety net. Signs of trouble: loops,
  scope creep, edited tests, and apology spirals.
- **Safety and confidentiality in practice.** Permission modes and
  sandboxing, credentials, and prompt injection, with a harmless live demo.
  The "lethal trifecta" of private data, untrusted content, and outside
  communication. What leaves your machine: provider data policies, unpublished
  results, personal data under the GDPR, and confidential peer-review
  material. Local and open-weight options.
- **Cost.** Subscriptions versus API use, and choosing a model.

## Interactive component

About 30 minutes of hands-on work. The exercise materials are shared before
the session.

1. **Same task, two prompts.** Run a vague and a well-specified version of the
   same data-cleaning task. Compare the results and the number of turns.
2. **Instruction file.** Write an `AGENTS.md`-style file for a provided
   project: conventions, how to run the tests, what not to touch. Rerun a task
   and compare.
3. **Injection in a sandbox.** Ask the agent to summarise a folder that
   contains a document with a hidden, harmless instruction. Did the agent
   follow it? Which permission settings would have contained it?

## Between sessions

There are three weeks until Session 3. Use an agent on two or three real tasks
from your own research, programming, or studies, and fill in your agent
journal for each: what you asked, what happened, what you checked, and what
went wrong. Session 3 opens with a few of these stories, and they feed
directly into the final session.

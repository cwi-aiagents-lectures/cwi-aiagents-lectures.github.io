---
number: 1
title: Fundamentals of AI Agents
subtitle: What happens when you type a request into an agent, and the mental models you need to use one well.
date: 2026-11-03 10:30:00 +0100
room: L120
track: Practical
description: >-
  How an agent differs from chat use of an LLM, the agent loop, the parts of
  an agent system, and the mental models that predict how agents behave.
topics:
  - From chat to agents
  - The agent loop
  - Model and harness
  - Mental models
interactive: Guided, checkpointed first tasks with your own agent.
readings:
  core:
    - authors: Anthropic
      title: Building Effective Agents
      url: https://www.anthropic.com/research/building-effective-agents
      year: 2024
    - authors: Yao et al.
      title: "ReAct: Synergizing Reasoning and Acting in Language Models"
      url: https://arxiv.org/abs/2210.03629
      year: 2022
  optional:
    - authors: Schick et al.
      title: "Toolformer: Language Models Can Teach Themselves to Use Tools"
      url: https://arxiv.org/abs/2302.04761
      year: 2023
    - title: mini-swe-agent
      url: https://github.com/SWE-agent/mini-swe-agent
      note: A complete agent in about 100 lines of Python.
    - authors: Kwa et al. (METR)
      title: Measuring AI Ability to Complete Long Software Tasks
      url: https://arxiv.org/abs/2503.14499
      year: 2025
    - authors: Russell and Norvig
      title: "Artificial Intelligence: A Modern Approach"
      url: https://aima.cs.berkeley.edu/
      note: Chapter 2, Intelligent Agents.
materials: []
---

## Overview

AI agents now do much more than answer questions in a chat window. They plan
multi-step tasks, call tools, write and run code, search the literature, and
work inside real software environments. This first session explains what
happens underneath when you type a request into an agent. You leave with a
correct mental model and with your first guided tasks done.

## Learning outcomes

After this session you can:

- explain the difference between chat use of an LLM and an agent;
- describe the agent loop: the model asks for a tool call, the harness runs
  it, and the result goes back to the model;
- name the parts of an agent system: model, harness, tools, environment, and
  user;
- predict common behaviours from the context window: what the agent can see,
  what it forgets, and why it is inconsistent.

## What we will cover

- **What agents do today, and what goes wrong.** A short sorting exercise:
  which research tasks would you let an agent do on its own, which only after
  asking you, and which never?
- **From LLM to agent.** Next-token prediction, chat as a function of the
  transcript, reasoning, tool definitions, and tool calls. The harness runs the
  tools and feeds the results back, and that loop is the agent. We read a
  complete agent of about 100 lines and an annotated real transcript.
- **The moving parts.** Environment, observations, actions, and feedback.
  Model versus harness: the same model in a different harness behaves
  differently. A map of agent capabilities, and the two ways to change an
  agent's behaviour: training the model or engineering the harness. As users,
  we work on the harness.
- **Mental models.** The context window is the agent's entire world. It has no
  memory between sessions unless something is written to a file. It sees the
  files it has read, not your screen. Quality drops in long contexts. Agents
  are nondeterministic, strong at some tasks and weak at similar-looking ones,
  and can be confidently wrong or simply agree with you. Tokens cost money and
  time.
- **The tool landscape.** Command-line, IDE, and cloud agents, and the
  permission modes that control what an agent may do without asking.

## Interactive component

About 30 minutes of guided exercises with checkpoints, so you can catch up if
you fall behind.

1. **Orientation.** Ask the agent to explain a small unfamiliar project with
   code, data, and a paper. Watch which tools it calls.
2. **See the loop.** Give it a two-step task: compute a statistic from a CSV
   file, then plot it. Which steps came from the model, and which from tools?
3. **Statelessness.** Start a fresh session and ask about the previous one.
   Then add a notes file and try again.
4. **Catch the error.** A provided analysis contains a planted bug. Does the
   agent find it unprompted? When asked? What did *you* have to check?

We close by introducing the **agent journal**: a one-page weekly log of what
you asked an agent to do, what happened, what you checked, and what went
wrong. It is the material for the final session.

## Before the session

- Have access to an AI assistant **with agent capabilities**, for example
  Claude Code, OpenAI Codex, or Google's Antigravity CLI. Free tiers are often
  too limited for the exercises. See [Resources]({{ '/resources/' | relative_url }}) for links.
- Install it on the laptop you will bring and check that you can start a
  session in a local folder.
- No machine learning background is needed.

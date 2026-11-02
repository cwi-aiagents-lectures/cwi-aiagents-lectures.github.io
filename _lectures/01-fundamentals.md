---
number: 1
title: Fundamentals of AI Agents
subtitle: What happens when you type a request into an agent, and the mental models you need to use one well.
date: 2026-11-03 10:30:00 +0100
room: Euler room
track: Practical
description: >-
  How an agent differs from chat use of an LLM, the agent loop, the parts of
  an agent system, and the mental models that predict how agents behave.
topics:
  - From chat to agents
  - What you can use it for
  - The agent loop
  - Model and harness
  - Mental models
interactive: Getting your agent installed and working, and a take-home task of your own.
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
      note: A complete agent in about 100 lines of Python, walked through in the slides' appendix.
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
correct mental model and with a first task of your own to try at home.

## Learning outcomes

After this session you can:

- explain the difference between chat use of an LLM and an agent.
- describe the agent loop: the model asks for a tool call, the harness runs
  it, and the result goes back to the model.
- name the parts of an agent system: model, harness, tools, environment, and
  user.
- predict common behaviours from the context window: what the agent can see,
  what it forgets, and why it is inconsistent.

## What we will cover

- **What can I use it for?** A short gallery of everyday uses, led by writing
  and research: drafting a paper, literature review, proofs and mathematics,
  reviewing your own paper and drafting the rebuttal, proposal text, slides and
  exercises, data and figures, and code and small tools such as a project web
  page. For each, what the agent does and what *you* still check.
- **What goes wrong.** A short sorting exercise: which research tasks would you
  let an agent do on its own, which only after asking you, and which never?
  There is no oracle: with a robust way to check the result, you can let it
  run.
- **From LLM to agent.** Next-token prediction, chat as a function of the
  transcript and the system prompt, reasoning, what a tool is, tool
  definitions, and tool calls. The harness runs the
  tools and feeds the results back, and that loop is the agent. We read an
  annotated real transcript. A complete agent of about 100 lines is in the
  slides' appendix and the optional readings.
- **The moving parts.** Environment, observations, actions, and feedback, in
  code, papers, data and proofs. Model versus harness: the better equipped the
  harness, the better the same model performs. A map of agent capabilities. You
  are a harness engineer: we cannot retrain the model, but we set up the task,
  the files, the tools and the permissions. How models are trained is the
  topic of Session 4.
- **Mental models.** The context window is the agent's entire world. It has no
  memory between sessions unless something is written to a file. It sees only
  what a tool call brought in, not your screen. Quality drops in long contexts,
  and it can fixate on an earlier idea. Agents are nondeterministic, their
  skills are uneven (a hard task can go well while an easy-looking one fails),
  and they can be confidently wrong or simply agree with you. Tokens cost money
  and time.
- **The tool landscape.** Command-line, IDE, and cloud agents, and the
  permission modes that control what an agent may do without asking,
  including a mode where permission rules and built-in approvals are checked
  first and the remaining, riskier actions go to a second model for review.
  Before you start: how to turn off training on your data.

## Interactive component

About 30 minutes.

1. **Install and log in.** Claude Code or the Codex CLI, on macOS, Linux or
   Windows. If yours already works, help a neighbour.
2. **Safe start.** Choose a mode that asks before acting, and turn off training
   on your data.
3. **Is it working?** A version check, then one question to the agent in an
   empty folder.
4. **Your take-home task.** Choose one: ask the question you have always wanted
   answered, or work through a paper you did not understand. Other options
   include a project web page, a mathematical analysis with a proof, a
   related-work document, or a data analysis. Note what you checked. Session 2
   starts with a few of these.

Four short self-study exercises are in the appendix of the slides.

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

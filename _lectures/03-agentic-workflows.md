---
number: 3
title: Building Effective Agentic Workflows
subtitle: Larger and longer work with agents, and verifying results instead of trusting them.
date: 2026-12-01 10:30:00 +0100
room: Euler room
track: Practical
description: >-
  Decomposing larger tasks, keeping long work coherent, failure modes and
  verification, and agents in research and technical work with integrity.
topics:
  - Decomposition
  - Long interactions
  - Verification
  - Research workflows
  - Academic integrity
interactive: A larger workflow on a research, technical or writing track, with every result verified.
readings:
  core:
    - authors: Liu et al.
      title: "Lost in the Middle: How Language Models Use Long Contexts"
      url: https://arxiv.org/abs/2307.03172
      year: 2023
    - authors: Becker et al. (METR)
      title: Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity
      url: https://arxiv.org/abs/2507.09089
      year: 2025
  optional:
    - authors: Dell'Acqua et al.
      title: Navigating the Jagged Technological Frontier
      url: https://doi.org/10.2139/ssrn.4573321
      year: 2023
      note: Harvard Business School Working Paper 24-013.
    - authors: Anthropic
      title: How We Built Our Multi-Agent Research System
      url: https://www.anthropic.com/research/multi-agent-research-system
      year: 2025
    - authors: Cognition
      title: Don't Build Multi-Agents
      url: https://cognition.com/blog/dont-build-multi-agents
      year: 2025
    - authors: Chroma
      title: "Context Rot: How Increasing Input Tokens Impacts LLM Performance"
      url: https://www.trychroma.com/research/context-rot
      year: 2025
    - authors: Asai et al.
      title: "OpenScholar: Synthesizing Scientific Literature with Retrieval-Augmented LMs"
      url: https://arxiv.org/abs/2411.14199
      year: 2024
materials: []
---

## Overview

This session moves from single tasks to agentic *workflows*: larger research
and technical work that spans many steps, sessions, or agents. The emphasis is
on keeping long work coherent and on verifying results rather than trusting
them. By the end, you should have the practical foundation to use agents
independently and effectively.

## Learning outcomes

After this session you can:

- decompose a larger task and decide which parts to delegate and which to keep.
- choose between a single agent, subagents, and parallel sessions.
- keep long work coherent with a context budget, compaction, progress files,
  and handoffs.
- recognise common failure modes and apply verification strategies.
- use agents in literature work and writing while meeting integrity
  requirements.

## What we will cover

- **Your experiences.** A few participants share what happened in their own
  work since Session 2.
- **Decomposition.** Plan, execute, verify. Common workflow patterns: chaining,
  routing, parallel work, an orchestrator with workers, and an evaluator that
  checks an optimiser. Single agent versus multiple agents, subagents, and
  parallel sessions. What you keep for yourself.
- **Long interactions.** Your context budget, and why quality drops in long
  sessions. Compaction, progress and handoff files, and resuming work across
  days.
- **Verification and failure modes.** Invented citations, tests edited to
  pass, silent changes of scope, "done" when it is not done, and agreeing with
  you when you are wrong. Strategies: write tests and checks first, use an
  independent verifier session, read trajectories and diffs, and make results
  reproducible. *Demos versus evidence:* build a small personal evaluation of
  five tasks from your own work. Measured productivity can differ from how
  productive people feel ([Becker et al., 2025](https://arxiv.org/abs/2507.09089)).
- **Agents in research.** Literature search and deep-research agents, entering
  a new area, organising and comparing papers, checking claims and references,
  and support for writing. Integrity: disclosure, authorship, venue and funder
  policies, and peer-review confidentiality.
- **Agents in technical work.** Coding, debugging, data analysis, and
  automating pipelines.

## Interactive component

A larger hands-on workflow. Choose one track.

- **Research track.** Write a mini literature review on a given narrow topic
  and build a comparison table. Verify every citation: does it exist, and does
  it say what is claimed? List what needed fixing.
- **Technical track.** Start from a messy analysis script and dataset. Add
  checks and tests, refactor, and reproduce a figure. A separate verifier
  session reviews the diff.
- **Writing track.** Start from a section of a LaTeX paper. Revise it with the
  agent under explicit constraints, then verify every citation and every
  changed claim. Finish with a short disclosure note on how the agent was used.

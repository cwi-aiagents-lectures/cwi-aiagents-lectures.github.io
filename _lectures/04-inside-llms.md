---
number: 4
title: "Inside LLMs and Agents: Training, Post-Training, and Safety"
subtitle: How models and agents are built, and how that explains the behaviour you saw in Sessions 1–3.
date: 2026-12-15 10:30:00 +0100
room: L017
track: Technical
description: >-
  Pre-training, supervised fine-tuning, preference learning, and reinforcement
  learning, how agentic models are trained, and the main safety and security
  problems for agents.
topics:
  - Pre-training
  - Post-training
  - Training agents
  - Safety and security
interactive: Explain the behaviour. Connect real agent behaviours to their causes in training or the harness.
readings:
  core:
    - authors: Andrej Karpathy
      title: Deep Dive into LLMs like ChatGPT
      url: https://www.youtube.com/watch?v=7xTGNNLPyMI
      year: 2025
      note: Video.
    - authors: Ouyang et al.
      title: Training Language Models to Follow Instructions with Human Feedback
      url: https://arxiv.org/abs/2203.02155
      year: 2022
      note: The InstructGPT paper.
  optional:
    - authors: DeepSeek-AI
      title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
      url: https://arxiv.org/abs/2501.12948
      year: 2025
    - authors: Shao et al.
      title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
      url: https://arxiv.org/abs/2402.03300
      year: 2024
      note: Introduces GRPO.
    - authors: Lambert et al.
      title: "Tülu 3: Pushing Frontiers in Open Language Model Post-Training"
      url: https://arxiv.org/abs/2411.15124
      year: 2024
    - authors: Pan et al.
      title: Training Software Engineering Agents and Verifiers with SWE-Gym
      url: https://arxiv.org/abs/2412.21139
      year: 2024
    - authors: Amodei et al.
      title: Concrete Problems in AI Safety
      url: https://arxiv.org/abs/1606.06565
      year: 2016
    - authors: MacDiarmid et al.
      title: Natural Emergent Misalignment from Reward Hacking in Production RL
      url: https://arxiv.org/abs/2511.18397
      year: 2025
    - authors: Greenblatt et al.
      title: Alignment Faking in Large Language Models
      url: https://arxiv.org/abs/2412.14093
      year: 2024
    - authors: Debenedetti et al.
      title: "AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents"
      url: https://arxiv.org/abs/2406.13352
      year: 2024
    - authors: Carlini et al.
      title: Extracting Training Data from Large Language Models
      url: https://arxiv.org/abs/2012.07805
      year: 2020
    - authors: Bai et al.
      title: "Constitutional AI: Harmlessness from AI Feedback"
      url: https://arxiv.org/abs/2212.08073
      year: 2022
materials: []
---

## Overview

Sessions 1–3 were about the harness: the context, tools, permissions, and
workflows that you control as a user. This session is about the other lever,
training. It explains at a conceptual level how models and agents are built,
and connects the behaviours you have seen to their causes. It stays
accessible without a machine learning background, and is a starting point for
anyone considering research or more technical work with LLMs and agents.

## Learning outcomes

After this session you can:

- describe pre-training, supervised fine-tuning (SFT), preference learning, and
  reinforcement learning with verifiable rewards.
- explain how agentic models are trained in environments with rewards.
- explain observed behaviours, such as hallucination, sycophancy, edited
  tests, and uneven strengths across tasks, in terms of training.
- name the main safety and security problem areas for agents.
- find entry points for further study.

## What we will cover

- **Pre-training.** Tokens and tokenisation, next-token prediction at scale,
  and what a base model is: a document completer. Why models hallucinate.
- **Post-training.** SFT and chat templates, including how tool calls become
  special tokens (connecting back to Session 1). Preference learning (RLHF,
  DPO). Reinforcement learning with verifiable rewards (GRPO, reasoning
  models).
- **Training agents.** Environments, trajectories, and rewards, for example
  "the tests pass". Why agents are strongest where results can be checked
  automatically, and how reward hacking leads to the test editing seen in
  Session 3.
- **Safety and security.** Specification gaming and reward hacking, and the
  misalignment that can emerge from it. Sycophancy. Prompt injection and agent
  security. Alignment faking and how models are evaluated. Privacy:
  memorisation and extraction of training data. Monitoring and control.
- **Where to go next.** Courses, open training recipes, and research groups
  and reading lists for those who want to go further.

## Interactive component

**Explain the behaviour.** In groups, you get cards describing real agent
behaviours from Sessions 1–3: refusing a harmless request, agreeing with a
wrong claim, editing a test to make it pass, inventing a citation, being
strong in Python but weak in a niche language, following injected text. For
each, decide whether the cause lies in the training pipeline or in the
harness, and propose a mitigation. We also explore a tokenizer and compare
the output of a base model with that of an instruction-tuned model.

## Where to go next

- CMU 11-768 [*AI Agents*](https://www.cmu-agents.com/) (Fried and Neubig), a
  graduate course on building and training agents.
- Tülu 3 (see the readings), an open post-training recipe.
- [Tiktokenizer](https://tiktokenizer.vercel.app/), to see how text is split
  into tokens.

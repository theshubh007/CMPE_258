# 📚 Assignment 5: Customize LLM using Unsloth

## Overview

This repository contains implementations and documentation for **Assignment 5: Customize LLM using Unsloth**. The assignment demonstrates practical applications of fine-tuning, continued pretraining, reward modeling, and exporting models for local inference. Each task is accompanied by a **Colab Notebook** and a **Video Demonstration** explaining the process in detail.

---

## 🎯 Table of Contents

1. [Task A: Model Fine-tuning](#1-task-a-model-fine-tuning)
2. [Task B: Continued Pretraining](#2-task-b-continued-pretraining)
3. [Task C: Chat Templates](#3-task-c-chat-templates)
4. [Task D: Reward Modeling](#4-task-d-reward-modeling)
5. [Task E: Continued Fine-tuning from Custom Checkpoint](#5-task-e-continued-fine-tuning-from-custom-checkpoint)
6. [Task F: Mental Health Chatbot Fine-tuning](#6-task-f-mental-health-chatbot-fine-tuning)
7. [Task G: Export to Ollama and Inference](#7-task-g-export-to-ollama-and-inference)

---
- 🎥▶️  [YouTube Video walkthrough Task A](https://youtu.be/9V6s4rg4mJw)

- 🎥▶️  [YouTube Video walkthrough Task B TO G](https://youtu.be/dqjPvYkBq_Q)
---
## 1. Task A: Model Fine-tuning

Fine-tune any of the following open-weight LLMs for **four unique use cases**. Each use case demonstrates a specific task such as coding, chat, or creative writing. The process includes explaining the input format, dataset used, and the fine-tuning methodology.



### Use Cases:
1. **Llama 3.1 (8B) for Coding Assistance**
   - Task: Code generation and debugging.
   - Features: Fine-tuned on high-quality coding examples.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1qXI8MVEa4oLnTGlCEe630mwOYXSEUo5d?usp=sharing)

2. **Mistral NeMo (12B) for Scientific Q&A**
   - Task: Scientific information retrieval and explanation.
   - Features: Specialized in scientific domain knowledge.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1tGmTHnzMKJ9ooriev1tr2dKQhsxa54dM?usp=sharing)

3. **Gemma 2 (9B) for Creative Writing**
   - Task: Story generation and character development.
   - Features: Enhanced narrative coherence and creative prompt handling.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/16M-elSBS8yvvf_aDSN4g2lS6pyc6p3Gv?usp=sharing) 

4. **Phi-3 (medium) for Educational Content**
   - Task: Simplified explanations and interactive learning material.
   - Features: Custom educational content generation.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1NaiEXmf6eCcyb8qC2oezwaQGmYexILY3?usp=sharing) 

---

## 2. Task B: Continued Pretraining

Use **Unsloth AI** to teach an LLM a new language through continued pretraining.

### Example:
- **Learning Spanish with TinyLlama**
  - Task: Enhance Spanish language capabilities.
  - Features: Integration of Spanish language corpus and evaluation metrics.
  - Resources: [Colab Notebook](https://colab.research.google.com/drive/16CAiE0qB9gezP4joLrMNVo50xacOdGGe?usp=sharing)

---

## 3. Task C: Chat Templates

Implement specialized chat templates for various tasks.

### Templates:
1. **Classification Chat Template**
   - Task: Multi-class and multi-label classification.
   - Features: Confidence scoring and flexible category systems.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1-f2V8DoDV_9bTJqphUfv2smzcy4JGpk2?usp=sharing)

2. **Conversational Chat Template**
   - Task: Natural dialogue and persona customization.
   - Features: Improved context handling and memory management.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1ywPmEfQBSwnPmXre_O0gBD_xYUJcqhX4?usp=sharing)

3. **Extended Context TinyLlama**
   - Task: Extend maximum context size for longer documents.
   - Features: Improved long-range dependency modeling.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1NiR6mTuYOG-2b_3WdOU52IqKWhzKKJNV?usp=sharing)

4. **Multiple Datasets Single Fine-tuning**
   - Task: Fine-tune using multiple diverse datasets.
   - Features: Multi-task learning and cross-domain performance improvements.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1NjzfkYFD-WnRNPNvI9D2rhxJ8FWFf-Cl?usp=sharing)

---

## 4. Task D: Reward Modeling

Implement reward modeling techniques for improved model outputs.

### Approaches:
1. **ORPO (Off-policy Reinforcement from Human Preferences)**
   - Task: Align responses with human preferences.
   - Features: Off-policy learning for efficient training.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1fIliyvNK3YM9WaYdeGZdH471SMFm7EK8?usp=sharing) 

2. **DPO (Direct Preference Optimization)**
   - Task: Optimize based on preference pairs.
   - Features: Simplified training without explicit reward modeling.
   - Resources: [Colab Notebook](https://colab.research.google.com/drive/1IFe-B_xJbMMYD74S0RYMwuiCNvQiQvlK?usp=sharing)

---

## 5. Task E: Continued Fine-tuning from Custom Checkpoint

Fine-tune a model starting from a previously trained custom checkpoint.

- Features: Efficient training with staged improvement.
- Resources: [Colab Notebook](https://colab.research.google.com/drive/1d8pvMPuvV_w9B7G_2xqNwm0sRmKIDOUA?usp=sharing)

---

## 6. Task F: Mental Health Chatbot Fine-tuning

Fine-tune **Phi-3** with Unsloth for mental health support.

- Features: Empathetic response generation and safety guardrails.
- Resources: [Colab Notebook](https://colab.research.google.com/drive/164fmnlmvNsJHeBV55B-4arRztSXMyaJE?usp=sharing)

---

## 7. Task G: Export to Ollama and Inference

Fine-tune a model with Unsloth and export it to **Ollama** for local inference.

- Features: Model optimization for local deployment and performance benchmarking.
- Resources: [Colab Notebook](https://colab.research.google.com/drive/1iYyIW9C11z7lspbMQvn3zYj1WCVCLdfq?usp=sharing)

---
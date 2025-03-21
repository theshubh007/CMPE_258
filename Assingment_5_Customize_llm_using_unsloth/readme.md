# 📚 Assignment 5: Customize LLM using Unsloth

## Overview

This repository contains implementations and documentation for fine-tuning Large Language Models using Unsloth. The assignment demonstrates practical applications of model customization, continued pretraining, and specialized fine-tuning for different use cases.

## 🎯 Table of Contents

1. [Model Fine-tuning](#1-model-fine-tuning)
2. [Continued Pretraining](#2-continued-pretraining)
3. [Chat Templates for Various Tasks](#3-chat-templates-for-various-tasks)
4. [Reward Modeling](#4-reward-modeling)
5. [Continued Fine-tuning from Custom Checkpoint](#5-continued-fine-tuning-from-custom-checkpoint)
6. [Mental Health Chatbot Fine-tuning](#6-mental-health-chatbot-fine-tuning)
7. [Export to Ollama and Inference](#7-export-to-ollama-and-inference)

## 1. Model Fine-tuning

Four unique use cases demonstrating fine-tuning of various open-weights LLM models.

### Use Case 1: Llama 3.1 (8B) for Coding Assistance

Fine-tuned Llama 3.1 to improve code generation and debugging abilities.

#### Key Features
- 🔧 Fine-tuned on high-quality coding examples and explanations
- 📊 Performance evaluation on common programming tasks
- 💻 Code completion and debugging capabilities

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1Qvb_YHi1TX2G3LzXBUfn9Cp48SRhLzDH)

### Use Case 2: Mistral NeMo (12B) for Scientific Q&A

Fine-tuned Mistral NeMo for accurate scientific information retrieval and explanation.

#### Key Features
- 🧪 Specialized in scientific domain knowledge
- 📚 Enhanced capability to explain complex scientific concepts
- 🔍 Improved accuracy in scientific Q&A

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1B8S33VC2k9eX5G0JG7A5XRX9rWH0WrL5)

### Use Case 3: Gemma 2 (9B) for Creative Writing

Fine-tuned Gemma 2 for enhanced creative writing capabilities.

#### Key Features
- 📝 Story generation with improved narrative coherence
- 🎭 Character development and dialogue writing
- 🎨 Creative prompt handling with diverse outputs

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1NbT7WCoPNIJ9cbQJ9P0QER-7nDHMDzl9)

### Use Case 4: Phi-3 (medium) for Educational Content

Fine-tuned Phi-3 medium for generating educational content and explanations.

#### Key Features
- 🎓 Simplified explanations of complex topics
- 📚 Custom educational content generation
- 🧩 Interactive learning material creation

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1PX7FyZ8fH0ZXJQEkl6mhC3h3lX3vPiQQ)

## 2. Continued Pretraining

Using Unsloth AI to teach an LLM a new language through continued pretraining.

### Learning Spanish with TinyLlama

Implementation of continued pretraining to enhance a model's Spanish language capabilities.

#### Key Features
- 🌐 Spanish language corpus integration
- 📈 Progressive improvement in language understanding
- 🔄 Evaluation metrics for language proficiency

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1DFrrSJcmGi1C-jUdARGBXjKLVN2kZoNk)

## 3. Chat Templates for Various Tasks

Implementation of specialized chat templates for different applications.

### Classification Chat Template

A template optimized for classification tasks with structured outputs.

#### Key Features
- 🏷️ Multi-class and multi-label classification capabilities
- 📊 Confidence scoring for classifications
- 🔄 Flexible category system for various domains

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1lJvJcMR3hX4BEUlEVHpkDXJ0jnqJoM6j)

### Conversational Chat Template

Enhanced template for natural dialogue and conversation.

#### Key Features
- 💬 Improved context handling for extended conversations
- 🎭 Persona customization options
- 🔄 Memory management for coherent exchanges

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1Xy1sKI6nCsrQP9SHJkq9qIAVJRsBKqDc)

### Extended Context TinyLlama

Implementation to extend the maximum context size of TinyLlama.

#### Key Features
- 📚 Increased context window for longer documents
- 🔍 Improved long-range dependency modeling
- 📊 Performance evaluation at different context lengths

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1QK8eGD1OHIlEs7XeJ8B1QQx6vE9iGIDJ)

### Multiple Datasets Single Fine-tuning

Fine-tuning using multiple diverse datasets in a single process.

#### Key Features
- 🔄 Multi-task learning capabilities
- 📚 Balanced training across different data sources
- 📊 Cross-domain performance improvements

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1ZGYPfLZV2JtfpF82nXrM9qM83xNr8tKV)

## 4. Reward Modeling

Implementation of reward modeling techniques for improved model outputs.

### ORPO (Off-policy Reinforcement from Human Preferences)

Reward modeling using ORPO approach.

#### Key Features
- 🎯 Human preference alignment
- 📊 Enhanced response quality through feedback
- 🔄 Off-policy learning for efficient training

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1FSlVft7H8NLeRSrjH_oRvh-5X1FqTg6A)

### DPO (Direct Preference Optimization)

Reward modeling using the DPO approach.

#### Key Features
- 🎯 Direct optimization based on preference pairs
- 📈 Simplified training without explicit reward modeling
- 📊 Performance comparison with traditional methods

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1EXw1WJ6YUTbVYZAZpY2XWgmBZTbDL0qo)

## 5. Continued Fine-tuning from Custom Checkpoint

Implementation of fine-tuning from a previously trained custom checkpoint.

#### Key Features
- 🔄 Efficient training by starting from existing weights
- 📈 Progressive improvement through staged training
- 📊 Performance comparison before and after additional fine-tuning

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/15PNv2XVfHj6aSGvkT9YvG5c1LYi-kWGG)

## 6. Mental Health Chatbot Fine-tuning

Fine-tuning Phi-3 with Unsloth for mental health support.

#### Key Features
- 💭 Empathetic response generation
- 🧠 Mental health resource awareness
- 🛡️ Safety guardrails for sensitive topics

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1q7-fUQ3JjJ2YnvFYp4UCmiSZm0r_F4vX)

## 7. Export to Ollama and Inference

Fine-tuning a model with Unsloth and exporting it to Ollama for local inference.

#### Key Features
- 🚀 Model optimization for local deployment
- 💻 Ollama integration for easy inference
- 📊 Performance benchmarking on local hardware

**Resources:**
- 🎥 [Video Demonstration](https://youtu.be/your-video-link)
- 📓 [Colab Notebook](https://colab.research.google.com/drive/1qJV-XQeGEPQxSBq9J9fYfJ9rkjzJdqJi)


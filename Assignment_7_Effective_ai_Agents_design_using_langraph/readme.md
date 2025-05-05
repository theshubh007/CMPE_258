# Assignment 7: Effective AI Agents Design Patterns using LangGraph

## 🌐 Overview

This repository showcases how to design **effective and interpretable AI agents** using **LangGraph** and **CrewAI**. The patterns are inspired by the *Building Effective Agents* series and implemented using modular, event-driven workflows with traceable debugging via **LangSmith Studio**.

---

## 🎯 Objective

The goal of this assignment is to demonstrate practical implementations of key agent design patterns by:

- Utilizing **LangGraph's** directed acyclic graph structure for chaining agent steps
- Integrating with **LangSmith** for end-to-end observability
- Implementing similar logic using **CrewAI's role-based agent orchestration**
- Visualizing execution paths and decision branches
- Demonstrating real-world reliability with retry loops and branching logic

---

## 📁 Included Notebooks

This assignment contains two fully annotated and modular notebooks:

- 📘 `Part_A_LangGraph_Patterns.ipynb`: Implements all agent design patterns using **LangGraph**
  - Sequential Agent Flow
  - Branching Workflow
  - Retry/Loop Pattern
  - Multi-Agent Coordination (simulated)
  - [Google Colab](https://colab.research.google.com/drive/1MxWY1uJLMEfOXFhwtGjPMSdX3q1Yd-9Q?usp=sharing)

- 🤖 `Part_B_crewai_agent_patterns.ipynb`: Mirrors the above patterns using **CrewAI** framework
  - Role assignment
  - Tool integration
  - Task distribution among specialized agents
  - [Google Colab](https://colab.research.google.com/drive/1OCQe-43pos_KAJRO3r1paoKEeugMaK_R?usp=sharing)

Each Colab includes markdown explanations, execution logs, visualizations, and where applicable, LangSmith trace IDs.

---

## 🧠 Agent Design Patterns Demonstrated

- 🔁 **Sequential Workflows** – Agent steps executed in a pipeline
- 🌿 **Branching Agents** – Dynamic execution paths based on input conditions
- ♻️ **Retry/Loop Agents** – Re-execution logic based on output validation
- 👥 **Multi-Agent Collaboration** – Task distribution and coordination among agents

---

## 🛠️ Frameworks & APIs Used

### 🔹 LangGraph

- Modular agent workflow design
- Native support for conditionals, loops, and finish states
- Integrates seamlessly with LangSmith for tracing

📖 [LangGraph Documentation](https://langchain-ai.github.io/langgraph/tutorials/workflows)

### 🔸 CrewAI

- Role-driven agent orchestration
- Easy-to-configure teams and shared memory
- Support for real-world LLM-based assistant behavior

📖 [CrewAI Docs](https://docs.crewai.io/)

---

## 🎥 Walkthrough Video

🎬 [Watch Assignment 7 Demo Walkthrough](https://youtu.be/YOUR_YOUTUBE_VIDEO_LINK)

- Full Colab walkthrough
- Debugging via LangSmith Studio
- Agent execution traces and visualization interpretation

> **Note**: Update this link with your actual YouTube video URL once uploaded.

---

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8+
- Google account (for Colab access)
- OpenAI API key (for LLM access)
- LangSmith account (for Part A tracing)

### Running the Notebooks
1. Open the provided Colab links:
   - [Part A: LangGraph Patterns](https://colab.research.google.com/drive/1MxWY1uJLMEfOXFhwtGjPMSdX3q1Yd-9Q?usp=sharing)
   - [Part B: CrewAI Agent Patterns](https://colab.research.google.com/drive/1OCQe-43pos_KAJRO3r1paoKEeugMaK_R?usp=sharing)
2. Add your API keys in the designated cells
3. Run all cells or follow along step-by-step with explanations

### Local Setup (Optional)
```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
pip install -r requirements.txt

# Run Jupyter locally
jupyter notebook
```

---

## 💡 Implementation Details

### Part A: LangGraph Implementation
- **Sequential Pattern**: Implements a step-by-step research workflow where each node processes and transforms the output of the previous node
- **Branching Pattern**: Demonstrates conditional routing based on task complexity assessment
- **Retry Pattern**: Shows error handling with automatic retries when validation fails
- **Multi-Agent Pattern**: Simulates collaboration between specialized agents (researcher, writer, critic)

### Part B: CrewAI Implementation
- **Agent Roles**: Defines specialized agents with distinct personalities and capabilities
- **Task Assignment**: Configures tasks with clear goals, expected outputs, and priority levels
- **Process Visualization**: Shows how agents interact, delegate, and collaborate
- **Memory Sharing**: Demonstrates how information is passed between agents

### Key Differences Between Frameworks
- LangGraph offers more granular control over execution flow
- CrewAI provides a more intuitive interface for role-based agent design
- LangGraph has native tracing via LangSmith
- CrewAI excels at simulating human-like team dynamics

---

## 📚 References

- [YouTube: Building Effective Agents](https://www.youtube.com/watch?v=aHCDrAbH_go)
- [LangGraph Agent Workflow Docs](https://langchain-ai.github.io/langgraph/tutorials/workflows)
- [LangGraph Short Course (DeepLearning.AI)](https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/)
- [Agent Design Guide - Notion](https://mirror-feeling-d80.notion.site/Workflow-And-Agents-17e808527b1780d792a0d934ce62bee6)

---

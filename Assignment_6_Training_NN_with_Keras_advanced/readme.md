# Assignment 6: Advanced Training of Neural Networks with Keras

## 📌 Overview

This repository presents an in-depth implementation of advanced neural network training techniques using **Keras and TensorFlow**. It is divided into two main parts:

- **Part 1:** Demonstrates a wide variety of **data augmentation** and **generalization techniques** across image, text, video, speech, tabular, and document datasets.
- **Part 2:** Covers **advanced custom deep learning constructs** like custom layers, loss functions, optimizers, schedulers, and training loops for end-to-end control of model behavior.

---

## 📁 Table of Contents

1. [📦 Part 1: Data Augmentation & Generalization Techniques](#part-1-data-augmentation--generalization-techniques)
2. [🧬 Part 2: Advanced Keras Customization & Training](#part-2-advanced-keras-customization--training)
3. [🎥 Video Demonstration](#video-demonstration)
4. [📚 References](#references)

---

## 📦 Part 1: Data Augmentation & Generalization Techniques

### 🔍 Description

This notebook focuses on **regularization, initialization**, and **augmentation** methods to improve model robustness and avoid overfitting.

### 🔧 Key Implementations

- ✅ **L1 & L2 Regularization**
- ✅ **Dropout & EarlyStopping**
- ✅ **Monte Carlo Dropout**
- ✅ **Batch Normalization**
- ✅ **Custom Dropout & Regularizers**
- ✅ **Various Initializations** (He, Glorot, Lecun)
- ✅ **TensorBoard + Keras Callbacks**
- ✅ **Keras Tuner for Hyperparameter Optimization**
- ✅ **Image, Video, Text, Tabular, TimeSeries, Speech, and Document Augmentation**
- ✅ **KerasCV & AugLy Augmentation Libraries**
- ✅ **FastAI Augmentation Demonstration**

📓 [View Colab - Part 1](https://colab.research.google.com/drive/1JgraA-99AUQKzWJ4AvW_IAu88ZzkOlmw?usp=sharing)

---

## 🧬 Part 2: Advanced Keras Customization & Training

### 🔍 Description

This notebook dives deep into **custom Keras constructs** to gain full control over training behavior and model architecture.

### 🔧 Key Implementations

- ⚙️ **Custom Learning Rate Scheduler** (OneCycle, PolynomialDecay)
- 🧪 **Custom Dropout (Alpha, MC Dropout)**
- 🧮 **Custom Normalization (MaxNormDense)**
- 🎯 **Custom Loss Function (HuberLoss)**
- 🧠 **Custom Activation, Initializer, Regularizer, Weight Constraint**
- 📏 **Custom Metric (HuberMetric)**
- 🧱 **Custom Layers**: Exponential, GaussianNoise, LayerNorm
- 🏗️ **Custom Model**: Residual Blocks and Regressor
- 🚀 **Custom Optimizer**: Momentum, RMSProp variants
- 🔄 **Custom Training Loop**: Step-by-step control with `GradientTape`

📓 [View Colab - Part 2](https://colab.research.google.com/drive/1NmXcfsy-r9aqD6zkctmLari9KQ6sO9ZM?usp=sharing)

---

## 🎥 Video Demonstration

🎥 [Watch Full Walkthrough of Part 1](https://youtu.be/SCYHZDNqfjk)

🎥 [Watch Full Walkthrough of Part 2](https://youtu.be/lMTvoXMSueg)

- Code Walkthrough
- Colab Execution
- Concept Explanation for Each Task

---

## 📚 References

- 🔗 [Aurelien Geron’s GitHub Examples](https://github.com/ageron/handson-ml3)
- 🔗 [TensorFlow Docs](https://www.tensorflow.org/)
- 🔗 [KerasCV Library](https://keras.io/keras_cv/)
- 🔗 [AugLy by Meta AI](https://github.com/facebookresearch/AugLy)
- 🔗 [FastAI Docs & FastBook](https://github.com/fastai/fastbook)

---

## 📂 Repo Structure

```plaintext
Assignment_6_Advanced_Keras/
│
├── Part_1_Keras_Data_augmentation.ipynb
├── Part_2_Advanced_Keras_Constructs.ipynb
├── README.md


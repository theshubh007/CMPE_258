# Neural Network Implementation Assignment


## 🔍 Overview

This repository contains detailed implementations of a 3-layer neural network for non-linear regression using multiple frameworks: **NumPy**, **PyTorch**, **TensorFlow**, and **JAX**. The purpose of this assignment is to gain deep understanding of neural network fundamentals and compare different levels of abstraction — from low-level, manual implementations to high-level declarative APIs.

Each model is trained on synthetically generated data using a custom **3-variable non-linear equation**, and evaluated through training curves, prediction plots, and **4D visualizations**. A **video walkthrough** is included for each notebook, showing the code execution and explanation.

---

## 📂 Repository Structure

| Framework   | Approach                      | Notebook Link | Description |
|-------------|-------------------------------|----------------|-------------|
| NumPy       | From Scratch                  | [Colab](https://colab.research.google.com/drive/1aI9k-Bsri5PP1c5QeDSEWicX0Bhb39HP?usp=sharing)     | Manual forward/backprop with chain rule |
| PyTorch     | From Scratch (No nn.Module)   | [Colab](https://colab.research.google.com/drive/1DnP0aoITT7LV4FJydUIt_6JmNNS7kK5x?usp=sharing)     | Custom tensor ops, autograd only |
| PyTorch     | With nn.Module                | [Colab](https://colab.research.google.com/drive/1RILlhezHF7-Xe3DizJ4kbOUeSmig4F6F?usp=sharing)     | Class-based model using PyTorch layers |
| PyTorch     | With Lightning                | [Colab](https://colab.research.google.com/drive/1LzZqP6L0MsXBrW39tKTtECkgspVr624A?usp=sharing)     | PyTorch Lightning for cleaner code structure |
| TensorFlow  | Low-Level (No Keras)          | [Colab](https://colab.research.google.com/drive/1EGIwvRmELeMmKhsXIkm2V7kHtrUa1KLI?usp=sharing)     | Manual tensor ops, `GradientTape`, `einsum` |
| TensorFlow  | Built-in Layers               | [Colab](https://colab.research.google.com/drive/1bXE3XOtPcXDsvENTcg2g2WsS8EypDRJv?usp=sharing)     | Uses `tf.keras.layers`, custom training loop |
| TensorFlow  | Functional API                | [Colab](https://colab.research.google.com/drive/1--9JJktC1pJvirrKnnZBvqKwfNNziLFR?usp=sharing)     | Functional style with Inputs/Outputs |
| 4D Plot of Synthetic Data | High-Level Sequential API     | [Colab](https://colab.research.google.com/drive/1-17qdnhj5iisxePUJ2qrU7C5nf14ZsMt?usp=sharing)     | Cleanest and most abstracted form |


---

## 📊 Problem Setup

- **Task**: Non-linear regression on synthetically generated 3-variable data
- **Target Function Example**:  
  `y = sin(x1) * log(1 + x2^2) + exp(-x3) + noise`
- **Goal**: Learn to fit this function using a 3-layer neural network from multiple frameworks
- **4D Visualization**: Inputs x1, x2, x3 → true vs predicted outputs, with error coloring

---

## 📌 Key Requirements Addressed

- [x] 3-layer neural network architecture
- [x] Non-linear activation functions (e.g., ReLU, tanh)
- [x] Use of `einsum` in TensorFlow instead of matmul
- [x] Manual backpropagation in NumPy
- [x] From-scratch PyTorch (no layers) and module-based PyTorch
- [x] Use of Functional and Sequential APIs in TensorFlow
- [x] JAX version using `jit`, `grad`, and vectorized ops
- [x] **4D plots** using Matplotlib for model performance
- [x] **Video walkthroughs** for all implementations with GitHub directory and explanations

---

## 📽️ Video Walkthrough

A comprehensive explanation and code walkthrough of every model is available in the following video(s):

- [🎥 Full Walkthrough Video](https://youtu.be/fxfMoKUP-Io)


---


## 📦 Dependencies

All notebooks are executable in Google Colab. Core dependencies include:
- `numpy`
- `matplotlib`
- `tensorflow`
- `torch`
- `jax`
- `flax`
- `seaborn`

---


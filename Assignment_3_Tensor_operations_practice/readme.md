
# Assignment 3: Tensor Operations Practice

## Overview
This repository explores foundational tensor operations using both **TensorFlow 2.x** and **PyTorch**, with an emphasis on mastering tensor manipulation, broadcasting, reshaping, matrix multiplication, and advanced operations such as `einsum`. This assignment serves as a practical deep dive into one of the most critical building blocks in deep learning—**tensors**.

The work is divided into two main notebooks:
- TensorFlow operations, including `einsum` demonstrations.
- PyTorch operations, showcasing core tensor manipulations.


---

## 1. Tensor Operations in TensorFlow

### Description
A Colab notebook focused on implementing and visualizing various tensor operations using **TensorFlow 2.0**, including broadcasting, reshaping, dot product, matrix multiplication, and **Einstein summation** (`einsum`).

### Features
- Basic tensor creation and manipulation
- Shape and dimensionality exploration
- Broadcasting rules in depth
- Matrix operations (`matmul`, `tensordot`, etc.)
- Advanced `einsum` demonstrations with visual explanations

### Notebook
📓 [TensorFlow Tensor Operations](https://colab.research.google.com/drive/1f7gCMqpkea5MQAIAa94-g9OwOMwJFK06?usp=sharing)

---

## 2. Tensor Operations in PyTorch

### Description
This notebook mirrors the TensorFlow implementation but uses **PyTorch**, offering comparisons and PyTorch-native syntax to understand how both libraries handle tensors.

### Features
- Tensor initialization, slicing, and reshaping
- PyTorch broadcasting and arithmetic
- Linear algebra operations
- Using `.einsum()` and `torch.einsum` for complex operations
- Tensor visualization and debugging tips

### Notebook
📓 [PyTorch Tensor Operations](https://colab.research.google.com/drive/1E6TPt8ZzBmWnhBavSmzB8je8bOFn36v5?usp=sharing)

---

## 3. Learning Resources

Useful resources referenced or inspired this assignment:

- [TensorFlow Tensor Guide](https://www.tensorflow.org/guide/tensor)
- [PyTorch Tensor Basics](https://pytorch.org/tutorials/beginner/blitz/tensor_tutorial.html)
- [Einsum Video Tutorial](https://www.youtube.com/watch?v=pkVwUVEHmfI)
- [Einops PyTorch Examples](https://einops.rocks/pytorch-examples.html)
- [TensorFlow Coder Examples](https://github.com/google-research/tensorflow-coder)


---

## 4. Dependencies

The notebooks require the following libraries (all available in Colab by default):

- `TensorFlow >= 2.0`
- `PyTorch`
- `NumPy`
- `Matplotlib`

---

Let me know if you'd like to embed performance comparisons, additional visualizations, or turn this into a mini interactive tutorial!
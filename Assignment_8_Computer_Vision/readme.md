# Assignment 8: Advanced Computer Vision Techniques

## 🌐 Overview

This repository contains comprehensive implementations of advanced computer vision techniques across multiple domains. The assignment is structured into four major parts, each focusing on different aspects of modern computer vision approaches including contrastive learning, transfer learning across modalities, zero-shot learning, and various state-of-the-art architectures.

---

## 📑 Table of Contents

1. [Supervised Contrastive Learning](#1-supervised-contrastive-learning)
2. [Transfer Learning Across Modalities](#2-transfer-learning-across-modalities)
3. [Zero-Shot Transfer Learning](#3-zero-shot-transfer-learning)
4. [Image Classification with State-of-the-Art Models](#4-image-classification-with-state-of-the-art-models)

---

## 1. Supervised Contrastive Learning

### 🎯 Objective

Demonstrate and compare supervised contrastive learning loss-based classification with traditional softmax-based approaches.

### 📝 Implementation Details

- Implementation of supervised contrastive loss function
- Comparison with standard softmax cross-entropy loss
- Evaluation on image classification tasks
- Comprehensive visualizations of feature embeddings

### 🔗 Resources

- [Colab Notebook: Supervised Contrastive Learning](https://colab.research.google.com/drive/1LzQarso3f_nrwuT2Nl_D0I9y29yQ6_TW?usp=sharing)

---

## 2. Transfer Learning Across Modalities

### 🎯 Objective

Implement transfer learning across different data modalities (images, video, audio) using both feature extraction and fine-tuning approaches.

### 📝 Implementation Details

#### 🖼️ Image Transfer Learning

- Feature extraction with pre-trained CNN backbones
- Fine-tuning implementation for image classification
- Performance comparison between approaches
- [Colab Notebook: Image Transfer Learning](https://colab.research.google.com/drive/1tQ9UFTz8o7D0GNF1FZk1v0Dh27icVtaN?usp=sharing)

#### 🎬 Video Transfer Learning

- Action recognition using pre-trained video models
- Fine-tuning for custom action categories
- [Colab Notebook: Video Transfer Learning](https://colab.research.google.com/drive/1egIgFaEEaLdcl-UnazX0pG6pSuMphyMt?usp=sharing)

#### 🔊 Audio Transfer Learning

- Audio classification using YAMNet
- Feature extraction and fine-tuning for audio data
- [Colab Notebook: Audio Transfer Learning](https://colab.research.google.com/drive/16cdZRU-_N_7IHLmUgLdtG7ODSvZjZjNY?usp=sharing)

---

## 3. Zero-Shot Transfer Learning

### 🎯 Objective

Demonstrate zero-shot learning capabilities using CLIP and other state-of-the-art models from TF Hub.

### 3.1 Zero-Shot Image Classification with CLIP

OpenAI's CLIP (Contrastive Language-Image Pre-training) demonstrates remarkable zero-shot capabilities by connecting image and text representations in a shared embedding space.

#### Implementation Details

- Setup and deployment of CLIP model architecture
- Creation of text encoders for arbitrary classification categories
- Implementation of zero-shot prediction pipeline without fine-tuning
- Evaluation across multiple image domains with varying prompts
- Analysis of contextual prompt engineering on classification performance

- [Colab Notebook](https://colab.research.google.com/drive/1kt-GT7P_3hlfKktUOuGj1yyRHcBvXBuL?usp=sharing)

### 3.2 Transfer Learning with BiT TFHub(Big Transfer)

BiT represents a state-of-the-art approach to transfer learning that leverages massive pre-training and careful fine-tuning procedures.

#### Implementation Details

- Deployment of pre-trained BiT models from TensorFlow Hub
- Implementation of efficient fine-tuning procedures on custom datasets
- Experimentation with different model scales (BiT-S, BiT-M, BiT-L)
- Comparison of transfer learning performance with varying amounts of training data
- Evaluation on both standard and custom classification tasks
- [Colab Notebook](https://colab.research.google.com/drive/1zls_IhGejN9zfhYhgW4kFiLH6HY_gTvN?usp=sharing)

---

## 4. Image Classification with State-of-the-Art Models

### 🎯 Objective

Implement and evaluate various state-of-the-art models across multiple datasets.

### 📝 Implementation Details
#### 🔬 Advanced State-of-the-Art Architectures

- **MLP-Mixer Implementation**
  - All-MLP architecture for computer vision without convolutions or attention
  - Patch-based representation learning approach
  - Performance benchmarking against CNN counterparts
  - Exploring token-mixing and channel-mixing MLP blocks
  - [Colab Notebook: MLP-Mixer Implementation](https://colab.research.google.com/drive/1QYMKkw4iiIVRZOS0BuQSUG1DVYWRhjm2?usp=sharing)

- **ConvNeXt v2 Architecture**
  - Implementation of the next-generation ConvNet design
  - Global response normalization and other architectural innovations
  - Comparative analysis with traditional CNNs and transformer-based models
  - Fine-tuning for downstream tasks with minimal data
  - [Colab Notebook: ConvNeXt v2 Implementation](https://colab.research.google.com/drive/1k62C8tCp21yKgEk5P4Lb_1fBLRUQzGu8?usp=sharing)


#### 🏥 Medical Imaging Applications

- Task A: X-ray pneumonia classification with ConvNets

  - [Colab Notebook: X-ray Classification](https://colab.research.google.com/drive/1VFL--iuljaGaRAJ7Xj2HjZs9byPv8C8n?usp=sharing)

- Task B: 3D image classication of CT scan
  - [Colab Notebook: 3D Image Classification](https://colab.research.google.com/drive/1lpuQlKwbYzpePVS6G3JjqVYNQBc-gUyF?usp=sharing)

#### 📊 Transfer learning Implementation for Standard Datasets

- MNIST classification using ConvNets

  - [Colab Notebook: MNIST Classification](https://colab.research.google.com/drive/1jhN88eDpBFdm32FTMRFg_8pet08Vh-Ww?usp=sharing)

- Fashion MNIST with transfer learning

  - [Colab Notebook: Fashion MNIST Classification](https://colab.research.google.com/drive/1Y08aCCfbebnYviMWvgDjC13iPUUpqPaq?usp=sharing)

- CIFAR-10 with EfficientNet and BiT
  - [Colab Notebook: CIFAR-10 Classification](https://colab.research.google.com/drive/1MxkO72GwnIGEtM9x7OrMnwjayIe6uBuT?usp=sharing)


### 📚 Advanced Architecture Resources

- [MLP-Mixer Paper: "MLP-Mixer: An all-MLP Architecture for Vision"](https://arxiv.org/abs/2105.01601)
- [ConvNeXt v2 Paper: "ConvNeXt V2: Co-designing and Scaling ConvNets with Masked Autoencoders"](https://arxiv.org/abs/2301.00808)  
- [Keras MLP-Mixer Tutorial](https://keras.io/examples/vision/mlp_image_classification/)
- [ConvNeXt v2 GitHub Repository](https://github.com/facebookresearch/ConvNeXt-V2)
---

## 📝 Conclusion

This repository demonstrates a comprehensive exploration of modern computer vision techniques, from supervised contrastive learning to state-of-the-art architectures and zero-shot learning. Each implementation is accompanied by detailed analysis and visualizations to provide insights into model performance and behavior.

---

## 🎓 Video Walkthrough

🎥 [Watch the Complete Walkthrough](https://youtu.be/ADrqzDJj35o)

---

## 🛠️ Dependencies

- TensorFlow 2.x
- Keras
- TensorFlow Hub
- NumPy
- Matplotlib
- scikit-learn
- OpenCV
- PyTorch (for CLIP implementation)

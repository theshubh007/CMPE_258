# Neural Network Implementation Assignment

## Overview
This repository contains implementations of 3-layer neural networks for non-linear regression using various frameworks and approaches. The project demonstrates mastery of neural network fundamentals by implementing the same core functionality across NumPy, PyTorch, TensorFlow, and JAX, with varying levels of abstraction from scratch implementations to high-level APIs.


## 1. NumPy Implementation
### Description
Implementation of a 3-layer neural network for non-linear regression using only NumPy, with manual backpropagation and gradient propagation.

### Features
* Custom implementation of forward and backward passes
* Manual gradient calculation using chain rule
* Non-linear activation functions
* Custom weight initialization
* Gradient descent optimization

### Artifacts and Metrics
* Training and validation loss curves
* Epoch-by-epoch training visualization
* Final model predictions vs ground truth
* Convergence analysis

### Resources
* [Colab Notebook](your-numpy-colab-link)

## 2. PyTorch Implementations

### PyTorch From Scratch
#### Description
Implementation of a 3-layer neural network for non-linear regression using PyTorch's tensor operations but without built-in layer functionality.

#### Features
* Manual implementation of network layers
* Custom forward and backward passes
* Leveraging PyTorch's autograd for gradient calculation
* Custom weight initialization

#### Resources
* [Colab Notebook](your-pytorch-scratch-colab-link)

### PyTorch with Built-in Modules
#### Description
Implementation of a 3-layer neural network using PyTorch's built-in nn.Module system.

#### Features
* Class-based architecture with nn.Module
* Built-in layer definitions
* Optimizers from torch.optim
* Structured model definition

#### Resources
* [Colab Notebook](your-pytorch-modules-colab-link)

### PyTorch Lightning
#### Description
Implementation of the same neural network using PyTorch Lightning for improved structure and reduced boilerplate.

#### Features
* LightningModule implementation
* Training/validation/test separation
* Built-in logging functionality
* Structured training loops

#### Resources
* [Colab Notebook](your-pytorch-lightning-colab-link)

## 3. TensorFlow Implementations

### TensorFlow From Scratch
#### Description
Implementation of a 3-layer neural network using TensorFlow's low-level operations without high-level APIs.

#### Features
* Manual implementation using TensorFlow operations
* Custom forward and backward passes
* Use of einsum instead of matrix multiplication
* GradientTape for automatic differentiation

#### Resources
* [Colab Notebook](your-tf-scratch-colab-link)

### TensorFlow with Built-in Layers
#### Description
Implementation using TensorFlow's built-in layers but with custom training loops.

#### Features
* tf.keras.layers for network structure
* Custom training implementation
* Non-linear activation functions
* Performance metrics tracking

#### Resources
* [Colab Notebook](your-tf-layers-colab-link)

### TensorFlow Functional API
#### Description
Implementation using TensorFlow's Functional API for model building.

#### Features
* Functional API model definition
* Input and output specifications
* Layer composition
* Built-in training mechanisms

#### Resources
* [Colab Notebook](your-tf-functional-colab-link)

### TensorFlow High-Level API
#### Description
Implementation using TensorFlow's highest-level APIs for model building and training.

#### Features
* Sequential or Model API usage
* Built-in training and evaluation methods
* Callbacks for monitoring
* TensorBoard integration

#### Resources
* [Colab Notebook](your-tf-highlevel-colab-link)

## 4. JAX Implementation
### Description
Implementation of the neural network using JAX for accelerated numerical computing.

### Features
* JAX transformations for gradient computation
* Functional programming approach
* JIT compilation for performance
* NumPy-like API with accelerator support

### Resources
* [Colab Notebook](your-jax-colab-link)

## 5. Video Walkthrough
A comprehensive video walkthrough covering:
* Detailed explanation of each implementation
* Code walkthrough highlighting key sections
* Demonstration of results and performance
* Comparison between different approaches
* Explanation of non-linear regression problem

### Video Resources
* [Complete Code Walkthrough](your-video-link)
* [GitHub Repository Overview](your-repo-overview-video)

## 6. Data Generation and Visualization
### Description
Details on the synthetic data generation process using a 3-variable non-linear equation and visualization techniques.

### Features
* 3-variable non-linear equation implementation
* Synthetic data generation code
* 4D visualization techniques
* Data preprocessing methodology



## Implementation Requirements
All implementations include:
* 3-layer neural network architecture
* Non-linear activation functions
* Appropriate number of hidden layer neurons
* Training loss visualization
* Comparison with ground truth
* Use of einsum (where applicable) instead of matrix multiplication

## Dependencies
* NumPy
* PyTorch
* TensorFlow
* JAX
* Matplotlib
* Seaborn
* Pandas
* Google Colab
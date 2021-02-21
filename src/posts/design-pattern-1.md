---
title: "Introduction to Design Patterns"  
date: "2021-02-14"  
spoiler: "Start of this series where we will review different patterns and how to implement them"  
tags: ["design patterns"]
slug: "introduction-to-design-patterns"
contentType: 'blog-post'
---

!['Patterns'](https://images.unsplash.com/photo-1476445704028-a36e0c798192?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80)
<i><center>_Photo by Ferdinand Stöhr on Unsplash_</center></i>

<br/>

The purpose of this series is to synthesize the main points of each design pattern into short content blocks that we
could later get back to when we have doubs about implementing them.

The big problem I see with people trying to use design patterns, it's the _law of the instrument/hammer_ or better
off, _Maslow's hammer_, as he supposedly said:
> _I suppose it is tempting, if the only tool you have is a hammer, to treat everything as if it were a nail._

Sure, there's much more criticism to it, but it's not the subject of this post to discuss such controversies.

Some people praise them with their lives while others say that they are of little or no avail. Personally, I think they
are really useful, but we have to be wary to not over-implement them; since that could lead us to a codebase that could
become really hard to maintain.

Truth is, when implemented correctly, they can be real _life-changing_ solutions to problems otherwise really hard to
solve. On the other hand, when they are not, a dreadful feeling will run up your spine everytime you bump into that
awful implementation that you ran to put on your code, and a few weeks later you realised all the side effects and
implications of it but have no time to revert.

## Classification

Patterns can be classified by many ways, but I'll focus on what I think is the most common way to be categorized: _by
its purpose_.

- **Creational patterns:** Provide us with ways to create objects and simple structures with the aim to reuse our code,
  usually hiding the creation logic away.
    - Factory method
    - Abstract Factory
    - Builder
    - Prototype
    - Singleton
- **Structural patterns:** Provide us with ways to make objects into more complex structures, usually through
  composition and acquiring new functionalities in the process.
    - Adapter
    - Bridge
    - Composite
    - Decorator
    - Facade
    - Flyweight
    - Proxy
- **Behavioral patterns:** These ones tend to either assign responsibilities or establish some sort of communication
  between objects/components.
    - Chain of responsibility
    - Command
    - Iterator
    - Interpreter
    - Mediator
    - Memento
    - Observer
    - State
    - Strategy
    - Template method
    - Visitor

This are the famous 23 Gang of Four's Design Patterns

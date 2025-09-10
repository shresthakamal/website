---
layout: post
title: LLM News and Articles Weekly Digest - April 24, 2024
date: 2024-04-24 15:09:00
description: Weekly Updates on advancements in LLMs 
categories: nlp llm genai newsletter weeklydigest
disqus_comments: true
related_posts: true
---

<center><img src="/assets/newsletter/april-24/1.gif" width=550px height=400px><br><br><p>Photo by ThursdAI</p></center>

<br>


## Latest News

1. <b><u>Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone</u></b> <br> Phi 3 comprises a range of models, varying in size from 3 billion to 14 billion parameters, all demonstrating outstanding performance on contemporary benchmarks. The 3B model, in particular, asserts superiority over the original ChatGPT model and its weights have been made publicly available. Additionally, a variant with an extended 128k context length is accessible. . [[Source]](https://arxiv.org/abs/2404.14219)

2. <b><u>Meta releases LLama 3 -8B, 70B and later 400B</u></b> <br> 
The model has been trained on a massive 15 trillion tokens! Two modes have been released, one with 70 billion parameters and another with 8 billion parameters, along with instruction fine-tuning. It operates with an 8K context length and is not multi-modal. The 70B model achieves impressive results, scoring 82% on MMLU and 81.7% on HumanEval. It employs a tokenizer with a vocabulary size of 128,000. Unlike the MoE (Mixture of Experts) approach, this model utilizes a dense architecture. [[Announcement]](https://x.com/AIatMeta/status/1780997403979735440), [[Models]](https://llama.meta.com/llama3/?utm_source=twitter&utm_medium=organic_social&utm_content=video&utm_campaign=llama3), [[Try it]](http://meta.ai/), [[Run Locally]](https://twitter.com/LMStudioAI/status/1781087087745274116)


1. <b><u>Bigxtral instruct 0.1</u></b> <br> 
The Instruct model, part of the Apache 2 series, stands as the premier choice, supported by a comparison chart that sparked community interest. Mistral AI's Mixtral 8x22B model leads with exceptional performance and efficiency. Fluent in five languages and equipped with strong math and coding capabilities, it utilizes only 39 billion parameters out of 141 billion, maintaining cost efficiency. With a 64K token context window, it excels in recalling information from large documents. Released under an open-source license, it outperforms competitors on reasoning, knowledge, and language benchmarks, particularly in four languages. Its adaptability is further enhanced by Mistral's new Tokenizer, tailored for tool use with tokens. [[Blog]](https://mistral.ai/news/mixtral-8x22b/), [[Try it]](https://labs.perplexity.ai/)

1. <b><u>Meta’s battle with ChatGPT begins now</u></b><br> Meta’s AI assistant is being put everywhere across Instagram, WhatsApp, and Facebook. Meanwhile, the company’s next major AI model, Llama 3, has arrived. [[News]](https://www.theverge.com/2024/4/18/24133808/meta-ai-assistant-llama-3-chatgpt-openai-rival)

2. <b><u>Mistral seeking funding at $5B valuation</u></b><br> There have been reports of the open source pioneer Mistral seeking several hundred million dollars of funding to train more models. [[Source]](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fwww.reuters.com%2Ftechnology%2Ffrances-mistral-ai-seeks-funding-5-bln-valuation-information-reports-2024-04-17%2F%3Futm_source=tldrai/1/0100018ef15ae4c1-f0b92425-cc00-4f5f-b81f-a63ec4c3af96-000000/lnWI9GLlhmPPognjKZRul29S5D2BgNkTsCefM7EJUrM=349)


6. <b><u>Google's New Technique Gives LLMs Infinite Context</u></b><br> Google researchers have introduced Infini-attention, a technique that enables LLMs to work with text of infinite length while keeping memory and compute requirements constant.
[[Source]](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fventurebeat.com%2Fai%2Fgoogles-new-technique-gives-llms-infinite-context%2F%3Futm_source=tldrai/1/0100018eec371e15-2cdc46e8-de40-4b64-a6d3-1f22e3f40a25-000000/stNQudEaIp1MAPSRbY9MjSyJBQm5DrI8bHQ72rlEprE=349)

<br>

## Articles

1. [Llama 3 is not very censored](https://ollama.com/blog/llama-3-is-not-very-censored)

2. [Stanford HAI Releases 2024 AI Index Report](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Fhai.stanford.edu%2Fresearch%2Fai-index-report%3Futm_source=tldrai/1/0100018eec371e15-2cdc46e8-de40-4b64-a6d3-1f22e3f40a25-000000/5tlrkKt5Y4et05mi-I4zBGwpeM397FZHAJx4HVNJ4rQ=349)

3. [OpenAI and Meta Reportedly Preparing New AI Models Capable of Reasoning](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Ffuturism.com%2Fthe-byte%2Fopenai-meta-new-ai-models-capable-reasoning%3Futm_source=tldrai/1/0100018ee70e427d-a2941473-eacc-4ea9-a8f7-2e6fe3a5348a-000000/Eoo9LAnt9KUUCdVSRF6C0zbbgnDz3Vp9tCSzUtVhssE=348)

4. [A Handy Compendium of Common Terms Used In The Context Of LLMs](https://murali-kashaboina.medium.com/a-handy-compendium-of-common-terms-used-in-the-context-of-llms-part-1-d9f8730a092a)
   
5. [From 7B to 8B Parameters: Understanding Weight Matrix Changes in LLama Transformer Models](https://adithyask.medium.com/from-7b-to-8b-parameters-understanding-weight-matrix-changes-in-llama-transformer-models-31ea7ed5fd88)

6. [Unlocking the Power of Transformers: A Journey through the Evolution of Artificial Intelligence](https://twitter.com/gdb/status/1783234941842518414)

7. [Groq API: Unleashing the Power of Ultra-Low Latency AI Inference](https://medium.com/@mauryaanoop3/groq-api-unleashing-the-power-of-ultra-low-latency-ai-inference-66986fe383f4)


<br>


## Papers and Repositories

1. <b><u>Optimizing In-Context Learning in LLMs</u></b><br>
This paper introduces a new approach to enhancing In-Context Learning (ICL) in large language models like Llama-2 and GPT-J. Its authors present a new optimization method that refines what they call 'state vectors' — compressed representations of the model's knowledge. [[Source]](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldr.tech%2FTVjTt6/1/0100018ef6841024-e9046d0b-d4ac-485a-8886-9aec22808b15-000000/DrHJZXwxkALjAkUDAffbhF-InSTyWseFKlUqk37tIE8=349)

2. <b><u>AI Gateway</u></b><br>
AI Gateway is an interface between apps and hosted large language models. It streamlines API requests to LLM providers using a unified API. AI Gateway is fast, with a tiny footprint, and it can load balance across multiple models, providers, and keys. It has fallbacks to ensure app resiliency and supports plug-in middleware as needed.[[Source]](https://tracking.tldrnewsletter.com/CL0/https:%2F%2Flinks.tldr.tech%2FmBqJiw/1/0100018ef6841024-e9046d0b-d4ac-485a-8886-9aec22808b15-000000/h9H93pSanB81CpobA23JRMfEQLFF5C9vs96RMdJxx4Y=349)

<br>

**Thank you for reading ! **

If you have any suggestions or feedback, please do comment. You can find me on [[Linkedin]](https://www.linkedin.com/in/shresthakamal/).

Find the medium post here: [LLM News and Articles Weekly Digest — April 24, 2024 @ Medium](https://medium.com/@shresthakamal/lm-news-and-articles-weekly-digest-april-24-2024-bd2ebd9372ff)


Do subscribe for future newsletters.

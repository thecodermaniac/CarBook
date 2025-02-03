import { HuggingFaceInference } from "@langchain/community/llms/hf";

export const createHfModel = () =>
  new HuggingFaceInference({
    apiKey: process.env.HF_API_KEY,
    model: "google/flan-t5-xxl",
    temperature: 0.7,
    maxTokens: 128,
    modelKwargs: {
      device: "cuda",  // Force CUDA usage
      torch_dtype: "float16",  // Use mixed precision to reduce VRAM usage
    },
  });

export const createMemory = () => ({
  memoryKey: "chat_history",
  returnMessages: true,
});

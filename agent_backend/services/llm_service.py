from langchain_huggingface import HuggingFaceEndpoint
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferMemory
from config.settings import settings

def create_llm():

    hf_api_token = settings.HF_API_KEY  # Ensure your Hugging Face API key is set in environment variables
    repo_id = settings.HF_MODEL  # Using DialoGPT-small from Hugging Face Hub

    return HuggingFaceEndpoint(
        repo_id=repo_id,
        task="text-generation",
        huggingfacehub_api_token=hf_api_token
    )
    
    return HuggingFacePipeline(pipeline=text_gen_pipeline)



# Initialize the LLM globally
llm = create_llm()

# Dictionary to maintain separate chat histories for each user session
user_memories = {}

prompt_template = PromptTemplate(
    input_variables=["chat_history", "question"],
    template="""
    You are an expert in cars. Only suggest car types such as sedan, SUV, hatchback, coupe, convertible, truck, or van based on the user's question. Do not mention specific car models or brands.

    Chat history:
    {chat_history}

    User: {question}
    AI:
    """
)

def generate_query(user_query,user_id):
    if user_id not in user_memories:
        user_memories[user_id] = ConversationBufferMemory(memory_key="chat_history")
    print("User query:", user_query)
    chain = LLMChain(
        llm=llm,
        prompt=prompt_template,
        memory=user_memories[user_id],
        verbose=True  # Enable debugging
    )
    llm_response = chain.run(question= user_query)
    return llm_response.strip().split("AI:")[-1].strip()

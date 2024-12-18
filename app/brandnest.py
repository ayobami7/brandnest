import os 
# import dotenv
import argparse
import re
from groq import Groq


MAX_INPUT_LENGTH = 32

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input:{user_input}")

    if validate_length (user_input):
        generate_branding_snippet(user_input)
        generate_keywords(user_input) 
    else:
        raise ValueError(
            f"Input length is too long. Must be under {MAX_INPUT_LENGTH}")


def validate_length(prompt) -> bool:
    return len(prompt) <= MAX_INPUT_LENGTH


def generate_branding_snippet(prompt: str) -> str:
    client = Groq(
        api_key = "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"
        # api_key=os.environ.get("GROQ_API_KEY")
        )

    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are a seasoned writer that also as experience in the marketing world. You are tasked with coming up with branding snippets. Generate a branding snippet. Avoid any introductory or header messages, and provide the snippet directly"
            },
            {
                "role": "user",
                "content": f"Generate a branding snippet for {prompt}"
            }
        ],
        model="llama3-8b-8192",
        max_tokens=50,
    )

    branding_text = response.choices[0].message.content

    #Add ... to incomplete sentences
    last_char = branding_text[-1]
    if last_char not in {".","!", "?"}:
        branding_text += "..."

    print(f"Snippet: {branding_text}")
    return branding_text

def generate_keywords(prompt: str) -> list [str]:
    client = Groq(
        api_key = "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"
        # api_key=os.environ.get("GROQ_API_KEY")
        )

    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are a seasoned writer that also as experience in the marketing world. You are tasked with coming up with branding keywords. Provide a list of branding keywords avoiding any introductory or header messages. The response should directly list the keywords without numbering."
            },
            {
                "role": "user",
                "content": f"Generate branding keywords for {prompt}"
            }
        ],
        model="llama3-8b-8192",
        max_tokens=50,
    )

    #extract the required text output
    keywords_text: str = response.choices[0].message.content

    # strip - remove whitespace
    keywords_text = keywords_text.strip()
    keywords_array = re.split(",|\n|-", keywords_text)
    keywords_array = [k.lower().strip() for k in keywords_array]
    keywords_array = [k for k in keywords_array if len(k) > 0]

    print(f"Keywords: {keywords_array}")
    return keywords_array

if __name__ == "__main__":
    main()
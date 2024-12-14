# Branding Snippets Generator

## Overview
This project is a **Branding Snippets Generator**, designed to create branding snippets and keywords for given user inputs. The backend is built using **Python** and leverages **Groq** for AI-based completions. The frontend will be implemented using **TypeScript**, **Next.js**, and **React**.

---

## Features

1. **Input Validation**:
   - Ensures the input length does not exceed a predefined limit (32 characters).

2. **Generate Branding Snippets**:
   - Uses Groq’s API to generate concise, engaging branding snippets for user inputs.

3. **Generate Keywords**:
   - Extracts and processes branding keywords for user inputs using Groq.

4. **Frontend Integration**:
   - A user-friendly frontend will be created with Next.js and React for seamless interaction with the backend.

---

## Technology Stack

### Backend
- **Python**: Core programming language.
- **Groq**: AI-powered text generation API.
- **FastAPI**: REST API framework for integration with the frontend.

### Frontend 
- **TypeScript**: Type-safe JavaScript.
- **Next.js**: React framework for server-rendered pages and API routes.
- **React**: Frontend library for building the user interface.

---

## Getting Started

### Prerequisites
1. Python 3.8+
2. Groq API key
3.  Node.js and npm/yarn for the frontend

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Set up a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Set your Groq API key:
   - Add your Groq API key directly in the script or as an environment variable:
     ```bash
     export GROQ_API_KEY=<your-groq-api-key>
     ```

5. Run the application:
   ```bash
   python app.py --input "Your branding idea here"
   ```

---

## Usage

### CLI Mode
1. Provide your input through the command line:
   ```bash
   python app.py --input "Your branding input"
   ```

2. Outputs:
   - **Branding Snippet**: A concise, engaging branding message.
   - **Keywords**: Processed and extracted branding keywords.

### Backend API 
- FastAPI endpoints will expose functionality to be consumed by the frontend.

### Frontend
- User-friendly web interface for generating branding snippets and keywords.

---

## Code Overview

### Main Functions

1. `validate_length(prompt: str) -> bool`:
   - Validates if the input is within the allowed character limit.

2. `generate_branding_snippet(prompt: str) -> str`:
   - Generates branding snippets using the Groq API.

3. `generate_keywords(prompt: str) -> list[str]`:
   - Extracts and processes branding keywords using the Groq API.

4. `main()`:
   - Parses CLI arguments and orchestrates the generation process.

---

## Enhancements

1. **Frontend Implementation**:
   - Build a Next.js and React-based interface for users to input data and view results.

2. **RESTful API**:
   - Use FastAPI to expose endpoints for generating branding snippets and keywords.

3. **Environment Variable Management**:
   - Use `.env` files and `dotenv` for secure API key management.

4. **Advanced Input Validation**:
   - Add regex-based or AI-enhanced input validation to improve input quality.

5. **Docker Support**:
   - Containerize the application for easy deployment.

---

## Dependencies

### Python Packages
- `groq`: For AI text generation.
- `argparse`: For parsing command-line arguments.
- `re`: For keyword processing.
- `fastapi`: For REST API implementation.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.



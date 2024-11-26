const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field Course Name, Description, Along with Chapter Name, about, Duration:\nCategory: 'Programming', Topic: Python, Level:Basic, Duration:1 hours, NoOf.\nChapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"This beginner-friendly course provides a foundational understanding of Python programming.  You'll learn the basics of syntax, data types, control flow, and functions.  No prior programming experience is required.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"numberOfChapters\": 5,\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting up your Python Environment\",\n      \"about\": \"This chapter covers installing Python, setting up your IDE (or text editor), and running your first Python program. We'll explore different IDE options and discuss best practices for setting up your development environment.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"chapterName\": \"Basic Syntax and Data Types\",\n      \"about\": \"This chapter introduces fundamental Python syntax, including variables, operators, and basic data types like integers, floats, strings, and booleans.  You'll learn how to work with these data types and perform basic operations.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Conditional Statements and Loops\",\n      \"about\": \"This chapter covers control flow statements, including `if`, `elif`, and `else` statements for conditional execution, and `for` and `while` loops for iterative execution.  You'll learn how to write programs that make decisions and repeat actions.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapterName\": \"Functions and Modules\",\n      \"about\": \"This chapter introduces the concept of functions for code reusability and organization. You'll learn how to define and call functions, pass arguments, and return values.  We'll also explore using pre-built modules to extend Python's functionality.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Working with Lists and Dictionaries\",\n      \"about\": \"This chapter introduces two fundamental Python data structures: lists (ordered collections) and dictionaries (key-value pairs). You'll learn how to create, manipulate, and iterate over these data structures.\",\n      \"duration\": \"10 minutes\"\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  
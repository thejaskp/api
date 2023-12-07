def point0():
    return "success"

def point(prompt):

    # Use an if statement to check the user input
    if prompt == "Hello":
        reply  = "Hello there! How are you?"
    elif prompt == "Goodbye":
        reply  = "Goodbye! Have a great day!"
    else:
        reply  = "I don't recognize that input. Try again."
    return reply



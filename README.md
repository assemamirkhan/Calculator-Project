Midtearm Project Documentation:
                                      Title:  Calculator
 Made by: Temirhan Sanyia and Asem Amirkhan
 Teacher: Shoyinbek Temirlan
 Project Description
 This is a simple calculator project that provides basic arithmetic operations. The 
interface includes a display input field for showing results and buttons for entering 
numbers, operators, and executing actions.
 Where we worked: 
Visual Code Studio
 Files
                                                          HTML Code:
 Operators and Actions:
 Numbers:
 Decimal Point:
 We used <div> element in HTML as a container for group together other HTML 
elements.
 HTML file: Creates the structure of the calculator.
 CSS file: Styles the appearance of the calculator.
 JavaScript file: Adds functionality to the buttons.
 "AC": Clears all input.
 "%": Performs modulo division.
 "/": Division operator.
 "DEL": Deletes the last character.
 "+", "-", "*", "=": Arithmetic operations.
 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 00: Buttons for entering numbers.
 ".": Used for entering decimal numbers.
JavaScript Integration
                                       CSS Styling
 To style the calculator:
                           JavaScript Functionality
 The server.js file handles the calculator's logic:
 Functions
 Example Workflow
 <script src="server.js"></script>: Links the external JavaScript file that adds 
button functionality.
 Used global styles (*) to reset default styles.
 Style the calculator container (.calculator) for the frame and background.
 Style the input field (input) for text appearance.
 Style the buttons (button) to add shadows, rounded corners, and hover effects.
 Processes button clicks.
 Evaluates expressions using the eval() function.
 Handles errors, clears input, and deletes characters.
 1. Button Handling
 Checks the value of the button (= for evaluation, AC for clearing, etc.).
 Performs the corresponding operation:
 Clears the input field.
 Deletes the last character.
 Evaluates the expression.
 Appends the button's value to the input.
 2. Error Handling
 If the expression contains a syntax error, displays "Error" in the input field.
 1. The user enters an expression via buttons (e.g., 12 + 5 * 3).
 2. Presses the = button to get the result (27).
 3. Can use DEL to remove characters or AC to clear the entire input

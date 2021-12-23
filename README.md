# <Random Password Generator>

## Description
This is a simple password generator that collects inputs from the user regarding criteria they'd like applied to their password, such as password length and whether or not they'd like to include special symbols. Coming up with semi-safe passwords is now as simple as a couple clicks of a button! Gone are the days where one must frustratingly repeat the password-creating process once they realize the password they created doesn't have enough capital letters. The text generated can be copied directly from the browser and applied wherever needed. This project taught me a lot about how JS functions work and how I can harness user inputs for generating content. 

## Installation
The site for the password generator is live at:
[https://shnala.github.io/random-password-generator/]

The repository for this site is linked here:
[https://github.com/shnala/random-password-generator]

## Usage
The generator works via a series of prompts for the user which allow them to specify what criteria they'd like to apply to their password, giving them some control over the "randomness" element. They will be told to specify a length for the password between 8 and 128 characters (the generator will not create a password if an inappropriate value is input). They will then recieve a short series of confirm or exit boxes which determine if their password will include such elements as upper and lowercase letters, numbers, and special symbols (if none of these criteria are accepted, a password will not be generated). The generator will then pool all of their selected criteria and draw from it a random string which appears directly on the page. It can then be copied and pasted wherever needed. The generator can be used repeatedly.

Screenshots of the generator in action:
![Prompt for length](/assets/generatorprompt1.PNG?raw=true "Optional Title")
![Prompt for uppercase](/assets/generatorprompt2.PNG?raw=true "Optional Title")
![Final product](/assets/generatorprompt3.PNG)

Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    ```md
    ![alt text](assets/images/screenshot.png)
    ```
## Credits
This README.md was created with reference to the following site: [https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide]

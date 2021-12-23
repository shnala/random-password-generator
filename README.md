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

## Credits
This README.md was created with reference to the following site: [https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide]

## License
MIT License

Copyright (c) [2021] [Shawn Analla]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
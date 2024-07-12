# Multi-Step Form with Validation and Local Storage

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Usage](#usage)
- [Components](#components)
  - [PersonalInfo.js](#personalinfojs)
  - [AddressInfo.js](#addressinfojs)
  - [Confirmation.js](#confirmationjs)
  - [StepNavigation.js](#stepnavigationjs)
  - [FormStepper.js](#formstepperjs)
- [Styles](#styles)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview
This project implements a responsive multi-step form using React.js. The form consists of three steps:
1. Personal Information (Name, Email, Phone)
2. Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
3. Confirmation (Review all entered data)

The form includes features such as data validation, error handling, navigation controls, and local storage for persisting data.

## Features
- **Multi-Step Navigation**: Use tabbed navigation to switch between steps. The back button is disabled on the first step, and the next button is replaced with a submit button on the last step.
- **Data Validation**: Ensure all fields are filled before allowing navigation to the next step. Display error messages and highlight fields with errors.
- **Local Storage**: Persist entered data to local storage when navigating between steps. Retrieve and pre-fill form fields if the user revisits the form.
- **Responsive Design**: Ensure the form works well on desktop, tablet, and mobile screens.


## Project Structure

├── components/
│ ├── PersonalInfo.js
│ ├── AddressInfo.js
│ ├── Confirmation.js
│ ├── StepNavigation.js
│ └── FormStepper.js
├── styles/
│ └── form.css
├── App.js
└── index.js


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Usage
1. Fill out the form fields in each step.
2. Navigate between steps using the Next and Back buttons.
3. Review the entered data in the Confirmation step and submit the form.

## Components
**PersonalInfo.js**
Handles the personal information fields (Name, Email, Phone) and their validation.

**AddressInfo.js**
Manages the address information fields (Address Line 1, Address Line 2, City, State, Zip Code) and their validation.

**Confirmation.js**
Displays the entered data for review and includes a submit button to finalize the form submission.

**StepNavigation.js**
Shows the step indicators at the top of the form, indicating the current step and progress.

**FormStepper.js**
Controls the state and logic for the multi-step form, including validation, navigation, and local storage.


## Contributing
Create a new branch (git checkout -b `shubham`).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin `shubham`).

## License
This project is licensed under the [MIT License](LICENSE).

## GitHub
Connect with me on GitHub: [shubham sharma](https://github.com/ShubhamSharma-123)
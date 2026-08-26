Markdown

# Habit Hacker CLI

A lightweight, globally executable Node.js command-line interface for tracking habits directly from the terminal.

## Features

- Modular command routing using ES6 modules.
- Input parsing and validation powered by `yargs`.
- Global execution via `npm link`.

## Installation

1. Clone the repository down to your local machine:
   ```bash
   git clone [https://github.com/Ufidtech/habit-hacker.git](https://github.com/Ufidtech/habit-hacker.git)
   Navigate into the project directory:
   ```

Bash
cd habit-hacker
Install the dependencies:

Bash
npm install
Link the command globally:

Bash
npm link
Usage
Once linked, you can run the CLI from any directory on your computer using the habit command.

Add a new habit:

Bash
habit add <habit_name>

# Example: habit add reading

List all habits:

Bash
habit list

Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 🗺️ Roadmap & Upcoming Features

This CLI is currently in active development. The routing and parsing architecture is fully implemented. The next release will introduce local data persistence.

- [x] Configure modular command routing (Yargs).
- [x] Setup global executable linking (`npm link`).
- [ ] Implement non-blocking File I/O (`fs` module) to save and load habit data locally.
- [ ] Add `remove` and `complete` commands.

License
This project is open-source and available under the MIT License.

### 2. Add the MIT License File

The MIT License is the industry standard for open-source Node.js projects. It essentially says, "Anyone can use this code for free, just don't sue me if it breaks."

- Create a new file in your project folder and name it exactly `LICENSE` (no extension).
- Paste the following text into it, changing the year and name:

```text
MIT License

Copyright (c) 2026 Ibrahim Danjuma
```

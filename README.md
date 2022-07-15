# Take Home Assignment

## General guidelines

- Do not spend more than 1 - 1.5 hour on the assignment.
- It is ok to use any open source projects to build the solution.
- Focus on writing clean code, good programming interface design, extensibility, etc.

## Functional Requirements

Create a node project that does the following:

- Takes a CSV file destination as an input. The input can be a URL or file on machine.
- Allows the consumer to pass a transformer function that will run for each row of the CSV.

Optional Goals:

- Add ability to run a hook before the file is read.
- Add ability to run a hook after the file is processed.
- Capture the time it takes for the file to get processed.

## Submission guidelines

- Where to build?
  - Create a project on stackblitz.com and share the link with us.
  - Create a GH repo and share the link with us.
- Document the following:
  - How to run the project?
  - Pros and Cons (if any) of the chosen approach.

# How to run the project

- Install dependencies with `npm ci`
- Run demo with `npm start`

# Pros and Cons of the solution

- The method assumes that the csv has headers. It can be improved by adding a boolean header parameter.
- The method does not transform the csv, it only provides hooks to print the data.
- The method does not validate if the url or path returns a csv file.
- The onRead callback traverses each cell, we assume that all cells have the same type. It is better to create a more general function that traverses all rows and not cells.
- beforeRead and afterRead callbacks, can have better options, such as csv results, elapsed time, etc.

# Dependencies

- `csv` - Makes csv stream manipulation easy with its parser.
- `got` - This library is used to get csv streams from a url. In this way, the csv is obtained either from a path or from a url.
- `eslint` - For linting and formatting files on save

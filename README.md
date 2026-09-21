# SAS Progress Console

## Overview

**SAS Progress Console** is a JavaScript application that runs in the console using Node.js. It allows you to manage fictional learners and their daily results, calculate their progress, and display an educational dashboard.

## Project Structure

```text
SAS-PROJET-FINALE/

├── README.md
├── data.js
├── function.js
├── main.js
├── package.json
├── package-lock.json
└── .gitignore
```

* `data.js`: learner data.
* `function.js`: main application functions.
* `main.js`: main menu and user interaction.
* `package.json`: project configuration.

## Data Structure

```js
{
  id: 1,
  nom: "Sara Dev",
  ville: "Nador",
  resultats: [
    {
      jour: 1,
      exercicesTermines: 18,
      totalExercices: 20,
      challengeTermine: true
    }
  ]
}
```

A result contains the day number (1 to 7), the number of completed exercises, the total number of proposed exercises, and a boolean indicating whether the challenge was completed.

## Features

* Display the dashboard
* Display the list of learners
* Add a learner without allowing duplicate IDs
* View a learner by ID
* Add or modify a daily result
* Search for a learner by ID or name
* Filter learners by level
* Sort learners by descending progress
* Sort learners alphabetically

## Progress Calculation

```text
Progress = (total completed exercises / total proposed exercises) × 100
```

If the total number of proposed exercises is `0`, the progress remains at `0` to avoid division by zero.

| Progress             | Level             |
| -------------------- | ----------------- |
| 80% or more          | Solid             |
| 50% to less than 80% | In Progress       |
| Less than 50%        | Needs Improvement |

The program also calculates the number of completed challenges and the number of reported days.

## Missing Data

A day that is missing from the `resultats` array is considered a **day with no data**.

A day that exists with `challengeTermine: false` corresponds to an **incomplete challenge**.

These two situations are distinguished in the dashboard.

## Data Validation

The program checks that the day is between 1 and 7, that the exercise numbers are valid, that completed exercises do not exceed the total number of proposed exercises, and that `challengeTermine` is a boolean.

It also prevents adding two learners with the same ID.

When a result already exists for a specific day, it is replaced instead of being duplicated.

## Dashboard

The dashboard displays:

* The total number of learners
* The group's average progress
* The number of **Solid**, **In Progress**, and **Needs Improvement** profiles
* Learner progress
* Days with no results
* Incomplete challenges

The group average is calculated based on the individual progress of each learner.

## Test Scenarios

1. Add a valid learner and verify that they can be found.
2. Try to use an ID that is already in use and verify that the addition is rejected.
3. Add and then modify the result for the same day and verify that it is replaced.
4. Test a day outside the range of 1 to 7 or too many completed exercises and verify that the result is rejected.
5. Search for a learner by ID or by all or part of their name.
6. Verify the calculation of progress, completed challenges, and reported days.

## Technologies Used

* JavaScript
* Node.js
* prompt-sync

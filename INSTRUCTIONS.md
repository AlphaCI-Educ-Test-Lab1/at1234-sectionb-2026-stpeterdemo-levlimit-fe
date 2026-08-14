# Calculator

Four arithmetic operations, one of which has to refuse an impossible request. Dividing by zero is the point of the exercise: it is the first time you write a function that reports a problem rather than returning an answer, and the first time a test asserts that code THROWS.

## What you are given

Your code goes in `src/`. Every function listed below is
already there with the right name and the right signature, and every one of
them throws "not implemented" until you replace that line with real code.
None of the exercise is written for you.

Their tests are in your repository too, marked PENDING. They are a task
list: implement a function, remove the pending marker above its test, and it
starts running.

One test does already pass — a smoke test that only proves your project
builds and the pipeline runs. It is not part of the exercise, and it is the
reason your first push is green before you have written anything.

## What to build

1. **`add`** — Return the sum of the two numbers.
2. **`subtract`** — Return the first number minus the second. Order matters: subtract(2, 5) is -3.
3. **`multiply`** — Return the product. Anything multiplied by zero is zero.
4. **`divide`** — Return the first number divided by the second. If the second is zero, THROW rather than returning anything. There is no correct number to return, and returning zero or infinity hides the mistake from whoever called you.

## Running the tests

```
npm test
```

Run this before every push. The pipeline runs the same tests on the same
code, so anything failing here will fail there — and finding it locally
costs you seconds instead of minutes.

## How this is marked

Pushing runs seven checks on your code. Four of them carry marks:

| Stage | What it asks |
|---|---|
| ② Lint | Is your code styled consistently? |
| ③ Code Quality | Is it well built — not too repetitive, not too tangled? |
| ④ Public Tests | Do the tests in your repository pass, and how much of your code do they run? |
| ⑤ Hidden Tests | Do your teacher's tests pass? You cannot read these. |

The hidden tests are the reason to solve the PROBLEM rather than the visible
tests. They cover the same functions, including edge cases the visible tests
do not — an empty input, a zero, a value at a boundary. Read the task
descriptions above carefully; the edge cases are named in them.

Your mark is not shown in the pipeline. Your teacher releases marks for the
class once they have reviewed the runs.

## Worth knowing

- The error message for dividing by zero should say what went wrong. "Error" helps nobody reading a stack trace at midnight.
- Negative numbers are worth testing on every operation, not just subtraction.

## If you get stuck

Read the failing test first — it names the behaviour it expected. Then read
the task description above for that function. If both make sense and the
code still does not, that is the right moment to ask your teacher.

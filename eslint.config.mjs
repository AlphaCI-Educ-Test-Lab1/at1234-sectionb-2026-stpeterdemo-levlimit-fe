import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/', 'coverage/', '.next/', 'out/', 'node_modules/'] },
  ...tseslint.configs.recommended,
  {
    rules: {
      // An unused PARAMETER is not a finding on a starter.
      //
      // Every exercise function ships as a stub whose body throws, so its
      // parameters are unused by construction: fizzBuzz(n) never reads n
      // until the student writes it. The recommended config flags exactly
      // that, so `eslint src` exited 1 on a repository nobody had opened and
      // stage 02 scored the style half zero for code the generator wrote.
      //
      // Renaming them _n is the usual advice and is wrong here: the brief and
      // the tests name these parameters, so a student reading fizzBuzz(_n)
      // against a task list that says n has been handed a puzzle rather than
      // an exercise.
      //
      // Unused VARIABLES and IMPORTS still fail. That is the half worth
      // teaching, and the half a student actually causes.
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    },
  },
);

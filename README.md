# TDD Demo

This is a simple application that illustrates the concept of Test Driven Development.

# Test Driven Development (TDD)

Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

# Test Driven Development Cycles

## RED

The adding of a new feature begins by writing a test that passes if and only if the feature's specifications are met. The developer can discover these specifications by asking about use cases and user stories. A key benefit of test-driven development is that it makes the developer focus on requirements before writing code. This is in contrast with the usual practice, where unit tests are only written after code.

Run the tests, you should see them fail since there is no implementation created for the feature/test case. This is known as the RED stage.

## GREEN

Write the simplest code that passes the new test. Inelegant or hard code is acceptable, as long as it passes the test. No code should be added beyond the tested functionality.

The tests should now pass. This is known as the GREEN stage.

## Refactor

Refactor as needed, using tests after each refactor to ensure that functionality is preserved.

Code is refactored for readability and maintainability. In particular, hard-coded test data should be removed. Running the test suite after each refactor helps ensure that no existing functionality is broken.

### Examples of refactoring:

- Moving code to where it most logically belongs
- Removing duplicate code
- Making names self-documenting
- Splitting methods into smaller pieces
- Re-arranging inheritance hierarchies

This is known as the YELLOW stage.

## REPEAT

The cycle above is repeated for each new piece of functionality. Tests should be small and incremental, and commits made often. That way, if new code fails some tests, the programmer can simply undo or revert rather than debug excessively.

# About the demo app

This app consumes the third party API [Dummy JSON](https://dummyjson.com/) to display a list of products.

It uses [Taildwind CSS](https://tailwindcss.com/) for quick styling.

For mocking, [Mock Service Worker](https://mswjs.io/) will be used as this is the most practical/standard way of mocking http requests for testing purposes. However, alternatives will be provided, like mocking `fetch` itself, for example.

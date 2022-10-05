# Best practices for contributing to this project

## Git Hygeine

In a personal project, you can just do whatever you want, because you’re keeping track of everything mostly in your head and the review process is less important. On the other hand, working on a project with a lot of contributors means that we need to introduce some additional processes in order to keep the project from getting unwieldy.

- **Try to keep PRs “small” (< 1000 lines)**
  - There are some exceptions, like updating a yarn.lock or other generated code.
  - The idea is that review code is time consuming, and you want the PR to be digestible.
- **Write descriptive commit messages**
  - This makes git management a lot easier. You might need to find a change in the future, and having a good description helps a lot for reasoning about the author’s intent.
- **Try to keep PRs “on theme”**
  - If you have a PR that adds, e.g. a new page to the app. It’s probably not a good idea to also edit completely unrelated file that is not contextually tied to the main work of the PR.
  - Note: This is a best judgement thing. Sometimes small improvements are welcome. Think about the amount of context that a person reviewing the code would need in order to sign off on it.

### **Benefits!**

- Reduce cognitive load for reviewers
- Finer-grained control over pull requests
- Easier to track down changes in the future
- More green squares on your github timeline!

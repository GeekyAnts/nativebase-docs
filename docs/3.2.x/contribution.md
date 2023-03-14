---
id: contribution
title: Contributing to NativeBase
---

Thanks for showing an interest in contributing to NativeBase. We are excited about our collaboration. The following is a set of guidelines that will make the journey memorable. Please spend several minutes reading these guidelines before you create an issue or pull request.

### Code of Conduct

We have adopted a [Code of conduct](https://github.com/GeekyAnts/NativeBase/blob/master/CODE_OF_CONDUCT.md) that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

### Open Development

All work on NativeBase happens directly on [GitHub](https://github.com/GeekyAnts/nativebase). Both core team members and external contributors send pull requests which go through the same review process.

### Branch Organization

According to our [release schedule](https://github.com/GeekyAnts/NativeBase/releases), we maintain `canary` branch for all the external PR's which is like a development branch with latest changes. If you send a pull request, please do it against the this `canary` branch. Once a release candidate is ready, `canary` branch will be released as a rc release package and once a stable release test is done it will be released to `native-base` package.

![Screenshot 2022-02-07 at 1 27 46 PM](https://user-images.githubusercontent.com/62810976/161559404-c2e9064c-ae62-4395-92d9-9ddba2781d7a.png)

### Bugs

We are using [GitHub Issues](https://github.com/GeekyAnts/NativeBase/issues) for bug tracking. The best way to get your bug fixed is by using our [issue helper](https://github.com/GeekyAnts/NativeBase/issues/new?assignees=&labels=v3%2Cbug%2Ctriage&template=bug_report.yml) and providing reproduction steps with this [template.](https://snack.expo.dev/@native-base/nativebase-starter-snack)

Before you report a bug, please make sure you've searched existing issues, and read our [FAQ.](https://docs.nativebase.io/faq)

### Your First Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take over it but you should still leave a comment.

### Sending a PR

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

- Fork the repository and create your branch from the `canary` branch.
- If you are fixing a bug, follow the naming convention and name your branch `fix/<issue-number>`.
- If you are adding a new feature, follow the naming convention and name your branch `feat/<feature-name>`.
- If you've fixed a bug or added code that should be tested, add tests!
- Once your test passes, commit your changes and submit a pull request to the `canary` branch.
- If you've fixed a bug, please provide a link to the issue so other people can follow up.
- If you've added a new feature, please give a brief explanation what the feature is and why it's needed.

<br />

### Development Workflow

After cloning NativeBase, you can start working on your PRs by running the following commands:

- Run `yarn` in the repository root.
- Run `cd example && yarn` in the repository root.
- Run `yarn example start` in the repository root to run the example app.
- Now you can start making changes/fixes in src directory and check the changes output in the example app.

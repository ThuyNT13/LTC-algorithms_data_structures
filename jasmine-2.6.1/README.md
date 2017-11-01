# Jasmine framework for Testing

Documentation [here](https://jasmine.github.io/pages/getting_started.html) but also a good quick start guide to Jasmine.

List of [Matchers](https://github.com/JamieMason/Jasmine-Matchers )

A few tutorials:

- [Jasmine – JavaScript Unit Testing Tutorial with Examples](http://howtodoinjava.com/scripting/javascript/jasmine-javascript-unit-testing-tutorial/) is a nice overview of how to start using Jasmine and mentions how to disable certain specs.
- [Testing Your JavaScript with Jasmine](https://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229) more examples and includes a sample test for throwing an exception.
- [Using Jasmine for JavaScript Testing ](http://blog.codeship.com/jasmine-testing-javascript/) short video tutorial
- [Unit Testing Best Practices in AngularJS](http://andyshora.com/unit-testing-best-practices-angularjs.html) has nice samples on _unit_ and _integration_ testing as well as discusses when to use them.

[Latest Jasmine framework](https://github.com/jasmine/jasmine/releases)

## Installation of Jasmine 2.6.1 and directories

In main directory, create sub-directories *spec* and *src*.

```bash
mkdir spec src
```

Clone this repo:

```bash
git clone https://github.com/ThuyNT13/jasmine-2.6.1.git
```

Move *SpecTestRunner.html*, *SpecTest.js* and *SpecTestSpec.js*:

```bash
mv jasmine-2.6.1/SpecTest.js src/
```

```bash
mv jasmine-2.6.1/Spec* spec/
```

Run test runner file in the browser to make sure it works.

```bash
open spec/SpecTestRunner.html
```
If the test runs and you see:

```
1 spec, 0 failures

  testHello()
    returns a hello
      Hello World!
```

 ...you're good.

## Removing Git from nested Git repo

Git is going to have difficulties tracking a Git repo nested within another Git repo. So removing it, for now:

```bash
rm -i jasmine-2.6.1/.git
```

The goal is to eventually create a [Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for the nested Git repo, allowing the commits to be separate.

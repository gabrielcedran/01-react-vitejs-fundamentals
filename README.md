# Concepts 

### SPA vs SSR

These are rending patterns - there isn't a correct one, there are simply different method that have their applicability.


### Compilers

Not all the running environments (including clients like browsers) will support the javascript version being used for development.

As a developer you want to use the newest javascript version because it comes with 
new syntaxes sugar, apis, features, etc that tend to improve code quality and productivity. 
However you cannot leave clients that do not support them behind (otherwise you could narrow your audience).

Compilers convert code from one format to another - or from one newer version to a version compatible to an older one.

The most famous compiler is babel however other compilers are picking up and rapidly gaining terrain.


### Bundlers

When writing an application, for organisation, developers break it down in multiple files - one single file would be a mess.

Bundlers join all the files in such a way that it can be distributed to clients (browsers). 

_Until quite recently browsers didn't support this concept of applications with multiple files (import between files), 
therefore this is where the need for bundlers comes from_ A given script imported by the tag script couldn't import 
another script file.

The most famous bundler is webpack.

With the necessity of bundlers falling down, other development tools that use the native ecma script modules (ESM)
are gaining popularity like vitejs and snowpack. `<script type="module" src="..."></script>`

ESM: on demand file serving.

PS: these development tools also make the compiling process automatically (rending babel also redundant).

### React Components

Components is the most basic and important concept in React. Application componentising is a way of 
creating more reusable and maintainable code as it should result in smaller pieces of code
that put together deliver the necessary functionalities. Smaller code is easier to read, maintain and test.


### Export types

`Default Exports` vs `Named Exports`:

Default exports allow for component (re)naming on import.

Named exports defines the component name on exports and whoever is importing it has to keep the name*. 
The main advantage of named exports is that components being created from copying another (or being refactored) 
will render an error in case the component export name does not match with the import's.


### Scoped CSS

In react, it's extremely important to ensure css of one component doesn't leak into another. There are many techniques 
to achieve this and one of them is css modules - which is usually supported out of the box.
The convention for CSS modules is to use only classes. No ID or tags selectors - tho sometimes it's necessary.


# Development

### Project Creation

To create a vanila react project with vitejs simply run `npm create vite@latest` and answer the questions.

For this study I'll start with regular javascript and add typescript later for the sake of testing.

Basic commands:

- npm install
- npm run dev



#### Refs

https://www.figma.com/file/uW903v5VjkJ2jYQVMQgeYK/Ignite-Feed-(Community)?type=design&node-id=0-1&mode=design&t=W4UIDNim7nFmaozS-0




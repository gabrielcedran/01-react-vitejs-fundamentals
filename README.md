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
are gaining popularity like vitejs and snowpack. 

ESM: on demand file serving.

PS: these development tools also make the compiling process automatically (rending babel also redundant).


# Development

### Project Creation

To create a vanila react project with vitejs simply run `npm create vite@latest` and answer the questions.

For this study I'll start with regular javascript and add typescript later for the sake of testing.

Basic commands:

- npm install
- npm run dev










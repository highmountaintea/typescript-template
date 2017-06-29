# typescript-template
Typescript structure for a smooth development experience

# Goal
When I write a Javascript package, I want it to:
* work with both NPM and optionally as CDN
* compile to ES2015 so it's widely compatible
* provide source map that references actual source files if I need it
* be able to run in watch mode so I have immediate feedback of progress and issues
* .ts needs to compile automatically

This template evolves to incorporate various experiences so Typescript development can be a smooth experience.


# Directories
Well defined directory structure helps us reason the workflow
* compiled folder - Ultimately Typescript is a compiled language, so we should separate source code from compiled code
* dist folder - where webpacked files go


# Tools
* tsc
* webpack
* concurrently - if we want to automatically compile .ts files without help of IDEs
* nodemon - if we want to run our project in watch mode
* babel - maybe

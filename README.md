## Mean Duck

## HOW TO USE ( proceed with caution - the duck ain't friendly)

1. `npm i mean-duck`
2.

```
const duck = require("mean-duck");
console.log(duck.help());
console.log(duck.greet());
console.log(duck.ask("question here"));

```

## Demo of how to publish your own mini library to NPM Registry

### Steps:

1. create a git repo and `README.md` file
2. go to the project folder and run `npm init`
3. you can enter package name, version, description, entry point, keywords, author ... when being prompted
4. create a `index.js` file and write the function to be exported

Once you are happy with your code, you can test it by doing:

### Testing

1. run `npm link` in the terminal ( of your project directory)
2. create another directory and run `npm link package-name`
   ( this will install the package locally)
3. you can now test it by running `node mytest.js`

```
// mytest.js file in another directory
const myStuff = require('my-package')
console.log(myStuff.somefunction())
```

### Publishing

1. `npm login` ( you will need to create an account first)
2. `npm publish`

---

### Issue and solution

https://stackoverflow.com/questions/59280276/npm-package-readme-display-issue/61161811#61161811

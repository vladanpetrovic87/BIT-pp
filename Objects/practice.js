// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

function Coffee (n, s, f, m, sug) {
    this.name = n, 
    this.strenght = s,
    this.flavour = f,
    this.milk = m,
    this.sugar = sug    
}

var nescafe = new Coffee ('Nescafe', 'strong', 'vanila', true, false);
var espresso = new Coffee ('Espresso', 'mild', 'chocolate', true, true);

console.log(espresso);
console.log(nescafe);


// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

function Movie (t, a, d, g, ag, m, p) {
    this.title = t, 
    this.actors = a,
    this.director = d,
    this.genre = g,
    this.age = ag, 
    this.music = m,
    this.publishingHouse = p
}
       
var movie1 = new Movie (
    "Pljacka treceg Rajha", 
    ["Dragan Nikolic", "Nikola Djuricko", "Katarina Zutic"], 
    {
    firstName: "Zdravko",
    lastName: "Sotra"
},
    "Komedija",
    2004,
    "Nenad Milosavljevic",
    "Dream company"
    )

console.log(movie1);

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function CreateProject(desc, lang, url, dev) {
        this.description = desc,
        this.language = lang,
        this.gitUrl = url,
        this.isInDev = dev,
        this.printRepository = function () {
            console.log(url);
        },
        this.isJavaScript = function () {
            return lang === 'JavaScript';
        },
        this.isDevelopment = function () {
            return dev ? "project is in development" : "project is not in development"
        }
    }

var blog = new CreateProject('blog description...', 'JavaScript', 'https://github.com/', false);
var project = new CreateProject('project description...', 'PHP', 'https://github.com/', true);

console.log(blog);
console.log(project);
blog.printRepository();
project.printRepository();
console.log(blog.isDevelopment());
console.log(project.isDevelopment());
console.log(blog.isJavaScript());
console.log(project.isJavaScript());



// 4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.


function CulinaryRecipe (n, t, c, l, pT, pI) {
        this.name = n,
        this.typeOfCuisine = t,
        this.complexity = c,
        this.listOfIngridients = l,
        this.preparingTime = pT,
        this.preparingInstruction = pI,
        this.printIngridients = function () {
            console.log(this.listOfIngridients);
        };
        this.isPreparedFor15Min = function () {
            return this.preparingTime < 15
        };
        this.changeTypeOfCuisine = function (newType) {
            this.typeOfCuisine = newType;
        }
        this.deleteIngridient = function () {
            var ing = l.pop()
            return l;
        }
    }
    

var pancakes = new CulinaryRecipe('Pancakes', 'Italian', 3, ['milk', 'eggs', 'sugar'], 10, 'Some instruction...');
var bread = new CulinaryRecipe('Bread', 'France', 2, ['water', 'flour', 'eggs'], 30, 'Instruction instruction...')


pancakes.printIngridients();
console.log(pancakes.isPreparedFor15Min());
console.log(pancakes.deleteIngridient());
pancakes.changeTypeOfCuisine('mexican');
console.log(pancakes);


console.log(bread);
bread.printIngridients();
console.log(bread.isPreparedFor15Min());
console.log(bread.deleteIngridient());

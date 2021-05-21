// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "Nescafe", 
    strenght: "strong",
    flavour: "vanila",
    milk: true,
    sugar: false    
}

console.log(coffee.milk);


// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

var movie = {
    title: "Pljacka treceg Rajha", 
    actors: ["Dragan Nikolic", "Nikola Djuricko", "Katarina Zutic"],
    director: {
        firstName: "Zdravko",
        lastName: "Sotra"
    },
        genre: "Komedija",
        age: 2004, 
        music: "Nenad Milosavljevic",
        publishingHouse: "Dream company"   
}

console.log(movie.director.firstName);

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

function createProject(desc, lang, url, dev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl: url,
        isInDev: dev,
        printRepository: function () {
            console.log(url);
        },
        isJavaScript: function () {
            return lang === 'JavaScript';
        },
        isDevelopment: function () {
            return dev ? "project is in development" : "project is not in development"
        }
    }
    return project;
}

var blog = createProject('blog description...', 'JavaScript', 'https://github.com/', false);
var project = createProject('project description...', 'PHP', 'https://github.com/', true);

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


function culinaryRecipe (n, t, c, l, pT, pI) {
    var recipe = {
        name: n,
        typeOfCuisine: t,
        complexity: c,
        listOfIngridients: l,
        preparingTime: pT,
        preparingInstruction: pI,
        printIngridients () {
            console.log(l);
        },
        isPreparedFor15Min () {
            if(pT < 15) {
                return true;
            }
            return false;
        },
        deleteIngridient () {
            var ing = l.pop()
            return l;
        }
    }
    return recipe;
}

var pancakes = culinaryRecipe('Pancakes', 'Mediteran', 2, ['milk', 'eggs', 'sugar'], 10, 'Some instruction...');

console.log(pancakes);
pancakes.printIngridients();
console.log(pancakes.isPreparedFor15Min());
console.log(pancakes.deleteIngridient());




// function createMovie(t, d, g, gr) {
//     var movie = {
//         title: t,
//         director: d,
//         genre: g,
//         imdbGrade: gr,
//     }
//     return movie
// }


// var titanic = createMovie("Titanic", "James Cameron", "Romance", 7.8);
// var theLordOfTheRings = createMovie("The Lord of the Rings", "Peter Jackson", "Fantasy", 8.7);


// console.log(titanic);
// console.log(theLordOfTheRings);


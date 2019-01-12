//A Day in the Life
//

let authorName = prompt('What is your full name?', 'Your Name Here');

let animal = prompt('What is your least favorite animal?', 'cat');

let animalname = prompt('What is a name that you like?', 'Oswald');

let adjective = prompt('Provide a funny adjective:', 'moldy');
let adjective2 = prompt('Now provide a different adjective:', 'sickening');

let food = prompt('What is your favorite thing to eat (singular)?', 'pizza');

let feeling = prompt('Please provide an appropriate feeling:', 'sick');
let feeling2 = prompt('What is another feeling (different from before)?', 'happy');
let feeling3 = prompt('NOw provide ANOTHER feeling (different frmo the first two):', 'sad');

let timeunit = prompt('Please provide a unit of time (i.e., second or year):', 'hour');


let action = prompt('What is your favorite action verb (i.e., run, fly)?', 'vomit');

let titleText = `A Day in the Life of ${animalname}`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let authorText = `by ${authorName}`;
let authorHeading = document.querySelector("#madlib-author");
authorHeading.innerHTML = authorText;

let storyText = `
<p>Once upon a time, a big ${animal} named ${animalname} ate a very ${adjective} ${food}. Eating the ${adjective} ${food} caused ${animalname} to feel very ${feeling}. This was surprising; ${animalname} did not remember ever feeling this way before.</p>
<p>After a few ${timeunit}s, ${animalname} felt different. Now, ${animalname} felt much more ${feeling2} and decided to ${action}. After ${animalname} finished doing that, they became very ${feeling3} because they found a new ${adjective2} ${food} to eat!</p>
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;

let endnoteText = `This Looney Lips fill-in-the-blank story was written by Andrew Asplund, based on original material created by Yann Burrett.`;
let endnoteParagraph = document.querySelector("#madlib-endnote");
endnoteParagraph.innerHTML = endnoteText;
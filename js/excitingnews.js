//A Day in the Life
//

let authorName = prompt('What is your name?', 'Your Name Here');

let wildanimal1 = prompt('What is your least favorite kind of wild animal?', 'zebra');
let wildanimal2 = prompt('What is a different kind of wild animal?', 'ostrich');

let personname1 = prompt('What is the name of a special person?', 'Bob');
let personname2 = prompt('What is the name of another special person?', 'Mary');

let pastpartverb = prompt('What is your favorite past particle verb (i.e., cooked, eaten)?', 'cooked');
let event = prompt('What is an event that people often attend?', 'rodeo');
let adjective = prompt('What is the most disgusting adjective you can think of?', 'disgusting');

let physicalfeature = prompt('What is a physical feature you find silly?', 'toes');
let condition = prompt('What is an adjective describing a condition affecting a person?', 'sick');

let unitoftime = prompt('What is a singular unit of time (i.e., minute or year)?', 'minute');

let feeling1 = prompt('What is a feeling that a person could feel?', 'embarassed');
let feeling2 = prompt('What is a different feeling that a person could feel?', 'depressed');


let titleText = `Exciting News for ${personname1} and ${personname2}`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let authorText = `by ${authorName}`;
let authorHeading = document.querySelector("#madlib-author");
authorHeading.innerHTML = authorText;

let storyText =`
<p>When ${personname1} and ${personname2} first met at that special ${event}, they new that they had hit it off. ${personname1} just could not resist ${personname2}'s ${physicalfeature}. Only a few ${unitoftime}s later, they were engaged to be married.</p>
<p>At their wedding, people were surprised to see a pack of ${wildanimal1}s and ${wildanimal2}s as part of the wedding party. Only a few guests were ${pastpartverb}. Everybody had a really ${adjective} time at the wedding party. Well, everybody except for ${personname1} and ${personname2}.</p>
<p>As it ends up, something unusual happened at the party. One of the ${wildanimal1}s had gotten a little too close to ${personname1}. And, as it ends up, this caused ${personname1} to get ${condition}. Because of this, ${personname2} was not sure whether to feel ${feeling1} or ${feeling2}. But, either way, it turned out to be very exciting news for both of them.</p>
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;

let endnoteText = `This Looney Lips fill-in-the-blank story was written by Andrew Asplund.`;
let endnoteParagraph = document.querySelector("#madlib-endnote");
endnoteParagraph.innerHTML = endnoteText;
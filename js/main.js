// WATS 3020 Mad Libs Assignment
//
// For this assignment you must fill in the code below so that it functions
// to populate the text of the "Mad Libs" style story in the HTML.
//
// TODO: Write a prompt statement like the one below for each of the
// variables listed.

let authorName = prompt('What is your full name?', 'Your Name Here');

// random bits
let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).', 'Captain');
let crowdBehavior = prompt('What do a lot of people do as a group?', 'call');
let color = prompt('What is your favorite color?', 'red');
let familyMember = prompt('Tell me a family relationship (i.e., uncle or sister):', 'father');

// adjectives
let adjective1 = prompt('Please enter an adjective:', 'fearful');
let adjective2 = prompt('Please enter an another adjective:', 'cold');
let adjective3 = prompt('Please enter a yet another adjective:', 'dead');
let adjective4 = prompt('Okay, almost there. What is your FOURTH favorite adjective?', 'grim');
let adjective5 = prompt('Alright, last adjective. What is your FIFTH favorite adjective?', 'daring');

// stuff about the ship
let vehicle = prompt('Tell me the name of some sort of mode of transportation:', 'ship');
let vehiclePart = prompt('What is the name of a part of that vehicle?', 'deck');
let parking = prompt('Where would you park, dock, or otherwise leave that vehicle?', 'port');

// parts of the body
let organ = prompt('What is the name of your favorite internal body part or organ?', 'heart');
let bodyPart1 = prompt('Tell me the name of your first favorite body part:', 'eyes');
let bodyPart2 = prompt('Tell me the name of your second favorite body part:', 'arm');
let bodyPart3 = prompt('Tell me the name of your third favorite body part:', 'head');

// nouns and things
let precious = prompt('What is the name of a precious object?', 'prize');
let noiseMaker = prompt('Tell me the name of your favorite thing that makes noise.', 'bells');
let thing = prompt('What is the name of an old random object?', 'flag');
let thing2 = prompt('What kind of object would you give somebody that you love?', 'bouquets');
let thing3 = prompt('What kind of object would you give somebody that you like?', 'wreaths');

////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.
//
// TODO: To begin with, prompt the user to collect their favorite number that is not zero.
// Call this variable "userNumber".

// TODO: generate TWO more numbers called "number2" and "number 3".
// Use any operator you would like to add, multiply, divide, or otherwise
// change the number that the user submitted.

// temporary assignments
let userNumber = 5;
let number2 = 10;
let number3 = 15;

// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}!`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let authorText = `by ${authorName}`;
let authorHeading = document.querySelector("#madlib-author");
authorHeading.innerHTML = authorText;

let storyText = `
    ${userNumber}<br>
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;<br>
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;<br>
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},<br>
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:<br>
    But O ${organ}! ${organ}! ${organ}!<br>
    O the bleeding drops of ${color},<br>
    Where on the ${vehiclePart} my ${honorific} lies,<br>
    Fallen ${adjective2} and ${adjective3}.<br>
    <br>
    ${number2}<br>
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};<br>
    Rise up-for you the ${thing} is flung-for you the bugle trills;<br>
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;<br>
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;<br>
    Here ${honorific}! dear ${familyMember}!<br>
    This ${bodyPart2} beneath your ${bodyPart3};<br>
    It is some dream that on the ${vehiclePart},<br>
    You've fallen ${adjective2} and ${adjective3}.<br>
    <br>
    ${number3}<br>
    My ${honorific} does not answer, his lips are pale and still;<br>
    My ${familyMember} does not feel my arm, he has no pulse nor will;<br>
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;<br>
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;<br>
    Exult, O shores, and ring, O ${noiseMaker}!<br>
    But I, with mournful tread,<br>
    Walk the ${vehiclePart} my ${honorific} lies,<br>
    Fallen ${adjective2} and ${adjective3}.<br>
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;

let endnoteText = `This Looney Lips fill-in-the-blank story is based on the original poem <a href="http://famouspoetsandpoems.com/poets/walt_whitman/poems/17466"><i>O Captain! My Captain</i></a> by <a href="https://www.poets.org/poetsorg/poet/walt-whitman">Walt Whitman</a>.`;
let endnoteParagraph = document.querySelector("#madlib-endnote");
endnoteParagraph.innerHTML = endnoteText;
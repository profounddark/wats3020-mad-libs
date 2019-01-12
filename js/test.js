//A Day in the Life
//


let titleText = `Test Story - This isn't Funny`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let authorText = `by the Seventh Doctor`;
let authorHeading = document.querySelector("#madlib-author");
authorHeading.innerHTML = authorText;

let storyText = `<p>You can always judge a man by the quality of his enemies. Excellent. Blow up that vehicle. We all have a universe of our own terrors to face. Think about me when you're living your life one day after another, all in a neat pattern. Think about the homeless traveller and his old police box, with his days like crazy paving. There are worlds out there where the sky is burning, and the sea's asleep, and the rivers dream; people made of smoke and cities made of song. Somewhere there's danger, somewhere there's injustice, and somewhere else the tea's getting cold. Come on, Ace. We've got work to do.</p><p>Yes, that's right, you're going. You've been gone for ages. You're already gone. You're still here. You've just arrived. I haven't even met you yet. It all depends on who you are and how you look at it. Strange business, time. Only the madman can see the way clearly through the tangled forest. Powerful! Crush the lesser races! Conquer the galaxy! UNIMAGINABLE POWER! UNLIMITED RICE PUDDING! Et cetera! Et cetera! Subject for catalogue: file under 'imagination, comma, lack of'. Exotic alien swords are easy to come by, Aces are rare.</p>`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;

let endnoteText = `This was a testing story. You should not be reading this.`;
let endnoteParagraph = document.querySelector("#madlib-endnote");
endnoteParagraph.innerHTML = endnoteText;
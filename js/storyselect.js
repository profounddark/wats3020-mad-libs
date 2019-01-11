var StoryFiles = ['ocaptain', 'dayinlife']; // put all the possible JS files to load.
 
// Returns the value of the query variable searchTerm.
function getQueryVariable(searchTerm)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        if(pair[0] == searchTerm){return pair[1];}
    }
    return(false);
}

// I copied this somewhere, but it's basically just a quick function that checks to see if the element, needle, is in the array, haystack.
function inArray(needle, haystack)
{
    for(var i=0; i<haystack.length;i++)
    {
        if (haystack[i]===needle){return true;}
    }
    return false;
}

function storyChoose()
{
    var storyName;
    // Checks to see if the query string contains story=XYZ.
    var findName = getQueryVariable('story');

    // checks if XYZ is in the array of StoryFiles
    if (inArray(findName, StoryFiles))
    {
        // If it is, select it
        storyName = findName;
        console.log('Story chosen. Story ' + storyName + ' loaded.');
    } else
    {
        // If it is not, select a random story from StoryFiles
        let index = Math.floor(Math.random()*StoryFiles.length);
        storyName = StoryFiles[index];
        console.log('No story chosen. Random story ' + storyName + ' loaded.');
    }

    //append the appropriate story .js file to the HEAD section of the HTML
    var script = document.createElement('script');
    script.src = 'js/' + storyName + '.js';
    document.getElementsByTagName('head')[0].appendChild(script);

}
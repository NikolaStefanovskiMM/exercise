let storyMembers = [`Nikola`,`lazy`,`sleeping`];

function tellStory(membersArray){
    let name = membersArray[0];
    let mood = membersArray[1];
    let activity = membersArray[2];
    //console.log(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day.`);
    alert(`This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day.`)
}

let story = tellStory(storyMembers);
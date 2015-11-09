/**
 linkedIn API en login calls zitten nu in server/linkedInAPI
 Als het goed is moet dat nog steeds werken met de api key in main.html
 */

insertNewSkill = function insertNewSkill(skill, description) {
	Meteor.call('insertSkill', skill, description, skill);
	alert("Skill " + skill + " toegevoegd aan de algemene lijst met skills!");
};

// Alle eerste letters (alleen) omzetten naar een hoofdletter om zo verkeerde/dubbele te in de collection te vermijden
toTitleCase = function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

updateSkills = function updateSkills(skill, userid, skillID, key) {
// Voeg de skills toe aan de gebruiker die ingelogd is...
hubUsers.update(
	{_id: userid},
	{$addToSet: {skills: {$each: [skill] }}}
);

// Teller voor de top 5 skills etc..
hubSkills.update(
	{_id: skillID},
	{$set: {key: key + 1}}
);

alert("Skill " + skill + " toegevoegd aan de lijst met skills!");
};

getAllHubSkills = function getAllHubSkills() {
	return hubSkills.find({}, {sort: {key: -1}, limit:5}).fetch();
};

class User {
	skills: string[];

	addSkill(skill: string): void;
	addSkill(skillOrSkills: string[]): void;

	addSkill(skillOrSkills: string | string[]) {
		if (typeof skillOrSkills === 'string') {
			this.skills.push(skillOrSkills);
		} else {
			this.skills.concat(skillOrSkills);
		}
	}
}


function run(distance: string): void; 
function run(distance: number): void;
function run(distance: number | string): number | string {
	if (typeof distance == 'number') {
		return 1;
	} else {
		return '';
	}
}

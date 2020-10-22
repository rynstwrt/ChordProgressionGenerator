// Chord Class
class Chord
{
	constructor(name, notes)
	{
		this.name = name;
		this.notes = notes;
	}
}

// Progression Class
class Progression
{
	constructor(arrayOfChords)
	{
		this.chords = arrayOfChords;
	}
}

// Chord Generator Class
class ChordGenerator
{
	// Set class variables
	constructor()
	{
		this.cmajor = new Chord('C', ['C', 'E', 'G']);
		this.csharpmajor = new Chord('C#', ['C#', 'E#', 'G#']);
		this.dflatmajor = new Chord('Db', ['Db', 'F', 'Ab']);
		this.dmajor = new Chord('D', ['D', 'F#', 'A']);
		this.eflatmajor = new Chord('Eb', ['Eb', 'G', 'Bb']);
		this.emajor = new Chord('E', ['E', 'G#', 'B']);
		this.fflatmajor = new Chord('Fb', ['Fb', 'Ab', 'Cb']);
		this.fmajor = new Chord('F', ['F', 'A', 'C']);
		this.fsharpmajor = new Chord('F#', ['F#', 'A#', 'C#']);
		this.gflatmajor = new Chord('Gb', ['Gb', 'Bb', 'Db']);
		this.gmajor = new Chord('G', ['G', 'B', 'D']);
		this.gsharpmajor = new Chord('G#', ['G#', 'B#', 'D#']);
		this.aflatmajor = new Chord('Ab', ['Ab', 'C', 'Eb']);
		this.amajor = new Chord('A', ['A', 'C#', 'E']);
		this.bflatmajor = new Chord('Bb', ['Bb', 'D', 'F']);
		this.bmajor = new Chord('B', ['B', 'D#', 'F#']);
		this.cflatmajor = new Chord('Cb', ['Cb', 'Eb', 'Gb']);

		this.cminor = new Chord('Cm', ['C', 'Eb', 'G']);
		this.csharpminor = new Chord('C#m', ['C#', 'E', 'G#']);
		this.dflatminor = new Chord('Dbm', ['Db', 'Fb', 'Ab']);
		this.dminor = new Chord('Dm', ['D', 'F', 'A']);
		this.dsharpminor = new Chord('D#m', ['D#', 'F#', 'A#']);
		this.eflatminor = new Chord('Ebm', ['Eb', 'Gb', 'Bb']);
		this.eminor = new Chord('Em', ['E', 'G', 'B']);
		this.esharpminor = new Chord('E#m', ['E#', 'G#', 'B#']);
		this.fminor = new Chord('Fm', ['F', 'Ab', 'C']);
		this.fsharpminor = new Chord('F#m', ['F#', 'A', 'C#']);
		this.gminor = new Chord('Gm', ['G', 'Bb', 'D']);
		this.gsharpminor = new Chord('G#m', ['G#', 'B', 'D#']);
		this.aflatminor = new Chord('Abm', ['Ab', 'B', 'Eb']);
		this.aminor = new Chord('Am', ['A', 'C', 'E']);
		this.asharpminor = new Chord('A#m', ['A#', 'C#', 'E#']);
		this.bflatminor = new Chord('Bbm', ['Bb', 'Db', 'F']);
		this.bminor = new Chord('Bm', ['B', 'D', 'F#']);

		this.cdim = new Chord('Cdim', ['C', 'Eb', 'Gb']);
		this.csharpdim = new Chord('C#dim', ['C#', 'E', 'G']);
		this.ddim = new Chord('Ddim', ['D', 'F', 'Ab']);
		this.dsharpdim = new Chord('D#dim', ['D#', 'F#', 'A']);
		this.eflatdim = new Chord('Ebdim', ['Eb', 'Gb', 'A']);
		this.edim = new Chord('Edim', ['E', 'G', 'Bb']);
		this.esharpdim = new Chord('E#dim', ['E#', 'G#', 'B']);
		this.fdim = new Chord('Fdim', ['F', 'Ab', 'Cb']);
		this.fsharpdim = new Chord('F#dim', ['F#', 'A', 'C']);
		this.gdim = new Chord('Gdim', ['G', 'Bb', 'Db']);
		this.gsharpdim = new Chord('G#dim', ['G#', 'B', 'D']);
		this.aflatdim = new Chord('Abdim', ['Ab', 'Cb', 'D']);
		this.adim = new Chord('Adim', ['A', 'C', 'Eb']);
		this.bflatdim = new Chord('Bbdim', ['Bb', 'Db', 'Fb']);
		this.bdim = new Chord('Bdim', ['B', 'D', 'F']);
		this.bsharpdim = new Chord('B#dim', ['B#', 'D#', 'F#']);

		this.keyamajor = [this.amajor, this.bminor, this.csharpminor, this.dmajor, this.emajor, this.fsharpminor, this.gsharpdim];
		this.keybmajor = [this.bmajor, this.csharpminor, this.dsharpminor, this.emajor, this.fsharpmajor, this.gsharpminor, this.bflatdim];
		this.keycmajor = [this.cmajor, this.dminor, this.eminor, this.fmajor, this.gmajor, this.aminor, this.bdim];
		this.keydmajor = [this.dmajor, this.eminor, this.fsharpminor, this.gmajor, this.amajor, this.bminor, this.csharpdim];
		this.keyemajor = [this.emajor, this.fsharpminor, this.gsharpminor, this.amajor, this.bmajor, this.csharpminor, this.dsharpdim];
		this.keyfmajor = [this.fmajor, this.gminor, this.aminor, this.bflatmajor, this.cmajor, this.dminor, this.edim];
		this.keygmajor = [this.gmajor, this.aminor, this.bminor, this.cmajor, this.dmajor, this.eminor, this.fsharpdim];

		this.keyaminor = [this.aminor, this.bdim, this.cmajor, this.dminor, this.eminor, this.fmajor, this.gmajor];
		this.keybminor = [this.bminor, this.csharpdim, this.dmajor, this.eminor, this.fsharpminor, this.gmajor, this.amajor];
		this.keycminor = [this.cminor, this.ddim, this.eflatmajor, this.fminor, this.gminor, this.aflatmajor, this.bflatmajor];
		this.keydminor = [this.dminor, this.edim, this.fmajor, this.gminor, this.aminor, this.bflatmajor, this.cmajor];
		this.keyeminor = [this.eminor, this.fsharpdim, this.gmajor, this.aminor, this.bminor, this.cmajor, this.dmajor];
		this.keyfminor = [this.fminor, this.gdim, this.aflatmajor, this.bflatminor, this.cminor, this.dflatmajor, this.eflatmajor];
		this.keygminor = [this.gminor, this.adim, this.bflatmajor, this.cminor, this.dminor, this.eflatmajor, this.fmajor];
	}

	// Return a Progression class instance of a major progression
	makeMajorProgression(numChords)
	{
		const keys = [this.keyamajor, this.keybmajor, this.keycmajor, this.keydmajor, this.keyemajor, this.keyfmajor, this.keygmajor];
		const key = keys[Math.floor(Math.random() * keys.length)];

		let arrayOfChords = [];
		for (let i = numChords - 1; i >= 0; --i)
		{
			if (arrayOfChords.length === 0)
			{
				arrayOfChords.push(Math.floor(Math.random() * (keys.length - 1)) + 1);
				continue;
			}
			const lastChord = arrayOfChords[arrayOfChords.length - 1];

			let possibleDestinations;
			switch (lastChord)
			{
				case 1:
				 	possibleDestinations = [2, 3, 4, 5, 6, 7];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 2:
					possibleDestinations = [7, 5];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 3:
					possibleDestinations = [6, 4, 2];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 4:
					possibleDestinations = [2, 7, 5, 1];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 5:
					possibleDestinations = [1];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 6:
					possibleDestinations = [4, 2];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 7:
					possibleDestinations = [2, 3, 4, 5, 6, 7];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
			}
		}

		arrayOfChords = arrayOfChords.map((chord) => chord = key[chord - 1]);
		return new Progression(arrayOfChords);
	}

	// Return a Progression class instance of a minor progression
	makeMinorProgression(numChords)
	{
		const keys = [this.keyaminor, this.keybminor, this.keycminor, this.keydminor, this.keyeminor, this.keyfminor, this.keygminor];
		const key = keys[Math.floor(Math.random() * keys.length)];

		let arrayOfChords = [];
		for (let i = numChords - 1; i >= 0; --i)
		{
			if (arrayOfChords.length === 0)
			{
				arrayOfChords.push(Math.floor(Math.random() * (keys.length - 1)) + 1);
				continue;
			}
			const lastChord = arrayOfChords[arrayOfChords.length - 1];

			let possibleDestinations;
			switch (lastChord)
			{
				case 1:
					possibleDestinations = [2, 3, 4, 5, 6, 7];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 2:
					possibleDestinations = [7, 5];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 3:
					possibleDestinations = [6, 4, 2];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 4:
					possibleDestinations = [2, 7, 5, 1];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 5:
					possibleDestinations = [1, 6];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 6:
					possibleDestinations = [4, 2];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
				case 7:
					possibleDestinations = [3];
					arrayOfChords.push(possibleDestinations[Math.floor(Math.random() * possibleDestinations.length)]);
					break;
			}
		}

		arrayOfChords = arrayOfChords.map((chord) => chord = key[chord - 1]);
		return new Progression(arrayOfChords);
	}
}

class Chord {
	constructor(name, notes)
	{
		this.name = name;
		this.notes = notes;
	}
}

const cmajor = new Chord('C', ['C', 'E', 'G']);
const csharpmajor = new Chord('C#', ['C#', 'E#', 'G#']);
const dflatmajor = new Chord('Db', ['Db', 'F', 'Ab']);
const dmajor = new Chord('D', ['D', 'F#', 'A']);
const eflatmajor = new Chord('Eb', ['Eb', 'G', 'Bb']);
const emajor = new Chord('E', ['E', 'G#', 'B']);
const fflatmajor = new Chord('Fb', ['Fb', 'Ab', 'Cb']);
const fmajor = new Chord('F', ['F', 'A', 'C']);
const fsharpmajor = new Chord('F#', ['F#', 'A#', 'C#']);
const gflatmajor = new Chord('Gb', ['Gb', 'Bb', 'Db']);
const gmajor = new Chord('G', ['G', 'B', 'D']);
const gsharpmajor = new Chord('G#', ['G#', 'B#', 'D#']);
const aflatmajor = new Chord('Ab', ['Ab', 'C', 'Eb']);
const amajor = new Chord('A', ['A', 'C#', 'E']);
const bflatmajor = new Chord('Bb', ['Bb', 'D', 'F']);
const bmajor = new Chord('B', ['B', 'D#', 'F#']);
const cflatmajor = new Chord('Cb', ['Cb', 'Eb', 'Gb']);

const cminor = new Chord('Cm', ['C', 'Eb', 'G']);
const csharpminor = new Chord('C#m', ['C#', 'E', 'G#']);
const dflatminor = new Chord('Dbm', ['Db', 'Fb', 'Ab']);
const dminor = new Chord('Dm', ['D', 'F', 'A']);
const dsharpminor = new Chord('D#m', ['D#', 'F#', 'A#']);
const eflatminor = new Chord('Ebm', ['Eb', 'Gb', 'Bb']);
const eminor = new Chord('Em', ['E', 'G', 'B']);
const esharpminor = new Chord('E#m', ['E#', 'G#', 'B#']);
const fminor = new Chord('Fm', ['F', 'Ab', 'C']);
const fsharpminor = new Chord('F#m', ['F#', 'A', 'C#']);
const gminor = new Chord('Gm', ['G', 'Bb', 'D']);
const gsharpminor = new Chord('G#m', ['G#', 'B', 'D#']);
const aflatminor = new Chord('Abm', ['Ab', 'B', 'Eb']);
const aminor = new Chord('Am', ['A', 'C', 'E']);
const asharpminor = new Chord('A#m', ['A#', 'C#', 'E#']);
const bflatminor = new Chord('Bbm', ['Bb', 'Db', 'F']);
const bminor = new Chord('Bm', ['B', 'D', 'F#']);

const cdim = new Chord('Cdim', ['C', 'Eb', 'Gb']);
const csharpdim = new Chord('C#dim', ['C#', 'E', 'G']);
const ddim = new Chord('Ddim', ['D', 'F', 'Ab']);
const dsharpdim = new Chord('D#dim', ['D#', 'F#', 'A']);
const eflatdim = new Chord('Ebdim', ['Eb', 'Gb', 'A']);
const edim = new Chord('Edim', ['E', 'G', 'Bb']);
const esharpdim = new Chord('E#dim', ['E#', 'G#', 'B']);
const fdim = new Chord('Fdim', ['F', 'Ab', 'Cb']);
const fsharpdim = new Chord('F#dim', ['F#', 'A', 'C']);
const gdim = new Chord('Gdim', ['G', 'Bb', 'Db']);
const gsharpdim = new Chord('G#dim', ['G#', 'B', 'D']);
const aflatdim = new Chord('Abdim', ['Ab', 'Cb', 'D']);
const adim = new Chord('Adim', ['A', 'C', 'Eb']);
const bflatdim = new Chord('Bbdim', ['Bb', 'Db', 'Fb']);
const bdim = new Chord('Bdim', ['B', 'D', 'F']);
const bsharpdim = new Chord('B#dim', ['B#', 'D#', 'F#']);

const keyamajor = [amajor, bminor, csharpminor, dmajor, emajor, fsharpminor, gsharpdim];
const keybmajor = [bmajor, csharpminor, dsharpminor, emajor, fsharpmajor, gsharpminor, bflatdim];
const keycmajor = [cmajor, dminor, eminor, fmajor, gmajor, aminor, bdim];
const keydmajor = [dmajor, eminor, fsharpminor, gmajor, amajor, bminor, csharpdim];
const keyemajor = [emajor, fsharpminor, gsharpminor, amajor, bmajor, csharpminor, dsharpdim];
const keyfmajor = [fmajor, gminor, aminor, bflatmajor, cmajor, dminor, edim];
const keygmajor = [gmajor, aminor, bminor, cmajor, dmajor, eminor, fsharpdim];

const keyaminor = [aminor, bdim, cmajor, dminor, eminor, fmajor, gmajor];
const keybminor = [bminor, csharpdim, dmajor, eminor, fsharpminor, gmajor, amajor];
const keycminor = [cminor, ddim, eflatmajor, fminor, gminor, aflatmajor, bflatmajor];
const keydminor = [dminor, edim, fmajor, gminor, aminor, bflatmajor, cmajor];
const keyeminor = [eminor, fsharpdim, gmajor, aminor, bminor, cmajor, dmajor];
const keyfminor = [fminor, gdim, aflatmajor, bflatminor, cminor, dflatmajor, eflatmajor];
const keygminor = [gminor, adim, bflatmajor, cminor, dminor, eflatmajor, fmajor];


function getMajorProgression(numChords)
{
	const keyrow = getKey('major');

	const progression = [1];

	do
	{
		const lastMember = progression[progression.length - 1];

		let options = [];
		let chosen = 0;
		switch (lastMember)
		{
			case 1:
				// go to any 2-7
				options = [2, 3, 4, 5, 6, 7];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			case 2:
				// go to 7 or 5
				options = [7, 5];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 3:
				// go to 6 or 4 or 2
				options = [6, 4, 2];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 4:
				// go to 2, 7, 5, or 1
				options = [2, 7, 5, 1];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 5:
				// go to 1
				options = [1];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 6:
				// go to 4 or 2
				options = [4, 2];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
				break;
			case 7:
				// go to 1
				options = [1];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
				break;
			default:
				console.log(lastMember);
				alert('something went terribly wrong');
		}
	}
	while (progression.length < numChords)

	const chordList = [];
	for(let i = 0; i < progression.length; ++i)
	{
		chordList.push(keyrow[progression[i] - 1]);
	}

	return chordList;
}

function getMinorProgression(numChords)
{
	const keyrow = getKey('minor');

	const progression = [1];

	do
	{
		const lastMember = progression[progression.length - 1];

		let options = [];
		let chosen = 0;
		switch (lastMember)
		{
			case 1:
				// go to any 2-7
				options = [2, 3, 4, 5, 6, 7];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			case 2:
				// go to 7 or 5
				options = [7, 5];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 3:
				// go to 6 or 4 or 2
				options = [6, 4, 2];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 4:
				// go to 2, 7, 5, or 1
				options = [2, 7, 5, 1];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 5:
				// go to 1 or 6
				options = [1, 6];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
			 	break;
			case 6:
				// go to 4 or 2
				options = [4, 2];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
				break;
			case 7:
				// go to 3
				options = [3];
				chosen = options[Math.floor(Math.random() * options.length)];
				progression.push(chosen);
				break;
			default:
				console.log(lastMember);
				alert('something went terribly wrong');
		}
	}
	while (progression.length < numChords)

	const chordList = [];
	for(let i = 0; i < progression.length; ++i)
	{
		chordList.push(keyrow[progression[i] - 1]);
	}

	return chordList;
}

function getKey(majorminor)
{
	// TODO: make user selected
	const majorkeys = [keyamajor, keybmajor, keycmajor, keydmajor, keyemajor, keyfmajor, keygmajor];
	const minorkeys = [keyaminor, keybminor, keycminor, keydminor, keyeminor, keyfminor, keygminor];
	const thekeys = (majorminor === 'major') ? majorkeys : minorkeys;
	return thekeys[Math.floor(Math.random() * thekeys.length)];
}

function convertChordsToOctaveChords(chord, octave)
{
	return chord.notes.map((x) => x = x + octave);
}

let progression;
function getProgression(isRepeat, numChords, isMajor)
{
	if (isRepeat)
		return progression;

	progression = isMajor ? getMajorProgression(numChords) : getMinorProgression(numChords);
	return progression;
}

async function makeTones(progression, octave)
{
	await Tone.start();
	const synth = new Tone.PolySynth().toDestination();

	const seq = new Tone.Sequence((time, chord) =>
	{
		synth.triggerAttackRelease(convertChordsToOctaveChords(chord, octave), '4n');
	}, progression, '4n');

	seq.loop = false;
	seq.start();
	Tone.Transport.start();

}

function generate(isRepeat)
{
	const numChords = $('#numberofchordsrange').val();
	const previewOctave = $('#octaverange').val();
	const majorOrMinor = $('#majorminorrange').val();
	const progression = getProgression(isRepeat, numChords, (majorOrMinor == 1));

	let text = '';
	for (let i = 0; i < progression.length; ++i)
	{
		const chord = progression[i];
		text += '<strong>';
		text += chord.name;
		text += '</strong>';
		text += ': ';
		text += chord.notes.join(', ');
		text += '\r\n';
	}
	$('#viewbox h1').html(text);

	makeTones(progression, previewOctave);
}

$('#generatebutton').click(async () =>
{
	generate(false);
});

$('body').keypress((e) =>
{
	if (e.charCode === 32)
		generate(false);
});

$('#replaybutton').click(async () =>
{
	generate(true);
});

$('#numberofchordsrange').on('input', () =>
{
	const range = $('#numberofchordsrange');
	const value = range.val();
	const output = $('#numberofchordsoutput');
	output.text(value);
});

$('#octaverange').on('input', () =>
{
	const range = $('#octaverange');
	const value = range.val();
	const output = $('#octaveoutput');
	output.text(value);
});

$('#majorminorrange').on('input', () =>
{
	const range = $('#majorminorrange');
	const value = (range.val() == 1) ? 'Major' : 'Minor';
	const output = $('#majorminoroutput');
	output.text(value);
});

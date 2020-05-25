class Chord {
	constructor(notes)
	{
		this.notes = notes;
	}
}

const cmajor = new Chord(['C', 'E', 'G']);
const csharpmajor = new Chord(['C#', 'E#', 'G#']);
const dflatmajor = new Chord(['Db', 'F', 'Ab']);
const dmajor = new Chord(['D', 'F#', 'A']);
const eflatmajor = new Chord(['Eb', 'G', 'Bb']);
const emajor = new Chord(['E', 'G#', 'B']);
const fflatmajor = new Chord(['Fb', 'Ab', 'Cb']);
const fmajor = new Chord(['F', 'A', 'C']);
const fsharpmajor = new Chord(['F#', 'A#', 'C#']);
const gflatmajor = new Chord(['Gb', 'Bb', 'Db']);
const gmajor = new Chord(['G', 'B', 'D']);
const gsharpmajor = new Chord(['G#', 'B#', 'D#']);
const aflatmajor = new Chord(['Ab', 'C', 'Eb']);
const amajor = new Chord(['A', 'C#', 'E']);
const bflatmajor = new Chord(['Bb', 'D', 'F']);
const bmajor = new Chord(['B', 'D#', 'F#']);
const cflatmajor = new Chord(['Cb', 'Eb', 'Gb']);

const cminor = new Chord(['C', 'Eb', 'G']);
const csharpminor = new Chord(['C#', 'E', 'G#']);
const dflatminor = new Chord(['Db', 'Fb', 'Ab']);
const dminor = new Chord(['D', 'F', 'A']);
const dsharpminor = new Chord(['D#', 'F#', 'A#']);
const eflatminor = new Chord(['Eb', 'Gb', 'Bb']);
const eminor = new Chord(['E', 'G', 'B']);
const esharpminor = new Chord(['E#', 'G#', 'B#']);
const fminor = new Chord(['F', 'Ab', 'C']);
const fsharpminor = new Chord(['F#', 'A', 'C#']);
const gminor = new Chord(['G', 'Bb', 'D']);
const gsharpminor = new Chord(['G#', 'B', 'D#']);
const aflatminor = new Chord(['Ab', 'B', 'Eb']);
const aminor = new Chord(['A', 'C', 'E']);
const asharpminor = new Chord(['A#', 'C#', 'E#']);
const bflatminor = new Chord(['Bb', 'Db', 'F']);
const bminor = new Chord(['B', 'D', 'F#']);

const cdim = new Chord(['C', 'Eb', 'Gb']);
const csharpdim = new Chord(['C#', 'E', 'G']);
const ddim = new Chord(['D', 'F', 'Ab']);
const dsharpdim = new Chord(['D#', 'F#', 'A']);
const eflatdim = new Chord(['Eb', 'Gb', 'A']);
const edim = new Chord(['E', 'G', 'Bb']);
const esharpdim = new Chord(['E#', 'G#', 'B']);
const fdim = new Chord(['F', 'Ab', 'Cb']);
const fsharpdim = new Chord(['F#', 'A', 'C']);
const gdim = new Chord(['G', 'Bb', 'Db']);
const gsharpdim = new Chord(['G#', 'B', 'D']);
const aflatdim = new Chord(['Ab', 'Cb', 'D']);
const adim = new Chord(['A', 'C', 'Eb']);
const bflatdim = new Chord(['Bb', 'Db', 'Fb']);
const bdim = new Chord(['B', 'D', 'F']);
const bsharpdim = new Chord(['B#', 'D#', 'F#']);

const keyaminor = [aminor, bdim, cmajor, dminor, eminor, fmajor, gmajor];
const keybminor = [bminor, csharpdim, dmajor, eminor, fsharpminor, gmajor, amajor];
const keycminor = [cminor, ddim, eflatmajor, fminor, gminor, aflatmajor, bflatmajor];
const keydminor = [dminor, edim, fmajor, gminor, aminor, bflatmajor, cmajor];
const keyeminor = [eminor, fsharpdim, gmajor, aminor, bminor, cmajor, dmajor];
const keyfminor = [fminor, gdim, aflatmajor, bflatminor, cminor, dflatmajor, eflatmajor];
const keygminor = [gminor, adim, bflatmajor, cminor, dminor, eflatmajor, fmajor];


function getProgression(numChords)
{
	const keyrow = getKey();
	return keyrow;
}

function getKey()
{
	// for now random, later user selected
	const keys = [keyaminor, keybminor, keycminor, keydminor, keyeminor, keyfminor, keygminor];
	return keys[Math.floor(Math.random() * keys.length)];
}

function convertChordsToOctaveChords(chord, octave)
{
	return chord.notes.map((x) => x = x + octave);
}

$('#generatebutton').click(async () => {
	await Tone.start();
	const synth = new Tone.PolySynth(3, Tone.Synth).toMaster();

	const numChords = $('#numChordsSelect')[0].value;
	const seq = new Tone.Sequence((time, chord) =>
	{
		const octave = $('#numOctaveSelect')[0].value;
		synth.triggerAttackRelease(convertChordsToOctaveChords(chord, octave), '4n');
	}, getProgression(numChords), '4n');

	seq.loop = false;
	seq.start();

	Tone.Transport.start();
});

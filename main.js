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
const csharpminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);
const cminor = new Chord(['', '', '']);


function getProgression(numChords)
{
	const chords = [cmajor, csharpmajor, eflatmajor];
	return chords;
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

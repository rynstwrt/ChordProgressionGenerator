// Set Variables
const synth = new Tone.PolySynth().toDestination();
synth.set({
	polyphony: 2,
	volume: -1,
	voice: Tone.Synth
});
let part;

// Generate the progression, display it, then play it
function presentChord(isReplay)
{
	if (!part && isReplay) return; // If replaying with no data

	// Reset
	Tone.Transport.stop();
	if (part && !isReplay)
	{
		part.clear();
	}

	if (!isReplay)
	{
		// Get inputs
		const numChords = $('#numberofchordsrange').val();
		const previewOctave = $('#octaverange').val();
		const isMajorKey = $('#majorminorrange').val() == 1;
		const noteDuration = $('#notedurationoutput').text();

		// Generate progression using ChordGenerator.js
		const generator = new ChordGenerator();
		const progression = isMajorKey ?
							generator.makeMajorProgression(numChords) :
							generator.makeMinorProgression(numChords);

		// Convert to format Tone.js can understand
		let synthProgression = [];
		progression.chords.map((chord) => chord = chord.notes).forEach((array, i) =>
		{
			array.forEach((note, noteIndex) =>
			{
				synthProgression.push({ time: i / (parseInt(noteDuration) / 2), note: note + previewOctave });
			});
		});

		// Set text
		let outputString = '';
		for (chordIndex in progression.chords)
		{
			const chord = progression.chords[chordIndex];
			outputString += `<strong>${chord.name}</strong>: ${chord.notes.join(' ')}\r\n`;
		}
		$('#viewbox h1').html(outputString);

		// Set up part to play
		part = new Tone.Part((time, value) =>
		{
			synth.triggerAttackRelease(value.note, noteDuration, time);
		}, synthProgression).start(0);
	}

	// Play sound
	Tone.start();
	Tone.Transport.start();
}

// Generate on click
$('#generatebutton').click(() =>
{
	presentChord(false);
});

// Replay on click
$('#replaybutton').click(() =>
{
	presentChord(true);
});

// Set text of label for numberofchordsrange slider on change
$('#numberofchordsrange').on('input', () =>
{
	const range = $('#numberofchordsrange');
	const value = range.val();
	const output = $('#numberofchordsoutput');
	output.text(value);
});

// Set text of label for octaverange slider on change
$('#octaverange').on('input', () =>
{
	const range = $('#octaverange');
	const value = range.val();
	const output = $('#octaveoutput');
	output.text(value);
});

// Set text of label for majorminorrange slider on change
$('#majorminorrange').on('input', () =>
{
	const range = $('#majorminorrange');
	const value = (range.val() == 1) ? 'Major' : 'Minor';
	const output = $('#majorminoroutput');
	output.text(value);
});

// Set text of label for notedurationrange slider on change
$('#notedurationrange').on('input', () =>
{
	const range = $('#notedurationrange');
	const value = Math.pow(2, range.val()) + 'n';
	const output = $('#notedurationoutput');
	output.text(value);
});

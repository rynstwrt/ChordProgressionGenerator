// Set Variables
const synth = new Tone.PolySynth().toDestination();
synth.set({ volume: -15 });
let part;

// Generate the progression, display it, then play it
async function presentChord(isReplay)
{
	if (!part && isReplay) return; // If replaying with no data

	// Reset
	Tone.Transport.stop();
	if (part && !isReplay)
		part.clear();

	if (!isReplay)
	{
		// Get inputs
		const numChords = $('#numberofchordsrange').val();
		const previewOctave = $('#octaverange').val();
		const isMajorKey = $('#majorminorrange').val() == 1;
		const bpm = $('#bpmrange').val();

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
				synthProgression.push({ time: i / (bpm / 60), note: note + previewOctave });
			});
		});

		console.log(synthProgression);

		// Set text
		let outputString = '';
		for (chordIndex in progression.chords)
		{
			const chord = progression.chords[chordIndex];
			outputString += `<strong>${chord.name}</strong>: ${chord.notes.join(' ')}\r\n`;
		}
		$('#screen h1').html(outputString);

		// Set up part to play
		Tone.Transport.bpm.value = bpm;
		part = await new Tone.Part((time, value) =>
		{
			console.log(value);
			synth.triggerAttackRelease(value.note, '4n', time);
		}, synthProgression).start(0);
	}

	// Play sound
	await Tone.start();
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
	const output = $('#numberofchordsoutput');
	output.text(range.val());
});

// Set text of label for octaverange slider on change
$('#octaverange').on('input', () =>
{
	const range = $('#octaverange');
	const output = $('#octaveoutput');
	output.text(range.val());
});

// Set text of label for majorminorrange slider on change
$('#majorminorrange').on('input', () =>
{
	const range = $('#majorminorrange');
	const value = (range.val() == 1) ? 'Major' : 'Minor';
	const output = $('#majorminoroutput');
	output.text(value);
});

// Set text of label for BPM slider on change
$('#bpmrange').on('input', () =>
{
	const range = $('#bpmrange');
	const output = $('#bpmoutput');
	output.text(range.val());
});

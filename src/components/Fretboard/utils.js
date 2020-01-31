import { notes, instruments } from '../../utils';

const DEFAULT_FRETCOUNT = 15;

export function generateFretboard(tuning = instruments.guitar, fretCount = DEFAULT_FRETCOUNT) {
  return tuning.map(note => guitarString(note, fretCount));
}

export function guitarString(baseNote = 0, fretCount = DEFAULT_FRETCOUNT) {
  const notesArray = new Array(fretCount).fill();
  return notesArray.reduce((acc, _, idx) => [...acc, (baseNote + idx) % 12], []);
}

export function mapScale(matrix, root, intervals) {
  const rootedScale = intervals.map(n => (n + root) % 12);
  return matrix.map(stringNotes =>
    stringNotes.map(note => (rootedScale.includes(note) ? note : null)),
  );
}

export function mapNotesNames(matrix) {
  return matrix.map(stringNotes => stringNotes.map(note => notes.sharpMap[note]));
}
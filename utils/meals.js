export function formatInstructions(instructions) {
  return instructions
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
}

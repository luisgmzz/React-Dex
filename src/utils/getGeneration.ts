export default function getGeneration(id: number): number {
  const generations = [151, 251, 386, 493, 649, 721, 809, 905];

  const gen = generations.find(gen => gen > id) || 100;
  return generations.indexOf(gen);
}

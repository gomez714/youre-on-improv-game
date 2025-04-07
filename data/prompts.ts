export type GameMode =
  | 'role-roulette'
  | 'make-some-noise'
  | 'unlikely-psa'
  | 'tagline-takeover'
  | 'lie-detector'
  | 'reboot-it';

export interface Prompt {
  id: string;
  mode: GameMode;
  text: string;
}

export const prompts: Prompt[] = [
  {
    id: '1',
    mode: 'role-roulette',
    text: "You are a deeply insecure pirate giving a TED Talk on leadership — in a Chuck E. Cheese.",
  },
  {
    id: '2',
    mode: 'make-some-noise',
    text: "Make the sound of a haunted vending machine begging for release.",
  },
  {
    id: '3',
    mode: 'unlikely-psa',
    text: "The dangers of letting raccoons invest in cryptocurrency.",
  },
  {
    id: '4',
    mode: 'tagline-takeover',
    text: "Introducing: Fork 2.0 — now with zero prongs.",
  },
  {
    id: '5',
    mode: 'lie-detector',
    text: "You invented elbows.",
  },
  {
    id: '6',
    mode: 'reboot-it',
    text: "Reboot Beanie Babies as an emo boy band trying to save their failing tour.",
  },
];
export interface TimeParts {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export enum ClockFormat {
  H12 = '12h',
  H24 = '24h'
}
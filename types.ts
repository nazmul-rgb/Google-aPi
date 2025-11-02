
export enum RecordingState {
  IDLE = 'IDLE',
  RECORDING = 'RECORDING',
  PROCESSING = 'PROCESSING',
}

export interface Language {
  code: string;
  name: string;
}

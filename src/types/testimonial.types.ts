export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  ringColor: string;
  stars: number;
}

export interface WaveSlot {
  x: number;
  y: number;
  size: number;
}

export interface WaveDot {
  x: number;
  y: number;
}

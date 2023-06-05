interface JukeboxResponse {
  min: number;
  max: number;
  elements: number;
  avg: number;
}

export class JukeboxMath {
  static compute(numbers: number[]): JukeboxResponse {
    if (numbers.length === 0) {
      throw new Error("Empty array");
    }
    return {} as JukeboxResponse;
  }
}

export interface JukeboxResponse {
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

    if (numbers.some((n) => !Number.isInteger(n))) {
      throw new Error("Integer numbers only");
    }

    const min = this.getMin(numbers);
    const max = this.getMax(numbers);
    const avg = this.getAvg(numbers);
    const elements = this.getElementsCount(numbers);
    return { min, max, avg, elements };
  }

  private static getMin(numbers: number[]): number {
    return numbers.reduce((acc, curr) => (acc < curr ? acc : curr), numbers[0]);
  }

  private static getMax(numbers: number[]): number {
    return numbers.reduce((acc, curr) => (acc > curr ? acc : curr), numbers[0]);
  }

  private static getAvg(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
  }

  private static getElementsCount(numbers: number[]): number {
    return numbers.length;
  }
}

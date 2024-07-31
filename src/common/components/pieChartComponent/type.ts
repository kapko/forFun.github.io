export  interface ExtendedPoint extends Highcharts.Point {
  connector?: {
    attr: (key: string, value: string) => void;
  };
}
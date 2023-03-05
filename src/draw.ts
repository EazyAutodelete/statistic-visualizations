import { ChartJSNodeCanvas } from "chartjs-node-canvas";
import fs from "fs";

const draw = async (data: any, name: string) => {
  const canvas = new ChartJSNodeCanvas({
    width: 400,
    height: 400,
    backgroundColour: "#fff",
  });

  const cfg = {
    type: "pie",
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          label: "Dataset 1",
          data: Object.values(data),
          backgroundColor: [
            "#ff0000",
            "#ff5300",
            "#ffa500",
            "#ffd200",
            "#ffff00",
            "#80c000",
            "#008000",
            "#004080",
            "#0000ff",
            "#2600c1",
            "#4b0082",
          ],
        },
      ],
    },
    plugins: {
      colors: {
        enabled: false,
      },
    },
  } as any;

  canvas.renderToStream(cfg).pipe(fs.createWriteStream("./img/" + name + ".png"));
};

export default draw;

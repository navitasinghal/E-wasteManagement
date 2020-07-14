import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { Pie, PieChart, Sector, Cell } from "recharts";
import ReactToPdf from "react-to-pdf";
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";

function Insight() {
  const mobileData = [
    { element: "Copper", value: 3574 },
    { element: "Silver", value: 772 },
    { element: "Gold", value: 75 },
    { element: "Palladium", value: 133 }
  ];

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input")], {
      type: "text/plain;charset=utf-8"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const printToPdf = () => {
    html2canvas(document.getElementById("print_to_pdf")).then(canvas => {
      var data = canvas.toDataURL();
      var pdfExportSetting = {
        content: [
          {
            image: data,
            width: 500
          }
        ]
      };
      pdfMake.createPdf(pdfExportSetting).download("test_file.pdf");
    });
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const ref = React.createRef();
  return (
    <div>
      <div>
        <ReactToPdf
          targetRef={ref}
          filename="div-blue.pdf"
          orientation="landscape"
        >
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
        <button onClick={printToPdf}>Generate Text</button>
      </div>

      <div ref={ref} id="print_to_pdf">
        <Paper>
          Hello Pie chart
          <PieChart width={730} height={250}>
            <Pie
              data={mobileData}
              dataKey="value"
              nameKey="element"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={80}
              label
            >
              {mobileData.map((item, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </Paper>
        <Typography id="input">
          For every 1 million cell phones that are recycled, 35,274 lbs of
          copper, 772 lbs of silver, 75 lbs of gold, and 33 lbs of palladium can
          be recovered
        </Typography>
      </div>
    </div>
  );
}

export default Insight;

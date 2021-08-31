function sortFunction(a, b) {
  if (a[0] === b[0]) {
    return 0;
  } else {
    return a[0] < b[0] ? -1 : 1;
  }
}

function download(content, fileName, contentType) {
  console.log("Hola");
  let a = document.createElement("a");
  let file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

(() => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const $downloadButton = document.querySelector(".download-button");
      $downloadButton.addEventListener("click", () => {
        download(xhr.responseText, "database.json", "text/plain");
      });
      const jsonObjects = JSON.parse(xhr.responseText);
      const df = [];
      const dfAge = [];
      const dfImc = [];
      jsonObjects.forEach((i) => {
        df.push([i.age, i.imc]);
      });
      df.sort(sortFunction);
      df.forEach((i) => {
        dfAge.push(i[0]);
        dfImc.push(i[1]);
      });

      let ctx = document.getElementById("myChart").getContext("2d");
      let myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: dfAge,
          datasets: [
            {
              label: "imc",
              data: dfImc,
              backgroundColor: ["#00bcd4"],
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Gráfico IMC vs Edad",
              font: {
                family: "Poppins, sans-serif",
                size: 20,
              },
            },
            legend: {
              display: false,
            },
          },
          scales: {
            yAxes: {
              title: {
                display: true,
                text: "IMC",
                font: {
                  size: 15,
                },
              },
              ticks: {
                precision: 0,
              },
            },
            xAxes: {
              title: {
                display: true,
                text: "Edad",
                font: {
                  size: 15,
                },
              },
            },
          },
        },
      });
    } else {
      console.log(xhr.statusText);
    }
  });
  xhr.open("GET", "files/dataframe.json");
  xhr.send();
})();

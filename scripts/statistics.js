(() => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const jsonObjects = JSON.parse(xhr.responseText);
      const dfWeight = [];
      const dfHeight = [];
      const dfImc = [];
      const dfAge = [];
      jsonObjects.forEach((i) => {
        dfWeight.push(i.weight);
        dfHeight.push(i.height);
        dfImc.push(i.imc);
        dfAge.push(i.age);
      });

      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: dfAge,
          datasets: [
            {
              label: "Num datos",
              data: dfImc,
              backgroundColor: ["rgb(66, 134, 244,0.5)"],
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
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

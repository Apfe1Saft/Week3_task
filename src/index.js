fetch("https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff")
  .then((response) => response.json())
  .then((data) => {
    // Extract the necessary data from the JSON
    const municipalities = data.dataset.dimension.Alue.category.label;
    const populationData = data.dataset.value;

    // Populate the table with the fetched data
    const tableBody = document.getElementById("dataRows");
    for (let i = 0; i < municipalities.length; i++) {
      const row = document.createElement("tr");
      const municipalityCell = document.createElement("td");
      municipalityCell.textContent = municipalities[i];
      const populationCell = document.createElement("td");
      populationCell.textContent = populationData[i];
      row.appendChild(municipalityCell);
      row.appendChild(populationCell);
      tableBody.appendChild(row);
    }
  })
  .catch((error) => console.error("Error:", error));

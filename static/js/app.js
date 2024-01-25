// Fetch the JSON data
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  // Populate the dropdown with the sample names
  let dropdownMenu = d3.select("#selDataset");
  data.names.forEach(name => {
    dropdownMenu.append("option").text(name).property("value", name);
  });

  // Initialize the charts with the first sample
  optionChanged(data.names[0], data);

  // Update the charts when a new sample is selected
  dropdownMenu.on("change", function() {
    let newId = d3.select(this).property("value");
    optionChanged(newId, data);
  });
});

// Function to handle change on dropdown
function optionChanged(id, data) {
  let sample = data.samples.filter(s => s.id === id)[0];
  
  // Creating arrays
  let sample_values = sample.sample_values.slice(0, 10).reverse();
  let otu_ids = sample.otu_ids.slice(0, 10).reverse().map(otuID => `OTU ${otuID}`);
  let otu_labels = sample.otu_labels.slice(0, 10).reverse();

  // Bar chart
  let trace1 = {
    x: sample_values,
    y: otu_ids,
    text: otu_labels,
    type: "bar",
    orientation: "h"
  };

  let layout1 = {
    title: "Top 10 OTUs Found",
    margin: { t: 30, l: 150 }
  };

  Plotly.newPlot("bar", [trace1], layout1);

  // Bubble chart
  let trace2 = {
    x: sample.otu_ids,
    y: sample.sample_values,
    text: sample.otu_labels,
    mode: 'markers',
    marker: {
      size: sample.sample_values,
      color: sample.otu_ids,
    }
  };

  let layout2 = {
    title: 'OTU ID',
    showlegend: false,
  };

  Plotly.newPlot('bubble', [trace2], layout2);

  // Display metadata
  let metadata = data.metadata.filter(m => m.id == id)[0];
  let panel = d3.select("#sample-metadata");

  // Clear existing metadata
  panel.html("");

  // Append new metadata
  Object.entries(metadata).forEach(([key, value]) => {
    panel.append("h6").text(`${key}: ${value}`);
  });
}



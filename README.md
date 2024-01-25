# belly-button-challenge

This Challenge builds an interactive dashboard to explore the Belly Button Biodiversity dataset. To achieve this, the D3 library was used to read the data from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json. A drop-down menu was designed to allow the user to select a test subject ID number. After the selection, the user can see the following information:  
1) Demographic informational panel: this is the individual's demographic information, collected from the metadata JSON object from the dataset. 
2) A Horizontal bar graph displaying the top 10 OTUs(operational taxonomic units) for this individual.
3) A Bubble chart that displays each sample: the size of the bubbles is dependent on the sample_values JSON object from the dataset. 

The Javascript code can be found in the app.js file inside the static folder. 

GitHub page: https://yasmin-9.github.io/belly-button-challenge/



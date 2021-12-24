import React, { useEffect, useState } from "react";
import { Container, Button, FormControl, TextField, FormGroup, Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
import addField from "./utils/utils";

function App() {
	// POSSIBLE FIELDS AND CHART TITLE
	const [labels, setLabels] = useState({
		allValues: ["red", "blue", "yellow"],
		actualLabel: ""
	});
	const [fieldValues, setFieldValues] = useState({
		allValues: [10, 20, 11],
		actualFieldValue: 0,		
	});
	const [bgColors, setBgColors] = useState({
		allValues: ["red", "blue", "yellow"],
		actualBgColor: ""
	});
	const [graphTitle, setGraphTitle] = useState("");

	// CONTROLS CHART RENDERS
	const [chartData, setChartData] = useState({
		labels: labels.allValues,
		datasets: [{
			label: graphTitle,
			data: fieldValues.allValues,
			backgroundColor: bgColors.allValues
		}]
	})

	const updateChartData = () => setChartData({
			labels: [...labels.allValues],
			datasets: [{
				label: graphTitle,
				data: [...fieldValues.allValues],
				backgroundColor: [...bgColors.allValues]
			}]
		})
	

	// SET ALL CHART FIELDS
	const setAllFields = () =>{
		// console.log(labels, bgColors, fieldValues)
		setGraphTitle(graphTitle);
		setLabels({allValues: labels.allValues, actualLabel: ""});
		setBgColors({allValues: bgColors.allValues});
		setFieldValues({allValues: fieldValues.allValues, actualFieldValue: 0});
		updateChartData();
		console.log(labels, bgColors, fieldValues)
	}

	// RESET CHART DATA
	const resetChart = () => {
		setGraphTitle("");
		setLabels({...labels, allValues: [], actualLabel: ""});
		setBgColors({...bgColors, allValues: [], actualBgColor: ""});
		setFieldValues({...fieldValues, allValues: [], actualFieldValue: 0});
		updateChartData();
		console.log(labels, bgColors, fieldValues)
	}

	// ARRAY OF ALL INDIVIDUALFIELDS AND A ARRAY THAT CONTAINS ALL THE FIELDS
	let newFields = [labels.actualLabel, fieldValues.actualFieldValue, bgColors.actualBgColor];
	let allFieldVals = [labels.allValues, fieldValues.allValues, bgColors.allValues];

	return (
		<Container>
			<Bar
				data={chartData}
				width={600}
				height={350}
				// options={{
				// 	maintainAspectRatio: false,
				// }}
        	/>
			<FormGroup>
				<Box>
					<Container style={styles.container}>
						<TextField 
							label="label" 
							type="text" 
							size="medium" 
							value={labels.actualLabel}
							onChange={(e) => setLabels({...labels, actualLabel: e.target.value})}
						/>
						<TextField 
							label="value"
							type="number" 
							size="medium" 
							value={fieldValues.actualFieldValue}
							onChange={(e) => setFieldValues({...fieldValues, actualFieldValue: parseInt(e.target.value)})}
						/>
						<input 
							type="color" 
							style={styles.colorInput} 
							value={bgColors.actualBgColor}
							onChange={(e) => setBgColors({...bgColors, actualBgColor: e.target.value})}
						/>
						<TextField 
							label="chart title" 
							type="text" 
							size="medium"
							value={graphTitle} 
							onChange={(e) => setGraphTitle(e.target.value)}
						/>
					</Container>
					<Container style={styles.container}>
						<Button 
							variant="outlined" 
							color="info" 
							size="large" 
							onClick={() => {
								addField(newFields,allFieldVals)
								setAllFields()
								updateChartData()
							}}
						>
							add field
						</Button>
						<Button 
							variant="outlined" 
							color="info" 
							size="large"
							onClick={() => resetChart()}
						>
							reset
						</Button>
					</Container>
				</Box>
			</FormGroup>
		</Container>
	);
}

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	}, 

	colorInput: {
		width: '200px',
		height: '60px',
		border: 'none'
	}
}

export default App;

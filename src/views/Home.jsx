// UTILS
import { useState } from "react";
// COMPONENTS
import BarGraph from "./components/BarGraph";
import { Container, Button, TextField, FormGroup, Box, FormControl } from "@mui/material";

function Home() {
    // GRAPH DATA 
    const [labels, setLabels] = useState([]);
    const [title, setTitle] = useState('');
    const [dataSets, setDataSets] = useState([]);
    const [backgroundColors, setBackgroundColors] = useState([]);

    // INPUT VALUES
    const [labelInput, setLabelInput] = useState('');
    const [dataInput, setDataInput] = useState('');
    const [backgroundColorInput, setBackgroundColorInput] = useState('#000000');

    const addGraphData = () => {
        setLabels([...labels, labelInput]);
        setDataSets([...dataSets, dataInput]);
        setBackgroundColors([...backgroundColors, backgroundColorInput]);
        setDataInput(0);
        setLabelInput('');
    }

    const resetGraphData = () => {
        setLabels([]);
        setTitle('');
        setDataSets([]);
        setBackgroundColors([]);
    }

    return ( 
    <>
        <BarGraph 
            title={title} 
            data={dataSets}  
            backgroundColors={backgroundColors}
            labels={labels}
        />
        <FormGroup>
            <Box>
                <Container style={styles.container}>
                    <TextField 
                        label="label" 
                        type="text" 
                        size="medium" 
                        value={labelInput}
                        onChange={(e) => setLabelInput(e.target.value)}
                    />
                    <TextField 
                        label="value"
                        type="number" 
                        step="any"
                        size="medium" 
                        inputProps={{
                            step: "any"
                        }}
                        value={dataInput}
                        onChange={(e) => setDataInput(parseFloat(e.target.value))}
                    />
                    <input 
                        type="color" 
                        style={styles.colorInput} 
                        value={backgroundColorInput}
                        onChange={(e) => setBackgroundColorInput(e.target.value)}
                    />
                    <TextField 
                        label="chart title" 
                        type="text" 
                        size="medium"
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Container>
                <Container style={styles.container}>
                    <Button 
                        variant="outlined" 
                        color="info" 
                        size="large" 
                        onClick={addGraphData}
                    >
                        add field
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="info" 
                        size="large"
                        onClick={resetGraphData}
                    >
                        reset
                    </Button>
                </Container>
            </Box>
        </FormGroup>
    </>
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

export default Home;
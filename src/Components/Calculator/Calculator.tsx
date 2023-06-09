import { useFormik } from "formik";
import * as SC from "./CalculatorStyled"
import { useEffect } from "react";

interface IValues {
    system: string;
    weight: number;
    height: number;
    
}

interface IProps{
    calculateBMI: (weight: number, height: number) => void;
    bmi: number;
    idealWeightRange: string;
}

const Calculator: React.FC<IProps> = ({ calculateBMI, bmi, idealWeightRange }) => {

    const formik = useFormik<IValues>({
        initialValues: {
            system: "metric",
            height: 0,
            weight: 0,
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleRadioChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)

    }

    const handleValuesChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)

    }


    useEffect(() => {
        if (formik.values.height > 0 && formik.values.weight > 0) {
            calculateBMI(formik.values.weight, formik.values.height)
        }
        return
}, [calculateBMI, formik.values.height, formik.values.weight])
    

    return (<SC.FormContainer>

        <SC.CustomForm >
            <SC.Title>Enter your details below</SC.Title>
            <SC.RadioContainer>
                <SC.RadioLabel htmlFor="metric">
                    <SC.RadioInput
                        type="radio"
                        id="metric"
                        name="system"
                        value="metric"
                        checked={formik.values.system === "metric"}
                        onChange={handleRadioChange}
                    />
                    Metric
                </SC.RadioLabel>
                <SC.RadioLabel htmlFor="male">
                    <SC.RadioInput
                        type="radio"
                        id="imperial"
                        name="system"
                        value="imperial"
                        checked={formik.values.system === "imperial"}
                        onChange={handleRadioChange}
                    />
                    Imperial
                </SC.RadioLabel>
            </SC.RadioContainer>
            {formik.values.system === "metric" ?
                <>
                    <SC.DataContainer>
                        <SC.DataLabel htmlFor="height">Height</SC.DataLabel>
                        <SC.DataInput type="number" name="height" onChange={handleValuesChange} />
                        <SC.DataText>cm</SC.DataText>
                    </SC.DataContainer>
                    <SC.DataContainer>
                        <SC.DataLabel htmlFor="weight">Weight</SC.DataLabel>
                        <SC.DataInput type="number" name="weight" onChange={handleValuesChange}/>
                        <SC.DataText>kg</SC.DataText>
                    </SC.DataContainer>
                </>
                : <SC.ImperialDataContainer>
                    <SC.DataLabel htmlFor="height">Height</SC.DataLabel>
                    <SC.InputContainer>
                        
                        <SC.FlexElement>

                            <SC.ImperialInput type="text" name="height" />
                            <SC.ImperialDataText text="main">ft</SC.ImperialDataText>
                           
                        </SC.FlexElement>
                        <SC.FlexElement>
                            <SC.ImperialInput type="text" name="height" />
                            <SC.ImperialDataText>in</SC.ImperialDataText>
                        </SC.FlexElement>
                    </SC.InputContainer>
                    <SC.DataLabel htmlFor="weight">Weight</SC.DataLabel>
                    <SC.InputContainer>
                        <SC.FlexElement>
                            <SC.ImperialInput type="text" name="weight" />
                            <SC.ImperialDataText text="main">st</SC.ImperialDataText>
                        </SC.FlexElement>
                        <SC.FlexElement>
                            <SC.ImperialInput type="text" name="weight" />
                            <SC.ImperialDataText>lbs</SC.ImperialDataText>
                        </SC.FlexElement>
                    </SC.InputContainer>
                </SC.ImperialDataContainer>}
            {bmi > 0 ? <SC.ResultContainer>
                <p>Your BMI is...</p>
                <SC.ResultTitle>{bmi}</SC.ResultTitle>
                <SC.ResultText>Your BMI suggests you’re a healthy weight. Your ideal weight is between {idealWeightRange} kgs.</SC.ResultText></SC.ResultContainer> : <SC.ResultContainer>
                <SC.ResultTitle>Welcome!</SC.ResultTitle>
                <SC.ResultText>Enter your height and weight and you’ll see your BMI result here</SC.ResultText></SC.ResultContainer>}

            
        </SC.CustomForm>
    </SC.FormContainer>
    );
}

export default Calculator;
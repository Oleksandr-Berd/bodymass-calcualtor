import { useFormik } from "formik";
import * as SC from "./CalculatorStyled"
import { useEffect } from "react";
import backgroundImage from "assets/images/Ellipse 7.png"

interface IValues {
    system: string;
    weight: number;
    height: number;
    weightStones: number;
    weightPounds: number;
    heightFeet: number;
    heightInches: number;

}

interface IProps {
    calculateBMI: (weight: number, height: number) => void;
    calculateImperialBMI: (weightStones: number, weightPounds: number, heightFeet: number, heightInches: number) => void;
    resetBmi: () => void;
    bmi: number;
    imperialBmi: number;
    idealWeightRange: string;
}

const Calculator: React.FC<IProps> = ({ calculateBMI, bmi, idealWeightRange, imperialBmi, calculateImperialBMI, resetBmi }) => {

    const formik = useFormik<IValues>({
        initialValues: {
            system: "metric",
            height: 0,
            weight: 0,
            weightStones: 0,
            weightPounds: 0,
            heightFeet: 0,
            heightInches: 0,
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleRadioChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt);

        const { value } = evt.target;
        const initialValues = {
            system: value,
            height: 0,
            weight: 0,
            weightStones: 0,
            weightPounds: 0,
            heightFeet: 0,
            heightInches: 0,
        };

        formik.resetForm({ values: initialValues });
    };

    const handleValuesChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)

    }


    useEffect(() => {
        if (formik.values.height > 0 && formik.values.weight > 0) {
            calculateBMI(formik.values.weight, formik.values.height)
        }

        if (formik.values.weightStones > 0 && formik.values.heightFeet > 0) {
            calculateImperialBMI(formik.values.weightStones, formik.values.weightPounds, formik.values.heightFeet, formik.values.heightInches)
        }
        return
    }, [calculateBMI, calculateImperialBMI, formik.values.height, formik.values.heightFeet, formik.values.heightInches, formik.values.weight, formik.values.weightPounds, formik.values.weightStones])


    useEffect(() => {
        resetBmi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values.system])

    return (<SC.FormContainer>

        <SC.CustomForm >
            <SC.Title>Enter your details below</SC.Title>
            <SC.RadioContainer>
                <SC.RadioLabel htmlFor="metric">
                    
                    <SC.RadioInput
                        image={backgroundImage}
                        type="radio"
                        id="metric"
                        name="system"
                        value="metric"
                        checked={formik.values.system === "metric"}
                        onChange={handleRadioChange}
                    />
                    <SC.CustomRadio image={backgroundImage}></SC.CustomRadio>
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
                    <SC.CustomRadio image={backgroundImage}></SC.CustomRadio>
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
                        <SC.DataInput type="number" name="weight" onChange={handleValuesChange} />
                        <SC.DataText>kg</SC.DataText>
                    </SC.DataContainer>
                </>
                : <SC.ImperialDataContainer>
                    <SC.DataLabel htmlFor="height">Height</SC.DataLabel>
                    <SC.InputContainer>

                        <SC.FlexElement>

                            <SC.ImperialInput type="number" name="heightFeet" onChange={handleValuesChange} />
                            <SC.ImperialDataText text="main">ft</SC.ImperialDataText>

                        </SC.FlexElement>
                        <SC.FlexElement>
                            <SC.ImperialInput type="number" name="heightInches" onChange={handleValuesChange} />
                            <SC.ImperialDataText>in</SC.ImperialDataText>
                        </SC.FlexElement>
                    </SC.InputContainer>
                    <SC.DataLabel htmlFor="weight">Weight</SC.DataLabel>
                    <SC.InputContainer>
                        <SC.FlexElement>
                            <SC.ImperialInput type="number" name="weightStones" onChange={handleValuesChange} />
                            <SC.ImperialDataText text="main">st</SC.ImperialDataText>
                        </SC.FlexElement>
                        <SC.FlexElement>
                            <SC.ImperialInput type="number" name="weightPounds" onChange={handleValuesChange} />
                            <SC.ImperialDataText>lbs</SC.ImperialDataText>
                        </SC.FlexElement>
                    </SC.InputContainer>
                </SC.ImperialDataContainer>}
            {bmi > 0 && imperialBmi === 0 ? <SC.ResultContainer>
                <p style={{ fontWeight: "600", marginBottom: "8px" }}>Your BMI is...</p>
                <SC.ResultTitle>{bmi}</SC.ResultTitle>
                <SC.ResultText>Your BMI suggests you’re a healthy weight. Your ideal weight is between{" "}
                    <span style={{ fontWeight: "700" }}>{idealWeightRange}{" "}</span>
                    kgs.</SC.ResultText></SC.ResultContainer> : imperialBmi === 0 ? <SC.ResultContainer>
                        <SC.ResultTitle>Welcome!</SC.ResultTitle>
                        <SC.ResultText>Enter your height and weight and you’ll see your BMI result here</SC.ResultText></SC.ResultContainer> : null}

            {imperialBmi > 0 && <SC.ResultContainer>
                <p style={{ fontWeight: "600", marginBottom: "8px" }}>Your BMI is...</p>
                <SC.ResultTitle>{imperialBmi}</SC.ResultTitle>
                <SC.ResultText>Your BMI suggests you’re a healthy weight. Your ideal weight is between{" "}
                    <span style={{ fontWeight: "700" }}>{idealWeightRange}{" "}</span>
                    lbs.</SC.ResultText></SC.ResultContainer>}

        </SC.CustomForm>
    </SC.FormContainer>
    );
}

export default Calculator;
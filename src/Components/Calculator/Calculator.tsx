import { useFormik } from "formik";
import * as Yup from 'yup';
import { useEffect } from "react";

import * as SC from "./CalculatorStyled"
import backgroundImage from "assets/images/Ellipse 7.png"
import { toast } from "react-toastify";

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

const InputDataSchema = Yup.object().shape({

    weight: Yup.number().positive("Only positive number allowed").integer("Number must be an integer").max(999),
    height: Yup.number().positive("Only positive number allowed").integer("Number must be an integer").max(999),
    weightStones: Yup.number().positive("Only positive number allowed").integer("Number must be an integer").max(999),
    weightPounds: Yup.number().positive("Only positive number allowed").integer("Number must be an integer").max(999),
    heightFeet: Yup.number().positive("Only positive number allowed").integer("Number must be an integer").max(999),
    heightInches: Yup.number().positive("Only positive number allowed").integer("Number must be an integer").max(999),
});

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
        validationSchema: InputDataSchema,
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


        setTimeout(() => { formik.handleChange(evt) }, 300)

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

    const customId = "";


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
                <SC.FlexDataContainer>
                    <SC.DataContainer>
                        <SC.DataLabel htmlFor="height">Height</SC.DataLabel>
                        <SC.DataInput type="number" name="height" onChange={handleValuesChange} />
                        {formik.errors.height && formik.values.height !== 0 ? toast.error(formik.errors.height, {
                            position: toast.POSITION.TOP_LEFT, toastId: customId
                        }) : null}
                        <SC.DataText>cm</SC.DataText>
                    </SC.DataContainer>
                    <SC.DataContainer>
                        <SC.DataLabel htmlFor="weight">Weight</SC.DataLabel>
                        <SC.DataInput type="number" name="weight" onChange={handleValuesChange} />
                        {formik.errors.weight && formik.values.weight !== 0 ? toast.error(formik.errors.weight, {
                            position: toast.POSITION.TOP_LEFT, toastId: customId
                        }) : null}
                        <SC.DataText>kg</SC.DataText>
                    </SC.DataContainer>
                </SC.FlexDataContainer>
                : <SC.ImperialDataContainer>
                    <SC.DataLabel htmlFor="height">Height</SC.DataLabel>
                    <SC.InputContainer>

                        <SC.FlexElement>

                            <SC.ImperialInput type="number" name="heightFeet" onChange={handleValuesChange} />
                            {formik.errors.heightFeet && formik.values.heightFeet !== 0 ? toast.error(formik.errors.heightFeet, {
                                position: toast.POSITION.TOP_LEFT, toastId: customId
                            }) : null}
                            <SC.ImperialDataText text="main">ft</SC.ImperialDataText>

                        </SC.FlexElement>
                        <SC.FlexElement>
                            <SC.ImperialInput type="number" name="heightInches" onChange={handleValuesChange} />
                            {formik.errors.heightInches && formik.values.heightInches !== 0 ? toast.error(formik.errors.heightInches, {
                                position: toast.POSITION.TOP_LEFT, toastId: customId
                            }) : null}
                            <SC.ImperialDataText>in</SC.ImperialDataText>
                        </SC.FlexElement>
                    </SC.InputContainer>
                    <SC.DataLabel htmlFor="weight">Weight</SC.DataLabel>
                    <SC.InputContainer>
                        <SC.FlexElement>
                            <SC.ImperialInput type="number" name="weightStones" onChange={handleValuesChange} />
                            {formik.errors.weightStones && formik.values.weightStones !== 0 ? toast.error(formik.errors.weightStones, {
                                position: toast.POSITION.TOP_LEFT, toastId: customId
                            }) : null}
                            <SC.ImperialDataText text="main">st</SC.ImperialDataText>
                        </SC.FlexElement>
                        <SC.FlexElement>
                            <SC.ImperialInput type="number" name="weightPounds" onChange={handleValuesChange} />
                            {formik.errors.weightPounds && formik.values.weightPounds !== 0 ? toast.error(formik.errors.weightPounds, {
                                position: toast.POSITION.TOP_LEFT, toastId: customId
                            }) : null}
                            <SC.ImperialDataText>lb</SC.ImperialDataText>
                        </SC.FlexElement>
                    </SC.InputContainer>
                </SC.ImperialDataContainer>}
            {bmi > 0 && imperialBmi === 0 ? <SC.ResultContainer>
                <div>
                <p style={{ fontWeight: "600", marginBottom: "8px", fontSize: "16px" }}>Your BMI is...</p>
                    <SC.ResultTitle>{bmi}</SC.ResultTitle>
                </div>
                <div>
                <SC.ResultText>Your BMI suggests you’re a healthy weight. Your ideal weight is between{" "}
                    <span style={{ fontWeight: "700" }}>{idealWeightRange}{" "}</span>
                        kgs.</SC.ResultText></div></SC.ResultContainer>
                : imperialBmi === 0 ? <SC.ResultContainer status= "empty" >
                        <SC.ResultTitle >Welcome!</SC.ResultTitle>
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
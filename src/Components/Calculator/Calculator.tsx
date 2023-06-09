import { useFormik } from "formik";
import * as SC from "./CalculatorStyled"

interface IValues {
    system: string;
    weight: string;
    height: string;
}

const Calculator: React.FC = () => {

    const formik = useFormik<IValues>({
        initialValues: {
            system: "metric",
            weight: "",
            height: "",
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleRadioChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        formik.handleChange(evt)

    }

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
                        <SC.DataInput type="text" name="height" />
                        <SC.DataText>cm</SC.DataText>
                    </SC.DataContainer>
                    <SC.DataContainer>
                        <SC.DataLabel htmlFor="weight">Weight</SC.DataLabel>
                        <SC.DataInput type="text" name="weight" />
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


            <SC.ResultContainer>
                <SC.ResultTitle>Welcome!</SC.ResultTitle>
                <SC.ResultText>Enter your height and weight and you’ll see your BMI result here</SC.ResultText></SC.ResultContainer>
        </SC.CustomForm>
    </SC.FormContainer>
    );
}

export default Calculator;
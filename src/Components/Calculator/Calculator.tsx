import { useFormik } from "formik";
import * as SC from "./CalculatorStyled"

const Calculator: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            system: "metric"
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (<SC.FormContainer>

        <SC.CustomForm onSubmit={formik.handleSubmit}>
            <SC.Title>Enter your details below</SC.Title>
            <SC.RadioContainer>
                <SC.RadioLabel htmlFor="metric">
                    <SC.RadioInput
                        type="radio"
                        id="metric"
                        name="system"
                        value="metric"
                        checked={formik.values.system === "metric"}
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
                    />
                    Imperial
                </SC.RadioLabel>
            </SC.RadioContainer>

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

            <div>
                <h2>Welcome!</h2>
                <p>Enter your height and weight and you’ll see your BMI result here</p></div>
        </SC.CustomForm>
    </SC.FormContainer>
    );
}

export default Calculator;
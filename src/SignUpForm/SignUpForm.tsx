import { useFormik, FormikProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  SignUpFormRoot,
  Label,
  RadioGroup,
  TextField,
  RadioField,
  Button,
  Title,
} from "./SignUpForm.styles";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  size: string;
}

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  size: Yup.string().required('Required')
});

const SignUpForm = () => {
  const formik: FormikProps<Values> = useFormik<Values>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      size: ''
    },
    onSubmit: (values: Values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 500);
    },
    validationSchema: SignUpSchema
  });
  return (
    <SignUpFormRoot>
      <form onSubmit={formik.handleSubmit}>
        <Title> Sign Up for Weekly 🥧</Title>
        <Label htmlFor="firstName">First Name</Label>
        <TextField
          id="firstName"
          name="firstName"
          placeholder="John"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName} />
        <Label htmlFor="lastName">Last Name</Label>
        <TextField
          id="lastName"
          name="lastName"
          placeholder="Doe"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName} />

        <Label htmlFor="email">Email</Label>
        <TextField
          id="email"
          name="email"
          placeholder="john@acme.com"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <RadioGroup role="group" aria-Labelledby="pieSize">
          <Label>
            <RadioField type="radio" name="size" value="handPie" />
            Hand Pie
          </Label>
          <Label>
            <RadioField type="radio" name="size" value="small" />
            Small (6 inch diameter)
          </Label>
          <Label>
            <RadioField type="radio" name="size" value="medium" />
            Medium (10 inch diameter)
          </Label>
          <Label>
            <RadioField type="radio" name="size" value="large" />
            Large (14 inch diameter)
          </Label>
        </RadioGroup>
        <Button type="submit">Submit</Button>
      </form>
    </SignUpFormRoot>
  );
};

export default SignUpForm;

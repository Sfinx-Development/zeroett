import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CompanyForm from "./components/CompanyForm.tsx";
import ClientIdeaForm from "./components/CustomerIdeaForm";
import FormStepper from "./components/FormStepper.tsx";
import PersonalDataForm from "./components/PersonalDataForm.tsx";

const useStyles = makeStyles({
  blackBackground: {
    backgroundColor: "black",
    width: "100%",
    height: "100vh",
  },
});

export default function ContactPage() {
  const classes = useStyles();

  return (
    <div className={classes.blackBackground}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <FormStepper
          steps={[
            { title: "Uppgifter", form: PersonalDataForm },
            { title: "Företag eller privatperson", form: CompanyForm },
            { title: "Beskriv din idé", form: ClientIdeaForm },
          ]}
        />
      </Box>
    </div>
  );
}

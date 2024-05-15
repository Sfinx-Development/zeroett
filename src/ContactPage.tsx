import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClientIdeaForm from "./components/CustomerIdeaForm";
import CompanyForm from "../components/CompanyForm.tsx";
import FormStepper from "../components/FormStepper.tsx";
import LogoText from "../components/LogoText.tsx";
import PersonalDataForm from "../components/PersonalDataForm.tsx";

const useStyles = makeStyles({
  blackBackground: {
    backgroundColor: "black",
    width: "100%",
    height: "100vh", 
  }
});

export default function ContactPage() {
  const classes = useStyles();

  return (
    <div className={classes.blackBackground}>
         
      <Typography variant="h4" style={{ color: "white" }}>
        Hej
      </Typography>
      <Typography variant="h4" style={{ color: "white" }}>
        Hej
      </Typography>
      <Typography variant="h4" style={{ color: "white" }}>
        Hej
      </Typography>
    </div>
  );
}

import { Box } from "@mui/material";
import CompanyForm from "./CompanyForm.tsx";
import ClientIdeaForm from "./CustomerIdeaForm.tsx";
import FormStepper from "./FormStepper.tsx";
import PersonalDataForm from "./PersonalDataForm.tsx";

export default function ContactPage() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        gap: 2,
        width: "100%",
        backgroundColor: "black",
        padding: 0,
        margin: 0,
        border: "none",
      }}
    >
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

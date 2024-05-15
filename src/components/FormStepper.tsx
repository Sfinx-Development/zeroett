import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Customer, useCustomerContext } from "../contexts/customerContext";

interface StepData {
  title: string;
  form: React.FC;
}

interface Props {
  steps: StepData[];
}

export default function FormStepper(props: Props) {
  const { steps } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const { customer } = useCustomerContext();

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      setCompleted(true);
      // sendEmail(customer);
      sendEmailWithLink(customer);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const sendEmailWithLink = (customer: Customer) => {
    const subject = "Kundkontakt";
    const customerName = `Kundens namn : ${customer.name}`;
    const customerEmail = `Kundens email : ${customer.email}`;
    const customerPhone = `Kundens email : ${customer.phone}`;
    const customerAddress = `Kundens adress: ${customer.address} ${customer.zipcode} ${customer.city}`;
    const customerPurpose = `Syfte med applikationen: ${customer.purposeApp}`;
    const customerApp = `Typ av appplikation: ${customer.typeOfApp}`;
    const customerTargetGroup = `Målgrupp som vi riktar in oss på: ${customer.targetGroup}`;
    const customerBudget = `Budget: ${customer.budgetDescription}`;
    const customerExtra = `Övrigt: ${customer.extraDescription}`;

    const isCompany = `Är företag: ${customer.isCompany ? "ja" : "nej"}`;
    let companyName = "";
    let companyDescription = "";
    if (isCompany) {
      companyName = `Företagets namn: ${customer.companyName}`;
      companyDescription = `Företagets beskrivning: ${customer.companyDescription}`;
    }
    const body = `${customerName}\n${customerEmail}\n${customerPhone}\n${customerAddress}\n${customerPurpose}\n${customerTargetGroup}\n${customerApp}\n${customerBudget}\n${customerExtra}\n${isCompany}\n${companyName}\n${companyDescription}`;

    const defaultEmail = "zeroettab@gmail.com";
    const mailtoLink = `mailto:${defaultEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // Öppna e-postklienten
    window.location.href = mailtoLink;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const FormComponent = steps[activeStep].form;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {!completed ? (
        <div>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step) => (
              <Step key={step.title}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography component="div" sx={{ mt: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Alla steg är klara
                  </Typography>
                  <Typography variant="body1">
                    Visa någon form av avslutningsmeddelande här.
                  </Typography>
                </Typography>
              </div>
            ) : (
              <div>
                <FormComponent />
                <Box
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, fontSize: 15 }}
                  >
                    Tillbaka
                  </Button>
                  <Button onClick={handleNext} sx={{ fontSize: 15 }}>
                    {activeStep === steps.length - 1 ? "Klar" : "Nästa"}
                  </Button>
                </Box>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography marginBottom={4} variant="h6">
            Vi hör av oss till {customer.email} inom 3 dagar.
          </Typography>
        </div>
      )}
    </Box>
  );
}

import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

export type TFromConfig = {
     defaultValues?: Record<string,any>
}

type TForProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
}& TFromConfig;

const PHForm = ({ onSubmit, children, defaultValues }: TForProps) => {
    const formConfig:TFromConfig = {}
    if (defaultValues) {
        formConfig["defaultValues"] = defaultValues
    }
    const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}> {children} </form>
    </FormProvider>
  );
};

export default PHForm;

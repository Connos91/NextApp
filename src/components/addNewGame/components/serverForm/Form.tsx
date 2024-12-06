import { ActionState } from "./utils/actionState";

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
};

const Form = ({ action, children }: FormProps) => {
  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};

export default Form;

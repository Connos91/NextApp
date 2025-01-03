import { ZodError } from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {}
};

export const fromErrorToActionState = (
  error: unknown,
  formData?: FormData
): ActionState => {
  if (error instanceof ZodError) {
    // if validation error with Zod, return first error message
    return {
      message: "",
      fieldErrors: error.flatten().fieldErrors,
      payload: formData
    };
  } else if (error instanceof Error) {
    // if another error instance, return error message
    // e.g. database error
    return {
      message: error.message,
      fieldErrors: {},
      payload: formData
    };
  } else {
    // if not an error instance but something else crashed
    // return generic error message
    return {
      message: "An unknown error occurred",
      fieldErrors: {},
      payload: formData
    };
  }
};

export const toActionState = (message: string): ActionState => {
  return { message, fieldErrors: {} };
};

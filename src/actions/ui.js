import { types } from "../types/types";

export const setErrorAction = (err) => ({
  type: types.uiSteError,
  payload: err,
});

export const removeErrorAction = () => ({
  type: types.uiRemoveError,
});

export const starLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});

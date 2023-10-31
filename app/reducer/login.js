const initiaalStage = {
  user: null,
  auth: false,
  loading: false,
  error: null,
};
export const loginSuccess = "loginSucess";
export const loginFailure = "loginFailure";
export const logoutSuccess = "logoutSucess";
export const LoginReducer = (state = initiaalStage, action) => {
  switch (action.type) {
    case loginSuccess:
      return {
        ...state,
        user: action.payload,
        auth: true,
        loading: false,
        error: null,
      };
    case loginFailure:
      return {
        ...state,
        user: null,
        auth: false,
        loading: false,
        error: action.payload,
      };
    case logoutSuccess:
      return {
        ...state,
        user: null,
        auth: false,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

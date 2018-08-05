import { jobConstants } from "../constants/jobConstants";

const initialState = {
  jobList: []
};

export function jobReducer(state = initialState, action) {
  switch (action.type) {
    case jobConstants.LOAD_JOB_LIST:
      return {
        ...state,
        jobList: action.jobList
      };

    case jobConstants.ADD_NEW_JOB:
      return {
        ...state,
        jobList: [...state.jobList, action.job]
      };

    default:
      return state;
  }
}

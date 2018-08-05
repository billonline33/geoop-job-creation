import { jobConstants } from "../constants/jobConstants";

const initialState = {
  jobList: []
};

export function jobReducer(state = initialState, action) {
  switch (action.type) {
    case jobConstants.LOAD_JOB_LIST:
      return {
        jobList: action.jobList
      };

    default:
      return state;
  }
}

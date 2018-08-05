import { jobService } from "../services/jobService";
import { jobConstants } from "../constants/jobConstants";

function loadJobs() {
  return dispatch => {
    jobService.loadJobService().then(response => {
      let jobList = reponse.data;
      dispatch({
        type: jobConstant.LOAD_JOB_LIST,
        jobList
      });
    });
  };
}

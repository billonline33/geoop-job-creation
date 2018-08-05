import { jobService } from "../services/jobService";
import { jobConstants } from "../constants/jobConstants";

export const jobActions = {
  loadJobs,
  addJob
};

function loadJobs() {
  console.log("jobAction triggerred");
  return dispatch => {
    jobService.loadJobService().then(response => {
      let jobList = response;
      console.log("jobList for JobActions=", jobList);
      dispatch({
        type: jobConstants.LOAD_JOB_LIST,
        jobList
      });
    });
  };
}

function addJob(job) {
  console.log("job=", job);
  return dispatch => {
    jobService.addNewJob(job).then(() => {
      loadJobs();
    });
    /*       .then(() => {
        dispatch({
          type: jobConstants.ADD_NEW_JOB,
          job
        });
      }); */
  };
}

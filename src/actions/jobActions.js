import { jobService } from '../services/jobService';
import { jobConstants } from '../constants/jobConstants';

let x;

export const jobActions = {
  loadJobs,
  addJob
};

function loadJobs() {
  return dispatch => {
    jobService.loadJobService().then(response => {
      let jobList = response;
      dispatch({
        type: jobConstants.LOAD_JOB_LIST,
        jobList
      });
    });
  };
}

function addJob(job) {
  return dispatch => {
    jobService.addNewJob(job).then(() => {
      loadJobs();
    });
  };
}

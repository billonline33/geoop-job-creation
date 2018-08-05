import axios from "axios";
import authHeader from "../helpers/authHeader";

export const jobService={
  loadJobService
}

function loadJobService() {
  const apiUrl = "https://geoserviceuat-api.jobtrakka.com/api/v1/job/actual "; //Todo: remove hard code value

  const header = authHeader();

  return axios.get(apiUrl, { headers: { header } }).then(response => {
    console.log("response=", response);
  });
}

import axios from "axios";
import authHeader from "../helpers/authHeader";

export const jobService = {
  loadJobService,
  addNewJob
};

function loadJobService() {
  const apiUrl = "https://geoserviceuat-api.jobtrakka.com/api/v1/job/actual"; //Todo: remove hard code value

  const header = authHeader();

  return axios({
    method: "get",
    url: apiUrl,
    headers: { common: authHeader() }
  }).then(handleResponse);
}

function addNewJob(job) {
  const apiUrl = "https://geoserviceuat-api.jobtrakka.com/api/v1/job/actual"; //Todo: remove hard code value

  const header = authHeader();

  console.log("job999=", job);

  //Todo: hardcode jobDetails here for demo purpose
  const jobDetails = {
    title: job.title,
    description: job.description,
    reference: null,
    order_number: null,
    billed_client_id: null,
    address: {
      id: null,
      owner_id: 275200,
      owner_type: "Client",
      type: "Addresses::Physical",
      address1: "10 Pitt Street",
      address2: "",
      city: "Redfern",
      state: "New South Wales",
      country: null,
      postcode: "2016",
      longitude: null,
      latitude: null,
      active: true,
      updated_at: "2017-12-05T23:12:27.779Z",
      created_at: "2017-12-05T23:12:27.752Z"
    },
    priority: 1,
    job_status_id: 1020,
    client_id: "275200"
  };

  return axios({
    method: "post",
    url: apiUrl,
    headers: { common: authHeader() },
    data: jobDetails
  }).then(handleResponse);
}

function handleResponse(response) {
  //Todo: check web server response code here
  // auto logout if 401 resposne returned from api
  //if all successful: return below:
  return response.data;
}

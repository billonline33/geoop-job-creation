import React, { Component } from "react";
import { userActions } from "../../actions/userActions";
import { jobActions } from "../../actions/jobActions";

import { Grid, Row, Col, Button, Table, Glyphicon } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class JobList extends Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleAddNewJob = this.handleAddNewJob.bind(this);
  }

  handleSignOut() {
    this.props.logoff();
    this.props.history.push("/signin");
  }

  handleAddNewJob() {
    this.props.history.push("/jobInput");
  }

  componentDidMount() {
    this.props.loadJobs();
    console.log("JobList=", this.props.jobList);
  }

  render() {
    console.log("JobList.js props=", this.props);
    return (
      //ToDo: Show loading... when calling web service to load data
      <div className={"job-table-outer-container"}>
        <Grid>
          <Row>
            <Col xs={12} className={"col"}>
              <Table bordered condensed hover className={"job-table"}>
                <thead>
                  <tr>
                    <th>
                      <div className={"col-heading"}>Ref </div>
                    </th>
                    <th>
                      <div className={"col-heading"}>Title </div>
                    </th>
                    <th>
                      <div className={"col-heading"}>Description </div>
                    </th>
                    <th>
                      <div className={"col-heading"}>Address </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.jobList.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.reference}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                          {item.address.address1 + ", " + item.address.city}{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={"col"}>
              <Button bsStyle={"link"} onClick={this.handleAddNewJob}>
                Add New Job
              </Button>
              <Button bsStyle={"link"} onClick={this.handleSignOut}>
                Sign Out
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobList: state.jobReducer.jobList
  };
}; //todo: use shorthand

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadJobs: jobActions.loadJobs,
      logoff: userActions.logoffUser
    },
    dispatch
  );
//todo: use shorthand

JobList = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobList);

export default JobList;

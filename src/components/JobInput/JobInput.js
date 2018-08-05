import React, { Component } from "react";
import { Col, Row, Grid, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { jobAction, jobActions } from "../../actions/jobActions";

class JobInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        title: "",
        description: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleClickJobList = this.handleClickJobList.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { job } = this.state;
    this.setState({
      job: {
        ...job,
        [name]: value
      }
    });
  }

  handleClickSave() {
    this.props.addJob(this.state.job);
    //Todo: pop up a message to show "Succeed!", before redirect to JobList page
    this.props.history.push("/jobList");
  }

  handleClickJobList() {
    this.props.history.push("/jobList");
  }

  handleClickCancel() {
    this.setState({
      job: {
        title: "",
        description: ""
      }
    });
  }

  render() {
    const { job } = this.state;
    return (
      <div className={"employee-form-outer-container"}>
        <Grid fluid>
          <Row>
            <Col xs={12} className={"col"}>
              <div className={"input-control"}>
                <p>Title</p>
                <p>
                  <input
                    name="title"
                    type={"text"}
                    value={job.title}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
              <div className={"input-control"}>
                <p>Description</p>
                <p>
                  <input
                    name="description"
                    type={"text"}
                    value={job.description}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={"col controls-container"}>
              <Button bsStyle={"link"} onClick={this.handleClickSave}>
                {" "}
                Save
              </Button>
              <Button bsStyle={"link"} onClick={this.handleClickCancel}>
                {" "}
                Cancel
              </Button>
              <Button bsStyle={"link"} onClick={this.handleClickJobList}>
                {" "}
                Job List
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addJob: jobActions.addJob
    },
    dispatch
  );

JobInput = connect(
  null,
  mapDispatchToProps
)(JobInput);

export default JobInput;

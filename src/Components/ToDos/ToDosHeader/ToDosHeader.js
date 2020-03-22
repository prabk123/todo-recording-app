import React from "react";
import HeaderBrand from "Shared/HeaderBrand";
import "./ToDosHeader.css";
import Container from "Shared/Container";
import Button from "Shared/Button";
import PropTypes from "prop-types";

const ToDosHeader = props => {
  const {
    openModal,
    recording,
    startRecording,
    stopRecording,
    resetRecording,
    recordLength,
    playing,
    playRecording
  } = props;

  const toggleRecording = () => {
    if (recording) return stopRecording();
    return startRecording();
  };

  return (
    <div className="ToDosHeader-root">
      <Container maxWidth="lg" className="ToDosHeader-container">
        <div className="ToDosHeader-brand">
          <HeaderBrand collapse />
        </div>
        <div className="ToDosHeader-actions">
          <Button
            disabled={playing}
            withArrow={false}
            className="ToDosHeader-btn"
            onClick={() => openModal("create")}
          >
            <i className="fas fa-plus"></i>
            <span className="ToDosHeader-btn-text">Add</span>
          </Button>
          <Button
            disabled={playing || (!recording && recordLength > 0)}
            withArrow={false}
            color="red"
            className="ToDosHeader-btn"
            onClick={toggleRecording}
          >
            {recording ? (
              <React.Fragment>
                <i className="fas fa-stop"></i>
                <span className="ToDosHeader-btn-text">Stop</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <i className="fas fa-video"></i>
                <span className="ToDosHeader-btn-text">Record</span>
              </React.Fragment>
            )}
          </Button>
          <Button
            disabled={recordLength <= 0 || playing}
            withArrow={false}
            color="green"
            className="ToDosHeader-btn"
            onClick={playRecording}
          >
            <i className="fas fa-play"></i>
            <span className="ToDosHeader-btn-text">Play</span>
          </Button>
          <Button
            disabled={recordLength <= 0 || playing}
            withArrow={false}
            color="orange"
            className="ToDosHeader-btn"
            onClick={resetRecording}
          >
            <i className="fas fa-redo-alt"></i>
            <span className="ToDosHeader-btn-text">Reset Recording</span>
          </Button>
        </div>
      </Container>
    </div>
  );
};

ToDosHeader.propTypes = {
  recordLength: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  recording: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  startRecording: PropTypes.func.isRequired,
  stopRecording: PropTypes.func.isRequired,
  resetRecording: PropTypes.func.isRequired,
  playRecording: PropTypes.func.isRequired
};

export default ToDosHeader;

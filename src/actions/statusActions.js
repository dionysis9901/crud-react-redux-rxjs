const completeStatusUpdate = (completed, id, title) => ({
  type: "COMPLETE_STATUS_UPDATE",
  payload: { completed, id, title },
});

const completeStatusUpdateSuccess = () => ({
  type: "COMPLETE_STATUS_UPDATE_SUCCESS",
});

const completeStatusUpdateFailed = (msg) => ({
  type: "COMPLETE_STATUS_UPDATE_FAILED",
  payload: { msg },
});

export {
  completeStatusUpdate,
  completeStatusUpdateSuccess,
  completeStatusUpdateFailed,
};

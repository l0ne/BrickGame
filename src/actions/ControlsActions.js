export const PRESS_TURN_ON = 'PRESS_TURN_ON';
export const PRESS_TURN_OFF = 'PRESS_TURN_OFF';
export const PRESS_START_GAME = 'PRESS_START_GAME';
export const PRESS_PAUSE_GAME = 'PRESS_PAUSE_GAME';
export const PRESS_LEFT = 'PRESS_LEFT';
export const PRESS_RIGTH = 'PRESS_RIGTH';
export const PRESS_ROTATE = 'PRESS_ROTATE';
export const PRESS_SOUND = 'PRESS_SOUND';
export const PRESS_DOWN = 'PRESS_SOUND';

export const powerSwitch = (state) => (dispatch) => {
  if (state) {
    return dispatch({
      type: PRESS_TURN_OFF,
    });
  }

  dispatch({
    type: PRESS_TURN_ON,
  });
};

export const startGame = (state) => (dispatch) => {
  if (state) {
    return dispatch({
      type: PRESS_PAUSE_GAME,
    });
  }

  dispatch({
    type: PRESS_START_GAME,
  });
};

export const pressLeft = () => (dispatch) => {
  dispatch({
    type: PRESS_LEFT,
  });
};

export const pressRigth = () => (dispatch) => {
  dispatch({
    type: PRESS_RIGTH,
  });
};

export const pressDown = () => (dispatch) => {
  dispatch({
    type: PRESS_DOWN,
  });
};

export const pressSound = () => (dispatch) => {
  dispatch({
    type: PRESS_SOUND,
  });
};

export const pressRotate = () => (dispatch) => {
  dispatch({
    type: PRESS_ROTATE,
  });
};

export const PRESS_TURN_ON = 'PRESS_TURN_ON';
export const PRESS_TURN_OFF = 'PRESS_TURN_OFF';
export const PRESS_START_GAME = 'PRESS_START_GAME';
export const PRESS_PAUSE_GAME = 'PRESS_PAUSE_GAME';
export const PRESS_LEFT = 'PRESS_LEFT';
export const PRESS_RIGTH = 'PRESS_RIGTH';

export const powerSwitch = (state) => {
    return dispatch => {
        console.log(state)
        if (state) {
            return dispatch({
                type: PRESS_TURN_OFF
            });
        }

        dispatch({
            type: PRESS_TURN_ON
        });
    }
}

export const startGame = (state) => {
    return dispatch => {
        console.log(state)
        if (state) {
            return dispatch({
                type: PRESS_PAUSE_GAME
            });
        }

        dispatch({
            type: PRESS_START_GAME
        });
    }
}

export const pressLeft = () => {
    return dispatch => {
        dispatch({
            type: PRESS_LEFT
        });
    }
}

export const pressRigth = () => {
    return dispatch => {
        dispatch({
            type: PRESS_RIGTH
        });
    }
}

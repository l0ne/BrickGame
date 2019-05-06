import {
    PRESS_TURN_OFF,
    PRESS_TURN_ON,
    PRESS_START_GAME,
    PRESS_PAUSE_GAME,
    PRESS_LEFT,
    PRESS_RIGTH
} from "../actions/ControlsActions";

const initialState = {
    isPowerOn: false,
    isStartGame: false,
    turnLeft: true,
    turnRigth: false
}

const controlsReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case PRESS_TURN_ON: return {...state, isPowerOn: true}
        case PRESS_TURN_OFF: return {...state, isPowerOn: false}
        case PRESS_START_GAME: return {...state, isStartGame: true}
        case PRESS_PAUSE_GAME: return {...state, isStartGame: false}
        case PRESS_LEFT: return {...state, turnLeft: true, turnRigth: false}
        case PRESS_RIGTH: return {...state, turnLeft: false, turnRigth: true}
        default: return state
    }
}

export default controlsReducer;

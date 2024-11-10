import counterReducer from './features/counter.feature';
import userListReducer from './features/user-list.feature';

const rootReducer = {
    counter: counterReducer,
    users: userListReducer
}

export default rootReducer;
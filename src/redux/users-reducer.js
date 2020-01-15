const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://sun9-70.userapi.com/impg/c856136/v856136073/1b4f63/KS5sLpvgpi0.jpg?size=200x0&quality=90&sign=74be1291c0d6839466512a9a0393363b', followed:false, fullName: 'Roman', status: 'Boss', location: {city: 'Moscow',country: 'Russia'} },
        {id: 2, photoUrl:  'https://sun9-70.userapi.com/impg/c856136/v856136073/1b4f63/KS5sLpvgpi0.jpg?size=200x0&quality=90&sign=74be1291c0d6839466512a9a0393363b', followed:true,  fullName: 'Denis', status: 'Boss', location: {city: 'Saint-Petersburg',country: 'Russia'} },
        {id: 3, photoUrl:  'https://sun9-70.userapi.com/impg/c856136/v856136073/1b4f63/KS5sLpvgpi0.jpg?size=200x0&quality=90&sign=74be1291c0d6839466512a9a0393363b', followed:false, fullName: 'Nasty', status: 'Boss', location: {city: 'Kiev',country: 'Russia'} }

    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;
    }

};

export const followAC = (userid) => ({type: FOLLOW, userid})
export const unfollowAC = (userid) => ({type: UNFOLLOW, userid})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;


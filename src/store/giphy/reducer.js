import { giphyActionType } from './action';

export const initState = { 
    content_giphy_list : null,
    content_giphy_pagination : null,
    content_giphy_loader : false,
    content_ironman : null
};

function reducer(state = initState, action) {
    switch (action.type) {
        case giphyActionType.GET_CONTENTS:
            return {
                ...state,
                content_giphy_loader : true
            } 
        break;
        case giphyActionType.GET_CONTENTS_SUCCESS:
            return {
                ...state,
                content_giphy_loader : false,
                content_giphy_list: state.content_giphy_list && action.payload.pagination.offset > 0 ? [...state.content_giphy_list,...action.payload.data] : action.payload.data,
                content_giphy_pagination: action.payload.pagination,
            }
        break;
        case giphyActionType.GET_CONTENTS_IRONMAN:
                return {
                    ...state,
                    content_giphy_loader : true
                }
            break;  
        case giphyActionType.GET_CONTENTS_IRONMAN_SUCCESS:
            return {
                ...state,
                content_giphy_loader : false,
                content_ironman: action.payload.data
            }
            break;
        default:
            return state;
    }
}

export default reducer;

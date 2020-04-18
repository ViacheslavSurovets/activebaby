import  previewItemActionTypes  from './previewItem.types';

const INITIAL_STATE = {
  previewItem: null,
  previewInfo: undefined,
  showPortalPreviewItem: false
};

const previewItemReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case previewItemActionTypes.ADD_PREVIEW_ITEM:
      return {
        ...state,
        previewItem: action.payload,
        previewInfo: action.info
    };
    case previewItemActionTypes.SHOW_PORTAL_PREVIEW_ITEM:
      return {
        ...state,
        showPortalPreviewItem: true
      };
    case previewItemActionTypes.CLOSE_PORTAL_PREVIEW_ITEM:
      return {
        ...state,
        showPortalPreviewItem: false
      };
    default:
      return state;
  }
};

export default previewItemReducer;

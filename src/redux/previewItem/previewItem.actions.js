import { previewItemActionTypes } from './previewItem.types';

export const addItemToPreviewComponent = (item, info)=>({
  type: previewItemActionTypes.ADD_PREVIEW_ITEM,
  payload: item,
  info: info
});

export const showPortalPreviewItem = () => ({
  type: previewItemActionTypes.SHOW_PORTAL_PREVIEW_ITEM
});

export const closePortalPreviewItem = () => ({
  type: previewItemActionTypes.CLOSE_PORTAL_PREVIEW_ITEM
});


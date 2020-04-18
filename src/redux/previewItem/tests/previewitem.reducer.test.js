import previewItemReducer from '@redux/previewItem/previewItem.reducer';
import previewItemActionTypes from '../previewItem.types';

const initialState = {
  previewItem: null,
  previewInfo: undefined,
  showPortalPreviewItem: false
};

describe ( 'Preview Item Reducer', () => {
  it ( 'should return initial state', () => {
    expect ( previewItemReducer ( initialState, {} ) ).toEqual ( initialState );
  } );

  it ( 'should return item when ADD_PREVIEW_ITEM action fired', () => {
    expect ( previewItemReducer ( initialState, {
      type: previewItemActionTypes.ADD_PREVIEW_ITEM,
      payload: { id: 1, title: 'title' },
      info: 'info'
    } ) ).toEqual ( {
        ...initialState,
        previewItem: { id: 1, title: 'title' },
        previewInfo: 'info'
      }
    );
  } );

  it ( 'should portal to be true when SHOW_PORTAL_PREVIEW_ITEM action fired', () => {
    expect ( previewItemReducer ( initialState, {
      type: previewItemActionTypes.SHOW_PORTAL_PREVIEW_ITEM
    } ).showPortalPreviewItem ).toBe ( true );
  } );

  it ( 'should portal to be false when CLOSE_PORTAL_PREVIEW_ITEM action fired', () => {
    expect ( previewItemReducer ( initialState, {
      type: previewItemActionTypes.CLOSE_PORTAL_PREVIEW_ITEM
    } ).showPortalPreviewItem ).toBe ( false );
  } );
} );

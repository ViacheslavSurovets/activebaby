import { createSelector } from 'reselect';

const selectPreviewItem = state => state.previewItem;

export const selectPreviewItemData = createSelector (
  [ selectPreviewItem ],
  previewItem => previewItem.previewItem
);

export const selectPreviewItemInfo = createSelector(
  [selectPreviewItem],
  previewItem => previewItem.previewInfo
);

export const selectShowPortalPreviewItem = createSelector(
  [selectPreviewItem],
  previewItem => previewItem.showPortalPreviewItem
);

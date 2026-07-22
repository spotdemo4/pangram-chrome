Pangram's AI Detection Chrome extension, extracted at version 2.4.0

https://chromewebstore.google.com/detail/eakpippijmmohmdlpgcjnipolcgciaga

## Reddit Badge Placement Fix

This extracted extension was inspected because Reddit comment badges could appear one comment off. The scan result was still associated with the correct comment, but the visual badge could be inserted into the first nested reply's metadata row.

The issue was in the shared badge insertion helpers in `content/index.iife.js`. Reddit comments are nested `shreddit-comment` elements, and the insertion logic searched broadly for selectors like `[slot="commentMeta"]` and `shreddit-comment-badges`. On a parent comment with replies, those selectors could match a descendant reply's metadata instead of the parent comment's own metadata.

The fix makes badge selector resolution boundary-aware:

- Selector candidates are filtered so they belong to the same content boundary as the scanned container.
- Reddit uses `shreddit-comment` as that boundary through the existing `commentContainerSelector` config.
- Explicit global insertion strategies remain unchanged.
- Badge insertion call sites now pass the configured boundary into the shared insertion helpers.

Validation was done against a live nested Reddit thread. With the updated logic, the parent comment's own metadata row is selected instead of the first reply's metadata row.

## Installation

1. Select **Code** and **Download ZIP** on GitHub, then extract the archive.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Select **Load unpacked** and choose the extracted directory.

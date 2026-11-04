/**
 * Announcement bar component
 */
function AnnouncementBar() {
  return `
  <aside class="announcement-bar" id="announcement-bar" aria-label="Announcement">
    <p>10% off on Studio Samples for photographers.</p>
    <button type="button" class="announcement-close" id="announcement-close" aria-label="Dismiss announcement">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path d="M1 1l12 12M13 1L1 13" />
      </svg>
    </button>
  </aside>`;
}

module.exports = { AnnouncementBar };


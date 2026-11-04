/**
 * Accessible Before / After Slider Component
 */
function BeforeAfter({
  id,
  title,
  beforeSrc,
  beforeAlt = 'Before editing',
  afterSrc,
  afterAlt = 'After editing',
  width = 600,
  height = 400
}) {
  return `
  <article class="ba-card">
    <h3 class="ba-title">${title}</h3>
    <div
      class="ba-container"
      id="${id}"
      data-position="50"
    >
      <!-- After Image (Base) -->
      <img
        src="${afterSrc}"
        alt="${afterAlt}"
        width="${width}"
        height="${height}"
        class="ba-image"
        loading="lazy"
        decoding="async"
      />
      <span class="ba-badge ba-badge-after">After</span>

      <!-- Before Image (Clipped) -->
      <div class="ba-before-wrapper">
        <img
          src="${beforeSrc}"
          alt="${beforeAlt}"
          width="${width}"
          height="${height}"
          class="ba-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <span class="ba-badge ba-badge-before">Before</span>

      <!-- Draggable & Keyboard-focusable Handle -->
      <div
        class="ba-handle"
        role="slider"
        tabindex="0"
        aria-label="${title} comparison slider"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="50"
      >
        <div class="ba-handle-button" aria-hidden="true">&harr;</div>
      </div>
    </div>
  </article>`;
}

module.exports = { BeforeAfter };


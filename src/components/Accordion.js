/**
 * Accessible Accordion Component
 */
function Accordion({ idPrefix = 'acc', items = [] }) {
  const renderedItems = items.map((item, idx) => {
    const headerId = `${idPrefix}-header-${idx}`;
    const panelId = `${idPrefix}-panel-${idx}`;
    return `
    <div class="accordion-item">
      <h3>
        <button
          type="button"
          class="accordion-trigger"
          id="${headerId}"
          aria-expanded="false"
          aria-controls="${panelId}"
        >
          <span>${item.question}</span>
          <svg class="accordion-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <line x1="8" y1="1" x2="8" y2="15" />
            <line x1="1" y1="8" x2="15" y2="8" />
          </svg>
        </button>
      </h3>
      <div
        class="accordion-content"
        id="${panelId}"
        role="region"
        aria-labelledby="${headerId}"
      >
        <p>${item.answer}</p>
      </div>
    </div>`;
  }).join('\n');

  return `<div class="accordion" id="${idPrefix}">${renderedItems}</div>`;
}

module.exports = { Accordion };


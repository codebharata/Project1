/**
 * Process List Component ("How we work", numbered 01-04)
 */
function ProcessList({ steps = [] }) {
  const renderedSteps = steps.map((step) => {
    return `
    <div class="process-item">
      <div class="process-number">${step.number}</div>
      <div class="process-content">
        <h3 class="process-content-title">${step.title}</h3>
        <p class="process-content-desc">${step.description}</p>
      </div>
    </div>`;
  }).join('\n');

  return `<div class="process-list">${renderedSteps}</div>`;
}

module.exports = { ProcessList };


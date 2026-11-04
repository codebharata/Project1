/**
 * Split Section Component (Image + Text on Pastel)
 */
function Split({
  eyebrow = '',
  title,
  text,
  linkText = '',
  linkHref = '',
  imageSrc,
  imageAlt,
  width = 600,
  height = 400,
  pastel = 'bg-paper', // 'bg-blush', 'bg-sage', 'bg-sky', 'bg-paper'
  reverse = false,
  shadow = true
}) {
  return `
  <section class="section split-section ${pastel}">
    <div class="container">
      <div class="split-grid ${reverse ? 'split-reverse' : ''}">
        <div class="split-image-wrap ${shadow ? 'product-image-shadow' : ''}">
          <img
            src="${imageSrc}"
            alt="${imageAlt || title}"
            width="${width}"
            height="${height}"
            class="split-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="split-content">
          ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
          <h2>${title}</h2>
          <p>${text}</p>
          ${linkHref && linkText ? `
          <div style="margin-top: var(--space-md);">
            <a href="${linkHref}" class="text-link">
              <span>${linkText}</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>` : ''}
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = { Split };


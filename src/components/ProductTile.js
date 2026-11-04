/**
 * ProductTile Component
 */
function ProductTile({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  width = 600,
  height = 400,
  lazy = true,
  shadow = false
}) {
  return `
  <article class="product-tile">
    <a href="${href}" class="product-tile-image-wrap ${shadow ? 'product-image-shadow' : ''}" aria-label="${title}">
      <img
        src="${imageSrc}"
        alt="${imageAlt || title}"
        width="${width}"
        height="${height}"
        class="product-tile-image"
        ${lazy ? 'loading="lazy" decoding="async"' : 'fetchpriority="high"'}
      />
    </a>
    <h3 class="product-tile-title"><a href="${href}">${title}</a></h3>
    <p class="product-tile-desc">${description}</p>
    <div>
      <a href="${href}" class="product-tile-link">
        <span>Learn more</span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </article>`;
}

module.exports = { ProductTile };


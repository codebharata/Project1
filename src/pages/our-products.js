const { Layout } = require('../components/Layout');
const { ProductTile } = require('../components/ProductTile');

function renderOurProductsPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: var(--space-xl); flex-wrap: wrap; gap: var(--space-md);">
        <div>
          <span class="eyebrow">Product Catalog &bull; 100% Quality Checked</span>
          <h1>Our Products</h1>
          <p class="lead" style="margin-bottom: 0;">
            We provide the best online album makers and services to create beautiful photo albums.
          </p>
        </div>
        <div>
          <a href="/files/Ultraa-product-Catelogue.pdf" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Download Catalog (PDF)</a>
        </div>
      </div>

      <div class="product-grid">
        <!-- 1. Flush Mount Albums -->
        ${ProductTile({
          title: 'Flush Mount Albums',
          description: 'Flush Mount Album is the quintessential wedding and celebration album for the moments that change your life. Enjoy exceptional print quality of your choice.',
          href: '/flush-mount-album/',
          imageSrc: '/images/our-products/10-300x200.webp',
          imageAlt: 'Hand-bound flush mount album with thick panoramic photographic sheets',
          width: 600,
          height: 400,
          shadow: true
        })}

        <!-- 2. Lay Flat Albums -->
        ${ProductTile({
          title: 'Lay Flat Albums',
          description: 'Spread your memories wide open with our Layflat Albums. Forget folded photos and hidden scenes. Showcase your stunning panoramas across two seamless pages with these albums lay flat. Dive right into every moment, rediscover forgotten details, and experience your stories like never before. Ready to bring your memories to life? Start exploring Layflat Albums today.',
          href: '/layflat/',
          imageSrc: '/images/our-products/Layflat-2-scaled-pytcwhq8ftmct2d2jmjwe1funp6579wwghp0d1y6be.webp',
          imageAlt: 'Layflat album showcasing continuous seamless spread',
          width: 600,
          height: 400,
          shadow: true
        })}

        <!-- 3. Luxury Albums -->
        ${ProductTile({
          title: 'Luxury Albums',
          description: 'Ultraa Albums luxury custom photo albums are designed to your taste, adding an elegant touch to your photos and albums.',
          href: '/luxury-albums/',
          imageSrc: '/images/our-products/1-2-300x200.webp',
          imageAlt: 'Luxury photo album bound with premium Italian leatherette',
          width: 600,
          height: 400,
          shadow: true
        })}

        <!-- 4. Photo Book -->
        ${ProductTile({
          title: 'Photo Book',
          description: 'Photo Books can be used to treasure precious moments from your child\'s birth to his/her high school graduation. If you carry a penchant for the photography art, Photo Books can be used for exhibiting your work to others.',
          href: '/photo-book/',
          imageSrc: '/images/our-products/U-152-1-pytcwio2jl577d8yi9nb8cw4ni1w92guvk2isp0mcy.webp',
          imageAlt: 'Classic photo book album featuring fine art archival paper',
          width: 600,
          height: 400,
          shadow: true
        })}

        <!-- 5. Box & Bags -->
        ${ProductTile({
          title: 'Box & Bags',
          description: 'Refined over the years, Our regular box has been a popular feature of our range. It is a modern way of packaging. It combines two elements a designer hard wooden structure frame wrapped in a leatherette material, and a beautiful photo of the top cover.',
          href: '/box-and-bags/',
          imageSrc: '/images/our-products/3-2-300x200.webp',
          imageAlt: 'Custom presentation wooden box wrapped in leatherette with matching album bag',
          width: 600,
          height: 400,
          shadow: true
        })}

        <!-- 6. Slip in Albums -->
        ${ProductTile({
          title: 'Slip in Albums',
          description: 'Slip-in album is the best option to showcase your precious photos. Carefully handcrafted, this album is perfect for capturing and preserving your any memories.',
          href: '/slip-in-albums/',
          imageSrc: '/images/our-products/21-300x200.webp',
          imageAlt: 'Slip-in photo album with precision-cut photo pockets',
          width: 600,
          height: 400,
          shadow: true
        })}
      </div>
    </div>
  </section>

  <!-- Banner Section -->
  <section class="section bg-sage">
    <div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-md);">
      <div>
        <span class="eyebrow">Studio Partnership</span>
        <h2 style="margin-bottom: var(--space-xs);">10% Off on Studio Samples</h2>
        <p style="margin: 0; color: var(--ink-soft);">Experience our craftsmanship in your hands before ordering client albums.</p>
      </div>
      <div>
        <a href="/contact-us/" class="btn btn-primary">Request Studio Samples</a>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Photo Albums | Ultraa Albums',
    description: 'We provide the best online album makers and services to create beautiful photo albums. A portable and affordable way to share your pics with friends and family.',
    canonical: 'https://ultraaalbums.com/our-products/',
    currentPath: '/our-products/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderOurProductsPage };


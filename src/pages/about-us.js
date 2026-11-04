const { Layout } = require('../components/Layout');

function renderAboutPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container">
      <div style="max-width: 800px; margin-bottom: var(--space-xl);">
        <span class="eyebrow">Our Story &bull; Founded 2012</span>
        <h1>About Ultraa Album</h1>
        <p class="lead">
          Ultraa Album accompanied with team of highly skilled & professional photographers with us who have been consistently doing many assignments globally.
        </p>
      </div>

      <div class="two-col-grid" style="margin-bottom: var(--space-2xl);">
        <div>
          <h2 style="font-size: 1.75rem;">Origins in Photography</h2>
          <p>
            We started photography in 2010. At that time in 2011 we could not find suitable albums to signify our photo in true colors and binding was like a pack of playing cards. Some companies provided us albums as per our needs but their cost was too high. It was almost not reasonable in our package. We took it as a challenge and decided to produce high-end albums suitable for everyone's package.
          </p>
          <p>
            Ultraa Album was founded in 2012 to redefine wedding albums which gives true color to your photos that lasts life time. We have been offering top end albums to our clients in all over India and also across the globe.
          </p>
        </div>
        <div>
          <h2 style="font-size: 1.75rem;">Design &amp; Packaging</h2>
          <p>
            We are also providing accessories like variety of Boxes, Parent albums, while creating wedding albums.
            <!-- CHECK WITH CLIENT: Original sentence garbled on live site -->
            We provide four themes of design to suit your taste with designers who are well versed with various software like Lightroom and Photoshop, providing revisions to our clients.
          </p>
          <p>
            Since we all know packaging is very important of International shipping. We offer complete assurance to our international clients for the albums that reach to them in perfect intact condition.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="section bg-blush">
    <div class="container">
      <div style="max-width: 680px; margin-bottom: var(--space-xl);">
        <span class="eyebrow">Leadership</span>
        <h2>Our Team</h2>
        <p>
          At Ultraa Album, we take pleasure in being a leading maker of high-quality albums for our clients all over the world. Our extensive album selection provides alternatives for any event.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-lg);">
        <!-- Team Member 1: Rajiv Panchal -->
        <div style="background-color: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md);">
          <div style="width: 100%; aspect-ratio: 1; background: var(--paper); border-radius: var(--radius-sm); overflow: hidden; margin-bottom: var(--space-sm);">
            <img
              src="/images/about-us/WhatsApp-Image-2021-11-09-at-10.16.24-AM.webp"
              alt="Rajiv Panchal - Founder of Ultraa Album"
              width="400"
              height="400"
              style="width: 100%; height: 100%; object-fit: cover;"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 4px;">Rajiv Panchal</h3>
          <p class="caption" style="margin: 0; color: var(--ink-soft); font-weight: 500;">Founder</p>
        </div>

        <!-- Team Member 2: Mayank Panchal -->
        <div style="background-color: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md);">
          <div style="width: 100%; aspect-ratio: 1; background: var(--paper); border-radius: var(--radius-sm); overflow: hidden; margin-bottom: var(--space-sm);">
            <img
              src="/images/about-us/WhatsApp-Image-2021-10-26-at-11.23.28-PM.webp"
              alt="Mayank Panchal - Co-Founder of Ultraa Album"
              width="400"
              height="400"
              style="width: 100%; height: 100%; object-fit: cover;"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 4px;">Mayank Panchal</h3>
          <p class="caption" style="margin: 0; color: var(--ink-soft); font-weight: 500;">Co-Founder</p>
        </div>

        <!-- Team Member 3: Bhairavi Panchal -->
        <div style="background-color: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md);">
          <div style="width: 100%; aspect-ratio: 1; background: var(--paper); border-radius: var(--radius-sm); overflow: hidden; margin-bottom: var(--space-sm);">
            <img
              src="/images/about-us/WhatsApp-Image-2021-11-09-at-10.29.26-AM.webp"
              alt="Bhairavi Panchal - Head of Designing Department"
              width="400"
              height="400"
              style="width: 100%; height: 100%; object-fit: cover;"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 style="font-family: var(--font-serif); font-size: 1.25rem; margin-bottom: 4px;">Bhairavi Panchal</h3>
          <p class="caption" style="margin: 0; color: var(--ink-soft); font-weight: 500;">Head of Designing Department</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Technical Diagrams: Sides & Sizes -->
  <section class="section bg-paper">
    <div class="container">
      <div style="max-width: 680px; margin-bottom: var(--space-xl);">
        <span class="eyebrow">Specifications</span>
        <h2>Album Anatomy &amp; Printing Sizes</h2>
        <p>Understanding page sides and standard panoramic print proportions.</p>
      </div>

      <div class="two-col-grid">
        <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md);">
          <h3 style="font-size: 1.25rem; margin-bottom: var(--space-sm);">Album Sides Structure</h3>
          <img
            src="/images/about-us/Album-Sides-1024x603-1-768x452.webp"
            alt="Technical diagram demonstrating album sides and page count structure"
            width="768"
            height="452"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <p class="caption" style="margin-top: var(--space-sm);">Standard sheet count and side indexing reference.</p>
        </div>

        <div style="border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-md);">
          <h3 style="font-size: 1.25rem; margin-bottom: var(--space-sm);">Album Printing Sizes</h3>
          <img
            src="/images/about-us/Album-Printing-Sizes-1024x501-1-768x376.webp"
            alt="Technical diagram detailing standard printing dimensions for albums"
            width="768"
            height="376"
            style="width: 100%; height: auto; border-radius: var(--radius-sm);"
            loading="lazy"
            decoding="async"
          />
          <p class="caption" style="margin-top: var(--space-sm);">Comparative layout of standard landscape, square, and portrait sizes.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us & Studio Sample Offer -->
  <section class="section bg-sage">
    <div class="container">
      <div class="two-col-grid align-center">
        <div>
          <span class="eyebrow">Studio Standards</span>
          <h2>Why Choose Ultraa Album</h2>
          <ul style="list-style: none; padding: 0; margin: var(--space-md) 0;">
            <li style="padding: 12px 0; border-bottom: 1px solid var(--line); font-weight: 500;">&bull; Affordable Albums</li>
            <li style="padding: 12px 0; border-bottom: 1px solid var(--line); font-weight: 500;">&bull; Reliable Quality</li>
            <li style="padding: 12px 0; border-bottom: 1px solid var(--line); font-weight: 500;">&bull; Customer Centric</li>
            <li style="padding: 12px 0; border-bottom: 1px solid var(--line); font-weight: 500;">&bull; Complete Privacy &amp; Security of Your Images</li>
          </ul>
        </div>

        <div style="background-color: var(--paper); border: 1px solid var(--line); border-radius: var(--radius-sm); padding: var(--space-xl);">
          <span class="eyebrow">We Invest In You</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.75rem;">10% Off on Studio Samples</h3>
          <p>
            In spite of keeping highly competitive price, we believe every wedding photographer deserves the additional discount on Studio Samples. We do our best to support photographers with our best in class innovative albums.
          </p>
          <div style="margin-top: var(--space-md);">
            <a href="/contact-us/" class="btn btn-primary">Request Studio Sample</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Ultraa Album | About us - Best Album Maker',
    description: 'Ultraa Album accompanied with team of highly skilled & professional photographers with us who have been consistently doing many assignments globally.',
    canonical: 'https://ultraaalbums.com/about-us/',
    currentPath: '/about-us/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderAboutPage };


const { Layout } = require('../components/Layout');
const { ProductTile } = require('../components/ProductTile');
const { Split } = require('../components/Split');
const { BeforeAfter } = require('../components/BeforeAfter');
const { ProcessList } = require('../components/ProcessList');

function renderHomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ultraa Album",
    "image": "https://ultraaalbums.com/images/common/cropped-ultra-logo.webp",
    "telephone": ["+91-93222 54315", "+91-93200 54315"],
    "email": "ultraaalbums@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Hwy, Dahisar East",
      "addressLocality": "Mumbai",
      "postalCode": "400068",
      "addressCountry": "IN"
    },
    "url": "https://ultraaalbums.com/",
    "priceRange": "$$",
    "description": "Mumbai's leading photo album book designer and wedding photo album manufacturer."
  };

  const content = `
  <!-- 3. Hero Section (Pastel Blush) -->
  <section class="hero-section bg-blush">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <span class="eyebrow">Mumbai Print Studio &bull; Founded 2012</span>
          <h1 class="hero-title">Build Your Wedding Photo Book With Us</h1>
          <p class="hero-lead">
            Ultra Album is Mumbai's leading photo album book designer and wedding photo album manufacturer.
          </p>
          <div>
            <a href="#products" class="btn btn-primary">View our albums</a>
          </div>
        </div>
        <div class="hero-image-wrap">
          <img
            src="/images/index/10-scaled.webp"
            alt="Handcrafted leather flush mount wedding photo album by Ultraa Album"
            width="800"
            height="533"
            class="hero-image product-image-shadow"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Occasions Strip (Horizontal Scroller) -->
  <section class="occasions-strip bg-paper">
    <div class="container">
      <div class="strip-header">
        <div>
          <span class="eyebrow">Occasions</span>
          <h2>Crafted for Every Milestone</h2>
        </div>
        <p class="caption">Scroll horizontally to explore &rarr;</p>
      </div>

      <div class="occasions-scroller">
        <!-- Occasion 1: Wedding -->
        <article class="occasion-item">
          <div class="occasion-thumb-wrap">
            <img
              src="/images/index/Wedding_photo_album-removebg-preview.webp"
              alt="Meticulously crafted wedding photo album"
              width="360"
              height="270"
              class="occasion-thumb"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="occasion-body">
            <h3 class="occasion-title">Wedding Photo Albums</h3>
            <p class="occasion-text">
              Wedding album is a high-quality, meticulously crafted photo album designed to preserve and showcase the precious memories of a couple's wedding day in an elegant and lavish manner.
            </p>
            <a href="/wedding-photo-albums/" class="text-link">Explore Wedding Albums &rarr;</a>
          </div>
        </article>

        <!-- Occasion 2: Baby -->
        <article class="occasion-item">
          <div class="occasion-thumb-wrap">
            <img
              src="/images/index/Baby_Photo_album.webp"
              alt="Cherished baby photo album book"
              width="367"
              height="275"
              class="occasion-thumb"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="occasion-body">
            <h3 class="occasion-title">Baby Photo Albums</h3>
            <p class="occasion-text">
              Creating a cherished photo album for your little one is a delightful way to capture and celebrate those precious moments. There are plenty of creative ideas to explore.
            </p>
            <a href="/photo-book/" class="text-link">Explore Baby Albums &rarr;</a>
          </div>
        </article>

        <!-- Occasion 3: Family -->
        <article class="occasion-item">
          <div class="occasion-thumb-wrap">
            <img
              src="/images/index/Family_Photo__album.webp"
              alt="Family photo album documenting significant moments"
              width="408"
              height="306"
              class="occasion-thumb"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="occasion-body">
            <h3 class="occasion-title">Family Photo Albums</h3>
            <p class="occasion-text">
              Collection of photographs that document the significant moments, events, and memories shared by a family. Preserving moments of joy, milestones, celebrations, vacations, and everyday life.
            </p>
            <a href="/layflat/" class="text-link">Explore Family Albums &rarr;</a>
          </div>
        </article>

        <!-- Occasion 4: Travel -->
        <article class="occasion-item">
          <div class="occasion-thumb-wrap">
            <img
              src="/images/index/Travel_photo_album.webp"
              alt="Travel photo album preserving adventure memories"
              width="400"
              height="300"
              class="occasion-thumb"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="occasion-body">
            <h3 class="occasion-title">Travel Photo Albums</h3>
            <p class="occasion-text">
              It is a wonderful way to cherish your adventures and relive those special moments. It is not just about preserving images; it's also an opportunity to tell your unique story through visuals, captions, and mementos.
            </p>
            <a href="/luxury-albums/" class="text-link">Explore Travel Albums &rarr;</a>
          </div>
        </article>

        <!-- Occasion 5: Premium Wall Art -->
        <article class="occasion-item">
          <div class="occasion-thumb-wrap">
            <img
              src="/images/index/Wall_Arts.webp"
              alt="Premium wall art print decor"
              width="374"
              height="281"
              class="occasion-thumb"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="occasion-body">
            <h3 class="occasion-title">Premium Wall Art</h3>
            <p class="occasion-text">
              Wall decor encompasses a wide range of items that can enhance the aesthetic appeal of your space and reflect your personality and style.
            </p>
            <a href="/our-products/" class="text-link">Explore Wall Art &rarr;</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- 5. Intro Section (Two Columns + Cover Image) -->
  <section class="section bg-paper">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-xl);">
        <div>
          <span class="eyebrow">Studio Introduction</span>
          <h2>Give wings to your imagination with the best photo album manufacturer in Mumbai</h2>
        </div>
        <div>
          <p>
            Ultra Album is Mumbai's leading photo album book designer and wedding photo album manufacturer. We have expertise in both traditional and modern Wedding albums. We specialise in creating top-notch wedding photo albums, wedding photobooks, and albums for all kinds of events catered for photographers. We have been making photobook albums in Mumbai for 15 years, making us the best in the business. Our services include personalized album design, photo album printing service, and secure global shipping, supporting photographers to preserve and showcase their work through tailor-made, high-quality albums.
          </p>
          <p>
            Every photographer is a storyteller who tells the story through his photographs. With our wedding album designing and photo album printing service, we aim to amplify your vision. Imagine flipping through each page of your meticulously crafted album, reliving your clients' precious memories with every turn.
          </p>
        </div>
      </div>

      <div style="width: 100%; border-radius: var(--radius-sm); overflow: hidden;">
        <img
          src="/images/index/Cover.webp"
          alt="Ultraa Album workshop and bespoke album covers display"
          width="1200"
          height="440"
          style="width: 100%; height: auto; border-radius: var(--radius-sm);"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>

  <!-- 6. Our Products (Four Large Tiles) -->
  <section class="section bg-paper" id="products">
    <div class="container">
      <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: var(--space-xl);">
        <div>
          <span class="eyebrow">Product Catalog</span>
          <h2>Our Products</h2>
        </div>
        <a href="/our-products/" class="btn btn-outline">See all products</a>
      </div>

      <div class="product-grid">
        ${ProductTile({
          title: 'Luxury Albums',
          description: 'Ultraa Albums luxury custom photo albums are designed to your taste, adding an elegant touch to your photos and albums.',
          href: '/luxury-albums/',
          imageSrc: '/images/index/1-3-scaled.webp',
          imageAlt: 'Luxury leather bound photo album with bespoke embossing',
          width: 600,
          height: 400,
          shadow: true
        })}

        ${ProductTile({
          title: 'Flush Mount Album',
          description: 'Flush Mount Album is the quintessential wedding and celebration album for the moments that change your life. Enjoy exceptional print quality of your choice.',
          href: '/flush-mount-album/',
          imageSrc: '/images/index/10-scaled.webp',
          imageAlt: 'Hand-bound flush mount album open with layflat thick panoramic pages',
          width: 600,
          height: 400,
          shadow: true
        })}

        ${ProductTile({
          title: 'Photo Book',
          description: 'Photo Books can be used to treasure precious moments from your child\'s birth to high school graduation, or exhibiting photography portfolios.',
          href: '/photo-book/',
          imageSrc: '/images/photo-book/U-152-1-1024x1024.webp',
          imageAlt: 'Custom linen photo book showcasing vibrant print fidelity',
          width: 600,
          height: 400,
          shadow: true
        })}

        ${ProductTile({
          title: 'Layflat Albums',
          description: 'Spread your memories wide open with our Layflat Albums. Showcase your stunning panoramas across two pages that lay flat.',
          href: '/layflat/',
          imageSrc: '/images/our-products/Layflat-2-scaled-pytcwhq8ftmct2d2jmjwe1funp6579wwghp0d1y6be.webp',
          imageAlt: 'Continuous layflat photo album opening completely flat',
          width: 600,
          height: 400,
          shadow: true
        })}
      </div>
    </div>
  </section>

  <!-- 7. Services We Offer (Three Alternating Splits) -->
  <!-- Service 1: Photo Editing (--sky) -->
  ${Split({
    eyebrow: 'Services We Offer',
    title: 'Photo Editing Services',
    text: 'Are you looking for a professional photo editor who can do retouching for your photographs at your convenience? Don\'t hesitate to call us. Ultra Albums has a team of highly skilled & expert photo editors dedicated to giving you the best photo editing services globally. Ultra Albums is India\'s leading photo album designer and manufacturing company based in Mumbai.',
    linkText: 'View Photo Editing Services',
    linkHref: '/image-editing/',
    imageSrc: '/images/index/06.-Image-Manipulation__b.-after.webp',
    imageAlt: 'Retouched wedding portrait demonstrating fine skin tone correction',
    width: 600,
    height: 400,
    pastel: 'bg-sky',
    reverse: false
  })}

  <!-- Service 2: Album Designing (--blush) -->
  ${Split({
    eyebrow: 'Bespoke Layouts',
    title: 'Best Photo Album Books Designer',
    text: 'A designer will manually look at your photos, pick the best out of them, and suggest suitable album designs and themes. Ultra Albums has a team of experienced professional album designers with experience in all kinds of albums, such as Western and traditional wedding album designs, baby showers, parties and all other ceremonies. Our team makes the album designs to your preference with unlimited revisions until you are satisfied.',
    linkText: 'Explore Album Designing',
    linkHref: '/album-designing/',
    imageSrc: '/images/index/11-2.webp',
    imageAlt: 'Designer curated panoramic spread layout for wedding albums',
    width: 600,
    height: 400,
    pastel: 'bg-blush',
    reverse: true
  })}

  <!-- Service 3: Wedding Photography (--sage) -->
  ${Split({
    eyebrow: 'Photography Studio',
    title: 'Wedding Photography Services',
    text: 'Capture the essence of your wedding with our stunning videography and photography, as it\'s the heart of any unforgettable wedding ceremony. We travel across the country, creating an incredible montage of the most priceless moments of the weddings we cover. With our team of 15+ skilled photographers and videographers, you can rest assured that every smile, every tear, and every heartfelt moment will be captured.',
    linkText: 'Learn About Photography',
    linkHref: '/photography/',
    imageSrc: '/images/index/IMG_0553-scaled-pytcwmfinixa031cifs9zdeufdym6wxl1daoxhl62s.webp',
    imageAlt: 'Professional wedding photographers capturing ceremonial moments',
    width: 600,
    height: 400,
    pastel: 'bg-sage',
    reverse: false
  })}

  <!-- 8. Photo Editing Sample Before / After (Three Sliders) -->
  <section class="section ba-section bg-paper">
    <div class="container">
      <div style="text-align: left; margin-bottom: var(--space-xl);">
        <span class="eyebrow">Editing Mastery</span>
        <h2>Photo Editing Sample Before / After</h2>
        <p class="caption">Drag the slider or use left/right arrow keys to compare retouching results.</p>
      </div>

      <div class="ba-grid">
        ${BeforeAfter({
          id: 'ba-manipulation',
          title: 'Image Manipulation',
          beforeSrc: '/images/index/06.-Image-Manipulation__a.-before.webp',
          beforeAlt: 'Raw wedding portrait before image manipulation',
          afterSrc: '/images/index/06.-Image-Manipulation__b.-after.webp',
          afterAlt: 'Retouched wedding portrait after image manipulation',
          width: 600,
          height: 400
        })}

        ${BeforeAfter({
          id: 'ba-bg-removal',
          title: 'Background Removal',
          beforeSrc: '/images/index/04.-Background-Removal_a.-before-scaled.webp',
          beforeAlt: 'Original studio photograph with busy background',
          afterSrc: '/images/index/04.-Background-Removal_b.-after-scaled.webp',
          afterAlt: 'Studio photograph with clean isolated background',
          width: 600,
          height: 400
        })}

        ${BeforeAfter({
          id: 'ba-fg-removal',
          title: 'Foreground Removal',
          beforeSrc: '/images/index/07.-Forground-Removal_a.-before-scaled.webp',
          beforeAlt: 'Photograph before foreground distracting element removal',
          afterSrc: '/images/index/07.-Forground-Removal_b.-after-scaled.webp',
          afterAlt: 'Cleaned photograph after foreground removal',
          width: 600,
          height: 400
        })}
      </div>
    </div>
  </section>

  <!-- 9. How We Work (Numbered 01-04) -->
  <section class="section bg-paper" style="border-bottom: 1px solid var(--line);">
    <div class="container">
      <div style="max-width: 680px; margin-bottom: var(--space-lg);">
        <span class="eyebrow">Simple Workflow</span>
        <h2>How We Work</h2>
        <p class="lead">Four structured steps from raw digital files to hand-bound delivery.</p>
      </div>

      ${ProcessList({
        steps: [
          {
            number: '01',
            title: 'Transfer Photos Online',
            description: 'Select your preferred album and design style. Place the order and upload your photos in sequence.'
          },
          {
            number: '02',
            title: 'Get Design',
            description: 'We design album pages as per your choice of pattern and share soft copy previews for corrections and approval.'
          },
          {
            number: '03',
            title: 'Printing',
            description: 'We show online preview and print on your approval using archival papers and precision color calibration.'
          },
          {
            number: '04',
            title: 'Shipping',
            description: 'Receive your album in the comfort of your home or studio with secure packaging and global tracking.'
          }
        ]
      })}
    </div>
  </section>

  <!-- 10. Why Ultraa (Hairline Rows, Plain Text, No Icons) -->
  <section class="section bg-paper">
    <div class="container">
      <div style="max-width: 680px; margin-bottom: var(--space-xl);">
        <span class="eyebrow">Studio Values</span>
        <h2>Why Ultraa Album</h2>
      </div>

      <div style="border-top: 1px solid var(--line);">
        <div style="display: grid; grid-template-columns: 280px 1fr; padding: var(--space-lg) 0; border-bottom: 1px solid var(--line); gap: var(--space-md);">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 0;">World Wide Delivery</h3>
          <p style="margin: 0; color: var(--ink-soft);">
            Doorstep delivery across India, the United Kingdom, and international studio locations with careful moisture-proof packaging.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 280px 1fr; padding: var(--space-lg) 0; border-bottom: 1px solid var(--line); gap: var(--space-md);">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 0;">Cost Effective</h3>
          <p style="margin: 0; color: var(--ink-soft);">
            Direct manufacturer pricing without middleman markups, giving working photographers viable studio margins.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 280px 1fr; padding: var(--space-lg) 0; border-bottom: 1px solid var(--line); gap: var(--space-md);">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 0;">Reliable Quality</h3>
          <p style="margin: 0; color: var(--ink-soft);">
            Hand-bound construction, robust spine durability, and archival fine art printing tested for lasting colour fidelity.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 280px 1fr; padding: var(--space-lg) 0; border-bottom: 1px solid var(--line); gap: var(--space-md);">
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 0;">Customer Centric</h3>
          <p style="margin: 0; color: var(--ink-soft);">
            Personalized support, direct communication with your assigned designer, and revisions until you approve the result.
          </p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Photo Album Manufacturer And Album Designer In Mumbai | Ultraa Album',
    description: 'Ultra Albums is wedding photo album manufacturer in India. We offer custom designing, binding & printing services for photo albums & photobooks.',
    canonical: 'https://ultraaalbums.com/',
    currentPath: '/',
    lang: 'en-IN',
    preloadHero: '/images/index/10-scaled.webp',
    structuredData: structuredData,
    hreflangPairs: [
      { lang: 'en-IN', url: 'https://ultraaalbums.com/' },
      { lang: 'en-GB', url: 'https://ultraaalbums.com/flush-mount-album-for-uk/' }
    ],
    content: content
  });
}

module.exports = { renderHomePage };

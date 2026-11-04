/**
 * Header and Navigation Component
 */
function Header(currentPath = '/') {
  return `
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="/" class="brand-link" aria-label="Ultraa Album Home">
        <img src="/images/common/cropped-ultra-logo.webp" alt="Ultraa Album Logo" width="213" height="71" class="brand-logo" />
      </a>

      <nav class="primary-nav" aria-label="Main Navigation">
        <ul class="nav-list" role="menubar">
          <li class="nav-item" role="none">
            <a href="/" class="nav-link ${currentPath === '/' ? 'active' : ''}" role="menuitem">Home</a>
          </li>
          <li class="nav-item" role="none">
            <a href="/about-us/" class="nav-link ${currentPath === '/about-us/' ? 'active' : ''}" role="menuitem">About us</a>
          </li>
          
          <!-- Our Products Dropdown -->
          <li class="nav-item" role="none">
            <button type="button" class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-controls="dropdown-products" role="menuitem">
              <span>Our Products</span>
              <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M1 1l4 4 4-4" />
              </svg>
            </button>
            <ul class="dropdown-panel" id="dropdown-products" role="menu" aria-label="Our Products">
              <li role="none"><a href="/our-products/" class="dropdown-link" role="menuitem">All Products</a></li>
              <li role="none"><a href="/flush-mount-album/" class="dropdown-link" role="menuitem">Flush Mount Album</a></li>
              <li role="none"><a href="/layflat/" class="dropdown-link" role="menuitem">Layflat</a></li>
              <li role="none"><a href="/photo-book/" class="dropdown-link" role="menuitem">Photo Book</a></li>
              <li role="none"><a href="/luxury-albums/" class="dropdown-link" role="menuitem">Luxury Albums</a></li>
              <li role="none"><a href="/box-and-bags/" class="dropdown-link" role="menuitem">Box and Bags</a></li>
              <li role="none"><a href="/slip-in-albums/" class="dropdown-link" role="menuitem">Slip in Albums</a></li>
              <li role="none"><a href="/wedding-photo-albums/" class="dropdown-link" role="menuitem">Wedding Photo Albums</a></li>
            </ul>
          </li>

          <!-- Services Dropdown -->
          <li class="nav-item" role="none">
            <button type="button" class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-controls="dropdown-services" role="menuitem">
              <span>Services</span>
              <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M1 1l4 4 4-4" />
              </svg>
            </button>
            <ul class="dropdown-panel" id="dropdown-services" role="menu" aria-label="Services">
              <li role="none"><a href="/image-editing/" class="dropdown-link" role="menuitem">Image Editing</a></li>
              <li role="none"><a href="/photography/" class="dropdown-link" role="menuitem">Wedding Photography</a></li>
              <li role="none"><a href="/photo-editing-and-album-design/" class="dropdown-link" role="menuitem">Photo Editing & Album Design</a></li>
              <li role="none"><a href="/album-designs/" class="dropdown-link" role="menuitem">Album Designs</a></li>
            </ul>
          </li>

          <!-- UK Dropdown -->
          <li class="nav-item" role="none">
            <button type="button" class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true" aria-controls="dropdown-uk" role="menuitem">
              <span>UK</span>
              <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M1 1l4 4 4-4" />
              </svg>
            </button>
            <ul class="dropdown-panel" id="dropdown-uk" role="menu" aria-label="UK Offerings">
              <li role="none"><a href="/flush-mount-album-for-uk/" class="dropdown-link" role="menuitem">Flush Mount Album for UK</a></li>
              <li role="none"><a href="/luxury-albums-for-uk/" class="dropdown-link" role="menuitem">Luxury Albums for UK</a></li>
              <li role="none"><a href="/box-and-bags-for-uk/" class="dropdown-link" role="menuitem">Box and Bags for UK</a></li>
              <li role="none"><a href="/slip-in-albums-for-uk/" class="dropdown-link" role="menuitem">Slip in Albums for UK</a></li>
              <li role="none"><a href="/image-editing-for-uk/" class="dropdown-link" role="menuitem">Image Editing for UK</a></li>
              <li role="none"><a href="/photo-book-for-uk/" class="dropdown-link" role="menuitem">Photo Book for UK</a></li>
              <li role="none"><a href="/photography-for-uk/" class="dropdown-link" role="menuitem">Photography for UK</a></li>
            </ul>
          </li>

          <li class="nav-item" role="none">
            <a href="/album-designing/" class="nav-link ${currentPath === '/album-designing/' ? 'active' : ''}" role="menuitem">Album Designing</a>
          </li>
          <li class="nav-item" role="none">
            <a href="/blogs/" class="nav-link ${currentPath === '/blogs/' ? 'active' : ''}" role="menuitem">Blogs</a>
          </li>
          <li class="nav-item" role="none">
            <a href="/contact-us/" class="nav-link ${currentPath === '/contact-us/' ? 'active' : ''}" role="menuitem">Contact Us</a>
          </li>
          <li class="nav-item" role="none">
            <a href="https://www.paypal.com/in/signin" class="nav-link" target="_blank" rel="noopener noreferrer" role="menuitem">Pay Online</a>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <a href="/contact-us/" class="btn btn-outline">Request a quote</a>
        <button type="button" class="mobile-menu-toggle" id="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-nav-drawer" aria-label="Open menu">
          <span>Menu</span>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M0 1h18M0 6h18M0 11h18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-modal="true" role="dialog" aria-label="Navigation Menu">
      <div class="mobile-drawer-header">
        <a href="/" class="brand-link" aria-label="Ultraa Album Home">
          <img src="/images/common/cropped-ultra-logo.webp" alt="Ultraa Album Logo" width="160" height="53" class="brand-logo" />
        </a>
        <button type="button" class="btn btn-outline" id="mobile-menu-close" aria-label="Close menu">
          Close &times;
        </button>
      </div>

      <ul class="mobile-nav-list">
        <li class="mobile-nav-item"><a href="/" class="mobile-nav-link">Home</a></li>
        <li class="mobile-nav-item"><a href="/about-us/" class="mobile-nav-link">About us</a></li>
        
        <li class="mobile-nav-item">
          <button type="button" class="mobile-nav-link mobile-sub-toggle" aria-expanded="false">
            <span>Our Products</span>
            <span>+</span>
          </button>
          <ul class="mobile-sub-list">
            <li><a href="/our-products/" class="mobile-sub-link">All Products</a></li>
            <li><a href="/flush-mount-album/" class="mobile-sub-link">Flush Mount Album</a></li>
            <li><a href="/layflat/" class="mobile-sub-link">Layflat</a></li>
            <li><a href="/photo-book/" class="mobile-sub-link">Photo Book</a></li>
            <li><a href="/luxury-albums/" class="mobile-sub-link">Luxury Albums</a></li>
            <li><a href="/box-and-bags/" class="mobile-sub-link">Box and Bags</a></li>
            <li><a href="/slip-in-albums/" class="mobile-sub-link">Slip in Albums</a></li>
            <li><a href="/wedding-photo-albums/" class="mobile-sub-link">Wedding Photo Albums</a></li>
          </ul>
        </li>

        <li class="mobile-nav-item">
          <button type="button" class="mobile-nav-link mobile-sub-toggle" aria-expanded="false">
            <span>Services</span>
            <span>+</span>
          </button>
          <ul class="mobile-sub-list">
            <li><a href="/image-editing/" class="mobile-sub-link">Image Editing</a></li>
            <li><a href="/photography/" class="mobile-sub-link">Wedding Photography</a></li>
            <li><a href="/photo-editing-and-album-design/" class="mobile-sub-link">Photo Editing & Album Design</a></li>
            <li><a href="/album-designs/" class="mobile-sub-link">Album Designs</a></li>
          </ul>
        </li>

        <li class="mobile-nav-item">
          <button type="button" class="mobile-nav-link mobile-sub-toggle" aria-expanded="false">
            <span>UK</span>
            <span>+</span>
          </button>
          <ul class="mobile-sub-list">
            <li><a href="/flush-mount-album-for-uk/" class="mobile-sub-link">Flush Mount Album for UK</a></li>
            <li><a href="/luxury-albums-for-uk/" class="mobile-sub-link">Luxury Albums for UK</a></li>
            <li><a href="/box-and-bags-for-uk/" class="mobile-sub-link">Box and Bags for UK</a></li>
            <li><a href="/slip-in-albums-for-uk/" class="mobile-sub-link">Slip in Albums for UK</a></li>
            <li><a href="/image-editing-for-uk/" class="mobile-sub-link">Image Editing for UK</a></li>
            <li><a href="/photo-book-for-uk/" class="mobile-sub-link">Photo Book for UK</a></li>
            <li><a href="/photography-for-uk/" class="mobile-sub-link">Photography for UK</a></li>
          </ul>
        </li>

        <li class="mobile-nav-item"><a href="/album-designing/" class="mobile-nav-link">Album Designing</a></li>
        <li class="mobile-nav-item"><a href="/blogs/" class="mobile-nav-link">Blogs</a></li>
        <li class="mobile-nav-item"><a href="/contact-us/" class="mobile-nav-link">Contact Us</a></li>
        <li class="mobile-nav-item"><a href="https://www.paypal.com/in/signin" class="mobile-nav-link" target="_blank" rel="noopener noreferrer">Pay Online</a></li>
      </ul>

      <div class="mobile-drawer-footer">
        <a href="/contact-us/" class="btn btn-primary" style="width: 100%; margin-bottom: var(--space-md);">Request a quote</a>
        <p class="caption"><strong>Phone:</strong> <a href="tel:+919322254315">+91-93222 54315</a> / <a href="tel:+919320054315">+91-93200 54315</a></p>
        <p class="caption"><strong>Email:</strong> <a href="mailto:ultraaalbums@gmail.com">ultraaalbums@gmail.com</a></p>
      </div>
    </div>
  </header>`;
}

module.exports = { Header };


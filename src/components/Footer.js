/**
 * Footer Component
 */
function Footer() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Address -->
        <div class="footer-brand">
          <a href="/" class="brand-link" aria-label="Ultraa Album Home">
            <img src="/images/common/cropped-ultra-logo.webp" alt="Ultraa Album Logo" width="180" height="60" class="brand-logo" />
          </a>
          <p>Handcrafted photo albums and album design services for professional photographers.</p>
          <address class="footer-address">
            Shree Krishna Ind. Estate, Near Toll Naka,<br />
            211, Western Express Hwy, Dahisar East,<br />
            Mumbai 400068, INDIA
          </address>
        </div>

        <!-- Col 2: Products -->
        <div class="footer-col">
          <h2 class="footer-heading">Products</h2>
          <ul class="footer-list">
            <li><a href="/flush-mount-album/" class="footer-link">Flush Mount Album</a></li>
            <li><a href="/layflat/" class="footer-link">Layflat Albums</a></li>
            <li><a href="/photo-book/" class="footer-link">Photo Book</a></li>
            <li><a href="/luxury-albums/" class="footer-link">Luxury Albums</a></li>
            <li><a href="/box-and-bags/" class="footer-link">Box and Bags</a></li>
            <li><a href="/slip-in-albums/" class="footer-link">Slip in Albums</a></li>
            <li><a href="/wedding-photo-albums/" class="footer-link">Wedding Photo Albums</a></li>
          </ul>
        </div>

        <!-- Col 3: Company & Resources -->
        <div class="footer-col">
          <h2 class="footer-heading">Company</h2>
          <ul class="footer-list">
            <li><a href="/about-us/" class="footer-link">About Us</a></li>
            <li><a href="/album-designing/" class="footer-link">Album Designing</a></li>
            <li><a href="/blogs/" class="footer-link">Blogs</a></li>
            <li><a href="/faq/" class="footer-link">FAQ</a></li>
            <li><a href="/files/Ultraa-product-Catelogue.pdf" class="footer-link" target="_blank" rel="noopener noreferrer">Product Catalog (PDF)</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact & Support -->
        <div class="footer-col">
          <h2 class="footer-heading">Contact</h2>
          <ul class="footer-list">
            <li><a href="tel:+919322254315" class="footer-link">+91-93222 54315</a></li>
            <li><a href="tel:+919320054315" class="footer-link">+91-93200 54315</a></li>
            <li><a href="mailto:ultraaalbums@gmail.com" class="footer-link">ultraaalbums@gmail.com</a></li>
            <li><a href="mailto:ultraadesignes@gmail.com" class="footer-link">ultraadesignes@gmail.com</a></li>
            <li><a href="https://m.me/UltraaAlbums" class="footer-link" target="_blank" rel="noopener noreferrer">Facebook Messenger</a></li>
            <li><a href="https://www.paypal.com/in/signin" class="footer-link" target="_blank" rel="noopener noreferrer">Pay Online</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Ultraa Album. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/terms-and-condition/">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>`;
}

module.exports = { Footer };


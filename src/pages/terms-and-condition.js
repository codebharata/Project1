const { Layout } = require('../components/Layout');

function renderTermsPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 800px;">
      <div style="margin-bottom: var(--space-xl); border-bottom: 1px solid var(--line); padding-bottom: var(--space-md);">
        <span class="eyebrow">Legal Terms</span>
        <h1>Terms and Conditions</h1>
        <p class="caption">Website Terms and Services Agreement &bull; Ultraa Album</p>
      </div>

      <div style="line-height: 1.8;">
        <!-- CHECK WITH CLIENT: Published copy on live site contains template explanation text -->
        <p class="lead">
          The Website Terms &amp; Conditions is a legal document that details the terms and conditions that the user must abide by while using the website.
        </p>

        <p>
          The website terms and conditions agreement details the license of the copyright in the website, includes a disclaimer of liability, an acceptable use clause, a variation clause, a clause specifying the applicable law and jurisdiction and other legal information.
        </p>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">Usage</h2>
        <p>
          This website terms and conditions document can be used by any website that is a blog or website offering services to the public or by an ecommerce website. All websites can use this to indicate to readers and users of their website the legal conditions that restrict the use of information and any other sensitive data or details displayed on the website.
        </p>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">Execution</h2>
        <p>
          This Website Terms &amp; Conditions is displayed on the website in a prominent place at the footer of the website. This indicates to customers and readers of the website the legal restrictions on the use of information available on that website.
        </p>

        <div style="margin-top: var(--space-xl); padding: var(--space-md); background-color: var(--sage); border: 1px solid var(--line); border-radius: var(--radius-sm);">
          <p class="caption" style="margin: 0; color: var(--ink);">
            For specific studio inquiries regarding custom album manufacturing contracts, wholesale pricing agreements, or copyright permissions, please <a href="/contact-us/">contact Ultraa Album studio directly</a>.
          </p>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Terms and Condition - Ultraa Album',
    description: 'Website Terms and Services Agreement for Ultraa Album manufacturing and album designing services.',
    canonical: 'https://ultraaalbums.com/terms-and-condition/',
    currentPath: '/terms-and-condition/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderTermsPage };


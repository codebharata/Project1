const { Layout } = require('../components/Layout');

function renderAlbumDesigningPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 960px;">
      <div style="margin-bottom: var(--space-xl);">
        <span class="eyebrow">Studio Services &bull; Mumbai</span>
        <h1>Best Album Designing Services for Photographers</h1>
        <p class="lead">
          We specialize in album designing services for photographers. Our team will design your wedding album, family album, or any other type of photo book that you need.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-xl); margin-bottom: var(--space-2xl);">
        <div>
          <h2 style="font-size: 1.5rem;">Why Human Curated Design Beats Generic Software</h2>
          <p>
            Most album designing and manufacturing companies offer free software to download from their site and claim that you can design your album yourself. It takes days to understand how the software works. Most important thing is that there is no creativity in those templates — just flat placement of photos on a page.
          </p>
          <p>
            Ultraa Albums has a team of experienced professional wedding photo album designers. Our professional designers make designs as per your likings. We have about 6 to 7 album designing themes to choose from. We always show you a soft copy preview for corrections and approval, with unlimited revisions until you are satisfied.
          </p>
        </div>

        <div>
          <h2 style="font-size: 1.5rem;">Save Valuable Studio Hours</h2>
          <p>
            Making the best album design is difficult for many photographers and artists. It becomes unprofitable for them to do everything themselves. Album design occupies an enormous amount of time and effort.
          </p>
          <p>
            To solve this problem, we at Ultra Albums have dedicated album designers who specialize in every style of wedding traditions across India and internationally.
          </p>
          <div style="margin-top: var(--space-md);">
            <a href="/contact-us/" class="btn btn-primary">Submit Photos for Design</a>
          </div>
        </div>
      </div>

      <!-- Themes Showcase -->
      <div style="border-top: 1px solid var(--line); padding-top: var(--space-xl); margin-bottom: var(--space-2xl);">
        <span class="eyebrow">Design Themes</span>
        <h2>Curated Layout Themes Available</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-md); margin-top: var(--space-lg);">
          <div style="border: 1px solid var(--line); padding: var(--space-md); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.125rem; margin-bottom: 4px;">Classic Design</h3>
            <p style="font-size: 0.875rem; color: var(--ink-soft); margin: 0;">Timeless white borders with balanced chronological pacing.</p>
          </div>
          <div style="border: 1px solid var(--line); padding: var(--space-md); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.125rem; margin-bottom: 4px;">Clean Design</h3>
            <p style="font-size: 0.875rem; color: var(--ink-soft); margin: 0;">Generous negative space with minimal visual distractions.</p>
          </div>
          <div style="border: 1px solid var(--line); padding: var(--space-md); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.125rem; margin-bottom: 4px;">Contemporary Design</h3>
            <p style="font-size: 0.875rem; color: var(--ink-soft); margin: 0;">Modern asymmetric crops and full-bleed hero spreads.</p>
          </div>
          <div style="border: 1px solid var(--line); padding: var(--space-md); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.125rem; margin-bottom: 4px;">Indian Classic Design</h3>
            <p style="font-size: 0.875rem; color: var(--ink-soft); margin: 0;">Rich cultural motifs and ceremonial sequence layouts.</p>
          </div>
          <div style="border: 1px solid var(--line); padding: var(--space-md); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.125rem; margin-bottom: 4px;">Indian Fusion Design</h3>
            <p style="font-size: 0.875rem; color: var(--ink-soft); margin: 0;">Harmonious blend of traditional warmth and modern layout rhythm.</p>
          </div>
          <div style="border: 1px solid var(--line); padding: var(--space-md); border-radius: var(--radius-sm); background: var(--paper);">
            <h3 style="font-size: 1.125rem; margin-bottom: 4px;">Western Design</h3>
            <p style="font-size: 0.875rem; color: var(--ink-soft); margin: 0;">Minimalist editorial pacing focusing on couple portraits.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Best Album Designing Services for Photographers - Ultraa Album',
    description: 'We specialize in album designing services for photographers. Our team will design your wedding album, family album, or event books.',
    canonical: 'https://ultraaalbums.com/album-designing/',
    currentPath: '/album-designing/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderAlbumDesigningPage };


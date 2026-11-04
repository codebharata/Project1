const { Layout } = require('../components/Layout');
const { Accordion } = require('../components/Accordion');

function renderFAQPage() {
  const faqItems = [
    {
      question: 'What types of albums does Ultraa Album manufacture?',
      answer: 'Ultraa Album manufactures handcrafted Flush Mount Albums, Layflat Albums, Luxury Albums, Classic Photo Books, Slip in Albums, and presentation Box & Bags designed specifically for professional photographers.'
    },
    {
      question: 'How does the album designing process work?',
      answer: 'First, select your preferred album style and upload your photographs in sequence. Our professional design team will manually curate layouts, create custom spreads, and share an online soft copy preview. We provide unlimited revisions until you are completely satisfied before sending to print.'
    },
    {
      question: 'What binding methods and materials do you use?',
      answer: 'All of our flush mount and luxury albums are hand-bound by skilled artisans using archival bookbinding techniques rather than solely relying on machine glue. Pages feature panoramic continuous layflat spreads with archival photo papers mounted on durable substrate cores.'
    },
    {
      question: 'Do you offer studio sample discounts for photographers?',
      answer: 'Yes. In spite of keeping highly competitive pricing, we provide 10% off on Studio Samples for photographers so you can showcase our physical craftsmanship and cover materials to prospective wedding clients.'
    },
    {
      question: 'Do you deliver albums internationally?',
      answer: 'Yes, we provide worldwide doorstep delivery across the United Kingdom, United States, Canada, Europe, and Australia. All international shipments are sealed in heavy-duty moisture-proof packaging to ensure intact arrival.'
    },
    {
      question: 'How do I submit photos for photo editing or retouching?',
      answer: 'You can transfer raw or JPEG files via our secure online file transfer link. Our retouchers perform skin tone correction, background removal, foreground object removal, and lighting enhancements according to your studio preferences.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 840px;">
      <div style="margin-bottom: var(--space-xl);">
        <span class="eyebrow">Frequently Asked Questions</span>
        <h1>Frequently Asked Questions</h1>
        <p class="lead">
          Common questions regarding album manufacturing, paper specifications, turn-around times, and worldwide studio shipping.
        </p>
      </div>

      <!-- Accordion Component -->
      ${Accordion({
        idPrefix: 'faq-accordion',
        items: faqItems
      })}

      <div style="margin-top: var(--space-2xl); padding: var(--space-lg); background-color: var(--sage); border-radius: var(--radius-sm); border: 1px solid var(--line);">
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: var(--space-xs);">Have a specific inquiry?</h3>
        <p style="margin-bottom: var(--space-md); color: var(--ink-soft);">
          Our studio team is available via direct phone or WhatsApp consultation to discuss your specific album dimensions and custom cover requirements.
        </p>
        <a href="/contact-us/" class="btn btn-primary">Contact Studio Support</a>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'FAQ - Ultraa Album',
    description: 'Frequently asked questions about handcrafted wedding photo albums, binding methods, turnaround times, and international delivery from Ultraa Album.',
    canonical: 'https://ultraaalbums.com/faq/',
    currentPath: '/faq/',
    lang: 'en-IN',
    structuredData: structuredData,
    content: content
  });
}

module.exports = { renderFAQPage };

const { Layout } = require('../components/Layout');

function renderPrivacyPolicyPage() {
  const content = `
  <section class="section bg-paper">
    <div class="container" style="max-width: 800px;">
      <div style="margin-bottom: var(--space-xl); border-bottom: 1px solid var(--line); padding-bottom: var(--space-md);">
        <span class="eyebrow">Legal Policy</span>
        <h1>Privacy Policy</h1>
        <p class="caption">Last updated: 2026 &bull; Ultraa Album</p>
      </div>

      <div style="line-height: 1.8;">
        <p>
          This privacy policy will help you understand how Ultraa Albums uses and protects the data you provide to us when you visit and use www.ultraaalbums.com.
        </p>

        <p>
          We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
        </p>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">What User Data We Collect</h2>
        <p>When you visit the website, we may collect the following data:</p>
        <ul style="margin-bottom: var(--space-md); padding-left: var(--space-md);">
          <li>Your IP address.</li>
          <li>Your contact information and email address.</li>
          <li>Other information such as interests and preferences.</li>
          <li>Data profile regarding your online behavior on our website.</li>
        </ul>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">Why We Collect Your Data</h2>
        <p>We are collecting your data for several reasons:</p>
        <ul style="margin-bottom: var(--space-md); padding-left: var(--space-md);">
          <li>To better understand your needs.</li>
          <li>To improve our services and products.</li>
          <li>To send you promotional emails containing the information we think you will find interesting.</li>
          <li>To contact you to fill out surveys and participate in other types of market research.</li>
          <li>To customize our website according to your online behavior and personal preferences.</li>
        </ul>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">Safeguarding and Securing the Data</h2>
        <p>
          <!-- CHECK WITH CLIENT: Placeholder [name] from original live website copy -->
          Ultraa Album is committed to securing your data and keeping it confidential. We have done all in our power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
        </p>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">Our Cookie Policy</h2>
        <p>
          Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit). The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.
        </p>
        <p>
          Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you. If you want to disable cookies, you can do it by accessing the settings of your internet browser.
        </p>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">Links to Other Websites</h2>
        <p>
          Our website contains links that lead to other websites. If you click on these links Ultraa Album is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.
        </p>

        <h2 style="font-size: 1.5rem; margin-top: var(--space-lg);">Restricting the Collection of your Personal Data</h2>
        <p>
          At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:
        </p>
        <ul style="margin-bottom: var(--space-md); padding-left: var(--space-md);">
          <li>When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.</li>
          <li>If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.</li>
        </ul>
        <p>
          Ultraa Album will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.
        </p>
      </div>
    </div>
  </section>`;

  return Layout({
    title: 'Privacy Policy - Ultraa Album',
    description: 'This privacy policy will help you understand how Ultraa Albums uses and protects the data you provide to us when you visit and use www.ultraaalbums.com.',
    canonical: 'https://ultraaalbums.com/privacy-policy/',
    currentPath: '/privacy-policy/',
    lang: 'en-IN',
    content: content
  });
}

module.exports = { renderPrivacyPolicyPage };


import { google } from 'googleapis';

const keyPath = 'C:/Users/mayan/.gemini/gsc-credentials.json';
const siteUrl = 'sc-domain:finscalegrowth.com';
const sitemapUrl = 'https://www.finscalegrowth.com/sitemap.xml';

async function run() {
  console.log('Initiating Google Search Console Sitemap Submission...');
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const webmasters = google.webmasters({
      version: 'v3',
      auth: auth,
    });

    console.log(`Submitting sitemap: ${sitemapUrl} to ${siteUrl}...`);
    await webmasters.sitemaps.submit({
      siteUrl: siteUrl,
      feedpath: sitemapUrl,
    });

    console.log('✅ Sitemap submitted successfully to Google Search Console!');
  } catch (error) {
    console.error('❌ Failed to submit sitemap:', error.message);
  }
}

run();

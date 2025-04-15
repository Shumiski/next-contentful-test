// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

/**
 * Fetch entries for a given content type.
 * @param {string} contentType - The content type identifier in Contentful.
 * @returns {Promise<Object[]>} - A promise that resolves with an array of entries.
 */
export async function fetchEntries(contentType = 'yourContentType') {
  const entries = await client.getEntries({ content_type: contentType });
  if (entries.items) return entries.items;
  console.warn(`Error getting entries for ${contentType}.`);
  return [];
}

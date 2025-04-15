// pages/api/revalidate.js

export default async function handler(req, res) {
    // Verify the secret token to secure your revalidation endpoint
    if (req.query.secret !== process.env.MY_REVALIDATION_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    try {
      // Revalidate the homepage (adjust the path if needed)
      await res.revalidate('/');
      return res.json({ revalidated: true });
    } catch (err) {
      console.error('Error revalidating:', err);
      return res.status(500).json({ message: 'Error revalidating', error: err.toString() });
    }
  }
  
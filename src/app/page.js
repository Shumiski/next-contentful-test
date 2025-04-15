import Image from "next/image";
import styles from "./page.module.css";

// app/page.jsx
//import { fetchEntries } from './contentful';

// If you want ISR, export a revalidate value (in seconds)
// This tells Next.js to regenerate the page at most once every 60 seconds.
export const revalidate = 60;

// Import any necessary libraries (if needed)

async function fetchEntries(contentType) {
  // Replace the URL and parameters with your actual Contentful endpoint and credentials.
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=${contentType}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch entries from Contentful');
  }
  const data = await res.json();
  // Adjust the return based on your API shape. You might need to access data.items, for example.
  return data.items; 
}

export default async function Home() {
  // // Fetch Contentful data on the server
  const entries = await fetchEntries('firstTest'); // replace 'blogPost' with your content type
  
  return (
    <div className="wrapper">
      <p>{entries[0].fields.hello}</p>
      <p className="subtitle">{entries[0].fields.subtitle}</p>
    </div>
  );


}



// export default function Home() {
//   return (
//     <div className="wrapper">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

import Image from "next/image";
import styles from "./page.module.css";

// app/page.jsx
import { fetchEntries } from './contentful';

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

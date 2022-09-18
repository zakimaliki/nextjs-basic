import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/test">
            <a>Test</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

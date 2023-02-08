import { Html, Head, Main, NextScript } from 'next/document'

/**
 * The Document component is used to augment the application's HTML
 * @returns {JSX.Element} The Document component
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

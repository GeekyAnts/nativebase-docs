import { Children } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';
import config from '../app.json';
// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main);
    const { getStyleElement } = AppRegistry.getApplication(config.name);
    const page = await renderPage();
    const styles = [
      // eslint-disable-next-line react/jsx-key
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html style={{ height: '100%' }}>
        <Head>
          <meta
            name="google-site-verification"
            content="CrITr8VxlSHTwFPrOKF1iC4Rp00Cm9ndrBAvxBQd6-M"
          />
        </Head>
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
// export { default } from "@expo/next-adapter/document";

/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs';
import FraxIcon from '~/components/Icon/FraxIcon';
import FraxtalIcon from '~/components/Icon/FraxtalIcon';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  sidebar: {
    defaultMenuCollapseLevel: 2,
    autoCollapse: true,
    toggleButton: true,
  },
  useNextSeoProps: () => ({
    titleTemplate: '%s | Fraxtal Docs',
  }),
  logo: () => {
    const router = useRouter();
    const asPath = router.asPath;
    const section = asPath.startsWith('/fraxtal') ? 'fraxtal' : asPath.startsWith('/fraxnet') ? 'fraxnet' : 'frax' ;

    return (
      <>
        {section === 'fraxtal' && (
          <>
            <FraxtalIcon size={32} />
            <span style={{ marginLeft: 10 }}>Fraxtal Docs</span>
          </>
        )}
        {section === 'frax' && (
          <>
            <FraxIcon size={32} />
            <span style={{ marginLeft: 10 }}>Frax Docs</span>
          </>
        )}
        {section === 'fraxnet' && (
          <>
            <img
              src="https://static.frax.com/images/tokens/frxusd.png"
              alt="Fraxnet Icon"
              style={{ width: 32, height: 32 }}
            />
            <span style={{ marginLeft: 10 }}>Fraxnet Docs</span>
          </>
        )}
      </>
    );
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Dim',
        dark: 'Dark',
        system: 'System',
      };
    },
  },
  project: {
    link: 'https://github.com/FraxFinance/docs',
  },
  darkMode: true,
  chat: {
    link: 'https://discord.gg/fraxfinance',
  },
  head: () => {
    const router = useRouter();
    const { frontMatter } = useConfig();
    const asPath = router.asPath;
      const section = asPath.startsWith('/fraxtal') ? 'fraxtal' : asPath.startsWith('/fraxnet') ? 'fraxnet' : 'frax' ;
    
    const faviconImage = section === 'fraxtal' ? '/images/fraxtal-256x256.png' : section === 'fraxnet' ? '/images/protocol/frxusd.png' : '/images/frax-256x256.png';

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href={faviconImage} />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fraxfinance" />
        <meta name="twitter:creator" content="@fraxfinance" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Frax" />
        <meta property="og:title" content={frontMatter.title || 'Fraxtal Docs'} />
        <meta property="og:description" content={frontMatter.description || 'Fraxtal Docs'} />
        <link rel="preload" as="image" href="/images/fraxtal-256x256.png" />
        <link rel="preload" as="image" href="/images/frax-256x256.png" />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-pro-300-normal.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-pro-400-normal.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-pro-500-normal.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-pro-700-normal.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-mono-300-normal.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-mono-400-normal.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-mono-500-normal.woff2"
        />
        <link
          rel="preload"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
          href="https://static.frax.com/fonts/aeonik-mono-700-normal.woff2"
        />
        {frontMatter.image ? <meta property="og:image" content={frontMatter.image} /> : null}
        {frontMatter.video ? <meta property="og:video" content={frontMatter.video} /> : null}
      </>
    );
  },
  docsRepositoryBase: 'https://github.com/FraxFinance/docs/blob/master/',
  footer: {
    text: 'Fraxtal Docs',
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
};

export default config;

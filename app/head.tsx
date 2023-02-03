export default function Head() {
  return (
    <>
      <title>Moodlody</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Moodlody is an app with nature sounds to help you focus, sleep, relax and relieve stress."
      />
      <meta
        name="keywords"
        content="moodlody, nature sounds, focus, sleep, relaxation, stress relief, app, soundscape, 
        mindfulness, wellness, soothing, calming, concentration, meditation, peaceful, tranquility,
        rejuvenation, harmony"
      />

      {/* <!-- Favicon --> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://moodlody.vercel.app/" />
      <meta property="og:title" content="Moodlody" />
      <meta
        property="og:description"
        content="Moodlody is an app with nature sounds to help you focus, sleep, relax and relieve stress."
      />
      <meta property="og:image" content="/public/assets/example-1.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="moodlody.vercel.app" />
      <meta property="twitter:url" content="https://moodlody.vercel.app/" />
      <meta name="twitter:title" content="Moodlody" />
      <meta
        name="twitter:description"
        content="Moodlody is an app with nature sounds to help you focus, sleep, relax and relieve stress."
      />
      <meta name="twitter:image" content="/public/assets/example-1.png" />
    </>
  )
}

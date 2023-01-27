import React from 'react'

const Footer = () => {
  return (
    <footer className="sticky w-full text-center p-[1rem] text-white">
      <div className="flex flex-col justify-center items-center gap-[2rem]">
        <a
          href="https://www.producthunt.com/posts/moodlody?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-moodlody"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=376855&theme=light"
            alt="Moodlody - make&#0032;you&#0032;feel&#0032;relaxed&#0046; | Product Hunt"
            className="w-[250px] h-[54px]"
          />
        </a>
        <div>
          Made with 💗 by{' '}
          <a href="https://github.com/DEATHTINYZ/">Dream.Chayutpong</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import Button from "@/components/Button/Button.jsx"
import "./Hero.scss"

const Hero = () => {
  const playButtonTitle = "Play Video"

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}
          >
            <img
              className="hero__play-button-image"
              src="./play.svg"
              alt=""
              width={470}
              height={470}
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" id="hero-title">
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            <p>
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
          </div>
          <Button
            className="hero__button"
            iconName="play"
            hasFillIcon
            label="Start Watching Now"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

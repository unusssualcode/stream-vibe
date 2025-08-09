import classNames from "classnames"
import "./Section.scss"

const Section = (props) => {
  const { className, title, titleId, description, actions, children } = props

  return (
    <section
      className={classNames(className, "section container")}
      aria-label={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3">
            Explore our wide variety of categories
          </h2>
        </div>
        {actions && <div className="section__actions">{actions}</div>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section

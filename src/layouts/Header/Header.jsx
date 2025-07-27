import Logo from "@/components/Logo/index.js"
import "./Header.scss"
import classNames from "classnames"
import Button from "@/components/Button/Button.jsx"
import BurgerButton from "@/components/BurgerButton/BurgerButton.jsx"

const Header = (props) => {
  const { url, isFixed } = props
  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Movies & Shows",
      href: "/movies",
    },
    {
      label: "Support",
      href: "/support",
    },
    {
      label: "Subscriptions",
      href: "/subscriptions",
    },
  ]
  return (
    <header
      className={classNames("header", { "is-fixed": isFixed })}
      data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo loading="eager" className="header__logo" />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({ label, href }, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    href={href}
                    className={classNames("header__menu-link", {
                      "is-active": href === url,
                    })}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              label="Search"
              mode="transparent"
              isLabelHidden
              iconName="search"
            />
            <Button
              className="header__button"
              label="Notifications"
              mode="transparent"
              isLabelHidden
              iconName="notification"
            />
          </div>
        </dialog>

        <BurgerButton
          className="header__burger-button visible-tablet"
          extraAttrs={{
            "data-js-overlay-menu-burger-button": "",
          }}
        />
      </div>
    </header>
  )
}

export default Header

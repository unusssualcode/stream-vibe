import Logo from "@/components/Logo/index.js"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo loading="eager" className="header__logo" />
      </div>
    </header>
  )
}

export default Header

import Socials from "@/components/Socials/index.js"
import "./Footer.scss"

const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Shows",
      links: ["Gernes", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      links: ["Contact Us"],
    },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
    },
    {
      title: "Connect With Us",
      socialLinks: [
        {
          label: "Facebook",
          iconName: "facebook",
        },
        {
          label: "Twitter",
          iconName: "twitter",
        },
        {
          label: "LinkedIn",
          iconName: "linkedin",
        },
      ],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks }, index) => (
            <div className="footer__menu-column" key={index}>
              <a href="/" className="footer__menu-title h6">
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link, index) => (
                    <li className="footer__menu-item" key={index}>
                      <a href="/" className="footer__menu-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials className="footer__soc1als" links={socialLinks} />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}

export default Footer

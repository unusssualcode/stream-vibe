import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer"
import Header from "@/layouts/Header"
import { Head } from "minista"

export default function () {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>StreamVibe | Home</title>
      </Head>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

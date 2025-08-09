import Section from "@/layouts/Section/Section.jsx"

const Categories = () => {
  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<button>Back</button>}
      isActionsHiddenOnMobile
    ></Section>
  )
}

export default Categories

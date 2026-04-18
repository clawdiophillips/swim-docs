import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
        SwimAI Docs
      </span>
    }
    projectLink="https://swim-analysis.com"
  />
)

const footer = (
  <Footer>
    <span>© {new Date().getFullYear()} SwimAI. All rights reserved.</span>
  </Footer>
)

export default async function DocsLayout({ children }) {
  return (
    <Layout
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/swimai/docs"
      footer={footer}
      sidebar={{ defaultMenuCollapseLevel: 1 }}
      darkMode
    >
      {children}
    </Layout>
  )
}

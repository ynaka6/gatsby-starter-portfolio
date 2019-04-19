import React from "react"
import { Link } from "gatsby"

import Layout from "@components/templates/layout"
import SEO from "@components/seo"
import SadFaceLineIcon from "@components/atoms/icon/sad-face-line"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="mt-10 container mx-auto">
      <div className="flex justify-center">
        <div className="lg:w-2/3 p-4 text-center">
          <div className="my-10">
            <SadFaceLineIcon className="fill-current w-48 h-48" />
          </div>
          <h1 className="text-5xl mt-10">
            Not Found.
          </h1>
          <p className="mt-5">
            お探しのページは削除されたか存在しません。
          </p>
          <div class="mt-16 mx-4">
            <Link to="/" className="px-10 py-4 bg-white border border-grey-darker no-underline rounded-sm text-grey-darkest hover:bg-grey-lighter">Homeに戻る</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage

import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import SectionTitle from "@components/atoms/section_title";

const Section = styled.section`
  ${tw`w-full py-10`};
`

const Contact = () => (
  <Section>
    <div className="container mx-auto lg:w-3/5">
      <form
        name="contact"
        method="post"
        className="bg-white border shadow-md rounded mx-2 lg:mx-0 lg:px-8 pb-8 mt-5 mb-4"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" /> 

        <SectionTitle title="Contact" subtitle="仕事相談問い合わせはこちら" />
        <div className="lg:flex mx-3 mb-6 mt-10">
          <div className="lg:w-1/2 px-3 mb-6 md:mb-0">
            <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                htmlFor="name"
              >
                名前
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="山田 太郎"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="lg:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="email">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@nnn.com"
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
              required
            />
          </div>
        </div>
          <div className="mx-3 mb-6 px-3">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="content">
              問い合わせ内容
            </label>
            <textarea
              name="content"
              rows="6"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 bg-grey-lighter focus:outline-none focus:bg-white"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-2/3 bg-teal-dark hover:bg-teal text-lg text-white font-bold py-4 px-8 border-b-4 border-teal-darker hover:border-teal-dark rounded"
            >
              送信する
            </button>
          </div>
      </form>
    </div>
  </Section>
)

export default Contact

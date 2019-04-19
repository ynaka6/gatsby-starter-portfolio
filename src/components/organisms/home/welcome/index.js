import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import heroImage from "@contents/images/home-hero-image.jpg"
import TwitterIcon from "@components/atoms/icon/twitter"
import GithubIcon from "@components/atoms/icon/github"
import EnvelopeSolidIcon from "@components/atoms/icon/envelope-solid"

const SectionStyled = styled.section`
  ${tw`w-full`};

  &::before {
    background-image: url(${heroImage});
    background-size:  cover;
    background-position: center;
    content: "";
    z-index: -1;    
    ${tw`h-full w-full absolute opacity-50`};
  }
`

const Welcome = () => (
  <SectionStyled>
    <div className="container mx-auto my-20">
      <div className="flex justify-center items-center px-4 p-10">
          <div className="text-center w-full">
            <h3 className="text-black text-3xl">Hi, Everyone</h3>
            <h1 className="text-black font-bold my-5 text-5xl">I'm Nakamu.</h1>
            <p className="text-black text-3xl">WEB Developer & Mentor</p>
            <div className="my-10">
              <a href="https://github.com/nakanakamu0828" target="_blank" rel="noreferrer noopener" aria-label="github" className="text-white hover:text-grey-darker mr-6">
                <GithubIcon className="fill-current w-10 h-10" />
              </a>
              <a href="https://twitter.com/nakanakamu0828" target="_blank" rel="noreferrer noopener" aria-label="twitter" className="text-white hover:text-grey-darker mr-6">
                <TwitterIcon className="fill-current w-10 h-10" />
              </a>
              <a href="mailto:yuuki.nakamura.0828@gmail.com" target="_blank" rel="noreferrer noopener" aria-label="email" className="text-white hover:text-grey-darker">
                <EnvelopeSolidIcon className="fill-current w-10 h-10" />
              </a>
            </div>
          </div>
      </div>
    </div>
  </SectionStyled>
)

export default Welcome

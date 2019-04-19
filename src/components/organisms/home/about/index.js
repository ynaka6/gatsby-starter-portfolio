import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import json from "@contents/jsons/about";
import SectionTitle from "@components/atoms/section_title";


const Section = styled.section`
  ${tw`w-full bg-white`};
`

const ProfileBlock = styled.div`
  ${tw`my-2 lg:mb-5 leading-loose`};
  
  & > h3 {
    ${tw`mb-3`};
  }

  & > p {
    ${tw`mb-5 text-grey-darkest text-sm`};
  }

  & > dl > dt {
    ${tw`lg:float-left lg:w-1/5 font-bold`};
  }

  & > dl > dd {
    ${tw`lg:float-right lg:w-4/5 text-grey-darkest`};
  }
`

const SkillBlockStyled = styled.div`
  ${tw`mt-6 lg:mt-0 lg:mb-5 leading-loose`};

  & > h3 {
    ${tw`mb-3`};
  }

  & > p {
    ${tw`mb-5 text-grey-darkest text-sm`};
  }

  & > ul {
    ${tw`list-reset`};
  }
`

function ProfileItem(props) {
  return <><dt>{props.name}</dt><dd>{props.value}</dd></>
}

function Profile(props) {
  return (
    <dl>
      {Object.keys(props.profiles).map(key => {
        return <ProfileItem key={key} name={key} value={props.profiles[key]} />
      })}
    </dl>
  )
}


function SkillItem(props) {
  return (
    <li>
      <p>{props.name}</p>
      <div className="w-full align-center items-center align-middle content-center flex">
        <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
          <div
            className="bg-indigo text-xs leading-none py-1 text-center text-grey-darkest rounded"
            style={{
              width: props.percentage
            }}
          >
          </div>
        </div>
      </div>
      <p>{props.percentage}</p>
    </li>
  )
}

function Skill(props) {
  return (
    <ul>
      {props.skills.map((value, index) => {
        return <SkillItem key={index} name={value.name} percentage={value.percentage} />
      })}
    </ul>
  )
}

const About = () => (
  <Section>
    <InViewMonitor
      classNameNotInView='inview-section-hidden'
      classNameInView='inview-section-active'
    >
      <div className="container mx-auto">
        <SectionTitle title="ABOUT" subtitle="プロフィール" />
        <div className="lg:flex w-full my-6">
          <div className="flex-1 px-2">
            <ProfileBlock>
              <h3>MY PROFILE</h3>
              <p>{json.myProfile.description}</p>
              <Profile profiles={json.myProfile.profile} />
            </ProfileBlock>
          </div>
          <div className="flex-1 px-2">
            <SkillBlockStyled>
              <h3>MY SKILLS</h3>
              <p>{json.mySkill.description}</p>
              <Skill skills={json.mySkill.skills} />
            </SkillBlockStyled>
          </div>
        </div>
      </div>
    </InViewMonitor>
  </Section>
)

export default About

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import json from "@contents/jsons/about";
import Image from "@components/atoms/image";


const ProfileBlock = styled.div`
  ${tw`lg:mb-5 leading-loose`};

  & > p {
    ${tw`mb-5 text-grey-darkest text-sm`};
  }
  dl > dt {
    ${tw`lg:float-left lg:w-1/5 font-bold`};
  }
  dl > dd {
    ${tw`lg:float-right lg:w-4/5 text-grey-darkest`};
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

const ProfileSection = () => (
  <InViewMonitor
    classNameNotInView='inview-section-hidden'
    classNameInView='inview-section-active'
  >
    <div className="mt-10 mx-2 lg:mx-auto lg:w-2/3 bg-white border px-10 py-5 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-center">
            <div className="mx-auto">
                <div
                    className="rounded-full mb-5 lg:mb-0 lg:mr-5"
                    style={{ width: `100px` }}
                >
                    <Image filename="avator.jpg" alt="GatsbyJS"　/>
                </div>
            </div>
            <div>
                <ProfileBlock>
                    <p>{json.myProfile.description}</p>
                    <Profile profiles={json.myProfile.profile} />
                </ProfileBlock>
                <div className="clearfix" />
                <p className="mt-8 mb-2">
                    <Link to="/" className="px-8 py-2 bg-white border border-grey-darker no-underline rounded-sm text-grey-darkest hover:bg-grey-lighter">Home</Link>
                </p>
            </div>
        </div>
    </div>
  </InViewMonitor>
)

export default ProfileSection

import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import SectionTitle from "@components/atoms/section_title";
import Timeline from "@components/molecules/timeline";
import json from "@contents/jsons/works";

const Section = styled.section`
  ${tw`w-full`};
`

const Works = () => (
    <Section>
      <InViewMonitor
        classNameNotInView='inview-section-hidden'
        classNameInView='inview-section-active'
      >
        <div className="container lg:w-2/3  mt-20 mx-auto">
          <SectionTitle title="Work Experience" subtitle="直近の職務経歴 & エンジニア活動" />
          <Timeline works={json} />
        </div>
      </InViewMonitor>
    </Section>
)

export default Works

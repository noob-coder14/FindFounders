import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";

export const Container = tw.div`
 max-w-screen-xl mx-auto pl-24 mt-12
`

export const Head = tw.h2`
text-lg	font-bold mb-3
`
export const TagSet = tw.div`
 mb-5
`

export const Tags =tw.div`
text-sm font-semibold flex gap-x-6
`
export const Tag =tw.div`
bg-pink-200 px-2 py-1 rounded-lg hover:cursor-pointer hover:bg-pink-100
`

export const AboutMe = tw.div`
text-sm mr-8 mt-2 mb-6
`
export const Education = styled(AboutMe)`
${tw``}`;

export const Certification = styled(AboutMe)`
${tw``}`;

export const HeadItem = tw.div`
text-sm font-semibold mr-8 mt-4
`
export const MidItem = tw.div`
text-sm mr-8
`
export const FootItem = tw.div`
text-sm mr-8
`

function SkillTag() {
    return (
        <Container>
            <TagSet>
                <Head>I am expert at</Head>
                <Tags>
                    <Tag>Business Development</Tag>
                    <Tag>Financial Management</Tag>
                    <Tag>Fund Rising</Tag>
                    <Tag>Human Resource</Tag>
                </Tags>
            </TagSet>
            <TagSet>
                <Head>Looking for expert at</Head>
                <Tags>
                    <Tag>Software Development</Tag>
                    <Tag>Database Maintenance</Tag>
                    <Tag>Cloud Engineering</Tag>
                    <Tag>FullStack Development</Tag>
                </Tags>
            </TagSet>
            <AboutMe>
                <Head>About Me</Head>
                <div>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
            </AboutMe>
            <Education>
                <Head>Education</Head>
                <div>
                    <HeadItem>MBA</HeadItem>
                    <MidItem>University of California</MidItem>
                    <FootItem>2013-2014</FootItem>
                </div>
                <div>
                    <HeadItem>BBA</HeadItem>
                    <MidItem>University of Houston</MidItem>
                    <FootItem>2007-2011</FootItem>
                </div>
            </Education>
            <Certification>
                <Head>Certification</Head>
                <div>
                    <HeadItem>Supply-Chain Certification</HeadItem>
                    <MidItem>ISCEA</MidItem>
                    <FootItem>2013-2014</FootItem>
                </div>
                <div>
                    <HeadItem>CASE Study MasterClass</HeadItem>
                    <MidItem>ISCEA</MidItem>
                    <FootItem>2015-2016</FootItem>
                </div>
            </Certification>
        </Container>
    )
}

export default SkillTag


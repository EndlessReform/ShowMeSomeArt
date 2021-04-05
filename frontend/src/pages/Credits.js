/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled";
import tw from "tailwind.macro";


import Layout from "../components/Layout/Layout"
import { Title, SectionHeader, BodyText } from "../components/Typography/Typography"

const Credits = () => (
    <div css={tw`bg-pink`}>
    <Layout css={tw``}>
        <Title>Credit where credit is due.</Title>
        <BodyText>ShowMeSomeArt would not have been possible without the generous contributions of:</BodyText>
        <hr css={tw`border-black my-4`}/>
        <SectionHeader css={tw`my-4`}>Our Sources</SectionHeader>
        <BodyText>Many thanks to the Art Institute of Chicago for providing their API.</BodyText>
        <hr css={tw`border-black my-4`}/>
        <SectionHeader css={tw`mb-4`}>Our Sponsors</SectionHeader>
        <BodyText>Thanks to Linode and Major League Hacking for providing $100 of credit towards hosting.</BodyText>
    </Layout>
    </div>
)

export default Credits
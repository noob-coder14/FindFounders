import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Header from "components/headers/lightLogged";

import React from 'react'
import TopSection from 'components/Profile Page Comp/TopSection';
import SkillTag from 'components/Profile Page Comp/SkillTag';
import Footer from "components/footers/MiniCenteredFooter";

function Profile() {
    return (
        <AnimationRevealPage>
            <Header/>
            <TopSection/>
            <SkillTag/>
            <Footer/>
        </AnimationRevealPage>
    )
}

export default Profile

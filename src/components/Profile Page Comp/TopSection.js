import React from 'react';
import ProfilePic from '../../images/man-face.jpg'
import Badge from '../../images/badge-silver.jpg'
import tw from "twin.macro";

const Container = tw.div`
 max-w-screen-xl mx-auto
`

const Image = tw.img`
 transform h-64 w-64 inline rounded-full border-2 border-gray-400 hover:border-8 transition-all duration-200 hover:cursor-pointer
`;

export const TopSec = tw.div`
 flex mt-20 ml-8 gap-x-8 
` 

export const Heads = tw.span`
 mt-12 mr-6
`
export const Name = tw.div`
 text-xl font-bold
` 
export const Country = tw.div`
font-semibold mb-6
` 
export const Bio = tw.div`

` 
export const Tags = tw.div`
text-sm flex gap-x-4 mt-6 flex-wrap	gap-y-2
` 
export const TagItem = tw.div`
bg-yellow-200 px-2 py-1 rounded-lg hover:cursor-pointer hover:bg-yellow-300 flex-nowrap
`
export const SuperHeads = tw.div`
flex justify-between
`
export const HitPoints = tw.div`
flex gap-x-4 gap-y-2 text-sm font-semibold
`
export const HitItems = tw.div`
flex-col gap-y-1 justify-between h-16 mr-8
`

export const SocialMediaLinks = tw.div`
 flex gap-x-8 mt-10
`


// const heads = (
//     <Heads>
//         <div>Adam Murphy</div>
//         <div>United States</div>
//         <div>A marketing expert from North America. Had my MBA from University of California and now pursuing my career as a marketing manager at Intel. Interested in collaborating with a tech team to develop and earn from wonderful applications</div>
//     </Heads>
// );


function TopSection() {
    return (
        <Container>
            <TopSec>
                <Image src={ProfilePic} alt="Profile Image"/>
                <Heads>
                    <SuperHeads>
                        <div>
                            <Name>Adam Murphy</Name>
                            <Country>United States</Country>
                        </div>
                        <HitPoints>
                            <HitItems><div>15</div><div>Followers</div></HitItems>
                            <HitItems><div>24</div><div>Upvotes</div></HitItems>
                            <HitItems><img src={Badge} height="40" width="40"></img></HitItems>
                        </HitPoints>
                        
                    </SuperHeads>
                    
                    <Bio>A marketing expert from North America. Had my MBA from University of California and now pursuing my career as a marketing manager at Intel. Interested in collaborating with a tech team to develop and earn from wonderful applications</Bio>
                    <Tags>
                        <TagItem>Collaboration</TagItem>
                        <TagItem>EduTech</TagItem>
                        <TagItem>FinTech</TagItem>
                        <TagItem>Seed Fund</TagItem>
                    </Tags>
                    <SocialMediaLinks>
                        <div>Connected Accounts: </div>
                        <i class="fab fa-facebook-square fa-2x"/>
                        <i class="fab fa-linkedin fa-2x"/>
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </SocialMediaLinks>
                </Heads>
            </TopSec>  
        </Container> 
    )
}

export default TopSection

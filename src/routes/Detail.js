import React from "react"
import {withRouter} from "react-router-dom";
import { Section, MainCardSection, 
    IntroductionSection, ProfileImageSection, ProfileTextSection, ProfileTextTitle, ProfileTextContent,
    MovieSection } from "../styles/GlobalComponents/SectionStyle";


import { DetailCard, DetailImg, DetailDataSet, DetailTitle, 
        DetailGenreList, DetailGenre, DetailYear, DetailSummary, DetailButtonSection, DetailButton } from './DetailStyle';

import { StyledLink } from "../styles/GlobalComponents/LinkStyle";
/* 기본페이지처럼 카드섹션을 만든 다음. 그 다움에
안에서 이미지도 더 키우고, 텍스트도 많이 나오게 하면 되겠다 */

class Detail extends React.Component {
    componentDidMount() {
        const {location : {state}, history} = this.props
        console.log(this.props);
        console.log('history',history);
        /* Movies 컴포넌트에서 받아온 props
        Detail 컴포넌트가 가지고 있는 속성으로 됨 */
        if (!state) {
            /* Movie 카드에서 들어온게 아니라면 Movie 카드 홈페이지로 되돌림
            this.props에 있는 history의 push() 를 이용함. redirect 기능 */
            history.push('/Home')
        }
    }
    /* 렌더링이 되고 나서 componentDidMount()가 실행된다. 
    그래서 title을 받아온 다음에 새로고침을 하면 에러가 발생함
    props를 안 받와왔으니 location도 없기 때문이다 */

    /* 뒤로가기 버튼을 만들어라 */
    
    render() {
        const {location} = this.props
        /* 그래서 여기서 경우를 나눠줘야 함 */
        if (location.state) {
            return (
                <Section grid row>
                    <MainCardSection>
                        <IntroductionSection>
                            <ProfileImageSection>
                            <img className="profile-picture" src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="picture of Wontae smiling"/>
                            </ProfileImageSection> 
                            <ProfileTextSection>
                            <ProfileTextTitle>Wontae's Movie Archive</ProfileTextTitle>
                            <ProfileTextContent>{'\u00A0'} Films in my opinion are made to entertain us. 
                                                But, that is not just their sole purpose. 
                                                They are made to make us think, feel, laugh and cry.
                                                They take us to places where we cannot go and let us experience the things we cannot do in real life. </ProfileTextContent>
                            </ProfileTextSection>
                        </IntroductionSection>
                        <MovieSection>
                            <DetailCard>
                                <DetailImg src={location.state.poster}/> 
                                <DetailDataSet>
                                    <DetailTitle>
                                        {location.state.title}
                                    </DetailTitle>
                                    <DetailGenreList>
                                        {location.state.genres.map ( (genre, index) => (
                                            <DetailGenre key={index}>{genre}</DetailGenre>
                                        ))}
                                    </DetailGenreList>
                                    <DetailYear>
                                        {location.state.year}
                                    </DetailYear>
                                    <DetailSummary>
                                        {location.state.summary}
                                    </DetailSummary>
                                </DetailDataSet>
                            </DetailCard>
                            <DetailButtonSection>
                                <DetailButton onClick={ () => this.props.history.goBack()  }>Back</DetailButton>
                            </DetailButtonSection>
                        </MovieSection>
                    </MainCardSection>
                </Section>
            )
        } else {
            return null;
        }

    }
}

export default withRouter(Detail);
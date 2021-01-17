import SurveySemesterText from '@src/components/atoms/SurveySemesterText/SurveySemesterText';
import LogosContainer from '@src/components/molecules/SurveySection/LogosContainer/LogosContainer';
import React, { ReactElement, ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

type Props = {
	data: {
		mainText: ReactNode;
		subText: ReactNode;
		semesterText: ReactNode;
	};

	children?: never;
};

function SurveyPageHero({ data }: Props): ReactElement {
	const { mainText, subText, semesterText } = data;

	return (
		<Section>
			<Header>
				<SurveySemesterText>{semesterText}</SurveySemesterText>
				<LogosContainer />
			</Header>

			<Main>
				<Heading>{mainText}</Heading>
				<Subheading>{subText}</Subheading>
			</Main>
		</Section>
	);
}

type SectionProps = {};
const Section = styled.section<SectionProps>`
	${tw`text-white bg-primary px-11 pt-10 pb-28 `}
`;

type HeaderProps = {};
const Header = styled.header<HeaderProps>`
	${tw`flex justify-between mb-20`}
`;

type MainProps = {};
const Main = styled.main<MainProps>`
	${tw`text-center`}
`;

type HeadingProps = {};
const Heading = styled.h1<HeadingProps>`
	${tw`text-7xl sm:text-xxl uppercase font-extrabold  text-center mb-12  tracking-tightest`}
	${tw`animate-pulse`}
	line-height: .8;
`;

type SubheadingProps = {};
const Subheading = styled.p<SubheadingProps>`
	${tw` text-lg sm:text-3xl font-normal tracking-tighter`}
`;

export default SurveyPageHero;

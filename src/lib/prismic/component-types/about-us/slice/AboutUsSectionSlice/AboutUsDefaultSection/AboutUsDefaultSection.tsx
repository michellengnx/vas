import SectionH1 from '@components/SectionH1/SectionH1';
import { RichText } from 'prismic-reactjs';
import React from 'react';
import 'twin.macro';
import { AboutUsSectionSliceProps } from '..';
import { AboutUsSerializer } from '../../../serializer/AboutUsSerializer/AboutUsSerializer';

type Props = AboutUsSectionSliceProps;

function AboutUsDefaultSection({ className, slice }: Props) {
	return (
		<section
			className={className}
			tw="py-10 col-span-full grid grid-cols-12 md:py-20 xl:py-32"
		>
			<div tw="grid-p-sm xl:grid-p-md">
				<header>
					<SectionH1>{RichText.asText(slice.primary.title)}</SectionH1>

					<RichText
						render={slice.primary.description}
						htmlSerializer={AboutUsSerializer}
					/>
				</header>
			</div>
		</section>
	);
}

export default AboutUsDefaultSection;

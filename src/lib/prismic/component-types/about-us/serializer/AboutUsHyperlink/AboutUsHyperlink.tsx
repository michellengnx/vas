import StyledLink from '@components/StyledLink/StyledLink';
import { Hyperlink } from '@prismic-types';
import { hrefResolver, linkResolver } from '@root/prismic-configuration';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
type Props = {
	className?: string;
	data: Hyperlink;
	children: ReactNode;
};

function AboutUsHyperlink({ className, data, children }: Props) {
	if (data.link_type === 'Document') {
		return (
			<NextLink href={hrefResolver(data)} as={linkResolver(data)} passHref>
				<StyledLink className={className}>{children}</StyledLink>
			</NextLink>
		);
	}

	return (
		<StyledLink
			href={data.url}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			tw=""
		>
			{children}
			<FaExternalLinkAlt />
		</StyledLink>
	);
}

export default AboutUsHyperlink;

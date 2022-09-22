import React from 'react';
import {
	AboutSection,
	HeroSection,
	Page,
	Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
	return (
		<>
			<Seo title="4usic" />
			<Page useSplashScreenAnimation>
				<HeroSection sectionId="hero" />
				<AboutSection sectionId="about" heading="Wer sind wir?" />
			</Page>
		</>
	);
}

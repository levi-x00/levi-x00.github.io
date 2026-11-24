import { SectionLabel } from "@/components/primitives/SectionLabel";
import { SocialLink } from "@/components/primitives/SocialLink";
import { socialLinks } from "@/data/social";

export function ContactSection() {
	return (
		<div>
			<SectionLabel num="06" />
			<h2 className="font-mono text-[clamp(28px,4.5vw,56px)] font-bold leading-[0.9] text-terminal-text">
				REACH OUT TO ME!
			</h2>
			<p className="mt-8 max-w-xl font-mono text-sm uppercase leading-relaxed tracking-widest text-terminal-soft">
				Discuss a project or just want to say hi? My inbox is open for
				all.
			</p>
			<a
				href={socialLinks.email}
				className="mt-8 inline-flex border border-terminal-signal px-4 py-2 font-mono text-sm text-terminal-signal transition-colors hover:bg-terminal-signal hover:text-terminal-bg"
			>
				{socialLinks.email.replace("mailto:", "")}
			</a>
			<p className="mt-4 font-mono text-sm text-terminal-soft">
				{socialLinks.location}
			</p>
			<div className="mt-6 flex flex-wrap gap-3">
				<SocialLink
					href={socialLinks.github}
					icon="mdi:github"
					label="GITHUB"
					showLabel
				/>
				<SocialLink
					href={socialLinks.linkedin}
					icon="mdi:linkedin"
					label="LINKEDIN"
					showLabel
				/>
			</div>
		</div>
	);
}

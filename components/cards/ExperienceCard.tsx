import Image from "next/image";

import { BrutalCard } from "@/components/primitives/BrutalCard";
import { formatDuration } from "@/lib/duration";

interface ExperienceCardProps {
	company: string;
	role: string;
	date: string;
	employmentType: string;
	companyLogo: string;
	companyUrl: string;
	desc: string;
	descBullets?: string[];
}

export function ExperienceCard({
	company,
	role,
	date,
	employmentType,
	companyLogo,
	companyUrl,
	desc,
	descBullets,
}: ExperienceCardProps) {
	const duration = formatDuration(date);
	return (
		<BrutalCard>
			<div className="flex items-start gap-4">
				<a
					href={companyUrl}
					target="_blank"
					rel="noopener noreferrer"
					title={`Visit ${company}`}
					aria-label={`Visit ${company}`}
					className="relative block h-10 w-10 shrink-0 border border-terminal-border bg-terminal-bg p-1 transition-shadow duration-200 hover:ring-2 hover:ring-terminal-signal focus-visible:ring-2 focus-visible:ring-terminal-signal"
				>
					<Image
						src={companyLogo}
						alt={`${company} logo`}
						fill
						className="object-contain p-1"
						sizes="40px"
					/>
				</a>
				<div>
					<h3 className="font-mono text-lg font-bold uppercase text-terminal-text">
						{company}
					</h3>
					<p className="mt-1 text-xs uppercase tracking-widest text-terminal-signal">
						{role}
					</p>
					<p className="mt-2 font-mono text-xs text-terminal-amber">
						{date}
						{duration ? ` | ${duration}` : ""}
						{" | "}{employmentType}
					</p>
				</div>
			</div>
			<div className="my-4 border-t border-terminal-border" />
			{desc && (
				<p className="max-w-3xl text-sm leading-relaxed text-terminal-soft">
					<span className="text-terminal-signal">&gt; </span>
					{desc}
				</p>
			)}
			{descBullets?.length ? (
				<ul className="mt-3 max-w-3xl space-y-1">
					{descBullets.map((bullet) => (
						<li
							key={bullet}
							className="flex gap-2 text-xs text-terminal-soft"
						>
							<span className="text-terminal-signal">-</span>
							<span>{bullet}</span>
						</li>
					))}
				</ul>
			) : null}
		</BrutalCard>
	);
}

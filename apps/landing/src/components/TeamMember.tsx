import { SiDribbble, SiGithub, SiTwitch, SiTwitter } from '@icons-pack/react-simple-icons';
import clsx from 'clsx';
import Image from 'next/image';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export interface TeamMemberProps {
	// Name of team member
	name: string;

	// Member's role
	role: string;

	// Member's avatar
	imageUrl: string;

	// Socials
	socials?: {
		twitter?: string;
		twitch?: string;
		github?: string;
		dribbble?: string;
	};

	// Which round an investor joined at
	investmentRound?: string;
}

interface LinkProps {
	href: string;
}

function Link(props: PropsWithChildren<LinkProps>) {
	return (
		<NextLink
			className="duration-300 hover:scale-105 hover:opacity-80"
			href={props.href}
			rel="noreferrer"
			target="_blank"
		>
			{props.children}
		</NextLink>
	);
}

export function TeamMember(props: TeamMemberProps) {
	const size = props.investmentRound ? 144 : 111;

	return (
		<div className="flex flex-col">
			<Image
				src={props.imageUrl}
				role="img"
				alt={`Portrait of ${props.name}`}
				width={size}
				height={size}
				className={clsx('m-0 inline-flex rounded-md', {
					'!xs:w-36 !xs:h-36 !sm:w-40 !sm:h-40 h-32 w-32': !props.investmentRound,
					'lg:h-28 lg:w-28': props.investmentRound
				})}
			/>
			<h3 className="mb-0 mt-4 text-base">{props.name}</h3>
			<p
				className={clsx('text-xs', {
					'mb-0': props.investmentRound
				})}
			>
				{props.role}
			</p>
			{props.investmentRound && (
				<p className="my-0 text-sm font-semibold text-gray-450">{props.investmentRound}</p>
			)}
			<div className="mt-auto flex flex-row space-x-2">
				{props.socials?.twitter && (
					<Link href={props.socials.twitter}>
						<SiTwitter className="h-[20px] w-[20px]" />
					</Link>
				)}
				{props.socials?.github && (
					<Link href={props.socials.github}>
						<SiGithub className="h-[20px] w-[20px]" />
					</Link>
				)}
				{props.socials?.twitch && (
					<Link href={props.socials.twitch}>
						<SiTwitch className="h-[20px] w-[20px]" />
					</Link>
				)}
				{props.socials?.dribbble && (
					<Link href={props.socials.dribbble}>
						<SiDribbble className="h-[20px] w-[20px]" />
					</Link>
				)}
			</div>
		</div>
	);
}

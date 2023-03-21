interface SignalIconProps {
	level: string;
}

export const SignalIcon = ({ level }: SignalIconProps) => {
	return (
		<div className="flex items-center">
			<div className="flex items-end justify-center gap-0.5">
				<svg width="4" height="9" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="0.394737" width="3.68421" height="8.10526" rx="1" fill={`#373737`} />
				</svg>
				<svg width="4" height="11" viewBox="0 0 4 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect
						x="0.157898"
						y="0.184211"
						width="3.68421"
						height="10.3158"
						rx="1"
						fill={`${level === 'medium' || level === 'high' ? '#373737' : '#D9D9D9'}`}
					/>
				</svg>
				<svg width="4" height="15" viewBox="0 0 4 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect
						x="0.315796"
						y="0.5"
						width="3.68421"
						height="14"
						rx="1"
						fill={`${level === 'high' ? '#373737' : '#D9D9D9'}`}
					/>
				</svg>
			</div>
		</div>
	);
};

import './InfoCardList.scss'

type infoCardType = {
	title: string
	info: string
	secondInfo?: string
}

const InfoCard = ({ title, info, secondInfo = '' }: infoCardType) => {
	return (
		<div className="InfoCard">
			<h3 className="InfoCard-title">{title}</h3>
			<div className="InfoCard-content">{info}</div>
			<h5 className="InfoCard-dopInfo">{secondInfo}</h5>
		</div>
	)
}

type Props = {}

const InfoCardList = ({}: Props) => {
	return (
		<div className="InfoCardList">
			<InfoCard
				title="Общий доход"
				info="$ 120,000"
				secondInfo="12% Increase From Target"
			/>
			<InfoCard
				title="Общий доход"
				info="$ 120,000"
				secondInfo="12% Increase From Target"
			/>
			<InfoCard
				title="Общий доход"
				info="$ 120,000"
				secondInfo="12% Increase From Target"
			/>
			<InfoCard
				title="Общий доход"
				info="$ 120,000"
				secondInfo="12% Increase From Target"
			/>
		</div>
	)
}

export default InfoCardList

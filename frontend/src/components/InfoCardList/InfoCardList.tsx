import { memo } from 'react'
import st from './InfoCardList.module.scss'

type infoCardType = {
	title: string
	info: string
	secondInfo?: string
}

const InfoCard = memo(({ title, info, secondInfo = '' }: infoCardType) => {
	return (
		<div className={st.InfoCard}>
			<h3 className={st.title}>{title}</h3>
			<div className={st.content}>{info}</div>
			<h5 className={st.dopInfo}>{secondInfo}</h5>
		</div>
	)
})

type Props = {}

const InfoCardList = memo(({}: Props) => {
	return (
		<div className={st.InfoCardList}>
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
})

export default InfoCardList

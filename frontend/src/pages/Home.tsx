import HomeModel from '../modules/HomeModel/HomeModel'
import Layout from './Layout'

type Props = {}

const Home = ({}: Props) => {
	return (
		<Layout>
			<HomeModel />
		</Layout>
	)
}

export default Home

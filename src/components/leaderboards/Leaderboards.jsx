import {useEffect} from 'react';
import _ from 'lodash';

const leaders = [
	{
		name: 'Danya',
		steps: 1,
	},
	{
		name: 'Masha',
		steps: 3,
	},
	{
		name: 'Lesha',
		steps: 3,
	},
	{
		name: 'Ivan',
		steps: 6,
	},
	{
		name: 'anya',
		steps: 5,
	},
];

const Leaderboard = () => {

	useEffect(() => {
		const randomArray = _.sampleSize([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], 16);
		console.log(randomArray);
	}, [])

  return(
		<div>
			<h1>LeaderBoard</h1>
			<div className="leaders-container">{
				leaders.sort((a, b) => a.steps - b.steps).map((leader) => 
					<div key={leader.name}>
						<h2>{leader.name}</h2>
						<p>{leader.steps}</p>
					</div>
				)
			}</div>
		</div>
	)
}

export default Leaderboard;
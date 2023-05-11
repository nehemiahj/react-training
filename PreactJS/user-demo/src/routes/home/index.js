import { h, Component, useState, useEffect } from 'preact';

const Home = () => {
	cconst[data, setData] = useState([]);

	useEffect(() => {
		axios.post('http://localhost:4000/graphql', {
			query: `
		  {
			data {
			  id
			  name
			  description
			}
		  }
		`
		})
			.then(response => setData(response.data.data))
			.catch(error => console.log(error));
	}, []);

	return (
		<div>
			<h1>Data:</h1>
			<ul>
				{data.map(item => (
					<li key={item.id}>
						<h2>{item.name}</h2>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	)
};

export default Home;

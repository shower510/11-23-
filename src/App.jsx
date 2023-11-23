import { useState } from 'react';
import './App.scss';

function App() {
	const [글제목, set글제목] = useState(['부천우동 ', '강남우동', '서울우동']);
	const [날짜, set날짜] = useState(['2월17일', '2월18일', '2월19일']);

	const [Num, setNum] = useState(0);

	return (
		<div className='App'>
			<div className='black-nav'>
				<div>개발 blog</div>
			</div>
			<div className='list'>
				<h3>
					{글제목[0]}
					<span
						onClick={() => {
							setNum(Num + 1);
						}}
					>
						👍
					</span>
					{Num}
				</h3>
				<p>{날짜[0]}</p>
			</div>
			<div className='list'>
				<h3>
					{글제목[1]}
					<span
						onClick={() => {
							setNum(Num + 2);
						}}
					>
						👍
					</span>
					{Num}
				</h3>
				<p>{날짜[1]}</p>
			</div>
			<div className='list'>
				<h3>{글제목[2]}</h3>
				<p>{날짜[2]}</p>
			</div>
		</div>
	);
}

export default App;

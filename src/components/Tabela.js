import React, { useEffect } from 'react';

const Tabela = () => {
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			console.log('Latitude is :', position.coords.latitude);

			console.log('Longitude is :', position.coords.longitude);
		});
	});
	return (
		<main>
			<section className="tabela">
				<div className="tabela-info">TABELA :</div>
			</section>
		</main>
	);
};

export default Tabela;

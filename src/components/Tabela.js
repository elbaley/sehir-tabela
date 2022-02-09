import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Tabela = () => {
	const cityData = [
		{
			id: 0,
			name: 'Adana',
			nufus: '2 263 373',
			rakim: 25,
		},
		{
			id: 1,
			name: 'Adıyaman',
			nufus: '632 148',
			rakim: 701,
		},
		{
			id: 2,
			name: 'Afyonkarahisar',
			nufus: '744 179',
			rakim: 1012,
		},
		{
			id: 3,
			name: 'Ağrı',
			nufus: '524 644',
			rakim: 1630,
		},
		{
			id: 4,
			name: 'Amasya',
			nufus: '335 331',
			rakim: 400,
		},
		{
			id: 5,
			name: 'Ankara',
			nufus: '5 747 325',
			rakim: 905,
		},
		{
			id: 6,
			name: 'Antalya',
			nufus: '2 619 832',
			rakim: 62,
		},
		{
			id: 7,
			name: 'Artvin',
			nufus: '169 543',
			rakim: 530,
		},
		{
			id: 8,
			name: 'Aydın',
			nufus: '1 134 031',
			rakim: 92,
		},
		{
			id: 9,
			name: 'Balıkesir',
			nufus: '1 250 610',
			rakim: 145,
		},
		{
			id: 10,
			name: 'Bilecik',
			nufus: '228 334',
			rakim: 513,
		},
		{
			id: 11,
			name: 'Bingöl',
			nufus: '283 112',
			rakim: 1159,
		},
		{
			id: 12,
			name: 'Bitlis',
			nufus: '352 277',
			rakim: 1637,
		},
		{
			id: 13,
			name: 'Bolu',
			nufus: '320 014',
			rakim: 741,
		},
		{
			id: 14,
			name: 'Burdur',
			nufus: '273 716',
			rakim: 963,
		},
		{
			id: 15,
			name: 'Bursa',
			nufus: '3 147 818',
			rakim: 238,
		},
		{
			id: 16,
			name: 'Çanakkale',
			nufus: '557 276',
			rakim: 11,
		},
		{
			id: 17,
			name: 'Çankırı',
			nufus: '196 515',
			rakim: 730,
		},
		{
			id: 18,
			name: 'Çorum',
			nufus: '526 282',
			rakim: 822,
		},
		{
			id: 19,
			name: 'Denizli',
			nufus: '1 051 056',
			rakim: 392,
		},
		{
			id: 20,
			name: 'Diyarbakır',
			nufus: '1 791 373',
			rakim: 674,
		},
		{
			id: 21,
			name: 'Edirne',
			nufus: '412 115',
			rakim: 50,
		},
		{
			id: 22,
			name: 'Elazığ',
			nufus: '588 088',
			rakim: 1041,
		},
		{
			id: 23,
			name: 'Erzincan',
			nufus: '237 351',
			rakim: 1216,
		},
		{
			id: 24,
			name: 'Erzurum',
			nufus: '756 893',
			rakim: 1923,
		},
		{
			id: 25,
			name: 'Eskişehir',
			nufus: '898 369',
			rakim: 796,
		},
		{
			id: 26,
			name: 'Gaziantep',
			nufus: '2 130 432',
			rakim: 838,
		},
		{
			id: 27,
			name: 'Giresun',
			nufus: '450 154',
			rakim: 14,
		},
		{
			id: 28,
			name: 'Gümüşhane',
			nufus: '150 119',
			rakim: 1174,
		},
		{
			id: 29,
			name: 'Hakkari',
			nufus: '278 218',
			rakim: 1756,
		},
		{
			id: 30,
			name: 'Hatay',
			nufus: '1 670 712',
			rakim: 89,
		},
		{
			id: 31,
			name: 'Isparta',
			nufus: '445 678',
			rakim: 1058,
		},
		{
			id: 32,
			name: 'Mersin',
			nufus: '1 891 145',
			rakim: 18,
		},
		{
			id: 33,
			name: 'İstanbul',
			nufus: '15 840 900',
			rakim: 25,
		},
		{
			id: 34,
			name: 'İzmir',
			nufus: '4 425 789',
			rakim: 9,
		},
		{
			id: 35,
			name: 'Kars',
			nufus: '281 077',
			rakim: 1756,
		},
		{
			id: 36,
			name: 'Kastamonu',
			nufus: '375 592',
			rakim: 814,
		},
		{
			id: 37,
			name: 'Kayseri',
			nufus: '1 434 357',
			rakim: 1060,
		},
		{
			id: 38,
			name: 'Kırklareli',
			nufus: '366 363',
			rakim: 231,
		},
		{
			id: 39,
			name: 'Kırşehir',
			nufus: '242 944',
			rakim: 991,
		},
		{
			id: 40,
			name: 'Kocaeli',
			nufus: '2 033 441',
			rakim: 4,
		},
		{
			id: 41,
			name: 'Konya',
			nufus: '2 277 017',
			rakim: 1023,
		},
		{
			id: 42,
			name: 'Kütahya',
			nufus: '578 640',
			rakim: 958,
		},
		{
			id: 43,
			name: 'Malatya',
			nufus: '808 692',
			rakim: 970,
		},
		{
			id: 44,
			name: 'Manisa',
			nufus: '1 456 626',
			rakim: 79,
		},
		{
			id: 45,
			name: 'Kahramanmaraş',
			nufus: '1 171 298',
			rakim: 562,
		},
		{
			id: 46,
			name: 'Mardin',
			nufus: '862 757',
			rakim: 938,
		},
		{
			id: 47,
			name: 'Muğla',
			nufus: '1 021 141',
			rakim: 659,
		},
		{
			id: 48,
			name: 'Muş',
			nufus: '405 228',
			rakim: 1334,
		},
		{
			id: 49,
			name: 'Nevşehir',
			nufus: '308 003',
			rakim: 1197,
		},
		{
			id: 50,
			name: 'Niğde',
			nufus: '363 725',
			rakim: 1239,
		},
		{
			id: 51,
			name: 'Ordu',
			nufus: '760 872',
			rakim: 25,
		},
		{
			id: 52,
			name: 'Rize',
			nufus: '345 662',
			rakim: 11,
		},
		{
			id: 53,
			name: 'Sakarya',
			nufus: '1 060 876',
			rakim: 41,
		},
		{
			id: 54,
			name: 'Samsun',
			nufus: '1 371 274',
			rakim: 10,
		},
		{
			id: 55,
			name: 'Siirt',
			nufus: '331 980',
			rakim: 887,
		},
		{
			id: 56,
			name: 'Sinop',
			nufus: '218 408',
			rakim: 27,
		},
		{
			id: 57,
			name: 'Sivas',
			nufus: '636 121',
			rakim: 1313,
		},
		{
			id: 58,
			name: 'Tekirdağ',
			nufus: '1 113 400',
			rakim: 28,
		},
		{
			id: 59,
			name: 'Tokat',
			nufus: '602 567',
			rakim: 630,
		},
		{
			id: 60,
			name: 'Trabzon',
			nufus: '816 684',
			rakim: 36,
		},
		{
			id: 61,
			name: 'Tunceli',
			nufus: '83 645',
			rakim: 922,
		},
		{
			id: 62,
			name: 'Şanlıurfa',
			nufus: '2 143 020',
			rakim: 527,
		},
		{
			id: 63,
			name: 'Uşak',
			nufus: '373 183',
			rakim: 915,
		},
		{
			id: 64,
			name: 'Van',
			nufus: '1 141 015',
			rakim: 1728,
		},
		{
			id: 65,
			name: 'Yozgat',
			nufus: '418 500',
			rakim: 1317,
		},
		{
			id: 66,
			name: 'Zonguldak',
			nufus: '589 684',
			rakim: 10,
		},
		{
			id: 67,
			name: 'Aksaray',
			nufus: '429 069',
			rakim: 1228,
		},
		{
			id: 68,
			name: 'Bayburt',
			nufus: '85 042',
			rakim: 1555,
		},
		{
			id: 69,
			name: 'Karaman',
			nufus: '258 838',
			rakim: 1063,
		},
		{
			id: 70,
			name: 'Kırıkkale',
			nufus: '275 968',
			rakim: 746,
		},
		{
			id: 71,
			name: 'Batman',
			nufus: '626 319',
			rakim: 570,
		},
		{
			id: 72,
			name: 'Şırnak',
			nufus: '546 589',
			rakim: 1343,
		},
		{
			id: 73,
			name: 'Bartın',
			nufus: '201 711',
			rakim: 12,
		},
		{
			id: 74,
			name: 'Ardahan',
			nufus: '94 932',
			rakim: 1799,
		},
		{
			id: 75,
			name: 'Iğdır',
			nufus: '203 159',
			rakim: 860,
		},
		{
			id: 76,
			name: 'Yalova',
			nufus: '291 001',
			rakim: 8,
		},
		{
			id: 77,
			name: 'Karabük',
			nufus: '249 287',
			rakim: 264,
		},
		{
			id: 78,
			name: 'Kilis',
			nufus: '145 826',
			rakim: 660,
		},
		{
			id: 79,
			name: 'Osmaniye',
			nufus: '553 012',
			rakim: 121,
		},
		{
			id: 80,
			name: 'Düzce',
			nufus: '400 976',
			rakim: 149,
		},
	];
	const { cityId } = useParams();
	let selectedCityIdfromUrl = cityId;
	if (!selectedCityIdfromUrl) {
		selectedCityIdfromUrl = '';
	}
	// initialise state with data from the url param
	const [selectedCity, setSelectedCity] = useState(selectedCityIdfromUrl);
	//track navigatedbylocation
	const [isNavigatedByLocation, setNavigatedByLocation] = useState(false);
	// if we can get geolocation redirect to correct url
	useEffect(() => {
		const ACCESS_TOKEN = 'pk.057dc61f154405e94fcbde31564ac4a6';
		const getCity = async (lat, lon) => {
			// fetch cityname using reverse geolocation api
			let url = `https://us1.locationiq.com/v1/reverse.php?key=${ACCESS_TOKEN}&lat=${lat}&lon=${lon}&format=json`;
			const response = await fetch(url);
			const cityDetails = await response.json();
			// build the correct string
			const cityName =
				cityDetails.address.province
					.toLowerCase()
					.charAt(0)
					.toLocaleUpperCase('tr-TR') +
				cityDetails.address.province.slice(1);
			console.log(cityName);
			return cityName;
		};
		// if the user is not navigated by location before fetch the city name and redirect
		if (!isNavigatedByLocation) {
			if ('geolocation' in navigator) {
				console.log('Available');
				navigator.geolocation.getCurrentPosition(function (position) {
					// Save geolocation variables
					const lat = position.coords.latitude;
					const lon = position.coords.longitude;
					//get the city name and redirect to correct page
					getCity(lat, lon).then((response) => {
						// filter the data and if we find the matching city we will navigate
						const resultData = cityData.filter(
							(city) => city.name === response
						);
						console.log('and the result is : ');
						console.log(resultData);
						console.log(resultData.length);
						if (resultData.length === 1 && !isNavigatedByLocation) {
							setNavigatedByLocation(true);
							// add one to the city id to fetch the correct city from the data
							let cityId = resultData[0].id + 1;
							// build the string for the selectedCity state
							let newSelectedCity = '';
							cityId < 10
								? (newSelectedCity = `0${cityId}`)
								: (newSelectedCity = cityId.toString());
							setSelectedCity(newSelectedCity);
							navigate(
								cityId < 10
									? `/sehir-tabela/0${cityId}`
									: `/sehir-tabela/${cityId}`
							);
						} else {
							return -1;
						}
					});
				});
			} else {
				return -1;
			}
		}
	});
	const navigate = useNavigate();
	const currentData = cityData[Number(selectedCity - 1)];

	// Handle submit
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isNaN(Number(selectedCity))) {
			return -1;
		}
		// if user gives 1-9 turn them into 01-09 and navigate to correct url path
		navigate(
			selectedCity.length < 2
				? `/sehir-tabela/0${selectedCity}`
				: `/sehir-tabela/${selectedCity}`
		);
		selectedCity.length < 2
			? setSelectedCity(`0${selectedCity}`)
			: setSelectedCity(selectedCity);
	};

	if (selectedCity === '' || cityId !== selectedCity) {
		return (
			<main>
				<section className="tabela">
					<div className="tabela-info">
						<div className="form" onSubmit={handleSubmit}>
							<form>
								<label htmlFor="city">Plaka</label>
								<input
									type="number"
									name="city"
									value={selectedCity}
									onChange={(e) => {
										setSelectedCity(e.target.value);
									}}
								/>
							</form>
						</div>
						<p>Lütfen plaka seçiniz...</p>
					</div>
				</section>
			</main>
		);
	}
	return (
		<main>
			<section className="tabela">
				<div className="tabela-info">
					<div className="form" onSubmit={handleSubmit}>
						<form>
							<label htmlFor="city">Plaka</label>
							<input
								type="number"
								name="city"
								value={selectedCity}
								onChange={(e) => {
									setSelectedCity(e.target.value);
								}}
							/>
						</form>
					</div>
					<div className="row">
						<span>{currentData.name}</span>
					</div>
					<div className="row">
						<span>Nüfus</span>
						<span>{currentData.nufus} </span>
					</div>
					<div className="row">
						<span>Rakım</span>
						<span> {currentData.rakim} </span>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Tabela;

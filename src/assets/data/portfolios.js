const portfolios = [
	{
		id: 1,
		name: 'JUNA | Mock up project',
		type: 'Application',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2020/01/JUNA-Guitar-tuner-01-470x330.jpg'
	},
	{
		id: 2,
		name: 'Ignite by OnDemand',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/11/Ignite-1-e1572862128818-470x330.jpg'
	},
	{
		id: 3,
		name: 'Shair | Mockup',
		type: 'Application',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/11/Shair-470x330.jpg'
	},
	{
		id: 4,
		name: 'Onboarding | Mockup',
		type: 'Application',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/11/Onboarding--470x330.jpg'
	},
	{
		id: 5,
		name: 'Asia green | Floor material',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/11/Asiagreen-470x330.jpg'
	},
	{
		id: 6,
		name: 'Portfolio website of Panupat K.',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/10/New-port-1-e1570510883501-470x330.jpg'
	},
	{
		id: 7,
		name: 'Rarehome BKK S93',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/10/Rare-home-S93-1-e1570506481540-470x330.jpg'
	},
	{
		id: 8,
		name: 'AIA Vitality | Mockup project',
		type: 'Application',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/08/aiaapp-470x330.jpg'
	},
	{
		id: 9,
		name: 'The Room Phayathai',
		type: 'Directory/Digital Signage',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/08/TheroomPhayathai-1-e1566640057839-470x330.jpg'
	},
	{
		id: 10,
		name: 'The Room Sukhumvit 38',
		type: 'Directory/Digital Signage',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2019/08/Theroom38-1-e1566640101568-470x330.jpg'
	},
	{
		id: 11,
		name: 'Legend Siam',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/12/legendsiam-1-e1570506588596-470x330.jpg'
	},
	{
		id: 12,
		name: 'Icon Siam | Way finder',
		type: 'Directory/Digital Signage',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/12/cover-470x330.jpg'
	},
	{
		id: 13,
		name: 'Hatton Capital Food Group',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/hatton-e1524298173600-470x330.jpg'
	},
	{
		id: 14,
		name: 'Biotopen | Stationery',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/09/biotopen-470x330.jpg'
	},
	{
		id: 15,
		name: 'REDD',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/09/red1-470x330.jpg'
	},
	{
		id: 16,
		name: 'Sea &amp; Sky',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/09/seansky1-470x330.jpg'
	},
	{
		id: 17,
		name: 'AIT University',
		type: 'Online Advertising',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/AIT-470x330.jpg'
	},
	{
		id: 18,
		name: 'KMITL | Brochure',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/KMITL-470x330.jpg'
	},
	{
		id: 19,
		name: 'Dakasi | Wobbler',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/dakasi-470x330.jpg'
	},
	{
		id: 20,
		name: 'Aviance',
		type: 'Online Advertising',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/aviance-470x330.jpg'
	},
	{
		id: 21,
		name: 'Oweva',
		type: 'Online Advertising',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/oweva-470x330.jpg'
	},
	{
		id: 22,
		name: 'SEMR | Floder',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/SEMR-470x330.jpg'
	},
	{
		id: 23,
		name: 'Tierra | Design 2',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/tierra2-1-e1523894344261-470x330.jpg'
	},
	{
		id: 24,
		name: 'Tierra | Design 1',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/tierra1-1-e1523894265645-470x330.jpg'
	},
	{
		id: 25,
		name: 'Desert Tree',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/deserttree1-1-e1523893552459-470x330.jpg'
	},
	{
		id: 26,
		name: 'Acacia',
		type: 'Web Design',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/acacia-1-e1523893098450-470x330.jpg'
	},
	{
		id: 27,
		name: 'Webster University | Christmas Card',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/webster-470x330.jpg'
	},
	{
		id: 28,
		name: 'RMA Group | Newsletter',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/RMA-470x330.jpg'
	},
	{
		id: 29,
		name: 'Ramayana Water Park | Roll up',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/ramayana-470x330.jpg'
	},
	{
		id: 30,
		name: 'Ecodev | Brochure',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/ecodev1-1-470x330.jpg'
	},
	{
		id: 31,
		name: 'DOS | Invitation Card',
		type: 'Publication',
		thumbnail: 'http://thnp-w.com/wp-content/uploads/2018/04/dos-470x330.jpg'
	}
]

export default portfolios
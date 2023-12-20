export const prerender = true;

const xPosts = [
    
        {
    "src": "filebase",
    "id": "QmY87YRdwuPzXRrePDDxhgURXS8pL4s1qpXtMtCWTEszQK",
    "tags": ["x-post", "toulouse", "metro"],
    "date": "16-12-2023"
  },
        
    {
    "src": "filebase",
    "id": "QmYaWrxw9tDZjqMVphwBoKNx4FaeBh5itHKPDH4pjVgQwa",
    "tags": ["x-post", "toulouse"],
    "date": "14-12-2023"
  },
         {
    "src": "filebase",
    "id": "Qme6b62aCFhBB48x9iXjWEeEPU8Lo5LnFbE19VVs6nun1C",
    "tags": ["toulouse", "starbucks"],
    "date": "14-12-2023"
  }
]

const videos  =  [
		{
			"src": "filebase",
			"id":"QmSnLuzgbSSkeLzTSZzSxnRxrzUgJizqSRyetEfa68nRzH",
		    "type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Quick running session after workout, Toulouse",
			"date": "15-12-2023"
			},
		{
			"src": "filebase",
			"id":"QmVg5c8PgocazgXssgveteTUYtrPU7Z1QQ9GBH7FEVgwRu",
		    "type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Promenade centre, Toulouse",
			"date": "14-12-2023"
			},
		{
			"src": "https://ipfs.filebase.io/ipfs/QmdQVY4WzGhoo7YXxqqfJZitavVJGNByjoJhyEQsoGy7sZ",
		        "type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Jardins des Plantes, Toulouse",
			"date": "04-12-2023"
			},
		{
			"src": "https://ipfs.filebase.io/ipfs/QmUGMZTM8kTmcijsCDhC9sRaMB6hweJoMVAyQStS8RiZkk",
		        "type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Place Mairie, Tournus"
		},
		{
			"src": "https://ipfs.filebase.io/ipfs/QmXsSetEA8iuBhMowdJ8LrRur8HundrjYtoUm9aJnNp73o",
		        "type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Le test du style moustache"
		},
                {
			"src": "https://ipfs.filebase.io/ipfs/QmcQPvkMfPrauR6YmzJEjioLAzHCGYr1gHMYAxpVacCU6a",
			"type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Marche, Etang Sale Les Hauts"
		},
		{
			"src": "https://bafybeiek7jugunq3aornur4vhgzlzrl2n2qfsw3rn7rgpcr47eglralax4.ipfs.w3s.link/IMG_0662.mov",
			"type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Marche, Grand Anse"
		},
		{
			"src": "https://ipfs.filebase.io/ipfs/QmQ8W9hdookPK4e7fCGzx84g2QhE9EPU9KiTnC22tiLTEQ",
			"type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Plage de St Leu"
		},
		{
			"src": "https://ipfs.filebase.io/ipfs/QmQ8W9hdookPK4e7fCGzx84g2QhE9EPU9KiTnC22tiLTEQ",
			"type": "video/mp4",
			"poster": "IMG_0461.png",
			"title": "Carrefour, St Gilles"
		}
	]





/** @type {import('./$types').LayoutLoad} */
export const load = () => {

  return {
    xPosts: xPosts,
    videos: videos
  }
}
const user = {
    _id: '5f4e9c9c9c9c9c9c9c9c9c9c',
    name: 'John Doe',
    email: 'email@mail.co',
    password: 'password',
    avatar: 'https://static.wikia.nocookie.net/avatar/images/6/6b/Adult_Aang.png/revision/latest?cb=20170709183126',
    rating: 4.5,
    numRatings: 10,
    location: 'New York, NY'
}

const ads = [
    {
        _id: '1',
        user: user,
        title: 'Ad 1',
        description: 'Description 1',
        price: 100,
        rating: 5,
        category: 'Guitar',
        images: [
            {
                _id: '1',
                img: 'https://cdn.mos.cms.futurecdn.net/75bTy4YjPxKHzymBBJzQ4J.jpg',
            }
        ],
    },
    {
        _id: '2',
        user: user,
        title: 'Ad 2',
        description: 'Description 2',
        price: 200,
        rating: 5,
        category: 'Guitar',
        images: [
            {
                _id: '1',
                img: 'https://cdn.schoolofrock.com/img/hero-large/guitar-lessons1527266771.jpg',
            },
            {
                _id: '2',
                img: 'https://cdn.shopify.com/s/files/1/0147/9412/9472/collections/Acoustic-Guitar_c501444d-9a54-4e83-a61a-b289c58741f4_1500x.jpg?v=1646405123',
            }
        ],
    },
    {
        _id: '3',
        user: user,
        title: 'Ad 3',
        description: 'Description 3',
        price: 300,
        rating: 5,
        category: 'Guitar',
        images: [
            {
                _id: '1',
                img: 'https://static.roland.com/assets/promos/jpg/cat-marquee_eurus_gs-1.jpg',
            },
            {
                _id: '2',
                img: 'https://strandbergguitars.com/cdn-cgi/image/onerror=redirect,quality=85,format=auto,metadata=copyright,width=1920,height=1080,fit=cover/wp-content/uploads/2019/10/boden_fusion_neckthrough-35.jpg',
            },
            {
                _id: '3',
                img: 'https://guitarspace.org/wp-content/uploads/2021/04/Strandberg-Boden-Standard-6-Electric-Guitar.jpg',
            }
        ],
    },
    {
        _id: '4',
        user: user,
        title: 'Ad 4',
        description: 'Description 4',
        price: 400,
        rating: 5,
        category: 'Guitar',
        images: [
            {
                _id: '1',
                img: 'https://i.ytimg.com/vi/ozRldQY1PtE/maxresdefault.jpg'
            },
            {
                _id: '2',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAEpP-zPPRjJt8WEvakVswLytw2zSba5RWA&usqp=CAU'
            },
            {
                _id: '3',
                img: 'https://cdn.mos.cms.futurecdn.net/Yh6r74b8CAj2jbdf2FAhq4.jpg'
            },
            {
                _id: '4',
                img: 'https://usa.yamaha.com/files/lineupbg03_202202_fe4c574a909cc620af21459a2a75b50f.jpg'
            }
        ],
    },
    {
        _id: '5',
        user: user,
        title: 'Guitar XVII floyd rose and EMG pickups',
        description: 'Description 5',
        price: 500,
        rating: 5,
        category: 'Guitar',
        images: [
            {
                _id: '1',
                img: 'https://thumbnails.cbc.ca/maven_legacy/thumbnails/148/31/ST_PAULS_BACHMAN_GUITAR_MPX.jpeg?crop=1.777xh:h;*,*&downsize=510px:*510w'
            },
            {
                _id: '2',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv43ju8wRSCyBlPVhMhaerU9hBFImdt8ehEw&usqp=CAU'
            },
            {
                _id: '3',
                img: 'https://vanhalengear.com/wp-content/uploads/2020/12/German-Floyd-Exhibit.jpg'
            },
            {
                _id: '4',
                img: 'https://i.guim.co.uk/img/media/fbad3afa55c6dc6bf3367ee12514dae7f2fb6275/178_0_2001_1202/master/2001.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=70a88ee53cebaa2d8336aa16108d7833'
            },
            {
                _id: '5',
                img: 'https://cdn.mos.cms.futurecdn.net/UuyDJrmpQoY9Tf5uGQBWcm-320-80.jpg'
            }
        ],
    },
    {
        _id: '6',
        user: user,
        title: 'Ad 6',
        description: 'Description 6',
        price: 600,
        rating: 5,
        category: 'Guitar',
        images: [
            {
                _id: '1',
                img: 'https://cdn.mos.cms.futurecdn.net/9u8HxmL6qpnYxTbE4RPiSL.jpg'
            },
            {
                _id: '2',
                img: 'https://guitar.com/wp-content/uploads/2017/01/Allman2.jpg'
            },
            {
                _id: '3',
                img: 'https://i.ytimg.com/vi/B5B1Vfdk7W8/hqdefault.jpg'
            },
            {
                _id: '4',
                img: 'https://www.gpb.org/sites/default/files/styles/three_two_702x468/public/npr_story_images/2020/07/14/gold_top2.jpg?h=1e0e6eef&itok=gznuORtj'
            },
            {
                _id: '5',
                img: 'https://townsquare.media/site/295/files/2014/10/duane.jpg?w=980&q=75'
            },
            {
                _id: '6',
                img: 'https://1.bp.blogspot.com/-rm9ZIBhBT90/YB1l0SJsSNI/AAAAAAAAE3Y/nfsLM6BX5u4IkpjbqIYqfawIMzDsiG8YgCLcBGAsYHQ/s497/b3ecdbe3e171ded60822b554466b9191.jpg'
            }
        ],
    },
]

export default ads;
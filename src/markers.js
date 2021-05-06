const markers =  {
    PRIZEMIE: [
        {
            title: "Chodba",
            position: [1300, 1660],
            img: 'chodba0.jpg',
            infospots: [
                {
                    title: "1. poschodie",
                    target: "chodba1.jpg", 
                    position: [3200, -500, 2000]
                },
                {
                    title: "",
                    target: "", 
                    position: [-1000, -1100, 100000]
                },
                {
                    title: "Šatne",
                    target: "satne.jpg", 
                    position: [-1000, -1100, 4500]
                },
                {
                    title: "Vestibul",
                    target: "vestibul.jpg", 
                    position: [-2000, -1300, 4500]
                },
                {
                    title: "Športová hala",
                    target: "hala.jpg", 
                    position: [4000, -500, -300]
                },
                {
                    title: "Učebňa",
                    target: "ucebna.jpg", 
                    position: [1450, -500, -4700]
                },
                {
                    title: "Oddychová miestnosť",
                    target: "herna.jpg", 
                    position: [500, -500, -5000]
                },
                {
                    title: "Robotizované pracovisko",
                    target: "robot.jpg", 
                    position: [4500, -500, -1200]
                },
            ] 
        },
        {
            title: "Športová hala",
            position: [1950, 1330],
            img: 'hala.jpg',
            infospots: [
                {
                    title: "Hlavná budova",
                    target: "chodba0.jpg", 
                    position: [4000, -200, -2300]
                },
                {
                    title: "Posilňovňa",
                    target: "posilovna.jpg", 
                    position: [3950, -200, -1600]
                },
            ] 
        },
        {
            title: "Učebňa",
            position: [1450, 1645],
            img: 'ucebna.jpg',
            infospots: [
                {
                    title: "Chodba",
                    target: "chodba0.jpg", 
                    position: [0, -500, 3000]
                },
            ] 
        },
        {
            title: "Oddychová miestnosť",
            position: [1450, 1770],
            img: 'herna.jpg',
            infospots: [
                {
                    title: "Chodba",
                    target: "chodba0.jpg", 
                    position: [2450, -500, 3000]
                },
            ] 
        },
        {
            title: "Vestibul",
            position: [890, 2150],
            img: 'vestibul.jpg',
            infospots: [
                {
                    title: "Hlavná chodba",
                    target: "chodba0.jpg", 
                    position: [-5000, 0, -2000]
                },
                {
                    title: "Jedáleň",
                    target: "jedalen.jpg", 
                    position: [5000, 0, 0]
                }
            ] 
        },
        {
            title: "Jedáleň",
            position: [290, 2473],
            img: 'jedalen.jpg',
            infospots: [
                {
                    title: "Vestibul",
                    target: "vestibul.jpg", 
                    position: [3800, 0, 2000]
                }
            ] 
        },
        {
            title: "Robotizované pracovisko",
            position: [1450, 1472],
            img: 'robot.jpg',
            infospots: [
                {
                    title: "Chodba",
                    target: "chodba0.jpg", 
                    position: [-3500, -500, 4000]
                },
            ] 
        },
        {
            title: "Šatne",
            position: [1120, 1415],
            img: 'satne.jpg',
            infospots: [
                {
                    title: "Vedľajšia budova",
                    target: "satne.jpg", // PREPOJ NA VEDLAJŠIU BUDOVU !!!!!!!
                    position: [1000, -500, 4500]
                },
                {
                    title: "Hlavná chodba",
                    target: "chodba0.jpg",
                    position: [-400, -300, -4500]
                },
            ] 
        },
    ],
    POS1: [
        {
            title: "Chodba",
            position: [1300, 1660],
            img: 'chodba1.jpg',
            infospots: [
                {
                    title: "Prízemie",
                    target: "chodba0.jpg", 
                    position: [3400, -500, -1400]
                },
                {
                    title: "2. poschodie",
                    target: "chodba2.jpg", 
                    position: [3800, -500, 1350]
                },
                {
                    title: "Učebňa slovenského jazyka",
                    target: "sjl.jpg", 
                    position: [4000, -500, 2500]
                },
            ] 
        },
        {
            title: "Učebňa slovenského jazyka",
            position: [1305, 1210],
            img: 'sjl.jpg',
            infospots: [
                {
                    title: "Chodba",
                    target: "chodba1.jpg", 
                    position: [-450, -500, 3000]
                },
            ] 
        },
        {
            title: "Lab",
            position: [1650, 680], // PRIDAT INFOSPOTS !!!
            img: 'lab.jpg',
            infospots: [
                
            ] 
        }
    ],
    POS2: [
        {
            title: "Chodba",
            position: [1300, 1660],
            img: 'chodba2.jpg',
            infospots: [
                {
                    title: "1. poschodie",
                    target: "chodba1.jpg", 
                    position: [-1300, -500, -3500]
                },
                {
                    title: "Učebňa anglického jazyka",
                    target: "anj.jpg", 
                    position: [-5000, -500, 940]
                },
                {
                    title: "Jazyková učebňa",
                    target: "jaz.jpg", 
                    position: [-3500, -500, -5000]
                },
                {
                    title: "Počítačová učebňa",
                    target: "pc.jpg", 
                    position: [3700, -500, -3000]
                },
            ]
        },
        {
            title: "Učebňa anglického jazyka",
            position: [1453, 1645],
            img: 'anj.jpg',
            infospots: [
                {
                    title: "Chodba",
                    target: "chodba2.jpg", 
                    position: [3200, -300, 2000]
                },
            ]
        },
        {
            title: "Jazyková učebňa",
            position: [1453, 1475],
            img: 'jaz.jpg',
            infospots: [
                {
                    title: "Chodba",
                    target: "chodba2.jpg", 
                    position: [-1500, -500, 3000]
                },
            ]
        },
        {
            title: "Počítačová učebňa",
            position: [1140, 1640],
            img: 'pc.jpg',
            infospots: [
                {
                    title: "Chodba",
                    target: "chodba2.jpg", 
                    position: [-1600, -500, -1800]
                },
            ]
        },
        {
            title: "Posilňovňa",
            position: [1652, 1440],
            img: 'posilovna.jpg',
            infospots: [
                {
                    title: "Športová hala",
                    target: "hala.jpg", 
                    position: [4000, -200, -2100]
                }
            ]
        },
        {
            title: "Vyt7",
            position: [1695, 682],
            img: 'vyt7.jpg',
        },
    ],
};

export default markers
import {ColumnType, RowType} from '../../components/SuperTable/SuperTable.types';

export const heavyData: {columns: ColumnType[]; data: RowType[]} = {
  columns: [
    {
      _index: 0,
      title: 'First Name',
      selector: (row: {[key: string]: any}) => row.firstName,
    },
    {
      _index: 1,
      title: 'Last Name',
      selector: (row: {[key: string]: any}) => row.lastName,
    },
    {
      _index: 2,
      title: 'Age',
      selector: (row: {[key: string]: any}) => row.age,
    },
    {
      _index: 3,
      title: 'Balance',
      selector: (row: {[key: string]: any}) => row.balance,
    },
    {
      _index: 4,
      title: 'Email',
      selector: (row: {[key: string]: any}) => row.email,
    },
    {
      _index: 5,
      title: 'Phone',
      selector: (row: {[key: string]: any}) => row.phone,
    },
  ],
  data: [
    {
      _id: '623687e303477bf345b965af',
      balance: '$3,876.64',
      age: 28,
      firstName: 'Huber',
      lastName: 'Perez',
      email: 'huberperez@quantasis.com',
      phone: '+1 (900) 461-3465',
    },
    {
      _id: '623687e3b6db4f15838915c7',
      balance: '$2,400.20',
      age: 40,
      firstName: 'Thornton',
      lastName: 'Sellers',
      email: 'thorntonsellers@quantasis.com',
      phone: '+1 (997) 503-3777',
    },
    {
      _id: '623687e399b57850c467a3c1',
      balance: '$3,511.79',
      age: 27,
      firstName: 'Knight',
      lastName: 'Marshall',
      email: 'knightmarshall@quantasis.com',
      phone: '+1 (834) 571-3191',
    },
    {
      _id: '623687e3cea32399828b2ef7',
      balance: '$1,976.62',
      age: 32,
      firstName: 'Doris',
      lastName: 'Turner',
      email: 'doristurner@quantasis.com',
      phone: '+1 (832) 595-3622',
    },
    {
      _id: '623687e3b31a86f31fdc31ae',
      balance: '$3,893.74',
      age: 40,
      firstName: 'Terrie',
      lastName: 'Beach',
      email: 'terriebeach@quantasis.com',
      phone: '+1 (880) 599-2356',
    },
    {
      _id: '623687e3749526d07dc2dfe7',
      balance: '$3,945.60',
      age: 34,
      firstName: 'Albert',
      lastName: 'Monroe',
      email: 'albertmonroe@quantasis.com',
      phone: '+1 (925) 537-3389',
    },
    {
      _id: '623687e3112a7fa0cf9a2334',
      balance: '$1,140.29',
      age: 29,
      firstName: 'Bryant',
      lastName: 'Kemp',
      email: 'bryantkemp@quantasis.com',
      phone: '+1 (813) 566-3207',
    },
    {
      _id: '623687e3e9ddbd0d0d3d5ff6',
      balance: '$3,059.85',
      age: 28,
      firstName: 'Hickman',
      lastName: 'Casey',
      email: 'hickmancasey@quantasis.com',
      phone: '+1 (997) 436-2311',
    },
    {
      _id: '623687e3068dc4cc15e0f1fa',
      balance: '$1,007.90',
      age: 28,
      firstName: 'Lizzie',
      lastName: 'Burton',
      email: 'lizzieburton@quantasis.com',
      phone: '+1 (975) 584-2579',
    },
    {
      _id: '623687e3ccf21c6f0fdc7850',
      balance: '$2,867.14',
      age: 21,
      firstName: 'Odonnell',
      lastName: 'Gallagher',
      email: 'odonnellgallagher@quantasis.com',
      phone: '+1 (867) 473-2693',
    },
    {
      _id: '623687e3864aab062f318937',
      balance: '$1,310.86',
      age: 22,
      firstName: 'Hodges',
      lastName: 'Peck',
      email: 'hodgespeck@quantasis.com',
      phone: '+1 (932) 443-3414',
    },
    {
      _id: '623687e3e9604a71379147e6',
      balance: '$2,943.56',
      age: 23,
      firstName: 'Barr',
      lastName: 'Molina',
      email: 'barrmolina@quantasis.com',
      phone: '+1 (943) 561-2162',
    },
    {
      _id: '623687e3bf67b73550bd127f',
      balance: '$1,906.72',
      age: 31,
      firstName: 'Welch',
      lastName: 'Davis',
      email: 'welchdavis@quantasis.com',
      phone: '+1 (931) 473-2704',
    },
    {
      _id: '623687e38da7d7c2aa6f0ffb',
      balance: '$1,737.71',
      age: 33,
      firstName: 'Wilkerson',
      lastName: 'Morgan',
      email: 'wilkersonmorgan@quantasis.com',
      phone: '+1 (942) 553-3312',
    },
    {
      _id: '623687e3d9c6d31e893089c9',
      balance: '$1,905.40',
      age: 25,
      firstName: 'Darcy',
      lastName: 'Hancock',
      email: 'darcyhancock@quantasis.com',
      phone: '+1 (815) 444-2102',
    },
    {
      _id: '623687e3976d3c18c8f49eb4',
      balance: '$1,317.23',
      age: 33,
      firstName: 'Mai',
      lastName: 'Allison',
      email: 'maiallison@quantasis.com',
      phone: '+1 (805) 599-2632',
    },
    {
      _id: '623687e350231a68f6b7c24a',
      balance: '$2,245.81',
      age: 32,
      firstName: 'Lorna',
      lastName: 'Parker',
      email: 'lornaparker@quantasis.com',
      phone: '+1 (842) 557-3777',
    },
    {
      _id: '623687e39ace3ba5bf8560f6',
      balance: '$3,118.42',
      age: 25,
      firstName: 'Dejesus',
      lastName: 'Roach',
      email: 'dejesusroach@quantasis.com',
      phone: '+1 (841) 587-2392',
    },
    {
      _id: '623687e3140f353d1c23adb4',
      balance: '$2,000.60',
      age: 21,
      firstName: 'Hampton',
      lastName: 'Fowler',
      email: 'hamptonfowler@quantasis.com',
      phone: '+1 (983) 463-3822',
    },
    {
      _id: '623687e3942eb586ec497e88',
      balance: '$3,717.44',
      age: 20,
      firstName: 'Kellie',
      lastName: 'Nolan',
      email: 'kellienolan@quantasis.com',
      phone: '+1 (872) 527-3205',
    },
    {
      _id: '623687e37a66d1e03e38b602',
      balance: '$3,690.06',
      age: 21,
      firstName: 'Gail',
      lastName: 'Melton',
      email: 'gailmelton@quantasis.com',
      phone: '+1 (804) 569-3250',
    },
    {
      _id: '623687e3a1f30e7e9a53e8a6',
      balance: '$3,405.64',
      age: 32,
      firstName: 'Franco',
      lastName: 'Snider',
      email: 'francosnider@quantasis.com',
      phone: '+1 (867) 525-2402',
    },
    {
      _id: '623687e39ae89512b4a206ff',
      balance: '$3,544.97',
      age: 22,
      firstName: 'Cochran',
      lastName: 'Schroeder',
      email: 'cochranschroeder@quantasis.com',
      phone: '+1 (839) 473-3523',
    },
    {
      _id: '623687e386acf1dcc5ba31e4',
      balance: '$3,414.03',
      age: 37,
      firstName: 'Lee',
      lastName: 'Goff',
      email: 'leegoff@quantasis.com',
      phone: '+1 (999) 504-2467',
    },
    {
      _id: '623687e35cd00a004130affc',
      balance: '$3,394.16',
      age: 34,
      firstName: 'Phyllis',
      lastName: 'Weiss',
      email: 'phyllisweiss@quantasis.com',
      phone: '+1 (803) 559-2423',
    },
    {
      _id: '623687e3881b47c8741bca60',
      balance: '$2,062.32',
      age: 31,
      firstName: 'Newton',
      lastName: 'Kennedy',
      email: 'newtonkennedy@quantasis.com',
      phone: '+1 (823) 526-2852',
    },
    {
      _id: '623687e3323e4a4ea2381b6d',
      balance: '$3,711.68',
      age: 24,
      firstName: 'Romero',
      lastName: 'Clements',
      email: 'romeroclements@quantasis.com',
      phone: '+1 (923) 458-3693',
    },
    {
      _id: '623687e3c7061dccc56a449b',
      balance: '$3,093.38',
      age: 40,
      firstName: 'Landry',
      lastName: 'Craft',
      email: 'landrycraft@quantasis.com',
      phone: '+1 (833) 496-2494',
    },
    {
      _id: '623687e3ed043eaf21b67a65',
      balance: '$1,924.31',
      age: 36,
      firstName: 'Lola',
      lastName: 'Reyes',
      email: 'lolareyes@quantasis.com',
      phone: '+1 (934) 539-2054',
    },
    {
      _id: '623687e3df094ded6d138696',
      balance: '$1,838.30',
      age: 40,
      firstName: 'Martina',
      lastName: 'Blair',
      email: 'martinablair@quantasis.com',
      phone: '+1 (936) 444-3638',
    },
    {
      _id: '623687e340595a407bd35874',
      balance: '$2,120.94',
      age: 25,
      firstName: 'Johnnie',
      lastName: 'Mcdaniel',
      email: 'johnniemcdaniel@quantasis.com',
      phone: '+1 (994) 491-2061',
    },
    {
      _id: '623687e34cdae55d1621c7c9',
      balance: '$2,194.38',
      age: 33,
      firstName: 'Lynne',
      lastName: 'Robbins',
      email: 'lynnerobbins@quantasis.com',
      phone: '+1 (813) 445-2248',
    },
    {
      _id: '623687e33fb1c883932e14ce',
      balance: '$1,421.06',
      age: 22,
      firstName: 'Gay',
      lastName: 'Lindsay',
      email: 'gaylindsay@quantasis.com',
      phone: '+1 (876) 512-3175',
    },
    {
      _id: '623687e36f8cbe68471c5df3',
      balance: '$3,305.88',
      age: 24,
      firstName: 'Williams',
      lastName: 'Rosales',
      email: 'williamsrosales@quantasis.com',
      phone: '+1 (995) 464-2451',
    },
    {
      _id: '623687e36001bce5dd719a7d',
      balance: '$2,645.87',
      age: 23,
      firstName: 'Tonia',
      lastName: 'Faulkner',
      email: 'toniafaulkner@quantasis.com',
      phone: '+1 (965) 563-2700',
    },
    {
      _id: '623687e3907bb6a2636b2154',
      balance: '$3,781.54',
      age: 20,
      firstName: 'Angelica',
      lastName: 'Clayton',
      email: 'angelicaclayton@quantasis.com',
      phone: '+1 (803) 492-2509',
    },
    {
      _id: '623687e3ebb79080b9fbc785',
      balance: '$3,212.50',
      age: 38,
      firstName: 'Clayton',
      lastName: 'Baker',
      email: 'claytonbaker@quantasis.com',
      phone: '+1 (893) 535-3345',
    },
    {
      _id: '623687e368397d243066f640',
      balance: '$2,907.21',
      age: 30,
      firstName: 'Robert',
      lastName: 'Alvarado',
      email: 'robertalvarado@quantasis.com',
      phone: '+1 (959) 468-3550',
    },
    {
      _id: '623687e3e6a67d5321db46d2',
      balance: '$2,480.62',
      age: 37,
      firstName: 'Collins',
      lastName: 'Stout',
      email: 'collinsstout@quantasis.com',
      phone: '+1 (843) 545-3183',
    },
    {
      _id: '623687e3bc3c4d4ead5a88bb',
      balance: '$2,814.15',
      age: 21,
      firstName: 'Edith',
      lastName: 'Randall',
      email: 'edithrandall@quantasis.com',
      phone: '+1 (892) 414-3762',
    },
    {
      _id: '623687e376049881fcc86c83',
      balance: '$2,134.75',
      age: 23,
      firstName: 'Larson',
      lastName: 'Barber',
      email: 'larsonbarber@quantasis.com',
      phone: '+1 (902) 512-3775',
    },
    {
      _id: '623687e312f7620080808f3f',
      balance: '$2,336.32',
      age: 31,
      firstName: 'Aida',
      lastName: 'Johns',
      email: 'aidajohns@quantasis.com',
      phone: '+1 (838) 483-2451',
    },
    {
      _id: '623687e3792125c1bb164540',
      balance: '$1,545.82',
      age: 36,
      firstName: 'Sullivan',
      lastName: 'Bridges',
      email: 'sullivanbridges@quantasis.com',
      phone: '+1 (992) 504-2300',
    },
    {
      _id: '623687e346d1a03de59dfc4a',
      balance: '$3,766.14',
      age: 39,
      firstName: 'Ratliff',
      lastName: 'Parks',
      email: 'ratliffparks@quantasis.com',
      phone: '+1 (968) 431-2679',
    },
    {
      _id: '623687e3a1d927dcb122d075',
      balance: '$2,962.60',
      age: 30,
      firstName: 'Marylou',
      lastName: 'Rodriquez',
      email: 'marylourodriquez@quantasis.com',
      phone: '+1 (801) 436-2971',
    },
    {
      _id: '623687e3ed2e29666ae4659e',
      balance: '$2,700.22',
      age: 40,
      firstName: 'Cathleen',
      lastName: 'Sweeney',
      email: 'cathleensweeney@quantasis.com',
      phone: '+1 (848) 415-2155',
    },
    {
      _id: '623687e332eae029465deec7',
      balance: '$1,298.37',
      age: 21,
      firstName: 'Hoover',
      lastName: 'Humphrey',
      email: 'hooverhumphrey@quantasis.com',
      phone: '+1 (810) 401-3952',
    },
    {
      _id: '623687e300957fa9194581d8',
      balance: '$2,469.95',
      age: 25,
      firstName: 'Dianne',
      lastName: 'Puckett',
      email: 'diannepuckett@quantasis.com',
      phone: '+1 (953) 548-2454',
    },
    {
      _id: '623687e3ac112b9186e4e9ae',
      balance: '$2,401.84',
      age: 23,
      firstName: 'Francisca',
      lastName: 'Hawkins',
      email: 'franciscahawkins@quantasis.com',
      phone: '+1 (854) 500-2772',
    },
    {
      _id: '623687e3f9118a2c9b1db416',
      balance: '$1,558.72',
      age: 20,
      firstName: 'Osborne',
      lastName: 'Norton',
      email: 'osbornenorton@quantasis.com',
      phone: '+1 (993) 554-3235',
    },
    {
      _id: '623687e3f3f810bcb569af1e',
      balance: '$3,071.56',
      age: 37,
      firstName: 'Sims',
      lastName: 'Short',
      email: 'simsshort@quantasis.com',
      phone: '+1 (951) 463-3047',
    },
    {
      _id: '623687e356d308db5964b0f0',
      balance: '$3,581.30',
      age: 30,
      firstName: 'Downs',
      lastName: 'Blackwell',
      email: 'downsblackwell@quantasis.com',
      phone: '+1 (844) 522-3904',
    },
    {
      _id: '623687e3c91a0e98bcff098c',
      balance: '$3,421.48',
      age: 32,
      firstName: 'Regina',
      lastName: 'Landry',
      email: 'reginalandry@quantasis.com',
      phone: '+1 (966) 528-2552',
    },
    {
      _id: '623687e38ec5bbc33e44cd99',
      balance: '$2,321.66',
      age: 31,
      firstName: 'Barbra',
      lastName: 'Avery',
      email: 'barbraavery@quantasis.com',
      phone: '+1 (856) 532-3539',
    },
    {
      _id: '623687e351fb87f1103eaa26',
      balance: '$2,917.32',
      age: 30,
      firstName: 'Debbie',
      lastName: 'Morton',
      email: 'debbiemorton@quantasis.com',
      phone: '+1 (895) 452-3172',
    },
    {
      _id: '623687e3d3556fe75f2ece25',
      balance: '$2,692.69',
      age: 37,
      firstName: 'Gaines',
      lastName: 'Acosta',
      email: 'gainesacosta@quantasis.com',
      phone: '+1 (975) 447-3387',
    },
    {
      _id: '623687e34a7f3771c457c388',
      balance: '$1,968.81',
      age: 30,
      firstName: 'Carrillo',
      lastName: 'Burke',
      email: 'carrilloburke@quantasis.com',
      phone: '+1 (904) 570-2070',
    },
    {
      _id: '623687e3d36d77eb33d6cf58',
      balance: '$1,322.69',
      age: 35,
      firstName: 'Paula',
      lastName: 'Macias',
      email: 'paulamacias@quantasis.com',
      phone: '+1 (955) 453-2129',
    },
    {
      _id: '623687e30c9bd806efcd521f',
      balance: '$1,359.15',
      age: 40,
      firstName: 'Dorthy',
      lastName: 'Schwartz',
      email: 'dorthyschwartz@quantasis.com',
      phone: '+1 (964) 519-2694',
    },
    {
      _id: '623687e361fcc9fb3fc5aeec',
      balance: '$1,103.43',
      age: 22,
      firstName: 'Knowles',
      lastName: 'Solomon',
      email: 'knowlessolomon@quantasis.com',
      phone: '+1 (969) 493-3793',
    },
    {
      _id: '623687e3c38b873ff749ae7c',
      balance: '$2,463.73',
      age: 40,
      firstName: 'Langley',
      lastName: 'Buckner',
      email: 'langleybuckner@quantasis.com',
      phone: '+1 (815) 594-2004',
    },
    {
      _id: '623687e395a002fcf487931c',
      balance: '$3,369.80',
      age: 20,
      firstName: 'Leah',
      lastName: 'Dorsey',
      email: 'leahdorsey@quantasis.com',
      phone: '+1 (893) 530-3605',
    },
    {
      _id: '623687e39804c3e9e78866d7',
      balance: '$2,933.35',
      age: 25,
      firstName: 'Tina',
      lastName: 'Leblanc',
      email: 'tinaleblanc@quantasis.com',
      phone: '+1 (835) 501-2743',
    },
    {
      _id: '623687e35b21e993816182f3',
      balance: '$2,424.99',
      age: 32,
      firstName: 'Turner',
      lastName: 'Barnett',
      email: 'turnerbarnett@quantasis.com',
      phone: '+1 (849) 425-3799',
    },
    {
      _id: '623687e3a88a20c6574f8858',
      balance: '$2,973.43',
      age: 39,
      firstName: 'Rowe',
      lastName: 'Waller',
      email: 'rowewaller@quantasis.com',
      phone: '+1 (835) 519-2685',
    },
    {
      _id: '623687e3deb7cffd4b33965f',
      balance: '$1,943.52',
      age: 32,
      firstName: 'Bartlett',
      lastName: 'Bennett',
      email: 'bartlettbennett@quantasis.com',
      phone: '+1 (906) 493-3391',
    },
    {
      _id: '623687e34caa800e9754047d',
      balance: '$2,367.87',
      age: 32,
      firstName: 'Le',
      lastName: 'Bright',
      email: 'lebright@quantasis.com',
      phone: '+1 (903) 596-3864',
    },
    {
      _id: '623687e327b19823c3edaa0b',
      balance: '$2,185.08',
      age: 32,
      firstName: 'Jessie',
      lastName: 'Todd',
      email: 'jessietodd@quantasis.com',
      phone: '+1 (933) 564-3803',
    },
    {
      _id: '623687e37c9347383b3db857',
      balance: '$2,102.13',
      age: 36,
      firstName: 'Greene',
      lastName: 'Dunn',
      email: 'greenedunn@quantasis.com',
      phone: '+1 (989) 415-3885',
    },
    {
      _id: '623687e3a3d000e3b00984e9',
      balance: '$1,806.90',
      age: 37,
      firstName: 'Long',
      lastName: 'Salas',
      email: 'longsalas@quantasis.com',
      phone: '+1 (888) 555-3654',
    },
    {
      _id: '623687e3ad1f8bda0bb118da',
      balance: '$2,698.64',
      age: 39,
      firstName: 'Brigitte',
      lastName: 'Mullen',
      email: 'brigittemullen@quantasis.com',
      phone: '+1 (963) 434-3265',
    },
    {
      _id: '623687e32964b60459b644f8',
      balance: '$3,028.52',
      age: 31,
      firstName: 'Haley',
      lastName: 'Slater',
      email: 'haleyslater@quantasis.com',
      phone: '+1 (996) 453-3773',
    },
    {
      _id: '623687e3c13d217615365809',
      balance: '$2,428.43',
      age: 36,
      firstName: 'Kennedy',
      lastName: 'Mayer',
      email: 'kennedymayer@quantasis.com',
      phone: '+1 (855) 427-2783',
    },
    {
      _id: '623687e385252a58a7b21db6',
      balance: '$2,728.58',
      age: 37,
      firstName: 'Yates',
      lastName: 'Garrison',
      email: 'yatesgarrison@quantasis.com',
      phone: '+1 (919) 554-2726',
    },
    {
      _id: '623687e3ac6204c57de277ee',
      balance: '$1,156.17',
      age: 38,
      firstName: 'Elsa',
      lastName: 'Graham',
      email: 'elsagraham@quantasis.com',
      phone: '+1 (848) 502-2322',
    },
    {
      _id: '623687e396ad30591fcb2b5a',
      balance: '$2,337.89',
      age: 33,
      firstName: 'Martinez',
      lastName: 'Lane',
      email: 'martinezlane@quantasis.com',
      phone: '+1 (957) 561-3759',
    },
    {
      _id: '623687e32d2464e1b5f7b582',
      balance: '$2,538.88',
      age: 31,
      firstName: 'Rae',
      lastName: 'Pruitt',
      email: 'raepruitt@quantasis.com',
      phone: '+1 (848) 459-3776',
    },
    {
      _id: '623687e357f90418a02ab3ca',
      balance: '$2,627.58',
      age: 38,
      firstName: 'Mallory',
      lastName: 'Goodwin',
      email: 'mallorygoodwin@quantasis.com',
      phone: '+1 (880) 552-2725',
    },
    {
      _id: '623687e3e826f0f180ca10fe',
      balance: '$2,947.04',
      age: 36,
      firstName: 'Mccoy',
      lastName: 'Sims',
      email: 'mccoysims@quantasis.com',
      phone: '+1 (819) 597-2762',
    },
    {
      _id: '623687e351b4cac9441e357a',
      balance: '$2,102.15',
      age: 29,
      firstName: 'Charles',
      lastName: 'Decker',
      email: 'charlesdecker@quantasis.com',
      phone: '+1 (846) 483-3692',
    },
    {
      _id: '623687e3460d4fe96ea654a9',
      balance: '$2,791.81',
      age: 31,
      firstName: 'Knapp',
      lastName: 'Gentry',
      email: 'knappgentry@quantasis.com',
      phone: '+1 (907) 440-3375',
    },
    {
      _id: '623687e354e247b2d121683e',
      balance: '$3,857.04',
      age: 38,
      firstName: 'Lois',
      lastName: 'Small',
      email: 'loissmall@quantasis.com',
      phone: '+1 (885) 537-2339',
    },
    {
      _id: '623687e32cf6fe3b289f914e',
      balance: '$1,343.35',
      age: 33,
      firstName: 'Knox',
      lastName: 'Mcguire',
      email: 'knoxmcguire@quantasis.com',
      phone: '+1 (869) 512-2379',
    },
    {
      _id: '623687e380f9be05350cb77a',
      balance: '$1,340.28',
      age: 23,
      firstName: 'Heidi',
      lastName: 'Malone',
      email: 'heidimalone@quantasis.com',
      phone: '+1 (990) 465-2073',
    },
    {
      _id: '623687e33ab889e2f6cb4701',
      balance: '$2,973.90',
      age: 26,
      firstName: 'Faulkner',
      lastName: 'Burt',
      email: 'faulknerburt@quantasis.com',
      phone: '+1 (831) 437-3351',
    },
    {
      _id: '623687e3fafe530934400d18',
      balance: '$1,937.12',
      age: 31,
      firstName: 'Stewart',
      lastName: 'Farmer',
      email: 'stewartfarmer@quantasis.com',
      phone: '+1 (896) 546-3659',
    },
    {
      _id: '623687e37fd6cbf92bed30f1',
      balance: '$1,210.36',
      age: 34,
      firstName: 'Hendrix',
      lastName: 'Buchanan',
      email: 'hendrixbuchanan@quantasis.com',
      phone: '+1 (918) 403-2164',
    },
    {
      _id: '623687e3f99ee6d90cb68bf6',
      balance: '$2,100.54',
      age: 36,
      firstName: 'Cherry',
      lastName: 'Figueroa',
      email: 'cherryfigueroa@quantasis.com',
      phone: '+1 (879) 553-3178',
    },
    {
      _id: '623687e398b111427d37c0c8',
      balance: '$3,072.42',
      age: 30,
      firstName: 'Hood',
      lastName: 'Parrish',
      email: 'hoodparrish@quantasis.com',
      phone: '+1 (994) 534-3413',
    },
    {
      _id: '623687e3d0aaf33f159f6232',
      balance: '$2,034.67',
      age: 35,
      firstName: 'Suzette',
      lastName: 'Williams',
      email: 'suzettewilliams@quantasis.com',
      phone: '+1 (877) 550-2197',
    },
    {
      _id: '623687e3501164bcf0a0f728',
      balance: '$2,016.08',
      age: 35,
      firstName: 'Vincent',
      lastName: 'Navarro',
      email: 'vincentnavarro@quantasis.com',
      phone: '+1 (814) 410-3159',
    },
    {
      _id: '623687e384f7566a770d804f',
      balance: '$3,295.50',
      age: 30,
      firstName: 'Callahan',
      lastName: 'Wise',
      email: 'callahanwise@quantasis.com',
      phone: '+1 (880) 493-3821',
    },
    {
      _id: '623687e3d68c16d27909de48',
      balance: '$3,655.44',
      age: 35,
      firstName: 'Michael',
      lastName: 'Foreman',
      email: 'michaelforeman@quantasis.com',
      phone: '+1 (817) 535-2265',
    },
    {
      _id: '623687e3a52ae15646c97d32',
      balance: '$2,146.51',
      age: 31,
      firstName: 'Stevens',
      lastName: 'Bullock',
      email: 'stevensbullock@quantasis.com',
      phone: '+1 (882) 592-3259',
    },
    {
      _id: '623687e31555563937bb7aaa',
      balance: '$3,169.36',
      age: 20,
      firstName: 'Stephens',
      lastName: 'Obrien',
      email: 'stephensobrien@quantasis.com',
      phone: '+1 (990) 592-2772',
    },
    {
      _id: '623687e3b315a406d0a522d5',
      balance: '$1,819.52',
      age: 38,
      firstName: 'Gallagher',
      lastName: 'Stevens',
      email: 'gallagherstevens@quantasis.com',
      phone: '+1 (925) 593-2638',
    },
    {
      _id: '623687e319fdab399694f714',
      balance: '$2,628.14',
      age: 38,
      firstName: 'Meredith',
      lastName: 'England',
      email: 'meredithengland@quantasis.com',
      phone: '+1 (955) 500-3202',
    },
    {
      _id: '623687e3d9efa64cff5cb454',
      balance: '$1,032.46',
      age: 25,
      firstName: 'Allie',
      lastName: 'Pope',
      email: 'alliepope@quantasis.com',
      phone: '+1 (932) 579-3388',
    },
    {
      _id: '623687e3115582d1e7899a89',
      balance: '$3,787.45',
      age: 21,
      firstName: 'Donna',
      lastName: 'York',
      email: 'donnayork@quantasis.com',
      phone: '+1 (991) 416-3646',
    },
    {
      _id: '623687e34f29b4548bf0345a',
      balance: '$3,962.24',
      age: 31,
      firstName: 'Odessa',
      lastName: 'Jensen',
      email: 'odessajensen@quantasis.com',
      phone: '+1 (838) 494-2500',
    },
  ],
};

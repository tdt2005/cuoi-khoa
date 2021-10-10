const GAME_CLOCK = 1000 
const BLOCK_SIZE = 30 
const ROWS = 20 
const COLUMNS = 10 
const SCORE_PLAYED = 10 

const SHAPES = [
    [],
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
        //I pice
    ], 

    [
        [2,0,0],
        [2,2,2],
        [0,0,0],
        //J pice
    ],

    [
        [0,0,3],
        [3,3,3],
        [0,0,0],
        //L pice
    ],

    [
        [4,4],
        [4,4],
        //O pice
    ],

    [
        [0,5,5],
        [5,5,0],
        [0,0,0],
        //S pice
    ],

    [
        [0,6,0],
        [6,6,6],
        [0,0,0],
        //T pice
    ],

    [
        [7,7,0],
        [0,7,7],
        [0,0,0],
        //Z pice
    ],

]

const COLORS = [
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#10FF01',
    '#F000FF'
]
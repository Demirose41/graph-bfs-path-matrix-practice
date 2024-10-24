function findNeighbors(node, matrix) {
    let neighbors = []
    let x = node[0]
    let y = node[1]

    // UP: 
    if(x != 0) neighbors.push([x - 1,y])

    // DOWN: 
    if(x != matrix.length - 1) neighbors.push([x + 1,y])
    // LEFT: 
    if(y != 0) neighbors.push([x,y - 1])
    // RIGHT: 
    if(y != matrix[0].length - 1) neighbors.push([x,y + 1])


    // Return the neighbors array
    return neighbors
}



function bfsPath(matrix, startNode, endValue) {
    
    const queue = [startNode]
    const visited = new Set()
    const visitedArray = []
    let found = false
    if(matrix[startNode[0]][startNode[1]] === endValue) return [startNode]
    while(queue.length > 0){
        let current = queue.pop()
        if(!visited.has(_toString(current))){
            visited.add(_toString(current))
            visitedArray.push(current)
            if(matrix[current[0]][current[1]] === endValue) found = true

            let neighbors = findNeighbors(current, matrix)
            for(const neighbor of neighbors){
                queue.push(neighbor)
            }
        }
    }

    if(found === false) return false
    return visitedArray
    
}

function _toString(coord){
    return `${coord[0]},${coord[1]}`
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [ 
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
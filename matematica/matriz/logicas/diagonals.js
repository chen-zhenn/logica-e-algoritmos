const matrix = require("./data")

const Diagonal = matrix => {
    const MS = matrix.length // Matrix size
    const PDL = [] // Primary diagonal list
    const SDL = [] // Secondary diagonal list

    function primary() {
        return PDL
    }
    function secondary(){
        return SDL
    }

    function sum(itemsList){
        return itemsList && Array.isArray(itemsList) ? itemsList.reduce((acc,cv) => acc + cv) : 0
    }

    function total(){
        const TL = [...PDL,...SDL]
        return TL.reduce((acc,cv) => acc + cv) 
    }

    function diff(){
        const TPDL = sum(PDL) // The sum of total from Primary diagonal list
        const TSDL = sum(SDL) // The sum of total from Secondary diagonal list
        return Math.max(TPDL,TSDL) - Math.min(TPDL,TSDL)
    }

    function sumListItem(){}

    function setDiagonals(){
        for(let i in matrix)
            for(let j in matrix){
                const EM = matrix[i][j] // Element from matrix
                const VPD = parseInt(i) == parseInt(j) // Is Primary Diagonal value
                const VSD = parseInt(i) + parseInt(j) == MS - 1 // Is Secondary Diagonal value
                if(VPD) PDL.push(EM)
                if(VSD) SDL.push(EM)
            }
    }

    setDiagonals()

    return { 
        primary: primary(),
        secondary: secondary(),
        diff,
        total,
        sum, 
    }
}

const diag = Diagonal(matrix)
const primaryDiag = diag.primary
const secondaryDiag = diag.secondary
const sumPrimaryDiag = diag.sum(primaryDiag)
const sumSecondaryDiag = diag.sum(secondaryDiag)
const dioagonalsTotal = diag.total()
const dioagonalsDiff = diag.diff()

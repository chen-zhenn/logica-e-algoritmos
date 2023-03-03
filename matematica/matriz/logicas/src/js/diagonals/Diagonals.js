const Diagonals = (matrix = []) => {

    if(!matrix || !Array.isArray(matrix)) throw new dataTypeException("Matrix it must be an array")

    const MS = matrix.length // Matrix size
    const PDL = [] // Primary diagonal list
    const SDL = [] // Secondary diagonal list

    function primary() {
        return PDL
    }
    function secondary(){
        return SDL
    }

    function sum(itemsList = PDL){
        if(itemsList && itemsList.length) return itemsList.reduce((acc,cv) => acc + cv)
        return itemsList.length
    }

    function total(){
        const TL = [...PDL,...SDL]
        if(TL.length) return TL.reduce((acc,cv) => acc + cv)
        return TL.length 
    }

    function diff(){
        const TPDL = sum(PDL) // The sum of total from Primary diagonal list
        const TSDL = sum(SDL) // The sum of total from Secondary diagonal list
        return Math.max(TPDL,TSDL) - Math.min(TPDL,TSDL)
    }

    function setDiagonals(){
     
        for(let i in matrix){

            if(matrix[i].length !== MS) throw new invalidException("Matrix it must be type of square")
            
            for(let j in matrix){
                const EM = matrix[i][j] // Element from matrix
                const VPD = parseInt(i) == parseInt(j) // Is Primary Diagonal value
                const VSD = parseInt(i) + parseInt(j) == MS - 1 // Is Secondary Diagonal value
                if(VPD) PDL.push(EM)
                if(VSD) SDL.push(EM)
            }
        }
        
    }

    function invalidException(message){
        return {
            message,
            name: "Invalid exception"
        }
    } 

    function dataTypeException(message){
        return {
            message,
            name: "Type exception"
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

export { Diagonals }

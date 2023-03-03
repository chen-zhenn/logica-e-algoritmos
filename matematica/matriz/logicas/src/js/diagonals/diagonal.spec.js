import { Diagonals } from "./Diagonals"

describe("Diagonal module", () => {
    const objError = {}
    let matrix = null
    let diag = null
    
    describe("Cenário onde a matriz é um dado inválido", () => {

        beforeAll(() => {
            objError.message = "Matrix it must be an array"
            objError.name = "Type exception"
        })
        
        it("Deve levantar uma exceção", () => {
            try {
                diag = Diagonals(null)
            } catch (error) {
                expect(error).toEqual(objError)
            }
        })
    })
    
    describe("Cenário onde não foi passado uma matriz", () => {
        
        beforeAll(() => diag = Diagonals())
        
        it("Deve retornar um objeto", () => {
            expect(typeof diag).toBe("object")
        })

        it("Deve conter as propriedades: 'primary', 'secondary'", () => {
            expect(diag).toHaveProperty("primary")
            expect(diag).toHaveProperty("secondary")
        })

        it("Deve retorna 0, se o método sum chamado", () => {
            expect(diag.sum()).toBe(0)
        })

        it("Deve retorna 0, se o método total chamado", () => {
            expect(diag.total()).toBe(0)
        })

        it("Deve retorna 0, se o método diff chamado", () => {
            expect(diag.diff()).toBe(0)
        })
    })

    describe("Cenário com uma matriz retangular", () => {
        
        beforeAll(() => {
            matrix = [[11,2,4],[4,5,6]]
            objError.message = "Matrix it must be type of square"
            objError.name = "Invalid exception"
        })

        it("Deve levantar uma exceção", () => {
            try {
                diag = Diagonals(matrix)
            } catch (error) {
                expect(error).toEqual(objError)
            }
        })
    })

    describe("Cenário com uma matriz quadrada", () => {
        let matrix = []
        
        beforeAll(() => {
            matrix = [
                [11,2,4],
                [4,5,6],
                [10,8,-12]
            ]
           diag = Diagonals(matrix)
        })

        describe("Tamanhos das Diagonais", () => {

            it("Deve ter o tamanho de 3 para Diagonal primaria", () => {
                expect(diag.primary.length).toBe(3)
            })
            it("Deve ter o tamanho de 3 para Diagonal secondary", () => {
                expect(diag.secondary.length).toBe(3)
            })
        })

        describe("Soma das Diagonais", () => {
            it("Deve retornar 4 para soma da Diagonal primaria", () => {
                expect(diag.sum()).toBe(4)
            })
            it("Deve retornar 4 para soma da Diagonal primaria", () => {
                expect(diag.sum(diag.primary)).toBe(4)
            })
            it("Deve retornar 19 para soma da Diagonal secondary", () => {
                expect(diag.sum(diag.secondary)).toBe(19)
            })
        })

        describe("Total das Diagonais", () => {
            it("Deve retornar 23 para total das Diagonais", () => {
                expect(diag.total()).toBe(23)
            })
        })

        describe("Diferença entre as Diagonais", () => {
            it("Deve retornar 15 para total das Diagonais", () => {
                expect(diag.diff()).toBe(15)
            })
        })
    })
})



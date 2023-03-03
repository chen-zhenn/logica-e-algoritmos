import { Diagonals } from "./Diagonals"

describe("Diagonal module", () => {

    describe("Cenário onde a matriz é um dado inválido", () => {
        
        it("Deve levantar uma exceção", () => {
            const obj = {
                message: "Value it must be an array",
                name: "Value exception"
            }
            try {
                const diag = Diagonals(null)
            } catch (error) {
                expect(error).toEqual(obj)
            }
        })
    })
    
    describe("Cenários onde não foi passado uma matriz", () => {
        const diag = Diagonals()
        
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

    describe("Cenário com uma matriz", () => {
        const matrix = [
            [11,2,4],
            [4,5,6],
            [10,8,-12]
        ]
        const diag = Diagonals(matrix)

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



import { matrix } from "./data"
import { Diagonals } from "./diagonals/Diagonals"

const diag = Diagonals(matrix)
const primaryDiag = diag.primary
const secondaryDiag = diag.secondary
const sumPrimaryDiag = diag.sum(primaryDiag)
const sumSecondaryDiag = diag.sum(secondaryDiag)
const dioagonalsTotal = diag.total()
const dioagonalsDiff = diag.diff()

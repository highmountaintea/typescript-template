import { adder } from './sub/adder'
// does not import subtractor, see if webpack would ignore it
import { divider as div } from './sub/divider'

export { adder, div }

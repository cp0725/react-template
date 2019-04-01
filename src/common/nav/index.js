import { navPosition } from '@/config'
import NavLeft from './navLeft'
import NavTop from './navTop'
import NavTopLeft from './navTopLeft'
const nav = {NavTopLeft, NavTop, NavLeft}
export default nav[navPosition]
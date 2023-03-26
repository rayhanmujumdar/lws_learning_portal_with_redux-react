import {useMatch,useLocation} from "react-router-dom"
export const useMatchPathName = (paths) => {
    const {pathname} = useLocation()
    return paths.includes(pathname)
}
import PropTypes from "prop-types"
import { MdInfoOutline } from "react-icons/md";
export default function ErrorInfo ({message}){
    return <div className= "justify-items-center bg-red-200 p2 rounded-lg w-fit">
        <MdInfoOutline className='text-red-500' />
       <p className="text-red-700 text-xs">{message}</p>
    </div>
}
ErrorInfo.propTypes={
    message: PropTypes.string.isRequired
}

import PropTypes from "prop-types"

import LoadingSpinner from "./LoadingSpinner"

export default function Button ({type= 'button', children, disabled, onClick, isLoading}){
    return <Button 
    type={type}
    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-2 px-4 rounded-lg disabled:opacity-50
    disabled:cursor-not-allowed"
    disabled={disabled}
    onClick={onClick}
    > 
    <span className='flex justify-center items-center gap-5'>
        {isLoading && <LoadingSpinner className='w-6 h-6' />}
        {children} 
    </span>
    
    </Button>
}
Button.proptypes={

    type: Proptypes.oneOf(['button','submit','reset']),
    children: Proptypes.node.isRequired,
    disabled: Proptypes.bool,
    onClick: Proptypes.func,
    isLoading: Proptypes.bool
}

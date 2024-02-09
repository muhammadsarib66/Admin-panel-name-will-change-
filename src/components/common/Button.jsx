/* eslint-disable react/prop-types */

const Button = ({btnText , onclick , style ,icon ,solid }) => {
  return (
        icon ?    ( <div onClick={onclick}  className={`${style ? style : "" }  cursor-pointer   flex items-center text-center justify-center gap-1   `}>

             {btnText? btnText : "button"}
              <span className="relative top-[1px] pl-1">
              <i className={`${ solid? "fa-solid" :"fa-regular" }   ${icon}`}></i>
              </span>
        </div>)
        :
        (<div onClick={onclick}  className={`${style ? style : "" }  cursor-pointer   `}>
                {btnText? btnText : "button"}
        </div>)
      
  

  )
 
 
}


export default Button
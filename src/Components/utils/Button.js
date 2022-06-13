import React from 'react'

function Button({SVG, title, func, sign}) {
  return (
    <button onClick={func} className={sign ? `bg-red-600 hover:bg-red-700 focus:bg-red-700 inline-flex px-5 py-3 text-white rounded-md` : `bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 inline-flex px-5 py-3 text-white rounded-md`}>
    {SVG}
    {title}
</button>
  )
}

export default Button
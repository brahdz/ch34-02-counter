//<>/> React fragment

export const Button = ({children, onClick: handleButtonClick}) => {
  return (
    <>
        <button onClick={ handleButtonClick } >{children}</button>

    </>
  )
}

type Props={
    message:string

}

function ErrorMessage({message}:Props) {
  return (
    <p className ="text-sm text-destructive" role="alert">{message}</p>
  )
} 

export default ErrorMessage
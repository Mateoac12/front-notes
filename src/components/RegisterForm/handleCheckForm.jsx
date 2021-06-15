export const handleCheckForm = ({ firstPassword, secondPassword, setHadError }) => {
  const samePasswords = firstPassword === secondPassword
  !samePasswords && setHadError(true)
}
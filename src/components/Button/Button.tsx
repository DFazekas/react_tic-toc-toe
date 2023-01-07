import { Container } from './Button.styled'

const Button = ({
  className,
  children,
  handleClick
}: {
  className: string
  children: string
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {
  return (
    <Container
      onClick={handleClick}
      className={`${className} tile-${children}`}
    >
      {children}
    </Container>
  )
}

export default Button

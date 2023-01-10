import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('should render with proper classname', () => {
    const { container } = render(
      <Button handleClick={() => {}} className='fake'>
        Test
      </Button>
    )
    expect(container.firstChild).toHaveClass('fake tile-Test')
  })
})

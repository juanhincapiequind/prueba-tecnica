import { render } from "@testing-library/react"
import NavBar from "./NavBar"

test('Renders search input in the navbar', () => {
    const {getByPlaceholderText} = render(<NavBar onSearch={() => {}}/>)
    const inputElement = getByPlaceholderText('Busca tu lugar...')

    expect(inputElement).toBeInTheDocument();
    
})
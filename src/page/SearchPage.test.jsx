import { render } from "@testing-library/react"
import SearchPage from "./SearchPage"

test('Should render an image and description correctly', () => {
    const IMG_URL = 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jp';
    const description = 'Descripción de la imágen';
    const {getByAltText, getByText} = render(<SearchPage imgUrl={IMG_URL} description={description}/>)

    const imgElement = getByAltText(description);
    expect(imgElement).toBeInTheDocument();

    const descriptionElement = getByText(description);
    expect(descriptionElement).toBeInTheDocument();

})
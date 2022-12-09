import { render, screen } from '@testing-library/react';
import { getGifs } from '../../utils/getGifs';
import { GifCard } from './GifCard';

describe('Gif Card component', () => {
  const query = 'Spongebob Squarepants';

  test("Gif Card should contain title", () => {
    const titleTestId = 'gif-card-title';

    getGifs(query, 1)
      .then(({ url }) => {
        render(<GifCard title={query} url={url} />);

        const titleElement = screen.getByTestId(titleTestId);

        expect(titleElement.innerHTML).toContain(query);
      });

  });

  test("Gif Card should contain image and its alt text", () => {
    const imageTestId = 'gif-card-image';

    getGifs(query, 1)
      .then(({ url }) => {
        render(<GifCard title={query} url={url} />);

        const imgElement = screen.getByTestId(imageTestId);

        expect(imgElement.getAttribute('src')).toContain(query);
        expect(imgElement.getAttribute('alt')).toContain(query);
      });
  });

});

import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    // eslint-disable-next-line jest/no-commented-out-tests
    // it('should have 8 menu items', () => {
    //   render(<Main meta={null}>{null}</Main>);

    //   const menuItemList = screen.getAllByRole('listitem');

    //   expect(menuItemList).toHaveLength(8);
    // });

    it('should have a link to in footer', () => {
      render(<Main meta={null}>{null}</Main>);

      const copyrightSection = screen.getByText(/© Copyright/);
      // const copyrightLink = within(copyrightSection).getByRole('link');

      expect(copyrightSection).toBeInTheDocument();

      // expect(copyrightLink).toHaveAttribute(
      //   'href',
      //   'https://famousglobe.com',
      // );
    });
  });
});

describe('Main template', () => {
  describe('Render method', () => {
    // eslint-disable-next-line jest/no-standalone-expect
    it('should render correctly', () => {
      // eslint-disable-next-line jest/no-standalone-expect
      const aa = true;
      expect(aa).toBe(true);
    });

    it('should render correctly 2', () => {
      // eslint-disable-next-line jest/no-standalone-expect
      const bb = false;
      expect(bb).toBe(false);
    });

    // eslint-disable-next-line jest/no-commented-out-tests
    // it('should have 8 menu items', () => {
    //   render(<Main meta={null}>{null}</Main>);
    //   const menuItemList = screen.getAllByRole('listitem');
    //   expect(menuItemList).toHaveLength(8);
    // });
    // eslint-disable-next-line jest/no-commented-out-tests
    // it('should have a link to in footer', () => {
    //   render(<Main meta={null}>{null}</Main>);
    //   const copyrightSection = screen.getByText(/© Copyright/);
    //   // const copyrightLink = within(copyrightSection).getByRole('link');
    //   // exist
    //   expect(copyrightSection).toBeExistIn;
    //   // expect(copyrightLink).toHaveAttribute(
    //   //   'href',
    //   //   'https://famousglobe.com',
    //   // );
    // });
  });
});

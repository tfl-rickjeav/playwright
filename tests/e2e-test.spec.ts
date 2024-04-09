import { expect } from "playwright/test";
import { test } from "./fixtures/base-page";

test.describe('Key Press Page', () => {
  test('Correct result text should be shown on key press', async ({
    homePage,
    keyPressPage
  }) => {
    // arrange
    await homePage.navigate();
    await homePage.goToPage('Key Presses');

    // act
    await keyPressPage.pressKey('ArrowDown');

    // assert
    expect(keyPressPage.keyboardActionResultText()).toHaveText('You entered: DOWN');
  });
});
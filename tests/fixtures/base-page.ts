import { test as base } from "@playwright/test";

import { HomePage } from "../pages/home-page";
import { KeyPressPage } from "../pages/key-press-page";

export const test = base.extend<{
    homePage: HomePage;
    keyPressPage: KeyPressPage;
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    keyPressPage: async ({ page }, use) => {
        await use(new KeyPressPage(page));
    },
});
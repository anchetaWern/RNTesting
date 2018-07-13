describe("Pokemon Loading", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should show Pokeball image on app load", async () => {
    await expect(element(by.id("pokeball_image"))).toBeVisible();
  });

  it("should show relevant Pokemon data after clicking the button", async () => {
    await element(by.id("action_button")).tap();

    await expect(element(by.id("pokemon_sprite"))).toExist();
    await expect(element(by.id("pokemon_name"))).toExist();
    await expect(element(by.id("pokemon_types"))).toExist();
    await expect(element(by.id("pokemon_description"))).toExist();
  });
});

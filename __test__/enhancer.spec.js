const { success, fail, repair } = require("../enhancer");

const testItems = {
  success: {
    input: {
      name: "Fine Sword",
      prefix: "[+15]",
      type: "weapon",
      durability: 100,
      enhancement: 15
    },

    expected: {
      name: "Fine Sword",
      prefix: "[PRI]",
      type: "weapon",
      durability: 100,
      enhancement: 16
    }
  },

  fail: {
    input: {
      name: "Fake Armor",
      prefix: "[+14]",
      type: "armor",
      durability: 20,
      enhancement: 14
    },

    expected: {
      name: "Fake Armor",
      prefix: "[+14]",
      type: "armor",
      durability: 15,
      enhancement: 14
    }
  },

  repair: {
    input: {
      name: "Fake Armor",
      prefix: "[+14]",
      type: "armor",
      durability: 15,
      enhancement: 14
    },

    expected: {
      name: "Fake Armor",
      prefix: "[+14]",
      type: "armor",
      durability: 100,
      enhancement: 14
    }
  }
};

describe("\nTesting methods for enhancement...", () => {
  describe("\nTesting enhancement success method...", () => {
    test("Test case: The item's enhancement increases by 1 and name prefix is changed", () => {
      expect(success(testItems.success.input)).toEqual(
        testItems.success.expected
      );
    });
  });

  describe("\nTesting enhancement fail method...", () => {
    test("Test case: The durability of the item is decreased", () => {
      expect(fail(testItems.fail.input)).toEqual(testItems.fail.expected);
    });
  });

  describe("\nTesting enhancement repair method...", () => {
    test("Test case: Item durability restored to 100", () => {
      expect(repair(testItems.repair.input)).toEqual(testItems.repair.expected);
    });
  });
});

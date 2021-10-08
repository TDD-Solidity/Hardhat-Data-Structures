import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter } from "../typechain";

enum ShirtSize { SMALL, MEDIUM, LARGE }

describe("Greeter", function () {

  let greeter: Greeter;

  const fakeDefaultGreeting = "foobar";

  const zeroAddress = '0x0000000000000000000000000000000000000000';

  beforeEach(async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    greeter = await Greeter.deploy(fakeDefaultGreeting);
    await greeter.deployed();
  })

  describe('Getting variables from contract', () => {

    it('get primitives by calling name "as a function"', async () => {

      expect(await greeter.greeting()).to.equal(fakeDefaultGreeting);
      
      expect(await greeter.someInt()).to.equal(42);
      
      expect(await greeter.someAddress()).to.equal(zeroAddress);
      
      expect(await greeter.defaultShirtSize()).to.equal(ShirtSize.MEDIUM);

      const expectedBook1 = ['', '', BigNumber.from(0), false]

      expect(await greeter.book1()).to.deep.equal(expectedBook1);
      
      const expectedBook2 = ["Building Ethereum DApps", "Roberto Infante", BigNumber.from(2), true]

      expect(await greeter.book2()).to.deep.equal(expectedBook2);
      
      expect(await greeter.oneTwoThree(0)).to.equal(1);
      expect(await greeter.oneTwoThree(1)).to.equal(2);
      expect(await greeter.oneTwoThree(2)).to.equal(3);
      
      expect(await greeter.abc(0)).to.equal("a");
      expect(await greeter.abc(1)).to.equal("b");
      expect(await greeter.abc(2)).to.equal("c");
      
      await greeter.addStuffToMapping();
      
      expect(await greeter.numberToString(2)).to.equal("b");
      
    })

  })

});
const Robot = require("../src/models/robot")

const name = "testBot";
const material = "testMaterial";
const role = "testRole";

const newRobot = new Robot(name, material, role);

test(`retorno do nome deve ser ${name}`, () => {
    expect(newRobot.getName()).toBe(name)
});


const newName = "testBotRenamed";

test(`deve ser retornado o antigo e novos nomes, respectivamente ${name} e ${newName}`, () => {
    expect(newRobot.rename(newName)).toBe(`${name} is now ${newName}!`)
});
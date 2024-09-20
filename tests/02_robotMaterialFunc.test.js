const Robot = require("../src/models/robot")

const name = "testBot";
const material = "testMaterial";
const role = "testRole";

const newRobot = new Robot(name, material, role);

test(`retorno do material deve ser ${material}`, () => {
    expect(newRobot.getMaterial()).toBe(material)
});


const newMaterial = "testMaterialNew";

test(`Deve ser retornado o novo material, sendo ${newMaterial}`, () => {
    expect(newRobot.upgrade(newMaterial)).toBe(`${name} upgraded from ${material} to ${newMaterial}!`)
});
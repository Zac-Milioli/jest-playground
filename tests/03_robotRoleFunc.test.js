const Robot = require("../src/models/robot")

const name = "testBot";
const material = "testMaterial";
const role = "testRole";

const newRobot = new Robot(name, material, role);

test(`retorno do trabalho do robô deve ser ${role}`, () => {
    expect(newRobot.getRole()).toBe(role)
});


const newRole = "testRoleNew";

test(`Deve ser retornado o novo trabalho, sendo ${newRole}`, () => {
    expect(newRobot.changeRole(newRole)).toBe(`${name} got a raise to ${newRole}!`)
});
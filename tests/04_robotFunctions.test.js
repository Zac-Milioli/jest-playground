const Robot = require("../src/models/robot")

const name = "testBot";
const material = "testMaterial";
const role = "testRole";

const newRobot = new Robot(name, material, role);

test(`O robô deve executar seu trabalho, exibindo nome e trabalho - ${name} e ${role}`, () => {
    expect(newRobot.work()).toBe(`${name} ${role}`)
});

test(`A apresentação do robô deve ser feita, exibindo seu nome, material e função = ${name}, ${material} e ${role}`, () => {
    expect(newRobot.presentation()).toBe(`${name} is a robot made of ${material} that ${role}!`)
});
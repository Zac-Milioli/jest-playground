class Robot {
    constructor(name, material, role){
        this.name = name;
        this.material = material;
        this.role = role;
    }

    getName(){
        return this.name;
    }

    getMaterial(){
        return this.material;
    }

    getRole(){
        return this.role;
    }

    presentation(){
        return `${this.getName()} is a robot made of ${this.getMaterial()} that ${this.getRole()}!`
    }

    work(){
        return `${this.getName()} ${this.getRole()}`;
    }

    upgrade(newMaterial){
        let oldMaterial = this.getMaterial();
        this.material = newMaterial;
        return `${this.getName()} upgraded from ${oldMaterial} to ${this.getMaterial()}!`;
    }

    rename(newName){
        let oldName = this.getName();
        this.name = newName;
        return `${oldName} is now ${this.getName()}!`;
    }

    changeRole(newRole){
        this.role = newRole;
        return `${this.getName()} got a raise to ${this.getRole()}!`;
    }
}

module.exports = Robot;
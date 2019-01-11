class User {
    constructor(attrs) {
        this.name = attrs.name;
        this.surname = attrs.surname;
        this.age = attrs.age;

        this.setName = this.setName.bind(this);
        this.getName = this.getName.bind(this);
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name;
    }
}
import { Property, Unique, Entity, PrimaryKey } from "@mikro-orm/core";

@Entity()

export class User {
    @PrimaryKey()
    id!: number;

    @Property()
    @Unique()
    email: string;

    @Property()
    password: string;

    @Property()
    createdAt = new Date;

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date;

    constructor(
        email: string,
        password: string
    ) {
        this.email = email;
        this.password = password;
    }
}
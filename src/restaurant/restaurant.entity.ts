import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Restrunant {

    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property()
    location!: string;

    @Property()
    city!: string;

    @Property()
    contactNumber!: string;

    @Property()
    email?: string

   @Property({default:true})
   isActive : boolean = true; 

   @Property({onCreate:()=>new Date()})
   createdAt : Date= new Date();

   @Property({onUpdate:()=>new Date()})
   updatedAt : Date= new Date();

}
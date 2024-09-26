import {Sequelize} from "sequelize";

export class Datastore{
    constructor(){
        if(Datastore.instance)
        {
            return Datastore.instance;
        }
        this.sequelize = this.init();
        Datastore.instance = this;
    }

    static getSequelize(){
        if(!Datastore.instance){
            Datastore.instance = new Datastore();

        }
        return Datastore.instance.sequelize;
    }

    async init(){
        const sequelize = new Sequelize({
            dialect:"postgres",
            host:process.env.DB_HOST,
            port:process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password:process.env.DB_PASSWORD,
            database:process.env.DB_DATABASE,
            pool:{
                max:100,
                min:0,
                acquire:30000,
                idle:10000,
            },

        });
        sequelize.authenticate().then((r)=>
        console.log(`connected to postgresql at Address ${process.env.DB_HOST}`))
        .catch((e)=> console.log(e));
        return sequelize;
    }

    async getSequelize(){
        return this.sequelize;
    }

    async addlisterners(sequelize){
        sequelize.addHook("connected",()=>{
            console.log("Connected to the database");
        })
    }
}
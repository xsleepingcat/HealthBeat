export const USUARIOS = [
    {
        id: 1,
        nombre: "Carlos",
        apellido: "Torres",
        pesoActual: "60Kg",
        pesoDeseado: "70kg",
        pesoInicio: "55kg",

        dietas: {
        //Identificador o id de dieta, puede ser como esto de Dieta 1,2,3 o tambien pense en hacer un id randomizado con una libreria
        dieta1:{
            desayunos:
                [{
                    name: 'Huevo con repollo',
                    ingredientes: ["huevo", "repollo"]

                },
                {
                    name: 'Huevo con aguacate',
                    ingredientes: ["huevo", "aguacate"]
                }],
            almuerzos:
            [ { name:"Pollo con arroz y verduras", ingredientes: ["Pollo", "Arroz", "Lata de verduras"] }
                ,{ name:"Carne con arroz y verduras", ingredientes: ["Carne", "Arroz", "Lata de verduras"] },
                {name:"Huevo con repollo", ingredientes: ["Huevo", "Repollo"]},
                {name:"Huevo con repollo", ingredientes: ["Huevo", "Repollo"]}],
            cenas:[{               
                    name: "Huevo con salchicha",
                    ingredientes: [ "Huevo", "Salchichas"]
                },
                {
                    name: "Huevo con jamon",
                    ingredientes: [ "Huevo", "Jamon"]
                },
            ],
            pasaBoca:[
                {
                    name: "Huevo duro",
                    ingredientes: ["Huevo"]
                },
                {
                    name: "Manzana con crema de cacahuate",
                    ingredientes: ["Manzana", "Crema de cacahuate"]
                },
                {
                    name: "Ejemplo #13",
                    ingredientes: ["Manzana", "Crema de cacahuate"]
                } ]

            
        }
    }
    },
    {
        id: 2,
        nombre: "Carlos",
        apellido: "Torres",
        pesoActual: "60Kg",
        pesoDeseado: "70kg",
        pesoInicio: "55kg",

        dietas: {
        //Identificador o id de dieta, puede ser como esto de Dieta 1,2,3 o tambien pense en hacer un id randomizado con una libreria
        dieta1:{
            desayunos: [{
                desayuno1:{
                    name: 'Huevo con repollo',
                    ingredientes: ["huevo", "repollo"]

                },
                desayuno2:{
                    name: 'Huevo con aguacate',
                    ingredientes: ["huevo", "aguacate"]

                },

            }],
            almuerzos:[{
                almuerzo1:{
                    name:"Pollo con arroz y verduras",
                    ingredientes: ["Pollo", "Arroz", "Lata de verduras"]
                },
                almuerzo2:{
                    name:"Carne con arroz y verduras",
                    ingredientes: ["Carne", "Arroz", "Lata de verduras"]
                }
            }],
            cenas:{
                cena1: {
                    name: "Huevo con salchicha",
                    ingredientes: [ "Huevo", "Salchichas"]
                },
                cena2: {
                    name: "Huevo con jamon",
                    ingredientes: [ "Huevo", "Jamon"]
                },
            },
            pasaBoca:{ 
                pasaBoca1:{
                    name: "Huevo duro",
                    ingredientes: ["Huevo"]
                },
                pasaBoca1:{
                    name: "Manzana con crema de cacahuate",
                    ingredientes: ["Manzana", "Crema de cacahuate"]
                }
            }
        }
    }
}]

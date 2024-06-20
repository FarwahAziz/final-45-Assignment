//Assignment 44

function making_sandwich(items:string[]) {
    console.log("\n Make your sandwich with ")

    items.forEach(element =>console.log( ' - '+ element))
        console.log('Enjoy your sandwiches!')
    };
    
    making_sandwich(['chicken patti','cheese','lettuce']);

    making_sandwich(['chicken','beef','ham']);


    //Assignment 45

    import { features} from "process";

    function storecarInfo(manufacture:string , modelname:string ,...extraoption: {[key:string]:any}[]):object{

        const carinfo={
            manufacture,
            modelname,
            ...Object.assign({},...extraoption)
        }

        return carinfo
            
    }
    let mycar = storecarInfo("toyota", "corolla", { color: "silver", year: "2024" });
    console.log(mycar);
    
        
    

import Box from '../Box/Box';

// let a = "hi"
// a = "asd" //string to string is ok

// let b = 12 //type number
// b = "asd" //string is not assignable to type number

// let c = false
// const d = 12 //literal type van6. yesko type nai 12 ho number hoina bcoz of const. kei change garna mildaina

// const e = " ram " //literal type. type ram ho
// e = "hi" //can not assgin e bcoz its a const

// const f = true //literal type. type true ho boolean hoina bcoz of const
// f = false //ca cot assign f bcoz its a const

// let  a: number | string = 12 //ki number ki string rakhna payo. UNION TYPE  van6
// a = "Asd" //string 

// let f = "sabin" //inforing type. Ts le string Type rakhideko6


//function banauda type dinai par6
//add lai hover garera herda aba return type number din6 vanera lekheko hun6
// function add ( a: number, b: number) {
//   return a + b;
// }


function Home() {
  

  return (
    <>
    
      <h1>React With TypesScript</h1>
      <Box title="box no 1"  description="hello box no1" batchNumber={123}/>
      <Box title="box no 2"  description="hello box no2" batchNumber={"JHB12"}/>
      <Box title="box no 3"  description="hello box no3"/>
    </>
  )
}

export default Home

//hamro  browser le typesScript bujdaina(stripOut hun6) browser le  bujne js banayera pathau6,typesScript better Developer Experience ko lagi banako
//vscode ma control + . to import(Box lai click garera)

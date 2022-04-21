<template>
    <div>
        <div class="table">
            <table  border="5px">

     <tr >
         <td>{{name}}</td>
         <td>{{nameprod}} </td>
     </tr>
      <tr >
         <td>{{price}}</td>
         <td>{{priceprod}} грн</td>
     </tr>
      <tr >
         <td>{{pdv}}</td>
         <td>{{pdvprod}} %</td>
     </tr>
      <tr >
         <td>{{check}}</td>
         <td>{{checkprod}} грн</td>
     </tr>
 </table>


        </div>

    </div>
</template>

<script>

    export default {
        name:'TableProd',
        props:{
            name:{
                type:String,
                default:'Назва продутку'

            },
             price:{
                type:String,
                default:'Варість'

            },
            pdv:{
                type:String,
                default:'ПДВ'

            },
            check:{
                type:String,
                default:'До оплати'

            },
            nameprod:{
                type:String,
                default:'Сир'

            },
            priceprod:{
                type:Number,
                default: 100 

            },
            pdvprod:{
                type:Number,
                default:5

            },
            checkprod:{
                type:Number,
                default:105

            }
        }

    }
</script>

<style lang="css" scoped>
.table{
    text-align: left;
}

</style>
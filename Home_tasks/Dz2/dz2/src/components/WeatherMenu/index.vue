<template>
    <div class="weather">
        <div class="headWeather">
            <div class="capital">
                {{capital}}
                {{time}}
              
            </div>
            
        </div>
        <div class="mid">
            
            <div class="info">
                <table>
                    <td><img src="https://image.shutterstock.com/z/stock-vector-heat-thermometer-icon-vector-measurement-symbol-hot-cold-weather-illustration-1085146988.jpg" class="image"></td>
                   <td class="temp"> 
                   {{temp}}</td> 
                   <td>
                   <tr>Вологість: {{humidity}}</tr>
                   <tr>Тиск: {{pressure}}</tr> 
                   <tr>Вітер: {{wind}}</tr> 
                   </td>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherMenu',
        props:{
            capital:{
                type: String,
                default: 'Ужгород'
            },
            time:{
                type: String,
                default: 'Сьогодні о 19:00'
            },
            temp:{
                type: String,
                default: '+12'
            },
            humidity:{
                        type: String,
                        default: '97%'
                    },
                    pressure:{
                        type: String,
                        default: '745 мм'
                    },
                    wind:{
                        type: String,
                        default: '0 м/c'
                    }
        }
    }
</script>

<style lang="css" scoped>
.weather{
    text-align: left;
}
.headWeather{
    display: flex;
    margin: 1%;
    padding: 1%;

}
.temp{
    font-size: 250%;
    margin: 1%;
    padding: 1%;
     width: 50%;  
    
}
.info{
    text-align: left;
    margin: 1%;
    padding: 1%;  
}
.image {
  width: 40px;
}
</style>
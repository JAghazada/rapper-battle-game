```js
function choose(you,enemy1,enemy2,enemy3){
var check = true
    var enemies =[enemy1,enemy2,enemy3]
    console.log()
        document.querySelector('.selected').textContent=('Your Character')
        document.querySelector('.enemies').textContent=('Enemies Available to Attack')
        $('.placed-image').append(enemy1,enemy2,enemy3)
        for(let c of enemies){
            c.addClass('your-enemy')}
            youData=(you[0].getAttribute('data-power'))
       
    $('.your-enemy').on('click',function(x){
       
        getData = x.currentTarget.getAttribute('data-power');
        
        document.querySelector('.p' + x.currentTarget.classList[0]).textContent=(getData) 
        document.querySelector('.p'+(you[0].classList[0])).textContent=(youData)
        if(check){
            x.currentTarget.classList.add('defender')
            $('.defennded-image').html((x.currentTarget))
            
            check = false
        }
    })
    if($('.defennded-image')[0][0]){
        document.querySelector('.btn').disabled=true
    }
       $('.btn').on('click', function (){
           console.log($('.defennded-image')[0].html)
        
        getData -=enemypower
        youData-=yourpower
        console.log("Get data: "+getData)
        console.log("You data: "+youData)
        document.querySelector('.p'+(you[0].classList[0])).textContent=(youData)
        document.querySelector('.p'+document.querySelector('.defender').classList[0]).textContent=(getData)
        if( getData <= 0){
            $('.defennded-image').html("")
            check =true
        }
        if(youData <= 0){
            $('.'+(you[0].classList[0])).html(" ")
            return  
            
        }
    })
}
// $(".img1").on('click',function(){
//     choose($('.img1'),$(".img2"),$('.img3'),$('.img4'))
//  })
//  $(".img2").on('click',function(){
//     choose($('.img2'),$(".img1"),$('.img3'),$('.img4'))
//  })
 $(".img3").on('click',function(){
    choose($('.img3'),$(".img1"),$('.img2'),$('.img4'))
 })
//  $(".img4").on('click',function(){
//     choose($('.img4'),$(".img1"),$('.img2'),$('.img4'))
//  })
```
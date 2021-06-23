var eminem = $('.eminem')
var coolio = $('.coolio')
var snoopDog = $('.snoopDog')
var twoPac = $('.twoPac')
var search = []
var defenders=[eminem[0],coolio[0],snoopDog[0],twoPac[0]]
var haveoOrNot = true
function check(value){
     if(value == defenders[0]){
        
        defenders.splice(0,1)
     }
     else if ( value == defenders[1]){
        defenders.splice(1,1)
     }
     else if ( value == defenders[2]){
        defenders.splice(2,1)
     }
     else if ( value == defenders[3]){
        defenders.splice(3,1)
     }
    }

$('.image').on('click',function(x){

var querrySelect = (x.currentTarget.classList[0])
var attacker=document.querySelector("."+querrySelect)
$('.imgs').html(attacker)
ourHeart = attacker.getAttribute('data-power')
check(attacker)
for (c of defenders){
    ($(c).addClass('your-enemy'))
    $('.placed-image').append(c)
}
$('.your-enemy').on('click',function(x){
    if(haveoOrNot){
        haveoOrNot = false
      secondClass = x.currentTarget.classList[0]
      x.currentTarget.classList.add('defender')
        $('.defennded-image').html(x.currentTarget)
      heart = $('.'+secondClass).attr('data-power')
      
    }
})


$('.btn').on('click',function(){
   
   var enemypower = Math.round(Math.random()*40)

   var yourpower =  Math.round(Math.random()*70)

   var yourpower =  Math.round(Math.random()*40)

   ourHeart -=enemypower
   heart -=yourpower

   
$('.p' + secondClass).html(heart)
$('.p'+querrySelect).html(ourHeart)
if(ourHeart <=0){
   $('.imgs').html('<h2 style="color:red">You lose</h2>')
   document.querySelector('.btn').disabled =true
   document.querySelector('.btn').style.opacity =1
}

if(heart <=0){
  
   $('.defennded-image').html(' ')
   
   haveoOrNot = true
   console.log($('.defennded-image > .eminem').length )
 

if(($('.your-enemy').length)==0){
   document.querySelector('.btn').disabled =true
   document.querySelector('.btn').style.opacity =1
   alert('You are Legend Bro')
}
}})

})


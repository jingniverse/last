
$(document).ready(function(){

    let slider1 = new Swiper(".station1",{
        on:{
            slideChange:function(){
                console.log("슬라이드가 움직였습니다.")
            }
        }
    })

    let slider2 = new Swiper(".station2",{
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay:true,
        // direction:'vertical',
        effect:'cards',
        // slidesPerView:3
    })

    slider2.on("slideChange",function(){
        console.log(slider2.activeIndex)
        $(".txt").html(contents2[slider2.activeIndex])
    })

    let contents2 = [
        `<h3>title1</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur tenetur iusto earum magni tempore ex culpa vero nesciunt veritatis aliquam, at similique doloremque facilis facere dolores! Modi, cupiditate quisquam!</p>`,
        `<h3>title2</h3>
        <p>consectetur adipisicing elit. Quas consequuntur tenetur iusto earum magni tempore ex culpa vero neLorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequuntur tenetur iusfacilis facere dolores! Modi, cupiditate quisquam!</p>`,
        `<h3>title3</h3>
        <p>dolor sit amet consectetur adipisicing elit. Quas consequuntur tenetur iusto earum magni tempore ex culpa vero nesciunt veritatis aliquam, at similique doloremque facilis facere dolores! Modi, cupiditate quisquam!</p>`,
        `<h3>title4</h3>
        <p>consectetur adipisicing elit. Quas consequuntur tenetur iusto earum magni tempore ex culpa vero nesciunt veritatis aliquam, at similique doloremque facilis facere dolores! Modi, cupiditate quisquam!</p>`
    ]


})

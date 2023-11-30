$(document).ready(function(){

    $('.btn_m_op').click(function(){
        $('.menu').addClass('on')
    })

    $('.btn_m_cl').click(function(){
        $('.menu').removeClass('on')
    })
    
    
    $('html').click(function(e) {   
        if(!$(e.target).hasClass("fa_s")) {
           $('.r-1').removeClass('on')
        }else{
           $('.r-1').addClass('on')

        }
    });    
        
    let count = 0
    $(".btn_next").click(function(){
        count++
        if(count>3){count=0}
        // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
        // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
        $(".brands>li").removeClass("on")
        $(".brands>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    })
    $(".btn_prev").click(function(){
        count--
        if(count<0){count=0}
        $(".brands>li").removeClass("on")
        $(".brands>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    })
      
    let timer = setInterval(function(){
        count++
        if(count>3){count=0}
        // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
        // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
        $(".brands>li").removeClass("on")
        $(".brands>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    },5000)

    $(".station").mouseover(function(){
        clearInterval(timer)
    })

    $(".station").mouseout(function(){
        timer = setInterval(function(){
            count++
            if(count>3){count=0}
            // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
            // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
            $(".brands>li").removeClass("on")
            $(".brands>li").eq(count).addClass("on")
            $(".pagination>li").removeClass("on")
            $(".pagination>li").eq(count).addClass("on")
        },5000)
    })


    let count2 = 0
    $(".btn_next2").click(function(){
        count2++
        if(count2>3){count2=0}
        // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
        // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
        $(".tr>li").removeClass("on")
        $(".tr>li").eq(count2).addClass("on")
        $(".pagination2>li").removeClass("on")
        $(".pagination2>li").eq(count2).addClass("on")
    })
    $(".btn_prev2").click(function(){
        count2--
        if(count2<0){count2=0}
        $(".tr>li").removeClass("on")
        $(".tr>li").eq(count2).addClass("on")
        $(".pagination2>li").removeClass("on")
        $(".pagination2>li").eq(count2).addClass("on")
    })
      
    let timer2 = setInterval(function(){
        count2++
        if(count2>3){count2=0}
        // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
        // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
        $(".tr>li").removeClass("on")
        $(".tr>li").eq(count2).addClass("on")
        $(".pagination2>li").removeClass("on")
        $(".pagination2>li").eq(count2).addClass("on")
    },5000)

    $(".dLab_Rs").mouseover(function(){
        clearInterval(timer2)
    })

    $(".dLab_Rs").mouseout(function(){
        timer2 = setInterval(function(){
            count2++
            if(count2>3){count2=0}
            // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
            // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
            $(".tr>li").removeClass("on")
            $(".tr>li").eq(count2).addClass("on")
            $(".pagination2>li").removeClass("on")
            $(".pagination2>li").eq(count2).addClass("on")
        },5000)
    })

    let count3 = 0    
    let timer3 = setInterval(function(){
        count3++
        if(count3>2){count3=0}
        // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
        // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
        $(".train-b>li").eq(count3).addClass("on")
        $(".train-b>li").removeClass("on")
        $(".pagination3>li").removeClass("on")
        $(".pagination3>li").eq(count3).addClass("on")
    },3000)

    $(".banner").mouseover(function(){
        clearInterval(timer3)
    })

    $(".banner").mouseout(function(){
        timer3 = setInterval(function(){
            count3++
            if(count3>2){count3=0}
            // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
            // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
            $(".train-b>li").removeClass("on")
            $(".train-b>li").eq(count3).addClass("on")
            $(".pagination3>li").removeClass("on")
            $(".pagination3>li").eq(count3).addClass("on")
        },3000)
    })

    console.log($(window).scrollTop())

    
    $(window).scroll(function(){
        scTop = $(this).scrollTop()
        // console.log(scTop)
        $('header').each(function(){
            // 각각의 영역태그가 전체문서를 기준으로 했을 때 위에서 얼마만큼 떨어져있는지 계산하고 그리고 스크롤바강 위에서 얼마나 떨어져 내려왔는지 계산하여 스크롤바값이 태그의 위에서 얼만큼 떨어져있는지 계산한 값보다 크다면 -> 지나쳤다느라는 뜻
            if(90 <= $(this).offset().top){
                $(this).addClass('on')
            }else{
                $(this).removeClass('on')

            }
        })
              
    })

   


})
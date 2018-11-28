var app = app || {}  //app이 있으면 대입하고 없으면 새로 만들어라. {}는 자바에서 new ~(); 를 한것과도 같다. JSON에서 이러한 방식을 쓴다. 객체는 {}로 묶고 배열은 []로 묶는다.
/*
app.init = (function(){
    return {};          //클로저. 클로저는 영역을 의미한다. 자바스크립트에서 쉽게 말하자면 내부함수에서 외부함수의 변수에 접근하는 것을 말하는데, 외부함수가 소멸되어도 내부함수에서는 외부함수의 변수에 접근이 가능하다.
                                사실 외부함수는 사라진것이 아님
})();             //iife 패턴. function을 정의하고 바로 실행시키는 패턴. ()() 앞에 괄호 안에는 함수정의를 두고 뒤의 ()는 해당 함수를 바로 실행하기위한 부호이다.
*/

//Lambda 사용. JavaScript Arrow Function이라는 명칭으로 사용되는 듯 하다.  익명함수를 생성하는 것이라고 보면 되며 이 익명함수에 이름을 붙여서 쓸 수도 있다. 이 때에는 함수 선언문이 아닌 함수 표현식을 쓰고 이를 변수에 대입.
app = (()=>{        //app이라는 Activity라고 생각하면 된다.
    var init =()=>{     //manifest 역할. 이거를 통해 시작되게 할 것
        alert('------ 1 -------')
        onCreate();  //onCreate부터 실행시키겠다.
    };
    var onCreate =()=>{  //DB와 통신
        alert('------ 2 -------')
        setContentView();
        //setOnClickListener
        $('#submitButton').click(e=>{  //JQuery이며 #은 id로 검색한 것. 콜백함수 생성
            e.preventDefault(); //디폴트값을 막아라
            //즉 submit버튼에 의한 submit action을 막는 것
            $.ajax({        //ajax 메소드를 통해 {} 라는 하나의 JSON 객체를 만듬
                url:'https://www.google.com/',
                method:'POST',
                contentType:'application/json'
                data: {userid: $('#username').val(), userpass: $('#password').val},   //json으로 한번 더 묶음
                success:d=>{},
                error:(m1,m2,m3)=>{}
            });

            //$('#page').empty();  //이 안을 전부 비워라.
            $('#page').html(

            +'<div class="container">'
            +'<h3 class=" text-center">Messaging</h3>'
            +'<div class="messaging">'
            +'      <div class="inbox_msg">'
            +'        <div class="inbox_people">'
            +'          <div class="headind_srch">'
            +'            <div class="recent_heading">'
            +'              <h4>Recent</h4>'
            +'            </div>'
            +'            <div class="srch_bar">'
            +'              <div class="stylish-input-group">'
            +'                <input type="text" class="search-bar"  placeholder="Search" >'
            +'                <span class="input-group-addon">'
            +'                <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>'
            +'                </span> </div>'
            +'            </div>'
            +'          </div>'
            +'          <div class="inbox_chat">'
            +'            <div class="chat_list active_chat">'
            +'              <div class="chat_people">'
                            +'<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'                <div class="chat_ib">'
            +'                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>'
            +'                  <p>Test, which is a new approach to have all solutions '
            +'                    astrology under one roof.</p>'
            +'                </div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="chat_list">'
            +'              <div class="chat_people">'
                            +'<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'                <div class="chat_ib">'
            +'                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>'
            +'                  <p>Test, which is a new approach to have all solutions '
            +'                    astrology under one roof.</p>'
            +'                </div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="chat_list">'
            +'              <div class="chat_people">'
                            +'<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'                <div class="chat_ib">'
            +'                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>'
            +'                  <p>Test, which is a new approach to have all solutions '
            +'                    astrology under one roof.</p>'
            +'                </div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="chat_list">'
            +'              <div class="chat_people">'
                            +'<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'                <div class="chat_ib">'
            +'                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>'
            +'                  <p>Test, which is a new approach to have all solutions '
            +'                    astrology under one roof.</p>'
            +'                </div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="chat_list">'
            +'              <div class="chat_people">'
                            +'<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'                <div class="chat_ib">'
            +'                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>'
            +'                  <p>Test, which is a new approach to have all solutions '
            +'                    astrology under one roof.</p>'
            +'                </div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="chat_list">'
            +'              <div class="chat_people">'
                            +'<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'                <div class="chat_ib">'
            +'                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>'
            +'                  <p>Test, which is a new approach to have all solutions '
            +'                    astrology under one roof.</p>'
            +'                </div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="chat_list">'
            +'              <div class="chat_people">'
                            +'<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'                <div class="chat_ib">'
            +'                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>'
            +'                  <p>Test, which is a new approach to have all solutions '
            +'                    astrology under one roof.</p>'
            +'                </div>'
            +'              </div>'
            +'            </div>'
            +'          </div>'
            +'        </div>'
            +'        <div class="mesgs">'
            +'          <div class="msg_history">'
            +'            <div class="incoming_msg">'
                          +'<div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'              <div class="received_msg">'
            +'                <div class="received_withd_msg">'
            +'                  <p>Test which is a new approach to have all'
            +'                    solutions</p>'
            +'                  <span class="time_date"> 11:01 AM    |    June 9</span></div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="outgoing_msg">'
            +'              <div class="sent_msg">'
            +'                <p>Test which is a new approach to have all'
            +'                  solutions</p>'
            +'                <span class="time_date"> 11:01 AM    |    June 9</span> </div>'
            +'            </div>'
            +'            <div class="incoming_msg">'
                          +'<div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'              <div class="received_msg">'
            +'                <div class="received_withd_msg">'
            +'                  <p>Test, which is a new approach to have</p>'
            +'                  <span class="time_date"> 11:01 AM    |    Yesterday</span></div>'
            +'              </div>'
            +'            </div>'
            +'            <div class="outgoing_msg">'
            +'              <div class="sent_msg">'
            +'                <p>Apollo University, Delhi, India Test</p>'
            +'                <span class="time_date"> 11:01 AM    |    Today</span> </div>'
            +'            </div>'
            +'            <div class="incoming_msg">'
                          +'<div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>'
            +'              <div class="received_msg">'
            +'                <div class="received_withd_msg">'
            +'                  <p>We work directly with our designers and suppliers,'
            +'                    and sell direct to you, which means quality, exclusive'
            +'                    products, at a price anyone can afford.</p>'
            +'                  <span class="time_date"> 11:01 AM    |    Today</span></div>'
            +'              </div>'
            +'            </div>'
            +'          </div>'
            +'          <div class="type_msg">'
            +'            <div class="input_msg_write">'
            +'              <input type="text" class="write_msg" placeholder="Type a message" />'
                          +'<button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>'
            +'            </div>'
            +'          </div>'
            +'        </div>'
            +'      </div>'
            +'      '
            +'      '
            +'      <p class="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>'
            +'      '
            +'    </div></div>'

            );
        });
    };
    var setContentView =()=>{  //화면구성시키기
        alert('------ 3 -------')
    };
    return {init : init}; //클로저. init은 public이 된다. 다른 것들은 private가 된다. 따라서 init은 외부에서 쓸 수 있게 됨
    //JSON이다. 객체이며 키-밸류 로 반환. JSON은 객체를 {}로 묶으며 안에서 string과 value를 :로 묶어서 쓴다. 어떤 객체 내에 init이라는 이름으로 init이라는 value가 있다는 것
})();
//위의 구조를 보면, 기존 네이티브앱에서 Manifest를 통해 Main이 호출되고 그 안에서 onCreate()가 실행되고, 그 안에서 setContentView가 실행됬던 것처럼 순서 구성을 했다.

//Arrow Fuction을 사용했으며 iife패턴을 적용하였다.
//함수를 익명으로 선언하고(선언식이라고 하지 않고 함수명선언이 없으므로 표현식이라고 한다.) 그걸 실행시킨 결과값을 app이라는 변수에 저장시킨다고 보면 된다.
//return에서 앞에 있는init이라는 이름으로서 내부에 init으로 만들어진 함수를 반환해서 이를 app에 넣은 것이다.
//app.init()을 했을 때 app에 존재하는건 init뿐이었는데 그 안에서 호출하는 onCreate()와 setContentView까지 작동한 것은 클로저속성때문인것같다. (내부함수에서 외부함수에 대한 것들에 접근이 가능한 것)
//즉 외부익명함수가 살아있다는 뜻인듯.
//아 그래서 선생님이 설명한게 나머지는 private가 되고 반환해준 init만 public처럼 되서 외부로부터 반환으로 줬던 init에 접근가능해진다는 것이구나.
//결국 다른부분 살아있다는 것. 이 부분은 app을 위한 부분이라고 생각하면 될듯하다. app을 위한 익명적인 객체?


//Single Page Application으로 채팅앱을 만들 것이다. 여러 html을 두는 것이 아니라 ajax를 통해서 다른 페이지 데이터를 가져와 새로 그리도록 할 것이다.

//채팅 화면 소스는 https://bootsnipp.com/snippets/featured/message-chat-box 참고
//sublime text 툴 다운 후 설치. html을 다시 설정해줄 때 기존 태그들 맨 뒤에 ' 를 하나 추가해주고 각줄 맨 앞에 +' 를 만들어주었다.  Ctrl+Shift+L 단축키
//원래는 버튼을 저렇게 눌렀을 때 html코드를 서버에서 받아와야하는거 아닌가

//키워드 - 클로저, iife 패턴, Arrow Function, Single Page Application, ajax와 jquery

//이런식의 코딩 다음으로 NodeJS를 쓰고, 페이스북의 react를 쓴다.
//javascript로 나중에는 전부 다 할 수 있다. 이게 승태가 말한 자바스크립트가 많이 쓰인다는 이유

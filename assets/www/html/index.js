var app = app || {}

app = (()=>{
    var init =()=>{
        alert('------ 1 -------')
        onCreate();
    };
    var onCreate =()=>{
        alert('------ 2 -------')
        setContentView();

        $('#submitButton').click(e=>{
            e.preventDefault();

            $.ajax({
                url:'https://www.google.com/',
                method:'POST',
                contentType:'application/json'
                data: JSON.stringify({userid: $('#username').val(), password: $('#password').val()}),  // 받는 서버가 Java기반이라면 이 JSON파일을 스트링화해서 던진다.
                success:d=>{   //콜백함수. d에는 받은 데이터가 존재한다. 아이디와 비번이 맞다던지 틀렸다던지 그런 데이터
                    if(d.success){   //서버에서 d라는 객체 안에 success라는 이름으로 HashMap으로 던져준다고 가정. value로는 true 또는 false가 존재한다고 가정
                        alert('로그인 성공');
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
                    }else{
                        alert('로그인 실패')
                    }
                },   //success부분 끝
                error:(m1,m2,m3)=>{
                }
            });
        });
    };
    var setContentView =()=>{
        alert('------ 3 -------')
    };
    return {init : init};
})();

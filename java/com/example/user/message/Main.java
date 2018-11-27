package com.example.user.message;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.LinearLayout;
import android.widget.Toast;

public class Main extends AppCompatActivity {
    String temp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final Context ctx = Main.this;
        //xml안쓸거다. 내가 만든 html을 보여주도록 하자. 하이브리드

        //xml이라는 것은 static 값이다. List에서 Detail로 넘어가도 List가 리소스를 먹는다. xml이 많아질수록 램의 부하가 커진다.
        //xml은 마치 기존의 책이라고 생각하면 된다. 특정 페이지를 봐도 기존 페이지는 계속 살아있다.

        //이제부터는 동적UI를 쓸 것이다. 페이지가 필요할 때만 해당 페이지를 빨리 그리도록 만들 것이다. - cpu 빨라야함

        LinearLayout frame = new LinearLayout(ctx);   //자바 Swing GUI의 frame 생각하면 된다.
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        frame.setLayoutParams(params);
        WebView webView = new WebView(ctx);
        //여기서 이렇게 만든 것들은 메모리상에 존재하며 이 메소드 내에서만 살아있다.
        //그리고 이러한 요소들을 ctx라는 한군데에 모아놓는 것이다.
        //ctx를 android: 를 준 것과도 같게 봐도 된다.

        webView.setLayoutParams(params);
        WebSettings settings = webView.getSettings();
        settings.setUseWideViewPort(true);  //사용자가 확대축소 가능
        settings.setJavaScriptEnabled(true);  //자바스크립트 유효화
        settings.setAllowUniversalAccessFromFileURLs(true);  //URL에 대해 ajax로 요청보낼 수 있게 허용
        webView.setWebChromeClient(new WebChromeClient());  //크롬으로 볼 것
        webView.loadUrl("file:///android_asset/www/html/index.html");   //  file:// 에서 /android_asset/www/html/index.html 열라는 것
        frame.addView(webView);
        setContentView(frame);
        //SWING의 안드로이드버전

        //보안적인 것들은 xml로 미리 만들어둔다. 결제창


        //원래는 loadUrl로 지정하는건 외부의 해당 웹페이지일거같고, 해당 웹페이지를 요청했을 때 서버에서 html파일을 받아오는 방식이 아닐까.
        //웹브라우저처럼
        //그럼 ajax는 어떤 방식으로 작동해야 할까. 지금 assets에 존재하는 html은 서버로부터 html파일을 받아와서 렌더링했다고 생각하면 되나. 그럼 이 파일에서 ajax로 요청하는 것은
        //외부 서버의 URL을 향할테고, 해당 서버에서 받은 값을 가지고 내부적으로 작동하도록 코드를 만들면 될 것 같다.

        //선생님께 물어보니 index.html은 어플의 첫화면으로서 만든 것이라고 하신다. 꼭 필요한 페이지인걸까
        //이후에 불러올 페이지들을 위한 설정값들같은걸 품어놓을? 그런 html파일?? 원페이지?
        //html파일은 하나만 만든다. 전부 javascript로 처리한다.


        //원래는 여기에서 글을 저장하는 db를 내부적으로 만든다.
        //여기서 데이터를 입력하면 내 화면에서도 띄워지고 상대방의 화면에도 띄워지고 서버DB에도 들어가고..

        //사용자가 값을 입력하면 원래는 setText()하면 됐는데..
        //어떤방식으로 구현한다는거지.


        //final String temp = null; 여기서 만들어도 쓸 수가 없다.
        temp = "";
        webView.addJavascriptInterface(new Object(){   //html과 연결된 통로
            @JavascriptInterface
            public void toast(String text){
                Toast.makeText(ctx, text,Toast.LENGTH_LONG).show();
            }
            @JavascriptInterface
            public void sendMessage(String msg){  //사용자가 입력한 값을 받아서 DB에 저장하는 방식으로 구현
                temp = msg;
                Toast.makeText(ctx, "입력한 메시지 : "+temp, Toast.LENGTH_SHORT).show();
            }
        },"Hybrid");

        Log.d("입력된 메시지", temp);


    }
}
